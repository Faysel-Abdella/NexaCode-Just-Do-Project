import { useState } from "react";
import CustomModal from "../components/CustomModal";

const Page51 = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <section>
      <main className="border-b-[3px] border-gray-600 pb-8">
        <div className="flex gap-10 ">
          <h2 className="font-semibold text-[24px] text-gray-500">기본 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                No.
              </h3>
              <p className="py-2 px-3">6</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Type of Terms
              </h3>
              <p className="py-2 px-3">서비스 이용약관 (필수동의)</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Title
              </h3>

              <div className="py-2 px-3 w-full">
                <input
                  className="w-full px-2 py-1  border-2 border-gray-600"
                  defaultValue="2023-06-05 서비스 이용약관 ver.1.17"
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 border-collapse">
              <div className="flex">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Post date
                </h3>
                <p className="py-2 px-3">2023-06-01 13:24</p>
              </div>
              <div className="flex mr-16">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Poster
                </h3>
                <a className="py-2 px-3 text-blue-600  underline underline-offset-2">
                  Admin@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 border-collapse">
              <div className="flex">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Modified date
                </h3>
                <p className="py-2 px-3">2023-06-01 13:24</p>
              </div>
              <div className="flex mr-16">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Modifier
                </h3>
                <a className="py-2 px-3 text-blue-600  underline underline-offset-2">
                  Admin@gmail.com
                </a>
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                내용
              </h3>
              <div className="w-full py-2 px-3 text-left">
                <textarea
                  minLength={3}
                  className="w-full min-h-[500px] px-4 py-3 border-2 border-gray-600"
                  defaultValue={`이 약관은 SK커뮤니케이션즈 주식회사(이하 "회사"라 합니다)가 제공하는 위치기반서비스(이하 "서비스"라 합니다)와 관련하여, 회사와 이용고객(또는 회원)간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리·의무 및 기타 필요한 사항을 규정함을 목적으로합니다`}
                />
              </div>
            </div>

            <div className="flex">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Note
              </h3>
              <div className="py-2 px-3 w-full">
                <input
                  className="w-full px-2 py-1 border-2 border-gray-600"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-3">
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>수정</p>
          </button>
          <button
            className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600"
            onClick={handleOpenConfirmationModal}
          >
            <p>삭제</p>
          </button>
        </div>
      </main>

      <CustomModal
        isOpen={confirmationModalOpen}
        onClose={handleCloseConfirmationModal}
      >
        <section className="w-[400px] py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 text-black">
          <div className=" border-b-2 border-gray-400 ">
            <div className="flex justify-between items-center px-2">
              <h3>삭제</h3>
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
              <>
                <p className="text-center mt-3">삭제 시 해당 내용이</p>
                <p className="text-center">모두 삭제되며 되돌릴 수 없습니다.</p>
                <p className="text-center mt-3">삭제 하시겠습니까?</p>

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
                    삭제
                  </button>
                </div>
              </>
            </div>
          </div>
        </section>
      </CustomModal>
    </section>
  );
};

export default Page51;
