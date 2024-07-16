import { useState } from "react";

import profile from "../assets/profile.png";
import korea from "../assets/korea-flag.svg";
import canada from "../assets/canada.svg";

const Page19 = () => {
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
        {/* 기본 정보 | 기본 정보 | 기본 정보 | 기본 정보 */}
        <div className="flex gap-10 border-b-2 border-gray-400 pb-2 ">
          <h2 className="font-semibold text-[24px] text-gray-500">기본 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                User Name
              </h3>
              <p className="py-2 px-3">Steve White</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                ID(email)
              </h3>
              <p className="py-2 px-3">abcd@email.com</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Sign up date
              </h3>
              <p className="py-2 px-3">2022. 12. 22</p>
            </div>
            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500 ">
                Paid Member
              </h3>
              <p className="py-2 px-3">No / Yes 2023-05-13 14:32</p>
            </div>
          </div>
          {/* Here profile */}
          <div className="ml-3 cursor-pointer" onClick={showProfileHandler}>
            <img src={profile} alt="profile" />
          </div>
        </div>

        {/* 학습 정보 | 학습 정보 | 학습 정보 | 학습 정보 */}
        <div className="mt-2 flex gap-10 border-b-2 border-gray-400 pb-2 ">
          <h2 className="font-semibold text-[24px] text-gray-500">학습 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Purpose
              </h3>
              <p className="py-2 px-3">For enjoy traveling</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Last Access
              </h3>
              <p className="py-2 px-3">2022. 12. 22 21:06</p>
            </div>
            <div className="flex  border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Language
              </h3>
              <div className="px-3 py-4">
                <div className="flex items-center justify-between px-10 py-3 bg-gray-500 text-white w-[400px]">
                  <p>Languages</p>
                  <div>
                    <p>Drill Achievement</p>
                    <p>(times)</p>
                  </div>
                </div>
                <div className="w-[400px] flex items-center justify-between px-10 py-3 pr-24 bg-zinc-300  text-black ">
                  <p>ALL</p>
                  <p>7</p>
                </div>
                {/* Languages row */}
                <div>
                  <div className="flex items-center justify-between px-6 pr-24 border-t-2 border-gray-500">
                    <div className="flex items-center gap-2">
                      <img src={canada} alt="Canada" className="size-8" />
                      <p>영어</p>
                    </div>
                    <p>5</p>
                  </div>
                  <div className="flex items-center justify-between px-6 pr-24 border-t-2 border-gray-500">
                    <div className="flex items-center gap-2">
                      <img src={korea} alt="korea" className="size-8" />
                      <p>한국어</p>
                    </div>
                    <p>2</p>
                  </div>
                  <div className="flex items-center justify-between px-6 pr-24 border-t-2 border-gray-500">
                    <div className="flex items-center gap-2">
                      <img src={korea} alt="korea" className="size-8" />
                      <p>한국어</p>
                    </div>
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Details */}
          {showProfile && (
            <div className="relative flex items-center justify-center ml-3 self-center h-[250px] w-[200px] bg-slate-200">
              <img src={profile} alt="profile" />
              <button
                className="absolute top-1 right-2 text-[24px]"
                onClick={hideProfileHandler}
              >
                x
              </button>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default Page19;
