import { useState } from "react";
import video from "../../assets/video/video.mp4";

export default function VideoPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    opacity: 0,
    cursor: "pointer",
  };

  return (
    <>
      <video
        className="fixed inset-0 w-screen h-screen min-[992px]:object-cover object-fill mx-auto"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        style={audioOverlayStyle}
        onClick={() => setIsMuted(!isMuted)}
        role="button"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      />
      <span
        className="absolute bottom-0 left-0 w-full h-[50%] 
      bg-gradient-to-b from-transparent to-[#000] z-10 pointer-events-none"
      />
    </>
  );
}
