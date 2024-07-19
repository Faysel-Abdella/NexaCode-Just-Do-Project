import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomModal from "../components/CustomModal";

import page49Data from "../data/tablesData/page49";

const Page49 = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page49Data.page49Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page49Data.page49Rows.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleOpenConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };
  return (
    <section>
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
                          ...page49Data.page49Rows.map((item) => item.number),
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
                {page49Data.page49Columns.map((item) => (
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
                  <td className="text-left max-w-[400px] min-w-[400px] overflow-hidden text-ellipsis text-nowrap px-4 border-r border-collapse border-gray-400 ">
                    <p>{row.title}</p>
                  </td>
                  <td className="text-center text-nowrap  px-3  border-r border-collapse border-gray-400 ">
                    {row.modifiedDate}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    <a className="underline underline-offset-1">
                      {row.modifier}
                    </a>
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.note}
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

export default Page49;
