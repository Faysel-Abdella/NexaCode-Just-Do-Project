import Modal from "react-modal";

const CustomModal = ({
  isOpen,
  onClose,
  children,
  minWidth,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  minWidth?: string;
}) => {
  const handleModalClose = () => {
    onClose();
  };

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // overflow: "auto",
    },
    content: {
      backgroundColor: "#fff",
      border: "none",
      //   borderRadius: "4px",
      // padding: "10px 20px",
      //   paddingRight: "40px",
      // minWidth: "1300px",
      // minHeight: "100vh",
      minWidth: minWidth ?? minWidth,
      margin: "0 auto",
    },
  };

  return (
    <section className="flex justify-center items-center ">
      <Modal
        isOpen={isOpen}
        onRequestClose={handleModalClose}
        contentLabel="Modal"
        className=" bg-white "
        bodyOpenClassName="overflow-hidden"
        style={modalStyles}
      >
        {children}
        {/* <button onClick={handleModalClose}>Close</button> */}
      </Modal>
    </section>
  );
};

export default CustomModal;
