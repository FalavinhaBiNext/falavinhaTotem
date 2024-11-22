import React from "react";

export default function QRCodeIcons() {
  const qrCodes = [
    {
      url: "https://falavinhanext.com.br/",
      src: "https://cdn.me-qr.com/qr/130261488.png?v=1729000579",
      alt: "Site Falavinha",
    },
    {
      url: "https://www.instagram.com/",
      src: "https://cdn.me-qr.com/qr/130259779.png?v=1728999910",
      alt: "Instagram Falavinha",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-5 md:gap-10 max-w-[992px] mx-auto py-10">
      {qrCodes.map((qrCode) => (
        <a
          className="w-full max-w-[100px] md:max-w-[120px] h-auto"
          key={qrCode.url}
          href={qrCode.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[inherit] h-[inherit]"
            src={qrCode.src}
            alt={qrCode.alt}
          />
        </a>
      ))}
    </div>
  );
}
