import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Dropdown({ title, content, titleSize }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-center cursor-pointer">
      <p
        onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
        className="bg-[#FF6060] rounded-md text-white py-2 flex items-center justify-between px-4"
      >
        <span className={titleSize}>{title}</span>
        {isOpen ? <ArrowDown /> : <ArrowUp />}
      </p>

      {isOpen && (
        <div className="bg-[#F6F6F6] p-10 min-h-[200px] rounded-b-lg">
          {content}
        </div>
      )}
    </div>
  );
}
