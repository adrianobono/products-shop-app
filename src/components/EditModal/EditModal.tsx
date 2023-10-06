import { useState, useEffect, useRef } from "react";
import { BiWindowClose } from "react-icons/bi";
import { Button } from "../Button";
import { useCartStore } from "../../store/CartStore";
import { EditForm } from "../EditForm";
import styles from "./EditModal.module.scss";

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
    // - 1 used as state for no edit product
    editId === -1 && handleCloseModal();
  }, [editId]);

  const handleCloseModal = () => {
    // exit of modal after click
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    // close modal when escape key is pressed
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    // show modal
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
            <BiWindowClose size={32} />
          </Button>
        )}
        {isModalOpen && editId !== -1 && (
          <EditForm item={editId < 0 ? products[0] : products[editId]} />
        )}
        {/* return/show internal content of modal if exists*/}
        {editId === -3 && children}
      </div>
    </dialog>
  );
};
