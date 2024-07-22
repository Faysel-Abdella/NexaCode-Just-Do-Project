import { useState } from "react";
import CustomModal from "../components/CustomModal";

import calender from "../assets/calender.png";

const Page38 = ({
  openTheModal,
  handleCloseModal,
}: {
  openTheModal: boolean;
  handleCloseModal: () => void;
}) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      imagePath: "2023-june01.png",
      imageUrl: "https://www.hackers.co.kr/",
      hits: "245",
    },
    {
      id: 2,
      imagePath: "2023-june02.png",
      imageUrl: "https://www.capterra.com/",
      hits: "746",
    },
    {
      id: 3,
      imagePath: "2023-june03.png",
      imageUrl: "https://www.coursehero.com/",
      hits: "256",
    },
  ]);

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 1,

      imagePath: "",
      imageUrl: "",
      hits: "0",
    };

    const updatedRow = [...rows, newRow];

    setRows(updatedRow);
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const updatedRows = [...rows];
      const temp = updatedRows[index - 1];
      updatedRows[index - 1] = updatedRows[index];
      updatedRows[index] = temp;
      setRows(updatedRows);
      console.log(updatedRows);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < rows.length - 1) {
      const updatedRows = [...rows];
      const temp = updatedRows[index + 1];
      updatedRows[index + 1] = updatedRows[index];
      updatedRows[index] = temp;
      setRows(updatedRows);
      console.log(updatedRows);
    }
  };

  const handleInputChange = (
    index: number,
    value: string,
    inputType: "imagePath" | "imageUrl" | "hits"
  ): void => {
    const updatedRows = [...rows];
    updatedRows[index][inputType] = value;
    setRows(updatedRows);
  };

  return (
    <section>
      <CustomModal
        isOpen={openTheModal}
        onClose={handleCloseModal}
        minWidth="1400px"
      >
        <main className="w-[100%] mx-auto border border-gray-600 py-8 shadow-md shadow-gray-400 ">
          <div className="mx-7 px-2 pb-2 border-b-2 border-gray-600 flex items-center justify-between">
            <p className="font-semibold text-[16px]">배너 상세 정보</p>
            <button
              className="font-semibold text-[16px]"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
          <div className="flex justify-center mt-14">
            <div className="w-[90%] border border-gray-500 border-collapse">
              <div className="flex  border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  제목
                </h3>
                <div className="py-1 px-3 text-slate-800">
                  <input
                    type="text"
                    className="w-[700px] py-1 px-3 border border-gray-800"
                    defaultValue="Title Title Title Title Title Title"
                  />
                </div>
              </div>
              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  Code
                </h3>
                <p className="py-2 px-3 text-slate-800">MB-6</p>
              </div>
              <div className="flex border-b border-gray-500 border-collapse">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  게시 기간
                </h3>
                <div className="flex items-center gap-5 py-2 px-3 text-slate-800">
                  <div className="flex items-center">
                    <input
                      type="datetime-local"
                      className="border border-gray-600 px-2 py-1"
                    />
                    <img
                      src={calender}
                      alt="Calender icon"
                      className="h-[25px] w-[25px] ml-2"
                    />
                  </div>
                  <p className="font-semibold text-[20px]">~</p>
                  <div className="flex items-center">
                    <input
                      type="datetime-local"
                      className="border border-gray-600 px-2 py-1"
                    />
                    <img
                      src={calender}
                      alt="Calender icon"
                      className="h-[25px] w-[25px] ml-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex ">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  상태
                </h3>
                <div className="py-2 px-3 flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="updateStatus"
                      id="updateStatus1"
                      className="size-4"
                    />
                    <label htmlFor="updateStatus1" className="text-slate-800">
                      진행 중
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="updateStatus"
                      id="updateStatus2"
                      className="size-4"
                    />
                    <label htmlFor="updateStatus2" className="text-slate-800">
                      대기
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="updateStatus"
                      id="updateStatus3"
                      className="size-4"
                      defaultChecked
                    />
                    <label htmlFor="updateStatus3" className="text-slate-800">
                      종료
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-14">
            <div className="w-[90%] border border-gray-500 border-collapse">
              <div className="flex border-b border-gray-500 border-collapse">
                <div className="flex items-center py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  <h3>이미지</h3>
                </div>
                <div className="py-4 px-3 overflow-x-auto flex flex-col justify-center">
                  <table className=" border-2 border-gray-800 border-collapse">
                    <thead>
                      <tr>
                        <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center text-nowrap">
                          조정
                        </th>
                        <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center text-nowrap">
                          순서
                        </th>
                        <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-nowrap">
                          이미지 등록
                        </th>
                        <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center text-nowrap">
                          링크 URL
                        </th>
                        <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center text-nowrap">
                          Hits
                        </th>
                        <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center text-nowrap">
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
                                value={item.imagePath}
                                onChange={(e) =>
                                  handleInputChange(
                                    index,
                                    e.target.value,
                                    "imagePath"
                                  )
                                }
                                className="w-[250px] py-1 px-1 border border-gray-800"
                              />
                              <button className="bg-gray-500 py-1 px-2 text-white font-semibold">
                                파일 선택
                              </button>
                            </div>
                          </td>
                          <td className="min-w-[350px] max-w-[350px] overflow-hidden text-ellipsis text-nowrap text-left border-2 border-gray-800 border-collapse px-2">
                            <input
                              type="text"
                              value={item.imageUrl}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  e.target.value,
                                  "imageUrl"
                                )
                              }
                              className="w-[300px] py-1 px-1 border border-gray-800"
                            />
                          </td>
                          <td className="border-2 border-gray-800 border-collapse px-2 ">
                            <input
                              type="text"
                              value={item.hits}
                              onChange={(e) =>
                                handleInputChange(index, e.target.value, "hits")
                              }
                              className="w-[50px] py-1 px-1 border border-gray-800"
                            />
                          </td>
                          <td className="border-2 border-gray-800 border-collapse text-center w-[100px]">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                className="flex items-center justify-center h-[26px] font-semibold text-[20px] bg-zinc-400 text-gray-600 py-1 px-2"
                                //   onClick={handleOpenConfirmationModal}
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
                  <p className="self-start mt-5 text-slate-800">
                    • 배너 이미지 등록 시 Width 1080 Height 720 권장
                  </p>
                </div>
              </div>

              <div className="flex ">
                <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                  이미지 전환
                </h3>
                <div className="py-2 px-3 flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="updateTransition"
                      id="updateTransition1"
                      className="size-4"
                      defaultChecked
                    />
                    <label
                      htmlFor="updateTransition1"
                      className="text-slate-800"
                    >
                      가로1 - from the Right
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="updateTransition"
                      id="updateTransition2"
                      className="size-4"
                    />
                    <label
                      htmlFor="updateTransition2"
                      className="text-slate-800"
                    >
                      가로2 - from the Left
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="updateTransition"
                      id="updateTransition3"
                      className="size-4"
                    />
                    <label
                      htmlFor="updateTransition3"
                      className="text-slate-800"
                    >
                      세로1 - from the Bottom
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="transition"
                      id="updateTransition4"
                      className="size-4"
                    />
                    <label
                      htmlFor="updateTransition4"
                      className="text-slate-800"
                    >
                      세로2 - from the Top
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10">
            <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
              <p>삭제</p>
            </button>
            <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
              <p>확인</p>
            </button>
          </div>
        </main>
      </CustomModal>
    </section>
  );
};

export default Page38;
