import { useState } from "react";

import profile from "../assets/profile.png";
import korea from "../assets/korea-flag.svg";
import canada from "../assets/canada.svg";

import page19Data from "../data/tablesData/page19";
import page20Data from "../data/tablesData/page20";

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
            <div className="flex  ">
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

        {/* 상태 정보 | 상태 정보 | 상태 정보 | 상태 정보*/}
        <div className=" mt-3 flex gap-10 border-b-2 border-gray-400 pb-2 ">
          <h2 className="font-semibold text-[24px] text-gray-500">상태 정보</h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Status
              </h3>
              <p className="py-2 px-3">정상 / 정지 / 신고</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                메모
              </h3>
              <p className="py-2 px-3">
                불건전 콘텐츠 공유 (‘ID정지’ 경우 메모 표시)
              </p>
            </div>
            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                신고 내용
              </h3>
              <p className="py-2 px-3"></p>
            </div>
          </div>
          <div className="self-center ml-3 cursor-pointer">
            <button className="bg-zinc-300 py-2 px-7 rounded-md">
              ID 설정{" "}
            </button>
          </div>
        </div>

        {/* 그룹 정보 | 그룹 정보 | 그룹 정보 | 그룹 정보 */}
        <div className="flex gap-10 mt-2">
          <h2 className="font-semibold text-[24px] text-gray-500">그룹 정보</h2>

          <div>
            {/* Created Groups */}
            <div className="flex flex-col items-start">
              <h2 className="font-semibold text-[20px]">
                Groups you Created : 2
              </h2>
              <div className="ml-44 mt-2">
                <table className="">
                  <thead>
                    <tr className="bg-gray-500 text-white ">
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        No.
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Status
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Group Name
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Members
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Creator
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {page19Data.createdGroupData.map((group) => (
                      <tr>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.number}
                        </td>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.status}
                        </td>
                        <td className="px-3 py-1 w-[250px] border-2 border-gray-200 border-collapse">
                          {group.groupName}
                        </td>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.members}
                        </td>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.creator}
                        </td>
                        <td className="px-3 py-1 w-[400px] border-2 border-gray-200 border-collapse text-left">
                          {group.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Joined Groups */}
            <div className="flex flex-col items-start ">
              <h2 className="font-semibold text-[20px] pb-5 pt-10">
                Groups you Joined : 3
              </h2>
              <div className="ml-44 mt-2">
                <table className="">
                  <thead>
                    <tr className="bg-gray-500 text-white ">
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        No.
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Status
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Group Name
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Members
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Creator
                      </th>
                      <th className="px-3 border-2 border-gray-200 border-collapse">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {page19Data.joinedGroupData.map((group) => (
                      <tr>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.number}
                        </td>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.status}
                        </td>
                        <td className="px-3 py-1 w-[250px] border-2 border-gray-200 border-collapse">
                          {group.groupName}
                        </td>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.members}
                        </td>
                        <td className="px-3 py-1 border-2 border-gray-200 border-collapse">
                          {group.creator}
                        </td>
                        <td className="px-3 py-1 w-[400px] border-2 border-gray-200 border-collapse text-left">
                          {group.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Connected IDs : 14 */}
            <div className="flex flex-col items-start border-b-[3px] border-gray-600 pb-7">
              <h2 className="font-semibold text-[20px] pb-5 pt-10">
                Connected IDs : 14
              </h2>
              <div className="ml-44 mt-2">
                <table className="">
                  <thead>
                    <tr className="bg-gray-500 text-white ">
                      <th className="px-3 border-r-2 border-gray-200 border-collapse">
                        No.
                      </th>
                      <th className="px-3 border-r-2 border-gray-200 border-collapse">
                        Name
                      </th>
                      <th className="px-3 ">ID (email)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page20Data.map((group) => (
                      <tr>
                        <td className="px-3 py-1 border-b-2 border-gray-400 border-collapse">
                          {group.number}
                        </td>

                        <td className="px-3 py-1 w-[250px] border-b-2 border-gray-400 border-collapse">
                          {group.name}
                        </td>

                        <td className="px-3 py-1 w-[400px] border-b-2 border-gray-400 border-collapse ">
                          {group.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

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
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page19;
