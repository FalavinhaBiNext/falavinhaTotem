export const formularioStyle = () => {
    const labelStyle = `flex flex-col items-start w-full py-[3px] px-[0] relative`;
    const inputStyle = `w-full h-[45px] rounded-[5px] transition-all ease-in-out duration-[250ms] 
    px-[10px] text-base text-dark_color font-[inherit] font-semibold focus:outline-0 border-2 border-transparent
    focus:border-2 focus:border-[#00ff6a] relative placeholder:text-[#646464a6]`;
    const labelSelectStyle = `appearance-none w-full text-base curso-pointer after:w-[5px] after:content-[''] 
    after:absolute after:top-[48%] after:right-[13px] after:pointer-events-none after:border-[5px] after:border-solid
     after:border-transparent after:border-t-black_color relative py-[3px]`;
    const errorMessageStyle = `text-[0.8rem] text-error_color font-[inherit] leading-[14px] pt-[2px] font-semibold`




    return {
        labelStyle,
        inputStyle,
        errorMessageStyle,
        labelSelectStyle
    };
};
