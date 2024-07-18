import { useState } from "react";
import CustomModal from "../components/CustomModal";
import CustomSelectOptions from "../components/CustomSelectOptions";

import Editor from "../components/CKEditor ";

const Page45 = () => {
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
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                No.
              </h3>
              <p className="py-2 px-3">6</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Title
              </h3>
              <div className="py-2 px-3">
                <input
                  className="px-2 py-1 min-w-[700px] border border-gray-600"
                  defaultValue="2023-05 프로모션 이벤트 당첨자 발표"
                />
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Post date
              </h3>
              <p className="py-2 px-3">2023-06-05 13:24</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Poster
              </h3>
              <a className="py-2 px-3 text-blue-600  underline underline-offset-2">
                Admin@gmail.com
              </a>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Category
              </h3>
              <div className="py-2 px-3">
                <CustomSelectOptions
                  label="이벤트"
                  options={["일반", "시스템", "이벤트", "광고", "구매"]}
                  outerStyles="min-w-[200px]"
                />
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                내용
              </h3>
              <div className="py-2 px-3 text-left">
                <article className="  min-w-[750px] ">
                  <Editor initialData={""} />
                </article>
              </div>
            </div>
            <div className="flex relative">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500 cursor-pointer">
                File
              </h3>
              <div className="py-2 px-3 flex flex-col items-center gap-2"></div>
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
                <p className="text-center mt-3">공지사항 작성을</p>
                <p className="text-center mt-3">취소 하시겠습니까?</p>

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

export default Page45;
