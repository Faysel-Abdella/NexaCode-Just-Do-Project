import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomSelectOptions from "../components/CustomSelectOptions";
import CustomModal from "../components/CustomModal";
import NewRegisterModal from "./Page56";

import calender from "../assets/calender.png";

import page54Data from "../data/tablesData/page54";

const Page54 = () => {
  const [isArrayReverse, setIsArrayReverse] = useState<boolean>(false);

  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isNewRegisterModalOpen, setIsNewRegisterModalOpen] =
    useState<boolean>(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page54Data.page54Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page54Data.page54Rows.slice(startIndex, endIndex);

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
    page54Data.page54Rows.reverse();
  };

  const handleOpenNewRegisterModal = () => {
    setIsNewRegisterModalOpen(true);
  };

  const handleCloseNewRegisterModal = () => {
    setIsNewRegisterModalOpen(false);
  };

  return (
    <section>
      <header className="flex items-center justify-end mb-3">
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
                label="Authority"
                options={["Admin", "Super Admin", "Contents Creator"]}
                outerStyles="w-[120px]"
              />

              <input
                className="w-[350px] border border-gray-950 py-[2px] px-1 focus:outline-none"
                placeholder="Name, ID(email), Phone, Contact, Note"
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
                {page54Data.page54Columns.map((item) => (
                  <th
                    key={item}
                    className={`text-center border-r border-gray-400 px-3`}
                  >
                    <button
                      className={`text-nowrap`}
                      onClick={() => {
                        if (item === "No.") {
                          handleSortData();
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
                  <td className="py-2 border-r border-gray-400 ">
                    {row.number}
                  </td>

                  <td className="text-center text-nowrap  px-3  border-r border-collapse border-gray-400 ">
                    {row.department}
                  </td>

                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.name}
                  </td>

                  <td className="px-3 border-r border-collapse border-gray-400">
                    <a className="text-blue-600 underline underline-offset-1 cursor-pointer">
                      {row.idEmail}
                    </a>
                  </td>

                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.phone}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.contact}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.status}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.authority}
                  </td>
                  <td className="px-3 border-r border-collapse border-gray-400">
                    {row.modifiedDate}
                  </td>
                  <td className="text-left px-3 border-r border-collapse border-gray-400">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 py-1 px-6 rounded-md font-semibold text-white"
            onClick={handleOpenConfirmationModal}
          >
            엑셀 다운로드
          </button>
          <button
            className="bg-gray-500 py-1 px-6 rounded-md font-semibold text-white"
            onClick={handleOpenNewRegisterModal}
          >
            새 관리자 등록
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

      <NewRegisterModal
        openTheModal={isNewRegisterModalOpen}
        handleCloseModal={handleCloseNewRegisterModal}
      />
    </section>
  );
};

export default Page54;
