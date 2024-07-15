import CustomSelectOptions from "../components/CustomSelectOptions";

import calender from "../assets/calender.png";

const Page18 = () => {
  return (
    <section>
      <header className="flex items-center justify-between">
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
            <div className="flex gap-2 items-center">
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
              <input className="border border-gray-950 py-[2px] px-1 focus:outline-none" />
            </div>
          </div>

          <button className="bg-gray-950 text-white font-semibold px-2">
            SEARCH
          </button>
        </article>
      </header>
    </section>
  );
};

export default Page18;
