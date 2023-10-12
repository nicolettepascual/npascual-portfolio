"use client";
import { SetStateAction, useEffect } from "react";

interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
  const { show, setShow } = props;

  const openModal = (key: string) => {
    const modalElement = document.getElementById(
      key
    ) as HTMLDialogElement | null;
    if (modalElement) {
      modalElement.showModal();
      document.body.setAttribute("style", "overflow: hidden;");
      const modalContent = modalElement.children[0] as HTMLElement;
      modalContent.scrollTop = 0;
      modalContent.classList.remove("opacity-0");
      modalContent.classList.add("opacity-100");
    }
  };

  const modalClose = (key: string) => {
    const modalContent = document.getElementById(key)
      ?.children[0] as HTMLElement;
    if (modalContent) {
      modalContent.classList.remove("opacity-100");
      modalContent.classList.add("opacity-0");
      setTimeout(function () {
        const modalElement = document.getElementById(
          key
        ) as HTMLDialogElement | null;
        if (modalElement) {
          modalElement.close();
          document.body.removeAttribute("style");
        }
      }, 100);
    }
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      openModal("modal");
    }
  }, [show]);

  return (
    <dialog
      id="modal"
      className="bg-transparent z-0 relative w-screen h-screen"
    >
      <div
        className="p-7 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-0"
        onClick={() => modalClose("modal")}
      >
        <div className="bg-white flex rounded-lg w-full md:w-1/2 relative">
          <div className="flex flex-col items-start">
            {/* Header */}
            <div className="px-7 py-4 flex items-center w-full">
              <div className="text-gray-900 font-bold text-lg">Modal Top</div>
              <svg
                onClick={() => modalClose("modal")}
                className="ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>
            {/* Content */}
            <div
              className="px-7 overflow-x-hidden overflow-y-auto"
              style={{ maxHeight: "70vh" }}
            >
              <p>First Line</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Last Line</p>
            </div>

            <div className="p-7 flex justify-end items-center w-full">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
              >
                Ok
              </button>
              <button
                type="button"
                onClick={() => modalClose("modal")}
                className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
