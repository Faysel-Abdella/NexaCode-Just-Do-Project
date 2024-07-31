// import CustomModal from "../components/CustomModal";

import CustomSelectOptions from "../components/CustomSelectOptions";
import camera from "../assets/camera.png";
import play from "../assets/play.png";
import copyBlack from "../assets/copy-black.svg";
import copyWhite from "../assets/copy-white.svg";
import add from "../assets/add.svg";

import { utils, writeFile } from "xlsx";
import { useCallback, useState } from "react";

const Card = ({ order, onDelete }: { order: number; onDelete: () => void }) => {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <section className="mt-7">
      <header className="flex justify-between items-center">
        <h2 className="font-semibold">CARD {order + 1}</h2>
        <button className="font-semibold" onClick={handleDelete}>
          DEL
        </button>
      </header>
      <main className="border-2 border-gray-400 rounded-lg p-2 pt-6 my-2">
        <div className="relative flex items-center gap-4">
          <img src={copyWhite} alt="copy icon" className="size-5" />
          <input
            type="text"
            className="min-w-[93%] pb-2 border-b-2 border-gray-400 placeholder:font-semibold placeholder:text-lg focus:outline-none"
            placeholder="TEXT (MAX 100Byte)"
          />
          <span className="absolute right-3 text-gray-300 top-[50%] translate-y-[-50%]">
            EN
          </span>
        </div>
        <div className="relative flex items-center gap-4 mt-5">
          <img src={copyBlack} alt="copy icon" className="size-5" />
          <input
            type="text"
            className="min-w-[93%] pb-2 border-b-2 border-gray-400 placeholder:font-semibold placeholder:text-lg focus:outline-none"
            placeholder="TEXT (MAX 100Byte)"
          />
          <span className="absolute right-3 text-gray-800 top-[50%] translate-y-[-50%]">
            KR
          </span>
        </div>
      </main>
    </section>
  );
};

const Page59 = () => {
  const [selectedOption, setSelectedOption] =
    useState<string>("SPEAKING PRACTICE");
  const [cards, setCards] = useState([...Array(2).keys()]);

  const deleteCard = (index: number) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

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
    const ws = utils.json_to_sheet(pres);

    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");

    writeFile(wb, "REPEAT_Voca Content.xlsx.xlsx");
  }, [pres]);

  return (
    <section>
      <main>
        <div className="flex w-full">
          <div className="w-[50%] ">
            <div className="flex  border-b-2 border-gray-400 pb-3 ">
              <h2 className="text-left min-w-[120px] font-semibold text-[24px] text-gray-500 ">
                기본 정보
              </h2>
              <div className="w-full border border-gray-500 border-collapse">
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Language
                  </h3>
                  <p className="py-2 px-3">영어</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Title
                  </h3>
                  <p className="py-2 px-3">IELTS TEST FOR BEGINNERS</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Type
                  </h3>
                  <p className="py-2 px-3">SPEAKING</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Contents code
                  </h3>
                  <p className="py-2 px-3">EN-SPK-03</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    No. of Contents
                  </h3>
                  <p className="py-2 px-3">23 문장 / 단어</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Size
                  </h3>
                  <p className="py-2 px-3">5.3 MB</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Downloads
                  </h3>
                  <p className="py-2 px-3">2587</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Creation Date
                  </h3>
                  <p className="py-2 px-3">2022. 11. 15</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Admin ID
                  </h3>
                  <p className="py-2 px-3">Admin ID</p>
                </div>
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Department
                  </h3>
                  <p className="py-2 px-3">IT</p>
                </div>
              </div>
              <div className="flex flex-col gap-4"></div>
            </div>

            <div className="mt-3 flex ">
              <h2 className="text-left min-w-[120px] font-semibold text-[24px] text-gray-500">
                상태 정보
              </h2>
              <div className="w-full border border-gray-500 border-collapse">
                <div className="flex border-b border-gray-500 border-collapse">
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
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
                  <h3 className="py-2 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    Category
                  </h3>
                  <p className="py-2 px-3">LIFE</p>
                </div>

                <div className="flex items-center w-full">
                  <h3 className="py-3 px-3 min-w-[150px] text-left bg-zinc-200 border-r border-gray-500">
                    메모
                  </h3>
                  <div className="px-3">
                    <input
                      type="text"
                      className="border border-gray-600 w-full py-1 px-2"
                      defaultValue="AB 대화 테스트"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-500 w-[2px] flex-auto mx-8"></div>

          <div className="flex  w-[50%] ">
            <h2 className="text-left min-w-[150px] font-semibold text-[24px] text-gray-500">
              콘텐츠 내용
            </h2>
            <div className="w-full">
              <div className="flex border-b border-gray-500 border-collapse">
                <CustomSelectOptions
                  label="영어"
                  options={["1", "2", "3"]}
                  outerStyles="w-full py-2 px-3 text-[20px]"
                />
              </div>
              <div className="mt-3 flex border-b border-gray-500 border-collapse">
                <CustomSelectOptions
                  // label="SPEAKING PRACTICE"
                  options={["SPEAKING PRACTICE", "VOCABULARY CARD"]}
                  outerStyles="w-full py-2 px-3 text-[20px]"
                  setSelectedOption={handleSelectedOption}
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
                <button>EXCEL FILE UPLOAD</button>
                {selectedOption === "practice" && (
                  <button>AUTO SEPARATE</button>
                )}
              </div>

              {selectedOption === "SPEAKING PRACTICE" && (
                <>
                  <div>
                    <textarea className="w-full border border-gray-700 min-h-[400px] p-3" />
                  </div>
                  <div className="mt-3 flex border-b border-gray-500 border-collapse">
                    <CustomSelectOptions
                      label="En-US-Wavenet-D"
                      options={["1", "2", "3"]}
                      outerStyles="w-full py-2 px-3 text-[20px]"
                    />
                  </div>
                </>
              )}

              {selectedOption === "VOCABULARY CARD" && (
                <section>
                  {cards.map((_, index) => {
                    return (
                      <Card
                        key={index}
                        order={index}
                        onDelete={() => deleteCard(index)}
                      />
                    );
                  })}
                </section>
              )}

              <div className="flex items-center justify-end">
                <button className="flex items-center justify-center px-3 py-2 mt-6 border-2 border-gray-600 rounded-md gap-1 ">
                  <img src={play} className="size-6" />
                  <p>SPEAK IT</p>
                </button>
              </div>

              {selectedOption === "VOCABULARY CARD" && (
                <div className="flex justify-center items-center">
                  <button
                    className="flex items-center justify-center px-20 py-2 mt-6 border-2 border-gray-600 rounded-md gap-1 "
                    onClick={() =>
                      setCards((prevCards) => [...prevCards, prevCards.length])
                    }
                  >
                    <img src={add} className="size-8 scale-125" />
                  </button>
                </div>
              )}

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

              <div className="flex items-center justify-center gap-5 mt-16">
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
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page59;
