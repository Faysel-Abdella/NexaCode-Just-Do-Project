import { useState } from "react";
import CustomModal from "../components/CustomModal";

const Page48 = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };
  const [rows, setRows] = useState([
    {
      id: 1,
      termOfUse: "Terms of Use",
      imageUrl: "https://",
    },
    {
      id: 2,
      termOfUse: "Privacy Policy",
      imageUrl: "https://",
    },
    {
      id: 3,
      termOfUse: "Disclosure of Personal Information to Third Parties",
      imageUrl: "https://",
    },
    {
      id: 4,
      termOfUse: "Location Infomation",
      imageUrl: "https://",
    },
    {
      id: 5,
      termOfUse: "new",
      imageUrl: "https://",
    },
  ]);

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 1,
      termOfUse: "",
      imageUrl: "",
    };

    const updatedRow = [...rows, newRow];

    setRows(updatedRow);
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const updatedRows = [...rows];
      const temp = updatedRows[index - 1];

      updatedRows[index - 1] = {
        ...updatedRows[index - 1],
        termOfUse: updatedRows[index].termOfUse,
        imageUrl: updatedRows[index].imageUrl,
      };
      updatedRows[index] = {
        ...updatedRows[index],
        termOfUse: temp.termOfUse,
        imageUrl: temp.imageUrl,
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
        termOfUse: updatedRows[index].termOfUse,
        imageUrl: updatedRows[index].imageUrl,
      };
      updatedRows[index] = {
        ...updatedRows[index],
        termOfUse: temp.termOfUse,
        imageUrl: temp.imageUrl,
      };
      setRows(updatedRows);
      console.log(updatedRows);
    }
  };

  const handleInputChange = (
    index: number,
    value: string,
    inputType: "termOfUse" | "imageUrl"
  ): void => {
    const updatedRows = [...rows];
    updatedRows[index][inputType] = value;
    setRows(updatedRows);
  };

  return (
    <section>
      <div className="py-4 px-3 overflow-x-auto flex flex-col justify-center">
        <table className=" border-2 border-gray-800 border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center">
                조정
              </th>
              <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center">
                순서
              </th>
              <th className="py-3 px-2 border-2 border-gray-800 border-collapse">
                약관 종류
              </th>
              <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center">
                링크 URL
              </th>

              <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center">
                삭제/추가
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((item, index) => (
              <tr>
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
                <td className="px-2 py-1 min-w-[350px] max-w-[350px] overflow-hidden text-ellipsis text-nowrap  border-2 border-gray-800 border-collapse text-left  text-slate-800">
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      className="w-full py-1 px-1 border border-gray-800"
                      value={item.termOfUse}
                      onChange={(e) =>
                        handleInputChange(index, e.target.value, "termOfUse")
                      }
                    />
                  </div>
                </td>
                <td className="min-w-[350px] max-w-[350px] overflow-hidden text-ellipsis text-nowrap text-left border-2 border-gray-800 border-collapse px-2">
                  <input
                    type="text"
                    value={item.imageUrl}
                    onChange={(e) =>
                      handleInputChange(index, e.target.value, "imageUrl")
                    }
                    className="w-full py-1 px-1 border border-gray-800"
                  />
                </td>{" "}
                <td className="border-2 border-gray-800 border-collapse text-center w-[100px]">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="flex items-center justify-center h-[26px] font-semibold text-[20px] bg-zinc-400 text-gray-600 py-1 px-2"
                      onClick={handleOpenConfirmationModal}
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
                <p className="text-center">약관 카테고리 삭제 시</p>
                <p className="text-center">
                  해당 카테고리의 모든 약관이 삭제됩니다.
                </p>
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
                    onClick={handleCloseConfirmationModal}
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

export default Page48;
