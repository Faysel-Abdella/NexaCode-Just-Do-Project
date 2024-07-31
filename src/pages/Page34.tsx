import { useState } from "react";
import CustomModal from "../components/CustomModal";

const Page34 = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);
  const [recentDeleteIndex, setRecentDeleteIndex] = useState<number>(0);

  const [rows, setRows] = useState([
    {
      id: 2,
      default: "TESTS",
    },
    {
      id: 3,
      default: "SCHOOL",
    },
    {
      id: 4,
      default: "LIFE",
    },
    {
      id: 5,
      default: "BUSINESS",
    },
    {
      id: 6,
      default: "HEALTH",
    },
    {
      id: 7,
      default: "FOOD",
    },
  ]);

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 2,
      default: "",
    };

    const updatedRow = [...rows, newRow];

    setRows(updatedRow);
  };

  const removeRow = ({ index }: { index: number }) => {
    const updatedRow = rows.filter((item) => item.id !== index);

    setRows(updatedRow);
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const updatedRows = [...rows];
      const temp = updatedRows[index - 1];

      updatedRows[index - 1] = {
        ...updatedRows[index - 1],
        default: updatedRows[index].default,
      };
      updatedRows[index] = {
        ...updatedRows[index],
        default: temp.default,
      };
      setRows(updatedRows);
      console.log(updatedRows);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < rows.length - 1) {
      const updatedRows = [...rows];
      const temp = updatedRows[index + 1];
      updatedRows[index + 1] = {
        ...updatedRows[index + 1],
        default: updatedRows[index].default,
      };
      updatedRows[index] = {
        ...updatedRows[index],
        default: temp.default,
      };
      setRows(updatedRows);
      console.log(updatedRows);
    }
  };

  const handleInputChange = (index: number, value: string): void => {
    const updatedRows = [...rows];
    updatedRows[index].default = value;
    setRows(updatedRows);
  };

  return (
    <section>
      <h2 className="font-semibold text-center text-[20px]">카테고리 관리</h2>
      <div className="overflow-x-auto flex justify-center">
        <table className="w-[90%] border-2 border-gray-800 border-collapse">
          <thead>
            <tr>
              <th className="py-3 border-2 border-gray-800 border-collapse text-center">
                조정
              </th>
              <th className="py-3 border-2 border-gray-800 border-collapse text-center">
                순서
              </th>
              <th className="py-3 border-2 border-gray-800 border-collapse">
                <div className="flex items-center justify-center">
                  <p>카테고리 이름</p>
                  <p className="ml-20">※ max 20bytes</p>
                </div>
              </th>
              <th className="py-3 border-2 border-gray-800 border-collapse text-center">
                사용 여부
              </th>
              <th className="py-3 border-2 border-gray-800 border-collapse text-center">
                삭제/추가
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-2 border-gray-800 border-collapse text-center px-2 h-[40px]"></td>
              <td className="border-2 border-gray-800 border-collapse text-center px-2">
                1
              </td>
              <td className="border-2 border-gray-800 border-collapse text-left px-2">
                <div>
                  <p>ALL (default)</p>
                </div>
              </td>
              <td className="border-2 border-gray-800 border-collapse px-2">
                <div className="flex items-center gap-5 ml-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="useOption"
                      id="use"
                      className="size-4 "
                      disabled
                    />
                    <label
                      htmlFor="use"
                      className="font-semibold text-slate-400"
                    >
                      사용
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="useOption"
                      id="notUse"
                      className="size-4 "
                      disabled
                    />
                    <label
                      htmlFor="notUse"
                      className="font-semibold text-slate-400"
                    >
                      사용 안함
                    </label>
                  </div>
                </div>
              </td>
              <td className="border-2 border-gray-800 border-collapse px-2"></td>
            </tr>

            {rows.map((item, index) => (
              <tr key={Math.random() * 1000}>
                <td className="border-2 border-gray-800 border-collapse w-[100px] h-[40px]">
                  <div className="flex items-center justify-center gap-1">
                    <button
                      className=" h-[25px] w-[35px] flex items-center justify-center bg-gray-500 text-white"
                      onClick={() => handleMoveUp(index)}
                    >
                      ▲
                    </button>
                    <button
                      className="h-[25px] w-[35px] flex items-center justify-center bg-gray-500 text-white"
                      onClick={() => handleMoveDown(index)}
                    >
                      ▼
                    </button>
                  </div>
                </td>
                <td className="border-2 border-gray-800 border-collapse text-center">
                  {item.id}
                </td>
                <td className="border-2 border-gray-800 border-collapse text-left px-2 py-1">
                  <div>
                    {/* Toggle the tag between <p> and <input /> based on the requirement */}

                    <input
                      className="w-[90%] border border-gray-700 py-1 px-2"
                      value={item.default}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </div>
                </td>
                <td className="border-2 border-gray-800 border-collapse px-2">
                  <div className="flex items-center gap-5 ml-6">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="useOption"
                        id="use"
                        className="size-4 "
                      />
                      <label htmlFor="use" className="font-semibold">
                        사용
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="useOption"
                        id="notUse"
                        className="size-4 "
                      />
                      <label htmlFor="notUse" className="font-semibold">
                        사용 안함
                      </label>
                    </div>
                  </div>
                </td>
                <td className="border-2 border-gray-800 border-collapse text-center w-[100px]">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="flex items-center justify-center h-[26px] font-semibold text-[20px] bg-zinc-400 text-gray-600 py-1 px-2"
                      onClick={() => {
                        handleOpenConfirmationModal();
                        setRecentDeleteIndex(item.id);
                      }}
                    >
                      &#x2212;
                    </button>
                    <button
                      className="flex items-center justify-center h-[26px] font-semibold text-[20px] bg-zinc-400 text-gray-600 py-1 px-2"
                      onClick={() => addNewRow()}
                    >
                      &#x002B;
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex items-center justify-end mr-20">
        <button className="py-1 px-10 rounded-md bg-gray-500 text-white font-semibold text-[16px] ">
          저장
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
                <p className="text-center mt-3">
                  카테고리 삭제 또는 사용 안함 시
                </p>
                <p className="text-center">해당 카테고리의 콘텐츠는</p>
                <p className="text-center">ALL(기본) 로 변경됩니다.</p>
                <p className="text-center mt-3">진행 하시겠습니까?</p>
                <div className="flex justify-center items-center gap-3 mt-3">
                  <button
                    className="bg-slate-400 w-fit py-2 px-6 rounded-lg text-white"
                    onClick={handleCloseConfirmationModal}
                  >
                    취소
                  </button>
                  <button
                    className="bg-red-500 w-fit py-2 px-6 rounded-lg text-white"
                    onClick={() => {
                      removeRow({ index: recentDeleteIndex });
                      handleCloseConfirmationModal();
                    }}
                  >
                    진행
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

export default Page34;
