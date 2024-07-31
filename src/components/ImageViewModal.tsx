import CustomModal from "./CustomModal";

const ImageViewModal = ({
  modalOpen,
  handleCloseImageModal,
  imageUrl,
}: {
  modalOpen: boolean;
  handleCloseImageModal: () => void;
  imageUrl?: string;
}) => {
  return (
    <CustomModal isOpen={modalOpen} onClose={handleCloseImageModal}>
      <section className="relative w-[800px] h-[700px] flex items-center justify-center  py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 ">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="image"
            className="w-full h-full object-fill z-10"
          />
        ) : (
          <div className="flex items-center justify-center ">IMAGE</div>
        )}

        <button
          className="absolute top-4 right-4 z-20 bg-slate-300 py-1 px-3 rounded-full font-bold text-2xl"
          onClick={handleCloseImageModal}
        >
          X
        </button>
      </section>
    </CustomModal>
  );
};

export default ImageViewModal;
