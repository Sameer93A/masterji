import React from "react";

export const ChaiLogo = () => {
  const chaicodeLogo =
    "https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__";

  return (
    <div className="flex justify-around flex-col">
      <div className="flex justify-end ">
        <a href="https://chaicode.com/">
          <img
            className="w-[143.62px] h-[150px] top-[795px] left-[1324px] rounded-[18px] mb-[37px]  mr-[44.38px]"
            src={chaicodeLogo}
            alt="Chair aur Code Logo"
          />
        </a>
      </div>
    </div>
  );
};
