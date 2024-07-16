import "./App.css";
import Page18 from "./pages/Page18";
import Page19And20 from "./pages/Page19And20";
import Page21 from "./pages/Page21";
import Page22 from "./pages/Page22";
import Page24 from "./pages/Page24";

function App() {
  return (
    <>
      <div className="flex justify-center items-center py-4 mb-10">
        <h2 className="font-bold text-4xl border border-gray-950 w-[600px]  py-2">
          Page Number 18 👇👇👇
        </h2>
      </div>
      <Page18 />
      <div className="flex justify-center items-center py-4 mb-10">
        <h2 className="font-bold text-4xl border border-gray-950 w-[600px]  py-2">
          Page Number 19 & 20 👇👇
        </h2>
      </div>
      <Page19And20 />
      <div className="flex justify-center items-center py-4 mb-10">
        <h2 className="font-bold text-4xl border border-gray-950 w-[600px]  py-2">
          Page Number 21 Modals 👇👇👇
        </h2>
      </div>
      <Page21 />
      <div className="flex justify-center items-center py-4 mb-10">
        <h2 className="font-bold text-4xl border border-gray-950 w-[600px]  py-2">
          Page Number 22 👇👇👇
        </h2>
      </div>
      <Page22 />
      <div className="flex justify-center items-center py-4 mb-10">
        <h2 className="font-bold text-4xl border border-gray-950 w-[600px]  py-2">
          Page Number 24 👇👇👇
        </h2>
      </div>
      <Page24 />
    </>
  );
}

export default App;
