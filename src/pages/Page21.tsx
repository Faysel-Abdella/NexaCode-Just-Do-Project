import { useState } from "react";

import CustomModal from "../components/CustomModal";

const Page21 = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const [selectedIdType, setSelectedIdType] = useState<
    "normal" | "stop" | "delete" | ""
  >("normal");

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <section>
      <div className="flex flex-col items-center gap-3">
        <button
          className="bg-slate-400 w-fit py-2 px-2 rounded-lg text-white"
          onClick={handleOpenModal}
        >
          Click Here to Open the Modal
        </button>
        <button
          className="bg-slate-400 w-fit py-2 px-2 rounded-lg text-white"
          onClick={handleOpenModal}
        >
          모달을 열려면 여기를 클릭하세요
        </button>
      </div>

      <CustomModal isOpen={modalOpen} onClose={handleCloseModal}>
        <section className="w-[600px] py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 ">
          <div className=" border-b-2 border-gray-400 ">
            <div className="flex justify-between items-center px-2">
              <h3>ID 설정</h3>
              <button
                className="font-semibold text-[16px]"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
          </div>

          <h3 className="text-left py-3">선택 12명</h3>
          <div className="grid grid-cols-4 border-b-2 border-gray-600 pb-2 px-2">
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
            <p>abcd@email.com</p>
          </div>

          <div className="mt-3 px-3">
            <div className="flex items-center gap-28">
              <h3 className="font-semibold text-[16px]">설정</h3>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="radio"
                    id="radio1"
                    className="size-4"
                    onClick={() => setSelectedIdType("normal")}
                    defaultChecked
                  />
                  <p>정상 ID</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="radio"
                    id="radio1"
                    className="size-4"
                    onClick={() => setSelectedIdType("stop")}
                  />
                  <p>ID 정지</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="radio"
                    id="radio1"
                    className="size-4"
                    onClick={() => setSelectedIdType("delete")}
                  />
                  <p>ID 삭제</p>
                </div>
              </div>
            </div>

            <div className="flex  gap-20 pt-5">
              <h3 className="font-semibold text-[16px] ">메모</h3>
              <div>
                <textarea className="w-[400px] h-[100px] border-2 border-gray-400 p-2"></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-3 mt-8">
              <button
                className="bg-slate-400 w-fit py-2 px-6 rounded-lg text-white"
                onClick={handleOpenConfirmationModal}
              >
                저장
              </button>
              <button
                className="bg-slate-400 w-fit py-2 px-6 rounded-lg text-white"
                onClick={handleCloseModal}
              >
                닫기
              </button>
            </div>
          </div>
        </section>
      </CustomModal>

      <CustomModal
        isOpen={confirmationModalOpen}
        onClose={handleCloseConfirmationModal}
      >
        <section className="w-[400px] py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 text-black">
          <div className=" border-b-2 border-gray-400 ">
            <div className="flex justify-between items-center px-2">
              <h3>
                {selectedIdType === "normal" && "ID 정상"}
                {selectedIdType === "stop" && "ID 정지"}
                {selectedIdType === "delete" && "ID 삭제"}
              </h3>
              <button
                className="font-semibold text-[16px]"
                onClick={handleCloseConfirmationModal}
              >
                X
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              {selectedIdType === "normal" && (
                <>
                  <p className="text-center mt-3">
                    ID 정상 선택 시 해당 사용자의 모든 데이터가
                  </p>
                  <p className="text-center">정상으로 원복 됩니다.</p>
                  <p className="text-center mt-6">진행 하시겠습니까?</p>
                  <div className="flex justify-center items-center gap-3 mt-3">
                    <button
                      className="bg-slate-400 w-fit py-2 px-6 rounded-lg text-white"
                      onClick={handleCloseConfirmationModal}
                    >
                      취소
                    </button>
                    <button
                      className="bg-red-500 w-fit py-2 px-6 rounded-lg text-white"
                      onClick={handleCloseConfirmationModal}
                    >
                      ID 정상
                    </button>
                  </div>
                </>
              )}
              {selectedIdType === "stop" && (
                <>
                  <p className="text-center mt-3">
                    ID 정지 시 해당 사용자는 데이터가
                  </p>
                  <p className="text-center">서비스를 사용할 수 없습니다.</p>
                  <p className="text-center mt-6">정지 하시겠습니까?</p>
                  <div className="flex justify-center items-center gap-3 mt-3">
                    <button
                      className="bg-slate-400 w-fit py-2 px-6 rounded-lg text-white"
                      onClick={handleCloseConfirmationModal}
                    >
                      취소
                    </button>
                    <button
                      className="bg-red-500 w-fit py-2 px-6 rounded-lg text-white"
                      onClick={handleCloseConfirmationModal}
                    >
                      ID 정지
                    </button>
                  </div>
                </>
              )}
              {selectedIdType === "delete" && (
                <>
                  <p className="text-center mt-3">
                    ID 삭제 시 해당 사용자의 데이터가
                  </p>
                  <p className="text-center">
                    모두 삭제되며 되돌릴 수 없습니다.
                  </p>
                  <p className="text-center mt-6">삭제 하시겠습니까?</p>
                  <div className="flex justify-center items-center gap-3 mt-3">
                    <button
                      className="bg-slate-400 w-fit py-2 px-6 rounded-lg text-white"
                      onClick={handleCloseConfirmationModal}
                    >
                      취소
                    </button>
                    <button
                      className="bg-red-500 w-fit py-2 px-6 rounded-lg text-white"
                      onClick={handleCloseConfirmationModal}
                    >
                      ID 삭제
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </CustomModal>
    </section>
  );
};

export default Page21;
