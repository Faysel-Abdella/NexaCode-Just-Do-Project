import "./App.css";
import Page18 from "./pages/Page18";
import Page19And20 from "./pages/Page19And20";
import Page21 from "./pages/Page21";
import Page22 from "./pages/Page22";
import Page24 from "./pages/Page24";
import Page25 from "./pages/Page25";
import Page26 from "./pages/Page26";
import Page27 from "./pages/Page27";
import Page29 from "./pages/Page29";
import Page30 from "./pages/Page30";
import Page31 from "./pages/Page31";
import Page32 from "./pages/Page32";
import Page34 from "./pages/Page34";
import Page36 from "./pages/Page36";
import Page37 from "./pages/Page37";
import Page38 from "./pages/Page38";
import Page39 from "./pages/Page39";

const PageHeader = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-center items-center py-10 mt-10">
      <h2 className="font-bold text-4xl border border-gray-950 w-[600px]  py-2">
        {content}
      </h2>
    </div>
  );
};

function App() {
  return (
    <>
      <PageHeader content="Page Number 18 👇👇👇" />
      <Page18 />
      <PageHeader content="Page Number 19 and 20 👇👇👇" />
      <Page19And20 />
      <PageHeader content="Page Number 21 Modals 👇👇👇" />
      <Page21 />
      <PageHeader content="Page Number 22 👇👇👇" />
      <Page22 />
      <PageHeader content="Page Number 24 👇👇👇" />
      <Page24 />
      <PageHeader content="Page Number 25 👇👇👇" />
      <Page25 />
      <PageHeader content="Page Number 26 (Modals) 👇👇👇" />
      <Page26 />
      <PageHeader content="Page Number 27 👇👇👇" />
      <Page27 />
      <PageHeader content="Page Number 29 👇👇👇" />
      <Page29 />
      <PageHeader content="Page Number 30 👇👇👇" />
      <Page30 />
      <PageHeader content="Page Number 31 👇👇👇" />
      <Page31 />
      <PageHeader content="Page Number 32 👇👇👇" />
      <Page32 />
      <PageHeader content="Page Number 34 👇👇👇" />
      <Page34 />
      <PageHeader content="Page Number 36 👇👇👇" />
      <Page36 />
      <PageHeader content="Page Number 37 👇👇👇" />
      <Page37 />
      <PageHeader content="Page Number 38 👇👇👇" />
      <Page38 />
      <PageHeader content="Page Number 39 👇👇👇" />
      <Page39 />
    </>
  );
}

export default App;
