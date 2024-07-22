import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomSelectOptions from "../components/CustomSelectOptions";

import calender from "../assets/calender.png";
import page18Data from "../data/tablesData/page18";

import DataShowModal from "./Page21";

const Page18 = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  const [isArrayReverse, setIsArrayReverse] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page18Data.page18Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page18Data.page18Rows.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortData = () => {
    setIsArrayReverse(!isArrayReverse);
    page18Data.page18Rows.reverse();
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      <header className="flex items-center justify-between mb-3">
        <article className="flex flex-col gap-1">
          <div className="flex gap-2  font-semibold text-[18px] ">
            <h2>전체회원 :</h2>
            <h2>3,560,000</h2>
          </div>
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>전체유료회원 :</h2>
            <h2>23,470</h2>
          </div>
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>검색 된 항목 :</h2>
            <h2>3,560,000</h2>
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
                label="Status"
                options={["정상", "정지"]}
                outerStyles="w-[100px]"
              />
              <CustomSelectOptions
                label="Connected Country"
                options={["Korea", "USA", "China"]}
                outerStyles="w-[200px]"
              />
              <CustomSelectOptions
                label="Member"
                options={["New", "Later"]}
                outerStyles="w-[100px]"
              />
              <CustomSelectOptions
                label="Purpose"
                options={["For studying", "For fun", "For better business"]}
                outerStyles="w-[150px]"
              />
              <input
                className="border border-gray-950 py-[2px] px-1 focus:outline-none"
                placeholder="Name, ID search"
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
                <th className=" text-center py-1 px-5 border-r border-gray-400">
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
                {page18Data.page18Columns.map((item) => (
                  <th
                    key={item}
                    className={`text-center border-r border-gray-400 ${
                      item == "Purpose" ? "border-r-0" : ""
                    }`}
                  >
                    <button
                      className={`
                        ${
                          item === "Connected Country" ||
                          item === "Drill Achievement (times)"
                            ? ""
                            : "text-nowrap"
                        }
                        ${
                          item === "Drill Achievement (times)"
                            ? "w-[140px]"
                            : "px-5"
                        }
                        ${item === "Connected Country" ? "w-[130px] " : ""}
                        ${item === "No." ? "cursor-pointer" : ""}
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

            <tbody className="border-b-2 border-gray-800">
              {currentData.map((row) => (
                <tr key={row.number}>
                  <td className=" py-3 px-5  border-r border-collapse border-gray-400 text-center  flex justify-center items-center  ">
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
                  <td className="text-left text-nowrap  px-4 border-r border-collapse border-gray-400 ">
                    {row.name}
                  </td>
                  <td className="text-left text-nowrap px-3  border-r border-collapse border-gray-400 ">
                    {row.idOrEmail}
                  </td>
                  <td className="px-2 text-nowrap border-r border-collapse border-gray-400">
                    {row.status}
                  </td>
                  <td className="text-nowrap border-r border-collapse border-gray-400">
                    {row.connectedCountry}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.signUpDate}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.paidMember}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.lastAccess}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.drillAchievement}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.Purpose}
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
        modalData={page18Data.page18Rows
          .filter((row) => clickedRowIds.includes(row.number))
          .map((row) => row.idOrEmail)}
        openTheModal={modalOpen}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};

export default Page18;
