import { useState } from "react";
import forwardArrow from "../assets/forwardArrow.svg";
import prevArrow from "../assets/prevArrow.svg";
import CustomModal from "../components/CustomModal";

const Page37 = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      imagePath: "2023-june01.png",
      imageUrl: "https://www.hackers.co.kr/",
      hits: 245,
    },
    {
      id: 2,
      imagePath: "2023-june02.png",
      imageUrl: "https://www.capterra.com/",
      hits: 746,
    },
    {
      id: 3,
      imagePath: "2023-june03.png",
      imageUrl: "https://www.coursehero.com/",
      hits: 256,
    },
  ]);

  const addNewRow = ({ index }: { index: number }) => {
    const newRow = {
      id: index + 1,

      imagePath: "",
      imageUrl: "",
      hits: 0,
    };

    const updatedRow = [...rows, newRow];

    setRows(updatedRow);
  };

  return (
    <section>
      <main className="w-[80%] mx-auto border border-gray-600 py-8 shadow-md shadow-gray-400 ">
        <div className="mx-7 px-2 pb-2 border-b-2 border-gray-600 flex items-center justify-between">
          <p className="font-semibold text-[16px]">배너 상세 정보</p>
          <button className="font-semibold text-[16px]">✕</button>
        </div>
        <div className="flex justify-center mt-14">
          <div className="w-[90%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                제목
              </h3>
              <p className="py-2 px-3 text-slate-400">
                Title Title Title Title Title Title
              </p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Code
              </h3>
              <p className="py-2 px-3 text-slate-400">MB-6</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                게시 기간
              </h3>
              <p className="py-2 px-3 text-slate-400">
                2023-05-31 00:00 ~ 2023-06-30 23:59
              </p>
            </div>
            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                상태
              </h3>
              <div className="py-2 px-3 flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    id="status1"
                    className="size-4"
                    disabled
                  />
                  <label htmlFor="status1" className="text-slate-400">
                    진행 중
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    id="status2"
                    className="size-4"
                    disabled
                  />
                  <label htmlFor="status1" className="text-slate-400">
                    대기
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    id="status3"
                    className="size-4"
                    disabled
                    defaultChecked
                  />
                  <label htmlFor="status1" className="text-slate-400">
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
              <div className="flex items-center py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                <h3>이미지</h3>
              </div>
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
                        이미지 등록
                      </th>
                      <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center">
                        링크 URL
                      </th>
                      <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center">
                        Hits
                      </th>
                      <th className="py-3 px-2 border-2 border-gray-800 border-collapse text-center">
                        삭제/추가
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((item) => (
                      <tr>
                        <td className="border-2 border-gray-800 border-collapse w-[100px] h-[40px]">
                          <div className="flex items-center justify-center gap-1">
                            <button className=" h-[25px] w-[35px] flex items-center justify-center bg-gray-500 text-white">
                              ▲
                            </button>
                            <button className="h-[25px] w-[35px] flex items-center justify-center bg-gray-500 text-white">
                              ▼
                            </button>
                          </div>
                        </td>
                        <td className="border-2 border-gray-800 border-collapse text-center">
                          {item.id}
                        </td>
                        <td className="px-2 py-1 min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis text-nowrap  border-2 border-gray-800 border-collapse text-left  text-slate-400">
                          <p
                            className="underline underline-offset-1 cursor-pointer"
                            onClick={handleOpenModal}
                          >
                            {item.imagePath}
                          </p>
                        </td>
                        <td className="min-w-[300px] max-w-[300px] overflow-hidden text-ellipsis text-nowrap text-left border-2 border-gray-800 border-collapse px-2">
                          <a
                            href={item.imageUrl}
                            target="_blank"
                            rel="noreferrer"
                            className=" text-blue-500 underline"
                          >
                            {item.imageUrl}
                          </a>
                        </td>
                        <td className="border-2 border-gray-800 border-collapse px-2 text-slate-400">
                          {item.hits}
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
                              onClick={() => addNewRow({ index: item.id })}
                            >
                              &#x002B;
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="self-start mt-5 text-slate-400">
                  • 배너 이미지 등록 시 Width 1080 Height 720 권장
                </p>
              </div>
            </div>

            <div className="flex ">
              <h3 className="py-2 px-3 w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                이미지 전환
              </h3>
              <div className="py-2 px-3 flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="transition"
                    id="transition1"
                    className="size-4"
                    disabled
                    defaultChecked
                  />
                  <label htmlFor="transition1" className="text-slate-400">
                    가로1 - from the Right
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="transition"
                    id="transition2"
                    className="size-4"
                    disabled
                  />
                  <label htmlFor="transition2" className="text-slate-400">
                    가로2 - from the Left
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="transition"
                    id="transition3"
                    className="size-4"
                    disabled
                  />
                  <label htmlFor="transition3" className="text-slate-400">
                    세로1 - from the Bottom
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="transition"
                    id="transition4"
                    className="size-4"
                    disabled
                  />
                  <label htmlFor="transition4" className="text-slate-400">
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

      <div className=" flex items-center justify-center mt-6 h-[60px]">
        <button
          className={`mr-2 p-2 hover:bg-gray-300 text-white  rounded-full`}
        >
          <img src={prevArrow} alt="prevArrow" />
        </button>

        <button
          className={`mr-2 p-0 mx-2 text-medium font-medium  rounded-full text-black`}
        >
          1
        </button>
        <button
          className={`mr-2 p-0 mx-2 text-medium font-medium  rounded-full text-gray-400`}
        >
          2
        </button>
        <button
          className={`mr-2 p-0 mx-2 text-medium font-medium  rounded-full text-gray-400`}
        >
          3
        </button>

        <button
          className={`ml-2 p-2 hover:bg-gray-300  text-white rounded-full`}
        >
          <img src={forwardArrow} alt="arrow" />
        </button>
      </div>

      {/* Modal for displaying image */}
      <CustomModal isOpen={modalOpen} onClose={handleCloseModal}>
        <section className="relative w-[600px] h-[500px] flex items-center justify-center  py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 ">
          <div className="flex items-center justify-center ">IMAGE</div>

          <button className="absolute top-4 right-4" onClick={handleCloseModal}>
            X
          </button>
        </section>
      </CustomModal>
    </section>
  );
};

export default Page37;
