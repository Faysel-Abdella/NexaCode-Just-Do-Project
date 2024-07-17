import { useState } from "react";

const Page30 = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const showProfileHandler = () => {
    setShowProfile(true);
  };

  const hideProfileHandler = () => {
    setShowProfile(false);
  };
  return (
    <section>
      <main>
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
                Group Name
              </h3>
              <p className="py-2 px-3">IELTS TEST FOR BEGINNERS</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                No. of Class
              </h3>
              <p className="py-2 px-3">5</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Type
              </h3>
              <p className="py-2 px-3">SPEAKING</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Group code
              </h3>
              <p className="py-2 px-3">EN-GR-P-01</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                No. of Members
              </h3>
              <p className="py-2 px-3">229 명</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Speaking Contents
              </h3>
              <p className="py-2 px-3">47</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                VOCA
              </h3>
              <p className="py-2 px-3">85</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Creation Date
              </h3>
              <p className="py-2 px-3">2022. 12. 22</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Creator
              </h3>
              <p className="py-2 px-3">Henry Hong</p>
            </div>
            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                ID
              </h3>
              <p className="py-2 px-3 underline underline-offset-2">
                abcd@email.com
              </p>
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
              <div className="flex items-center gap-6 py-2 px-3 ">
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status"
                    id="status1"
                    className="size-4"
                  />
                  <label htmlFor="status1">신고</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status"
                    id="status2"
                    className="size-4"
                  />
                  <label htmlFor="status2">신고</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status"
                    id="status3"
                    className="size-4"
                  />
                  <label htmlFor="status3">신고</label>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-b border-gray-500 border-collapse">
              <div className="flex">
                <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Password
                </h3>
                <p className="py-2 px-3">1234</p>
              </div>
              <div className="flex items-center gap-5 mr-3">
                <p className="text-red-600">
                  It has been reset to the group name.
                </p>
                <div>
                  <button className="py-1 px-7 bg-zinc-300 rounded-md w-full h-full">
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <h3 className="py-3 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                메모
              </h3>
              <div className="px-3">
                <input
                  type="text"
                  className="border border-gray-600 w-[600px] py-1 px-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex gap-10  pb-2 ">
          <h2 className="font-semibold text-[24px] text-gray-500">상태 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Class 01
              </h3>
              <p className="py-2 px-3">Class Name</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Class 02
              </h3>
              <p className="py-2 px-3">Class Name</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Class 03
              </h3>
              <p className="py-2 px-3">Class Name</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Class 04
              </h3>
              <p className="py-2 px-3">Class Name</p>
            </div>
            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Class 05
              </h3>
              <p className="py-2 px-3">Class Name</p>
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

export default Page30;
