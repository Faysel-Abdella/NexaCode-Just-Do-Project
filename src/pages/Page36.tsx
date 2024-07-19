import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomSelectOptions from "../components/CustomSelectOptions";

import calender from "../assets/calender.png";

import page36Data from "../data/tablesData/page36";

const Page36 = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page36Data.page36Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page36Data.page36Rows.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
                label="Status"
                options={["대기", "진행중", "종료"]}
                outerStyles="w-[120px]"
              />

              <input
                className="w-[350px] border border-gray-950 py-[2px] px-1 focus:outline-none"
                placeholder="Title, Poster search"
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
                <th className="flex items-center justify-center text-center py-3 px-5 border-r border-gray-400">
                  <button
                    onClick={() => {
                      if (isAllChecked) {
                        setClickedRowIds([]);
                      } else {
                        setClickedRowIds([
                          ...page36Data.page36Rows.map((item) => item.number),
                        ]);
                      }
                      setIsAllChecked(!isAllChecked);
                    }}
                    className={`size-5 flex justify-center items-center rounded-sm text-white ${
                      isAllChecked
                        ? "bg-blue-500 border-[2px] border-blue-500"
                        : "border-[3px] border-gray-500"
                    }  `}
                  >
                    {isAllChecked && (
                      <p className="flex items-center justify-center text-white text-[22px]">
                        ✓
                      </p>
                    )}
                  </button>
                </th>
                {page36Data.page36Columns.map((item) => (
                  <th
                    key={item}
                    className={`text-center border-r border-gray-400 px-3`}
                  >
                    <p className={`text-nowrap`}>{item} ▼</p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="border-b-2 border-gray-800 text-nowrap">
              {currentData.map((row) => (
                <tr key={row.number}>
                  <td className="py-3 border-r border-collapse border-gray-400 text-center  flex justify-center items-center  ">
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
                  <td className=" border-r border-gray-400 ">{row.code}</td>
                  <td className="text-left max-w-[400px] min-w-[400px] overflow-hidden text-ellipsis text-nowrap  underline underline-offset-2  px-4 border-r border-collapse border-gray-400 ">
                    {row.title}
                  </td>
                  <td className="text-center text-nowrap  px-3  border-r border-collapse border-gray-400 ">
                    {row.status}
                  </td>

                  <td className="border-r border-collapse border-gray-400 px-3">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          {row.stats.map((stat, index) => (
                            <td
                              key={index}
                              className={`${
                                index !== row.stats.length - 1
                                  ? "min-w-[50px] border-r border-collapse border-gray-400"
                                  : "min-w-[50px]"
                              }`}
                            >
                              {stat}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.postingPeriod.start} ~ {row.postingPeriod.end}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.postDate}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.poster}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-9 self-start mt-3">
            <button className="bg-zinc-200 py-1 px-6 rounded-md font-semibold">
              삭제
            </button>
            <button className="bg-gray-500 py-1 px-6 rounded-md font-semibold text-white">
              엑셀 다운로드
            </button>
          </div>
          <button className="bg-gray-500 py-1 px-6 rounded-md font-semibold text-white">
            새 배너 등록
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
    </section>
  );
};

export default Page36;
