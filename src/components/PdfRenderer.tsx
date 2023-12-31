import { FC } from "react";

interface PdfRendererProps {
  url: string;
}

const PdfRenderer: FC<PdfRendererProps> = ({ url }) => {
  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center">
      <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
        sado
        </div>
    </div>
  );
};

export default PdfRenderer;
