import { useState } from "react";

import CustomSelectOptions from "../components/CustomSelectOptions";
import CustomModal from "../components/CustomModal";

import calender from "../assets/calender.png";

import forwardArrow from "../assets/forwardArrow.svg";
import prevArrow from "../assets/prevArrow.svg";
import page22Data from "../data/tablesData/page22";

const Page22 = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(page22Data.page22Rows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = page22Data.page22Rows.slice(startIndex, endIndex);

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
      <header className="flex items-center justify-between mb-3">
        <article className="flex flex-col self-end gap-1 ">
          <div className="flex gap-2  font-semibold text-[18px] ">
            <h2>전체회원 :</h2>
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
            <div className="flex gap-2 items-center">
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

              <input
                className="w-[300px] border border-gray-950 py-[2px] px-1 focus:outline-none"
                placeholder="Name, ID, Admin ID, Note search"
              />
            </div>
          </div>

          <button className="bg-gray-950 text-white font-semibold px-2">
            SEARCH
          </button>
        </article>
      </header>

      <main className="flex flex-col justify-center items-center">
        <table>
          <thead>
            <tr className="bg-zinc-300 border-t-2 border-b-2 border-gray-600">
              <th className="text-center px-5 border-r border-gray-400">
                <button className="text-center size-5 border-[3px] border-gray-500 rounded-sm "></button>
              </th>
              {page22Data.page22Columns.map((item) => (
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
                <td className="py-2 border-r border-collapse border-gray-400  ">
                  <button className="text-center size-4 border-[2px]  border-gray-800 rounded-sm "></button>
                </td>
                <td className=" border-r border-gray-400 ">{row.number}</td>
                <td className="text-left  px-4 border-r border-collapse border-gray-400 ">
                  {row.name}
                </td>
                <td className="text-left px-3  border-r border-collapse border-gray-400 ">
                  {row.idOrEmail}
                </td>
                <td className="border-r px-3 border-collapse border-gray-400">
                  {row.connectedCountry}
                </td>
                <td className="border-r px-3 border-collapse border-gray-400">
                  {row.signUpDate}
                </td>
                <td className="border-r px-3 border-collapse border-gray-400">
                  {row.paidMember}
                </td>
                <td className="border-r px-3 border-collapse border-gray-400">
                  {row.lastAccess}
                </td>
                <td className="border-r px-3 border-collapse border-gray-400">
                  {row.adminId}
                </td>
                <td className="border-r w-[250px] text-left px-2 border-collapse border-gray-400">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center gap-9 self-start mt-3">
          <button
            className="bg-zinc-200 py-1 px-2 rounded-md font-semibold"
            onClick={handleOpenConfirmationModal}
          >
            완전 삭제
          </button>
          <button className="bg-gray-500 py-1 px-2 rounded-md font-semibold text-white">
            엑셀 다운로드
          </button>
        </div>

        <div className=" flex items-center justify-center mb-6 h-[60px]">
          <button
            className={`mr-2 p-2 ${
              currentPage === 1 ? "cursor-not-allowed" : " hover:bg-gray-300"
            } text-white  rounded-full`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={prevArrow} alt="something" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`mr-2 p-0 ${
                currentPage === page ? "text-black" : "text-gray-400"
              } mx-2 text-medium font-medium  rounded-full`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={`ml-2 p-2 ${
              currentPage === totalPages
                ? " cursor-not-allowed"
                : " hover:bg-gray-300"
            } text-white rounded-full`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={forwardArrow} alt="arrow" />
          </button>
        </div>
      </main>

      <CustomModal
        isOpen={confirmationModalOpen}
        onClose={handleCloseConfirmationModal}
      >
        <section className="w-[400px] py-5 px-5 border-2 border-gray-600 shadow-lg shadow-gray-700 text-black">
          <div className=" border-b-2 border-gray-400 ">
            <div className="flex justify-between items-center px-2">
              <h3>완전 삭제</h3>
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
                <p className="text-center mt-3">완전 삭제 시 해당 데이터가</p>
                <p className="text-center">모두 삭제되며 되돌릴 수 없습니다.</p>
                <p className="text-center mt-6">삭제 하시겠습니까?</p>
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
                    ID 삭제
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

export default Page22;
