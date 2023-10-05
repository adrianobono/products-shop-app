import { useState, useEffect, useRef } from "react";
import { BiWindowClose } from "react-icons/bi";
import { Button } from "../Button";
import styles from "./EditModal.module.scss";
import { useCartStore } from "../../store/CartStore";
import { EditForm } from "../EditForm";

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
  const { editId, products } = useCartStore();
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    editId === -1 && handleCloseModal();
  }, [editId]);

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
    <dialog ref={modalRef} onKeyDown={handleKeyDown}>
      <div className={styles["edit-modal__wrapper"]}>
        {hasCloseBtn && (
          <Button onClick={handleCloseModal}>
            <BiWindowClose size={24} />
          </Button>
        )}
        {isModalOpen && editId !== -1 && (
          <EditForm item={editId < 0 ? products[0] : products[editId]} />
        )}
      </div>
    </dialog>
  );
};
