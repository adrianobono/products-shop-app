import { useState, useEffect, useRef } from "react";
import { BiWindowClose } from "react-icons/bi";
import { Button } from "../Button";

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const EditModal: React.FC<ModalProps> = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      {hasCloseBtn && (
        <Button onClick={handleCloseModal}>
          <BiWindowClose size={24} />
        </Button>
      )}
      {children}
    </dialog>
  );
};
