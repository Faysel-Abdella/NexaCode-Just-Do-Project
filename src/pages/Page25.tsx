import { useState } from "react";

const Page25 = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const showProfileHandler = () => {
    setShowProfile(true);
  };

  const hideProfileHandler = () => {
    setShowProfile(false);
  };
  return (
    <section>
      <main className="border-b-[3px] border-gray-600 pb-8">
        <div className="flex gap-10 border-b-2 border-gray-400 pb-3 ">
          <h2 className="font-semibold text-[24px] text-gray-500">기본 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Language
              </h3>
              <p className="py-2 px-3">영어</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Title
              </h3>
              <p className="py-2 px-3">IELTS TEST FOR BEGINNERS</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Type
              </h3>
              <p className="py-2 px-3">SPEAKING / VOCA</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Contents code
              </h3>
              <p className="py-2 px-3">EN-SPK-03</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                No. of Contents
              </h3>
              <p className="py-2 px-3">23 문장 / 단어</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Size
              </h3>
              <p className="py-2 px-3">5.3 MB</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Downloads
              </h3>
              <p className="py-2 px-3">2587</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Creation Date
              </h3>
              <p className="py-2 px-3">2022. 11. 15</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Creator
              </h3>
              <p className="py-2 px-3">이길동</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                ID
              </h3>
              <p className="py-2 px-3">abcd@email.com</p>
            </div>
            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Connected Country
              </h3>
              <p className="py-2 px-3">영국</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {/* Here profile */}
            <div className="ml-3 cursor-pointer" onClick={showProfileHandler}>
              <div className="flex justify-center items-center h-[150px] w-[150px] bg-slate-100">
                Image (click here)
              </div>
            </div>

            {/* Profile Details (Zoom Out) */}
            {showProfile && (
              <div className="relative h-[250px] w-[230px] flex items-center justify-center ml-3 self-center  bg-slate-200">
                <p>Zooming out</p>
                <button
                  className="absolute top-1 right-2 text-[24px]"
                  onClick={hideProfileHandler}
                >
                  x
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 flex gap-10  pb-2 ">
          <h2 className="font-semibold text-[24px] text-gray-500">상태 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Status
              </h3>
              <p className="py-2 px-3">신고</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Category
              </h3>
              <p className="py-2 px-3">LIFE</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                신고 내용
              </h3>
              <p className="py-2 px-3"></p>
            </div>

            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                메모
              </h3>
              <p className="py-2 px-3"></p>
            </div>
          </div>

          <button className="w-[120px] h-[40px] mt-3 bg-zinc-200 rounded-md">
            콘텐츠 설정
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
    </section>
  );
};

export default Page25;
