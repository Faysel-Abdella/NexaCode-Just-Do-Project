import CustomModal from "../components/CustomModal";

const Page56 = ({
  openTheModal,
  handleCloseModal,
}: {
  openTheModal: boolean;
  handleCloseModal: () => void;
}) => {
  return (
    <CustomModal
      isOpen={openTheModal}
      onClose={handleCloseModal}
      minWidth="1200px"
    >
      <section className="flex justify-center mx-auto border shadow-md shadow-gray-800 py-6 ">
        <main className="pb-2 min-w-[1350px] mx-auto">
          <div className="flex flex-col items-center gap-7 ">
            <div className="flex w-[80%] justify-between border-b-2 border-gray-800 px-6 ">
              <h2 className="font-semibold text-[20px]">관리자 등록</h2>
              <button
                className="font-semibold text-[20px]"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <div className="w-[70%] border border-gray-500 border-collapse">
              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Department
                </h3>
                <div className="py-2 px-3 w-full text-left">
                  <input className="w-[80%] px-2 py-1  border-2 border-gray-600" />
                </div>
              </div>
              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Name
                </h3>
                <div className="py-2 px-3 w-full text-left">
                  <input className="w-[80%] px-2 py-1  border-2 border-gray-600" />
                </div>
              </div>
              <div className="flex  border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  ID (email)
                </h3>
                <div className="py-2 px-3 w-full  flex items-center  gap-3">
                  <input className="w-[80%] px-2 py-1  border-2 border-gray-600" />
                  <button className="bg-slate-300 rounded-md py-1 px-6">
                    Check
                  </button>
                </div>
              </div>
              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Password
                </h3>
                <div className="py-2 px-3 w-full text-left">
                  <input className="w-[80%] px-2 py-1  border-2 border-gray-600" />
                  <p className="py-2">
                    ※ 8~16자 영문 대, 소문자, 숫자, 특수문자 조합으로
                    사용하세요.
                  </p>
                  <p className="pb-5">※ 허용되는 특수문자 ~ ! @ # $ % ^ *</p>
                </div>
              </div>

              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Password
                </h3>
                <div className="py-2 px-3 w-full text-left flex items-center gap-3 ">
                  <input className="w-[60%] px-2 py-1  border-2 border-gray-600" />
                  <p className="text-red-600">“정확한 비밀번호를 입력하세요”</p>
                </div>
              </div>

              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Phone
                </h3>
                <div className=" py-2 px-3 flex items-center gap-2">
                  <input className="border-2 border-gray-600 w-[70px] px-1" />
                  <p>-</p>
                  <input className="border-2 border-gray-600 w-[70px] px-1" />
                  <p>-</p>
                  <input className="border-2 border-gray-600 w-[70px] px-1" />
                </div>
              </div>

              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Contact
                </h3>
                <div className=" py-2 px-3 flex items-center gap-2">
                  <input className="border-2 border-gray-600 w-[70px] px-1" />
                  <p>-</p>
                  <input className="border-2 border-gray-600 w-[70px] px-1" />
                  <p>-</p>
                  <input className="border-2 border-gray-600 w-[70px] px-1" />
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
                      name="AddApproveOrNot"
                      id="AddApprove"
                      className="size-4"
                    />
                    <label htmlFor="AddApprove">승인</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="AddApproveOrNot"
                      id="AddStop"
                      className="size-4"
                    />
                    <label htmlFor="AddStop">정지</label>
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
                      name="AddAuthority"
                      id="AddCreator"
                      className="size-4"
                    />
                    <label htmlFor="AddCreator">Contents Creator</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="AddAuthority"
                      id="AddAdmin"
                      className="size-4"
                    />
                    <label htmlFor="AddAdmin">Admin</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="AddAuthority"
                      id="AddSuperAdmin"
                      className="size-4"
                    />
                    <label htmlFor="AddSuperAdmin">Super Admin</label>
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
                  <input className="w-full px-2 py-1 border-2 border-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10">
            <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
              <p>수정</p>
            </button>
            <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
              <p>삭제</p>
            </button>
          </div>
        </main>
      </section>
    </CustomModal>
  );
};

export default Page56;
