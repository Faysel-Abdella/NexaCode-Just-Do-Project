import { useState } from "react";
import CustomModal from "../components/CustomModal";

const Page43 = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const showProfileHandler = () => {
    setShowProfile(true);
  };

  const hideProfileHandler = () => {
    setShowProfile(false);
  };

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
                Title
              </h3>
              <p className="py-2 px-3">2023-05 프로모션 이벤트 당첨자 발표</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Post date
              </h3>
              <p className="py-2 px-3">2023-06-05 13:24</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Poster
              </h3>
              <a className="py-2 px-3 text-blue-600  underline underline-offset-2">
                Admin@gmail.com
              </a>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Category
              </h3>
              <p className="py-2 px-3">이벤트</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                내용
              </h3>
              <div className="py-2 px-3 text-left">
                <p>2023년 5월 프로모션 이벤트 당첨자를 발표합니다.</p>
                <p className="mt-2">
                  참여해 주신 여러분께 감사드리며 아래의 ID로 3개월 무제한 무료
                  사용 리딤코드를 발송해 드립니다.
                </p>

                <div className="flex items-center justify-center  w-[400px] h-[500px] mt-10 mb-10 bg-slate-200">
                  IMAGE
                </div>
              </div>
            </div>
            <div className="flex relative">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500 cursor-pointer">
                File
              </h3>
              <div className="py-2 px-3 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <p className="cursor-pointer" onClick={showProfileHandler}>
                    2023-June 01.png (32.7KB)
                  </p>
                  <button className="font-semibold">X</button>
                </div>
                <div className="flex items-center gap-2">
                  <p className="cursor-pointer" onClick={showProfileHandler}>
                    2023-June 01.png (32.7KB)
                  </p>
                  <button className="font-semibold">X</button>
                </div>
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
      {/* Previous and Next Buttons */}
      <div className="flex items-center justify-between mt-3">
        <button className="flex items-center gap-3 py-1 px-4 rounded-md bg-zinc-200 text-gray-600">
          <p>&lt;</p>
          <p>이전</p>
        </button>
        <button className="flex items-center gap-3  py-1 px-4 rounded-md bg-zinc-200 text-gray-600">
          <p>다음</p>
          <p>&gt;</p>
        </button>
      </div>

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
                    삭제
                  </button>
                </div>
              </>
            </div>
          </div>
        </section>
      </CustomModal>

      {/* Modal for displaying image */}
      <CustomModal isOpen={showProfile} onClose={hideProfileHandler}>
        <section className="relative w-[600px] h-[500px] flex items-center justify-center  py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 ">
          <div className="flex items-center justify-center ">IMAGE</div>

          <button
            className="absolute top-4 right-4"
            onClick={hideProfileHandler}
          >
            X
          </button>
        </section>
      </CustomModal>
    </section>
  );
};

export default Page43;
