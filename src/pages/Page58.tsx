import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomSelectOptions from "../components/CustomSelectOptions";

import calender from "../assets/calender.png";
import page58Data from "../data/tablesData/page58";

const Page18 = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page58Data.page58Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page58Data.page58Rows.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <header className="flex items-center justify-between mb-3">
        <article className="flex flex-col gap-1">
          <div className="flex gap-2  font-semibold text-[18px] ">
            <h2>Speaking Practice :</h2>
            <h2>560</h2>
          </div>
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>Vocabulary :</h2>
            <h2>220</h2>
          </div>
          <div className="flex gap-2 font-semibold text-[18px] ">
            <h2>Retrieved :</h2>
            <h2>780</h2>
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
                options={["영어", "스페인어"]}
                outerStyles="w-[100px]"
              />
              <CustomSelectOptions
                label="Type"
                options={["Speaking", "Voca"]}
                outerStyles="w-[100px]"
              />

              <CustomSelectOptions
                label="Status"
                options={["정상", "정지"]}
                outerStyles="w-[100px]"
              />

              <CustomSelectOptions
                label="Category"
                options={["LIFE", "Not Sharing"]}
                outerStyles="w-[100px]"
              />

              <input
                className="min-w-[400px] border border-gray-950 py-[2px] px-1 focus:outline-none"
                placeholder="Title, Code, 내용, Admin ID, Note search"
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
                <th className="text-center py-3 px-5 border-r border-gray-400">
                  <button
                    onClick={() => {
                      if (isAllChecked) {
                        setClickedRowIds([]);
                      } else {
                        setClickedRowIds([
                          ...page58Data.page58Rows.map((item) => item.number),
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
                {page58Data.page58Columns.map((item) => (
                  <th
                    key={item}
                    className={`text-center border-r border-gray-400 ${
                      item == "Purpose" ? "border-r-0" : ""
                    }`}
                  >
                    <p
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
                        `}
                    >
                      {item} ▼
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="border-b-2 border-gray-800">
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
                  <td className="text-nowrap  px-4 border-r border-collapse border-gray-400 ">
                    {row.language}
                  </td>
                  <td className="text-left max-w-[300px] min-w-[300px] overflow-hidden text-ellipsis text-nowrap px-3  border-r border-collapse border-gray-400 ">
                    {row.title}
                  </td>
                  <td className="px-2 text-nowrap border-r border-collapse border-gray-400">
                    {row.type}
                  </td>
                  <td className="text-nowrap border-r border-collapse border-gray-400">
                    {row.status}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.category}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.connectedCode}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.numberOfContents}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.size}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.downloads}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.creationDate}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.adminId}
                  </td>
                  <td className="text-nowrap px-2 border-r border-collapse border-gray-400">
                    {row.department}
                  </td>
                  <td className="max-w-[300px] min-w-[300px] overflow-hidden text-ellipsis text-nowrap text-left px-2 border-r border-collapse border-gray-400">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between gap-9 self-start mt-3">
          <div className="flex items-center gap-5">
            <button className="bg-zinc-200 py-1 px-6 rounded-md font-semibold">
              삭제
            </button>
            <button className="bg-gray-500 py-1 px-6 rounded-md font-semibold text-white">
              엑셀 다운로드
            </button>
          </div>

          <div>
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
    </section>
  );
};

export default Page18;
