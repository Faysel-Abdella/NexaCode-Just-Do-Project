// import CustomModal from "../components/CustomModal";

import CustomSelectOptions from "../components/CustomSelectOptions";
import camera from "../assets/camera.png";
import play from "../assets/play.png";

import { utils, writeFile } from "xlsx";
import { useCallback } from "react";

const Page59 = () => {
  const pres = [
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
    { word: " Alter ", meaning: "Change" },
  ];

  const exportFile = useCallback(() => {
    /* generate worksheet from state */
    const ws = utils.json_to_sheet(pres);
    /* create workbook and append worksheet */
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    /* export to XLSX */
    writeFile(wb, "SheetJSReactAoO.xlsx");
  }, [pres]);

  //   const [confirmationModalOpen, setConfirmationModalOpen] =
  //     useState<boolean>(false);

  //   const handleOpenConfirmationModal = () => {
  //     setConfirmationModalOpen(true);
  //   };

  //   const handleCloseConfirmationModal = () => {
  //     setConfirmationModalOpen(false);
  //   };
  return (
    <section>
      <main>
        <div className="flex  border-b-2 border-gray-400 pb-3 ">
          <h2 className="text-left min-w-[150px] font-semibold text-[24px] text-gray-500 ">
            기본 정보
          </h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Language
              </h3>
              <p className="py-2 px-3">영어</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Title
              </h3>
              <p className="py-2 px-3">IELTS TEST FOR BEGINNERS</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Type
              </h3>
              <p className="py-2 px-3">SPEAKING</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Contents code
              </h3>
              <p className="py-2 px-3">EN-SPK-03</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                No. of Contents
              </h3>
              <p className="py-2 px-3">23 문장 / 단어</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Size
              </h3>
              <p className="py-2 px-3">5.3 MB</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Downloads
              </h3>
              <p className="py-2 px-3">2587</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Creation Date
              </h3>
              <p className="py-2 px-3">2022. 11. 15</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Admin ID
              </h3>
              <p className="py-2 px-3">Admin ID</p>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Department
              </h3>
              <p className="py-2 px-3">IT</p>
            </div>
          </div>
          <div className="flex flex-col gap-4"></div>
        </div>

        <div className="mt-3 flex   border-b-2 border-gray-400 pb-3">
          <h2 className="text-left min-w-[150px] font-semibold text-[24px] text-gray-500">
            상태 정보
          </h2>
          <div className="w-[70%] border border-gray-500 border-collapse">
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Status
              </h3>
              <div className="flex items-center gap-6 py-2 px-3 ">
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status01"
                    id="status01"
                    className="size-4"
                    defaultChecked
                  />
                  <label htmlFor="status01">정상</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status01"
                    id="status02"
                    className="size-4"
                  />
                  <label htmlFor="status02">정지</label>
                </div>
              </div>
            </div>
            <div className="flex border-b border-gray-500 border-collapse">
              <h3 className="py-2 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                Category
              </h3>
              <p className="py-2 px-3">LIFE</p>
            </div>

            <div className="flex items-center">
              <h3 className="py-3 px-3 min-w-[200px] text-left bg-zinc-200 border-r border-gray-500">
                메모
              </h3>
              <div className="px-3">
                <input
                  type="text"
                  className="border border-gray-600 w-[600px] py-1 px-2"
                  defaultValue="AB 대화 테스트"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex   pb-2 ">
          <h2 className="text-left min-w-[150px] font-semibold text-[24px] text-gray-500">
            콘텐츠 내용
          </h2>
          <div className="w-[70%] ">
            <div className="flex border-b border-gray-500 border-collapse">
              <CustomSelectOptions
                label="영어"
                options={["1", "2", "3"]}
                outerStyles="w-full py-2 px-3 text-[20px]"
              />
            </div>
            <div className="mt-3 flex border-b border-gray-500 border-collapse">
              <CustomSelectOptions
                label="SPEAKING PRACTICE"
                options={["1", "2", "3"]}
                outerStyles="w-full py-2 px-3 text-[20px]"
              />
            </div>

            <div className="mt-3 flex pb-1 border-b-2 border-gray-500 border-collapse">
              <input className="w-full py-2 px-3 text-[20px] border border-gray-600" />
            </div>

            <div className="flex items-center justify-between my-8">
              <img src={camera} alt="Camera " className="size-8" />
              <button>DEL</button>
            </div>

            <div className="flex items-center justify-center h-[100px] w-full border border-slate-600 bg-slate-200">
              {/* IMAGE SECTION */}
              <div>
                <p>CONTENT</p>
                <p>IMAGE</p>
              </div>
            </div>

            <div className="flex items-center gap-3 my-8">
              <h2 className="">EXCEL FILE</h2>
              <button
                className="flex items-center justify-center size-7 font-semibold border-2 border-gray-600 rounded-full"
                onClick={exportFile}
              >
                !?
              </button>
            </div>

            <div className="flex items-center justify-between mt-8 mb-2">
              <p>EXCEL FILE UPLOAD</p>
              <button>AUTO SEPARATE</button>
            </div>

            <div>
              <input className="w-full border border-gray-700 min-h-[400px]" />
            </div>

            <div className="mt-3 flex border-b border-gray-500 border-collapse">
              <CustomSelectOptions
                label="En-US-Wavenet-D"
                options={["1", "2", "3"]}
                outerStyles="w-full py-2 px-3 text-[20px]"
              />
            </div>

            <div className="flex items-center justify-end">
              <button className="flex items-center justify-center px-3 py-2 mt-6 border-2 border-gray-600 rounded-md gap-1 ">
                <img src={play} className="size-6" />
                <p>SPEAK IT</p>
              </button>
            </div>

            <div className="text-left">
              <h2 className="font-semibold text-[20px]">Share</h2>
              <div className="mt-4 mb-2">
                <input
                  name="share"
                  type="checkbox"
                  id="share01"
                  className="mr-3 size-4 cursor-pointer"
                />
                <label htmlFor="share01" className="cursor-pointer">
                  NOT Sharing
                </label>
              </div>
              <div>
                <input
                  name="share"
                  type="checkbox"
                  id="share02"
                  className="mr-3 size-4 cursor-pointer"
                />
                <label htmlFor="share02" className="cursor-pointer">
                  PUBLIC
                </label>
              </div>
            </div>

            <div className="mt-3 w-[90%] mx-auto  border-b border-gray-500 border-collapse">
              <CustomSelectOptions
                label="LIFE"
                options={["1", "2", "3"]}
                outerStyles="w-full py-2 px-3 text-[20px] "
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-3">
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>삭제</p>
          </button>
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>취소</p>
          </button>
          <button className="py-2 px-10 font-semibold rounded-md bg-zinc-200 text-gray-600">
            <p>저장</p>
          </button>
        </div>
      </main>
    </section>
  );
};

export default Page59;
