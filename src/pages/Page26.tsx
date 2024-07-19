import { useState } from "react";

import CustomModal from "../components/CustomModal";
import CustomSelectOptions from "../components/CustomSelectOptions";

const Page26 = ({
  openTheModal,
  modalData,
  handleCloseModal,
}: {
  openTheModal: boolean;
  modalData: {
    number: number;
    language: string;
    title: string;
    type: string;
    code: string;
  }[];
  handleCloseModal: () => void;
}) => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);
  const [selectedModal, _setSelectedModal] = useState<string>("multiple");

  const [selectedIdType, setSelectedIdType] = useState<
    "normal" | "stop" | "delete" | ""
  >("normal");

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };
  return (
    <section>
      <CustomModal isOpen={openTheModal} onClose={handleCloseModal}>
        <section className="min-w-[750px] py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 ">
          <div className=" border-b-2 border-gray-400 ">
            <div className="flex justify-between items-center px-2">
              <h3 className="font-semibold">콘텐츠 설정</h3>
              <button
                className="font-semibold text-[16px]"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
          </div>

          <h3 className="text-left py-3">선택 {modalData.length}</h3>
          <div className="max-h-[200px]  overflow-auto border-b-2 border-gray-600 pb-2  ">
            {selectedModal === "multiple" && (
              <table className="w-full">
                <thead>
                  <tr>
                    <td className="px-3 ">No.</td>
                    <td className="py-1 px-3 ">Language</td>
                    <td className="py-1 px-3 ">Title</td>
                    <td className="py-1 px-3 ">Type</td>
                    <td className="py-1 px-3 ">Code</td>
                  </tr>
                </thead>
                <tbody>
                  {modalData.map((row) => (
                    <tr>
                      <td className="py-1 px-3">{row.number}</td>
                      <td className="py-1 px-3">{row.language}</td>
                      <td className="py-1 px-3">{row.title}</td>
                      <td className="py-1 px-3">{row.type}</td>
                      <td className="py-1 px-3">{row.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {selectedModal === "single" && (
              <div className="w-full px-2 flex items-center justify-between">
                <p>200</p>
                <p>영어</p>
                <p>Re-start English 01</p>
                <p>Speaking</p>
                <p>EN-SPK-06</p>
              </div>
            )}
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
                  <label htmlFor="radio1">정상 ID</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="radio"
                    id="radio2"
                    className="size-4"
                    onClick={() => setSelectedIdType("stop")}
                  />
                  <label htmlFor="radio2">ID 정지</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="radio"
                    id="radio3"
                    className="size-4"
                    onClick={() => setSelectedIdType("delete")}
                  />
                  <label htmlFor="radio3">ID 삭제</label>
                </div>
              </div>
            </div>

            {selectedModal === "multiple" && (
              <div className="flex items-center gap-28 pt-5">
                <h3 className="font-semibold text-[16px]">Status</h3>
                <CustomSelectOptions
                  options={["Life", "School"]}
                  label="LIFE"
                  outerStyles="w-[150px]"
                />
              </div>
            )}

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
                {selectedIdType === "normal" && "콘텐츠 정상"}
                {selectedIdType === "stop" && "콘텐츠 정지"}
                {selectedIdType === "delete" && "콘텐츠 삭제"}
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
                    정상 선택 시 해당 콘텐츠의 모든 데이터가
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
                  <p className="text-center mt-3">정지 시 해당 콘텐츠는</p>
                  <p className="text-center">사용할 수 없습니다.</p>
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
                  <p className="text-center mt-3">삭제 시 해당 콘텐츠가</p>
                  <p className="text-center">삭제되며 되돌릴 수 없습니다</p>
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

export default Page26;
