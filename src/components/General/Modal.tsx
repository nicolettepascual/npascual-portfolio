"use client";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { SetStateAction } from "react";

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  title?: string;
}

const Modal = (props: ModalProps) => {
  const { children, show, setShow, title } = props;

  return (
    <Dialog
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="min-w-full"
      handler={() => setShow((prev) => !prev)}
      open={show}
      size={"lg"}
    >
      <DialogHeader className="justify-between md:text-2xl md:px-4 p-2 text-xl">
        <>
          <div>{title}</div>
          <div
            className="cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <i className={"cursor-pointer fa-solid fa-xmark"} />
          </div>
        </>
      </DialogHeader>
      <DialogBody className="md:px-4 p-2">{children}</DialogBody>
      {/* <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => handleOpen(null)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={() => handleOpen(null)}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter> */}
    </Dialog>
  );
};

export default Modal;
