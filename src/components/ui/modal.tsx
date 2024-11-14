import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }: Props) => {
  if (!open) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[684px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md  rounded-[4px]  overflow-hidden p-4 text-gray-500 relative">
          <button className=" absolute top-4 right-6" onClick={onClose}>
            <span>X</span>
          </button>
          <div className="pt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
