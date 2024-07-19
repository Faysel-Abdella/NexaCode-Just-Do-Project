// import { useState } from "react";
// import CustomModal from "../components/CustomModal";

const Page59 = () => {
  //   const [confirmationModalOpen, setConfirmationModalOpen] =
  //     useState<boolean>(false);

  //   const handleOpenConfirmationModal = () => {
  //     setConfirmationModalOpen(true);
  //   };

  //   const handleCloseConfirmationModal = () => {
  //     setConfirmationModalOpen(false);
  //   };
  return (
    <section>
      <main>
        <div className="flex gap-10 border-b-2 border-gray-400 pb-3 ">
          <h2 className="font-semibold text-[24px] text-gray-500">기본 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Language
              </h3>
              <p className="py-2 px-3">영어</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Title
              </h3>
              <p className="py-2 px-3">IELTS TEST FOR BEGINNERS</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Type
              </h3>
              <p className="py-2 px-3">SPEAKING</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Contents code
              </h3>
              <p className="py-2 px-3">EN-SPK-03</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                No. of Contents
              </h3>
              <p className="py-2 px-3">23 문장 / 단어</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Size
              </h3>
              <p className="py-2 px-3">5.3 MB</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Downloads
              </h3>
              <p className="py-2 px-3">2587</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Creation Date
              </h3>
              <p className="py-2 px-3">2022. 11. 15</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Admin ID
              </h3>
              <p className="py-2 px-3">Admin ID</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Department
              </h3>
              <p className="py-2 px-3">IT</p>
            </div>
          </div>
          <div className="flex flex-col gap-4"></div>
        </div>

        <div className="mt-3 flex gap-10  pb-2 ">
          <h2 className="font-semibold text-[24px] text-gray-500">상태 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Status
              </h3>
              <div className="flex items-center gap-6 py-2 px-3 ">
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status01"
                    id="status01"
                    className="size-4"
                    defaultChecked
                  />
                  <label htmlFor="status01">정상</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status01"
                    id="status02"
                    className="size-4"
                  />
                  <label htmlFor="status02">정지</label>
                </div>
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Category
              </h3>
              <p className="py-2 px-3">LIFE</p>
            </div>

            <div className="flex items-center">
              <h3 className="py-3 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                메모
              </h3>
              <div className="px-3">
                <input
                  type="text"
                  className="border border-gray-600 w-[600px] py-1 px-2"
                  defaultValue="AB 대화 테스트"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-3">
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>취소</p>
          </button>
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>저장</p>
          </button>
        </div>
      </main>
    </section>
  );
};

export default Page59;
