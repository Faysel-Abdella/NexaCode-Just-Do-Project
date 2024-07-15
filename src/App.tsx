import "./App.css";
import Page18 from "./pages/Page18";
import Page19 from "./pages/Page19";

function App() {
  return (
    <>
      <div className="flex justify-center items-center py-4 mb-10">
        <h2 className="font-bold text-4xl border border-gray-950 w-[500px]  py-2">
          Page Number 18 👇👇👇
        </h2>
      </div>
      <Page18 />
      <div className="flex justify-center items-center py-4 mb-10">
        <h2 className="font-bold text-4xl border border-gray-950 w-[500px]  py-2">
          Page Number 19 👇👇👇
        </h2>
      </div>
      <Page19 />
    </>
  );
}

export default App;
