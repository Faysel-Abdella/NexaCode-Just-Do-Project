import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomSelectOptions from "../components/CustomSelectOptions";
import DataShowModal from "./Page26";

import calender from "../assets/calender.png";
import page24Data from "../data/tablesData/page24";

const Page24 = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  const [isArrayReverse, setIsArrayReverse] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page24Data.page24Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page24Data.page24Rows.slice(startIndex, endIndex);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortData = () => {
    setIsArrayReverse(!isArrayReverse);
    page24Data.page24Rows.reverse();
  };

  return (
    <section>
      <header className="flex items-center justify-between mb-3">
        <article className="flex flex-col gap-1">
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>Speaking :</h2>
            <h2>760,943</h2>
          </div>
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>Voca :</h2>
            <h2>23,470</h2>
          </div>
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>검색 된 항목 :</h2>
            <h2>383</h2>
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
                label="Language"
                options={["Korean", "Arabic"]}
                outerStyles="w-[150px]"
              />
              <CustomSelectOptions
                label="Type"
                options={["Speaking", "Voca"]}
                outerStyles="w-[120px]"
              />
              <CustomSelectOptions
                label="Status"
                options={["정상", "정지"]}
                outerStyles="w-[120px]"
              />
              <CustomSelectOptions
                label="Category"
                options={["Life", "School"]}
                outerStyles="w-[120px]"
              />
              <CustomSelectOptions
                label="Connected Country"
                options={["Korea", "USA", "China"]}
                outerStyles="w-[200px]"
              />

              <input
                className="w-[250px] border border-gray-950 py-[2px] px-1 focus:outline-none"
                placeholder="Title,Code, Creator, ID search"
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
                <th className="w-[62px] text-center py-1 px-5 border-r border-gray-400">
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
                {page24Data.page24Columns.map((item) => (
                  <th
                    key={item}
                    className={`text-center border-r border-gray-400 px-3 ${
                      item == "Purpose" ? "border-r-0" : ""
                    }`}
                  >
                    <button
                      className={`
                        ${
                          item === "Connected Country"
                            ? "w-[130px]"
                            : "text-nowrap"
                        }
                    `}
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
              </tr>
            </thead>

            <tbody className="border-b-2 border-gray-800 text-nowrap">
              {currentData.map((row) => (
                <tr key={row.number}>
                  <td className="py-3 w-[62px] border-r border-collapse border-gray-400 text-center  flex justify-center items-center  ">
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
                  <td className="text-left  px-4 border-r border-collapse border-gray-400 ">
                    {row.language}
                  </td>
                  <td className="text-left max-w-[300px] min-w-[300px] overflow-hidden text-ellipsis text-nowrap  px-3  border-r border-collapse border-gray-400 ">
                    {row.title}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.type}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.status}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.category}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.contentsCode}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.noOfContents}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.size}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.downloads}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.creationDate}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.creator}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.idOrEmail}
                  </td>
                  <td className="px-2 border-r border-collapse border-gray-400">
                    {row.connectedCountry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-9 self-start mt-3">
          <button
            className="bg-zinc-200 py-1 px-6 rounded-md font-semibold"
            onClick={handleOpenModal}
          >
            선택 설정
          </button>
          <button className="bg-gray-500 py-1 px-6 rounded-md font-semibold text-white">
            엑셀 다운로드
          </button>
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

      <DataShowModal
        modalData={page24Data.page24Rows
          .filter((row) => clickedRowIds.includes(row.number))
          .map((row) => {
            return {
              number: row.number,
              language: row.language,
              title: row.title,
              type: row.type,
              code: row.contentsCode,
            };
          })}
        openTheModal={modalOpen}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};

export default Page24;
