import { useState } from "react";
import Modal from "./Modal";

const ModalCom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className="App p-8">
        <button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Open Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-semibold mb-4">Custom Modal</h2>
          <p className="text-gray-700 mb-4">
            This is a custom modal. You can add any content you want here.
          </p>
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close Modal
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default ModalCom;
