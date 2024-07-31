import { useState } from "react";
import copyBlack from "../assets/copy-black.svg";
import copyWhite from "../assets/copy-white.svg";

import languagesOption from "../data/languages";

const Card = ({ order, onDelete }: { order: number; onDelete: () => void }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("KR");
  const [openLanguageOptions, setOpenLanguageOptions] =
    useState<boolean>(false);

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <section className="mt-10 relative">
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
          <button className="absolute right-3 text-gray-300 top-[50%] translate-y-[-50%]">
            EN
          </button>
        </div>
        <div className="relative flex items-center gap-4 mt-5">
          <img src={copyBlack} alt="copy icon" className="size-5" />
          <input
            type="text"
            className="min-w-[93%] pb-2 border-b-2 border-gray-400 placeholder:font-semibold placeholder:text-lg focus:outline-none"
            placeholder="TEXT (MAX 100Byte)"
          />
          <button
            className="absolute right-3 text-gray-800 top-[50%] translate-y-[-50%]"
            onClick={() => setOpenLanguageOptions(!openLanguageOptions)}
          >
            {selectedLanguage}
          </button>
        </div>
      </main>

      {openLanguageOptions && (
        <aside className="absolute right-3 top-[60%] bg-slate-300 max-h-[150px] overflow-auto shadow-md shadow-zinc-600 z-30 rounded-t-lg">
          <ul>
            {languagesOption.map((language) => (
              <li
                key={language.code}
                className="cursor-pointer text-left px-2"
                onClick={() => {
                  handleSelectLanguage(language.code);
                  setOpenLanguageOptions(false);
                }}
              >
                {language.name}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </section>
  );
};

export default Card;
