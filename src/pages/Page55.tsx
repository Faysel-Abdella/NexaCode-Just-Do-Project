import { useState } from "react";
import profile from "../assets/profile.png";

const Page55 = () => {
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
        <div className="flex justify-center gap-10 ">
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Department
              </h3>
              <div className="py-2 px-3 w-full">
                <input
                  className="w-full px-2 py-1  border-2 border-gray-600"
                  defaultValue="IT"
                />
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Name
              </h3>
              <div className="py-2 px-3 w-full">
                <input
                  className="w-full px-2 py-1  border-2 border-gray-600"
                  defaultValue="홍길동"
                />
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                ID (email)
              </h3>

              <div className="py-2 px-3">
                <a className="text-blue-600 underline underline-offset-1">
                  Admin06@repeat.com
                </a>
              </div>
            </div>

            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Password
              </h3>
              <div className=" py-2 px-3 flex items-center gap-5">
                <button className="bg-gray-300 px-6 py-1 rounded-md">
                  Reset
                </button>
                <p className="text-red-500">
                  “비밀번호 초기화가 완료되었습니다.”
                </p>
              </div>
            </div>

            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Phone
              </h3>
              <div className=" py-2 px-3 flex items-center gap-2">
                <input
                  className="border-2 border-gray-600 w-[70px] px-1"
                  defaultValue="122"
                />
                <p>-</p>
                <input
                  className="border-2 border-gray-600 w-[70px] px-1"
                  defaultValue="1234"
                />
                <p>-</p>
                <input
                  className="border-2 border-gray-600 w-[70px] px-1"
                  defaultValue="122"
                />
              </div>
            </div>

            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Contact
              </h3>
              <div className=" py-2 px-3 flex items-center gap-2">
                <input
                  className="border-2 border-gray-600 w-[70px] px-1"
                  defaultValue="122"
                />
                <p>-</p>
                <input
                  className="border-2 border-gray-600 w-[70px] px-1"
                  defaultValue="765"
                />
                <p>-</p>
                <input
                  className="border-2 border-gray-600 w-[70px] px-1"
                  defaultValue="908"
                />
              </div>
            </div>

            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Status
              </h3>
              <div className=" py-2 px-3 flex items-center gap-14">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="approvalOrNot"
                    id="approval"
                    className="size-4"
                    defaultChecked
                  />
                  <label htmlFor="approval">승인</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="approvalOrNot"
                    id="stop"
                    className="size-4"
                  />
                  <label htmlFor="stop">정지</label>
                </div>
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Authority
              </h3>
              <div className=" py-2 px-3 flex items-center gap-14">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="authority"
                    id="creator"
                    className="size-4"
                    defaultChecked
                  />
                  <label htmlFor="creator">Contents Creator</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="authority"
                    id="admin"
                    className="size-4"
                  />
                  <label htmlFor="admin">Admin</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="authority"
                    id="superAdmin"
                    className="size-4"
                  />
                  <label htmlFor="superAdmin">Super Admin</label>
                </div>
              </div>
            </div>

            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Modified date
              </h3>
              <p className="py-2 px-3">2023-05-22 13:24</p>
            </div>

            <div className="flex">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Note
              </h3>
              <div className="py-2 px-3 w-full">
                <input
                  className="w-full px-2 py-1 border-2 border-gray-600"
                  defaultValue="신규 관리자"
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-3">
            <div className="ml-3 cursor-pointer" onClick={showProfileHandler}>
              <img src={profile} alt="profile" />
            </div>

            {/* Profile Details */}
            {showProfile && (
              <div className="relative">
                <div className=" absolute top-5 right-[50%] translate-x-[50%] flex items-center justify-center ml-3 self-center h-[250px] w-[250px] bg-slate-200">
                  <img src={profile} alt="profile" />
                  <button
                    className="absolute top-1 right-2 text-[24px]"
                    onClick={hideProfileHandler}
                  >
                    x
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-48">
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>수정</p>
          </button>
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>삭제</p>
          </button>
        </div>
      </main>
    </section>
  );
};

export default Page55;
