import { useState } from "react";
import CustomModal from "../components/CustomModal";

const Page50 = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);
  const [pageState, setPageState] = useState<"readOnly" | "edit">("readOnly");

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  const handleEdit = () => {
    setPageState("edit");
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
              {pageState === "edit" && (
                <div className="w-full py-2 px-3">
                  <input
                    className="w-full px-2 py-1  border-2 border-gray-600"
                    defaultValue="2023-06-05 서비스 이용약관 ver.1.17"
                  />
                </div>
              )}
              {pageState === "readOnly" && (
                <div className="py-2 px-3">
                  <p>2023-06-05 서비스 이용약관 ver.1.17</p>
                </div>
              )}
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
                {pageState === "edit" ? (
                  <textarea
                    minLength={3}
                    className="w-full min-h-[500px] px-4 py-3 border-2 border-gray-600"
                    defaultValue={`이 약관은 SK커뮤니케이션즈 주식회사(이하 "회사"라 합니다)가 제공하는 위치기반서비스(이하 "서비스"라 합니다)와 관련하여, 회사와 이용고객(또는 회원)간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리·의무 및 기타 필요한 사항을 규정함을 목적으로합니다`}
                  />
                ) : (
                  <div>
                    <h3>제 1 조 (목 적)</h3>
                    <p className="mt-3">
                      이 약관은 SK커뮤니케이션즈 주식회사(이하 "회사"라
                      합니다)가 제공하는 위치기반서비스(이하 "서비스"라
                      합니다)와 관련하여, 회 사와 이용고객(또는 회원)간에
                      서비스의 이용조건 및 절차, 회사와 회원간의 권리·의무 및
                      기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>
                    <p className="mt-2">제 2 조 (용어의 정의)</p>
                    <p className="mt-2">
                      이 약관에서 사용하는 용어의 정의는 다음 각호와 같으며,
                      정의되지 않은 용어에 대한 해석은 관계법령 및 서비스
                      안내에서 정하는 바에 따릅니다.
                    </p>
                    <p>
                      1&#41; "회원"이라 함은 이 약관에 동의하여 서비스를
                      이용하는 자를 말합니다.
                    </p>
                    <p>
                      2&#41; "위치정보"라 함은 이동성이 있는 물건 또는 개인이
                      특정한 시간에 존재하거나 존재하였던 장소에 관한 정보로서
                      전기통신기본법 제2조 제2호 및 제3호의 규정에 따른
                      전기통신설비 및 전기통신회선설비를 이용하여 수집된 것을
                      말합니다.
                    </p>
                    <p>
                      3&#41; "개인위치정보"라 함은 특정 개인의
                      위치정보(위치정보만으로는 특정 개인의 위치를 알 수 없는
                      경우에도 다른 정보와 용이하게 결합하여 특정 개인의 위치를
                      알 수 있는 것을 포함합니다)를 말합니다.
                    </p>
                    <p>
                      4&#41; "개인위치정보주체"라 함은 개인위치정보에 의하여
                      식별되는 자를 말합니다.
                    </p>
                    <p>
                      5&#41; "위치정보 수집사실 확인자료"라 함은 위치정보의
                      수집요청인, 수집일시 및 수집방법에 관한 자료(위치정보를
                      제외합니다)를 말 합니다.
                    </p>
                    <p>
                      6&#41; "위치정보 이용·제공사실 확인자료"라 함은 위치정보를
                      제공받는 자, 취득경로, 이용·제공일시 및 이용·제공방법에
                      관한 자료(위치 정보를 제외합니다)를 말합니다.
                    </p>
                    <p>
                      7&#41; "위치정보시스템"이라 함은 위치정보사업 및
                      위치기반서비스 사업을 위하여 정보통신망 이용촉진 및
                      정보보호 등에 관한 법률 제 2조 제1항 제1호의 규정에 의한
                      정보통신망을 통하여 위치정보를 수집·저장·분석·이용 및
                      제공할 수 있도록 서로 유기적으로 연계된 컴퓨터의 하드웨어,
                      소프트웨어, 데이터베이스 및 인적자원의 결합체를 말합니다.
                    </p>
                    <p>
                      8&#41; "게시물"이라 함은 회원이 작성한 텍스트나 촬영한
                      이미지, 동영상 등 정보 일체를 말합니다.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Note
              </h3>
              {pageState === "edit" ? (
                <div className="py-2 px-3 w-full">
                  <input
                    className="w-full px-2 py-1 border-2 border-gray-600"
                    defaultValue="관련법 개정으로 인한 변경

"
                  />
                </div>
              ) : (
                <p className="py-2 px-3">관련법 개정으로 인한 변경</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-3">
          {pageState === "readOnly" ? (
            <button
              className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600"
              onClick={handleEdit}
            >
              수정
            </button>
          ) : (
            <button
              className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600"
              onClick={handleOpenConfirmationModal}
            >
              취소
            </button>
          )}
          {pageState === "readOnly" ? (
            <button
              className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600"
              onClick={handleOpenConfirmationModal}
            >
              삭제
            </button>
          ) : (
            <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
              저장
            </button>
          )}
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
                <p className="text-center mt-3">
                  {pageState === "readOnly"
                    ? "삭제 시 해당 내용이"
                    : "공지사항 수정을"}
                </p>
                <p className="text-center">
                  {pageState === "readOnly" &&
                    "모두 삭제되며 되돌릴 수 없습니다."}
                </p>
                <p className="text-center mt-6">
                  {pageState === "readOnly"
                    ? "삭제 하시겠습니까?"
                    : "취소 하시겠습니까?"}
                </p>
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

export default Page50;
