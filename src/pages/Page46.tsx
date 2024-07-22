import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomSelectOptions from "../components/CustomSelectOptions";
import CustomModal from "../components/CustomModal";

import calender from "../assets/calender.png";
import imageIcon from "../assets/imageIcon.png";

import page42Data from "../data/tablesData/page42";

const Page46 = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  const [isArrayReverse, setIsArrayReverse] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page42Data.page42Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page42Data.page42Rows.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  const handleSortData = () => {
    setIsArrayReverse(!isArrayReverse);
    page42Data.page42Rows.reverse();
  };
  return (
    <section>
      <header className="flex items-center justify-between mb-3">
        <article className="flex self-end flex-col gap-1">
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>검색 된 항목 :</h2>
            <h2>6</h2>
          </div>
        </article>

        <article className="flex  gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6 self-end">
              <div className="flex items-center gap-1">
                <input
                  type="date"
                  className="border border-gray-900 p-1 w-[200px] "
                />
                <img src={calender} alt="Calender Icon" className="size-8" />
              </div>

              <p className="font-semibold">~</p>
              <div className="flex items-center gap-1">
                <input
                  type="date"
                  className="border border-gray-900 p-1 w-[200px] "
                />
                <img src={calender} alt="Calender Icon" className="size-8" />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-end">
              <CustomSelectOptions
                label="Category"
                options={["대기", "진행중", "종료"]}
                outerStyles="w-[120px]"
              />

              <input
                className="w-[350px] border border-gray-950 py-[2px] px-1 focus:outline-none"
                placeholder="제목, 내용, 작성자 search"
              />
            </div>
          </div>

          <button className="bg-gray-950 text-white font-semibold px-2">
            SEARCH
          </button>
        </article>
      </header>

      <main>
        <div className="overflow-x-auto pb-5">
          <table className="w-full">
            <thead>
              <tr className="bg-zinc-300 border-t-2 border-b-2 border-gray-600">
                <th className="py-2  text-center  px-5 border-r border-gray-400">
                  <button
                    onClick={() => {
                      if (allListCheckedPageNumbers.includes(currentPage)) {
                        setAllListCheckedPageNumbers(
                          allListCheckedPageNumbers.filter(
                            (number) => number !== currentPage
                          )
                        );
                        setClickedRowIds(
                          clickedRowIds.filter(
                            (id) =>
                              !currentData
                                .map((item) => item.number)
                                .includes(id)
                          )
                        );
                      } else {
                        setClickedRowIds([
                          ...clickedRowIds,
                          ...currentData.map((item) => item.number),
                        ]);
                        setAllListCheckedPageNumbers([
                          ...allListCheckedPageNumbers,
                          currentPage,
                        ]);
                      }
                    }}
                    className={` w-[18px] h-[18px] flex justify-center items-center rounded-sm text-white ${
                      allListCheckedPageNumbers.includes(currentPage)
                        ? "bg-blue-500 border-[2px] border-blue-500"
                        : "border-[3px] border-gray-500"
                    }  `}
                  >
                    {allListCheckedPageNumbers.includes(currentPage) && (
                      <p className="flex items-center justify-center text-white text-[22px]">
                        ✓
                      </p>
                    )}
                  </button>
                </th>
                {page42Data.page42Columns.map((item) => (
                  <th
                    key={item}
                    className={`text-center border-r border-gray-400 px-3`}
                  >
                    <button
                      className={`text-nowrap`}
                      onClick={() => {
                        if (item === "No.") {
                          handleSortData();
                          setAllListCheckedPageNumbers([]);
                          setClickedRowIds([]);
                        }
                      }}
                    >
                      {item} ▼
                    </button>
                  </th>
                ))}
                <th className={`text-center border-r border-gray-400 px-3`}>
                  <p className={`text-nowrap`}>Admin ID who deleted ▼</p>
                </th>
              </tr>
            </thead>

            <tbody className="border-b-2 border-gray-800 text-nowrap">
              {currentData.map((row) => (
                <tr key={row.number}>
                  <td className="py-3 px-5 border-r border-collapse border-gray-400 text-center  flex justify-center items-center  ">
                    <button
                      className={`text-center w-[18px] h-[18px] rounded-sm
                         flex justify-center items-center 
                        ${
                          clickedRowIds.includes(row.number)
                            ? "bg-blue-500 border-[2px] border-blue-500"
                            : "border-[2px]  border-gray-800"
                        }
                        `}
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                    >
                      {clickedRowIds.includes(row.number) && (
                        <p className=" text-center text-white text-[22px]">✓</p>
                      )}
                    </button>
                  </td>
                  <td className=" border-r border-gray-400 ">{row.number}</td>
                  <td className="text-left max-w-[400px] min-w-[400px] overflow-hidden text-ellipsis text-nowrap px-4 border-r border-collapse border-gray-400 ">
                    <div className="flex items-center gap-4">
                      <p>{row.title}</p>
                      {row.isImageAttached && (
                        <img
                          src={imageIcon}
                          alt="image"
                          className="w-[40px] h-[40px]"
                        />
                      )}
                    </div>
                  </td>
                  <td className="text-center text-nowrap  px-3  border-r border-collapse border-gray-400 ">
                    {row.category}
                  </td>

                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.postDate}
                  </td>

                  <td className="px-3 border-r border-collapse border-gray-400">
                    <a className="underline underline-offset-1">{row.poster}</a>
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    <a className="underline underline-offset-1">
                      Admin@email.com
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-9 self-start mt-3">
            <button
              className="bg-zinc-200 py-1 px-6 rounded-md font-semibold"
              onClick={handleOpenConfirmationModal}
            >
              완전 삭제
            </button>
            <button className="bg-gray-500 py-1 px-6 rounded-md font-semibold text-white">
              엑셀 다운로드
            </button>
          </div>
        </div>

        <Stack spacing={2} className="flex items-center justify-center">
          <Pagination
            count={totalPages}
            showFirstButton
            showLastButton
            onChange={(_event, value) => {
              handlePageChange(value);
            }}
          />
        </Stack>
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
                <p className="text-center mt-3">삭제 시 해당 내용이</p>
                <p className="text-center">모두 삭제되며 되돌릴 수 없습니다.</p>

                <p className="text-center mt-3">삭제 하시겠습니까?</p>
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

export default Page46;
