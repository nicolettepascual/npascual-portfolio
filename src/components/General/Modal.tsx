"use client";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { SetStateAction } from "react";

interface ModalProps {
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  title?: string;
}

const Modal = (props: ModalProps) => {
  const { children, footerContent, show, setShow, title } = props;

  return (
    <Dialog
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="min-w-full"
      handler={() => setShow((prev) => !prev)}
      open={show}
      size="lg"
    >
      <DialogHeader className="justify-between p-2 text-xl md:px-4 md:pb-0 md:text-2xl">
        <>
          <div className="font-handwriting text-5xl font-normal leading-none">
            {title}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <i className={"fa-solid fa-xmark cursor-pointer"} />
          </div>
        </>
      </DialogHeader>
      <DialogBody className="p-2 md:px-4">{children}</DialogBody>
      {footerContent && (
        <DialogFooter className="justify-between">{footerContent}</DialogFooter>
      )}
    </Dialog>
  );
};

export default Modal;
