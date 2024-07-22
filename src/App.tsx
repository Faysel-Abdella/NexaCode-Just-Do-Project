import "./App.css";
import Page18 from "./pages/Page18";
import Page19And20 from "./pages/Page19And20";

import Page22 from "./pages/Page22";
import Page24 from "./pages/Page24";
import Page25 from "./pages/Page25";
import Page27 from "./pages/Page27";
import Page29 from "./pages/Page29";
import Page30 from "./pages/Page30";
import Page32 from "./pages/Page32";
import Page34 from "./pages/Page34";
import Page36 from "./pages/Page36";

import Page40 from "./pages/Page40";
import Page42 from "./pages/Page42";
import Page43 from "./pages/Page43";
import Page44 from "./pages/Page44";
import Page45 from "./pages/Page45";
import Page46 from "./pages/Page46";
import Page48 from "./pages/Page48";
import Page49 from "./pages/Page49";
import Page50 from "./pages/Page50";
import Page51 from "./pages/Page51";
import Page54 from "./pages/Page54";
import Page55 from "./pages/Page55";
import Page56 from "./pages/Page56";
import Page58 from "./pages/Page58";
import Page59 from "./pages/Page59";

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

      <PageHeader content="Page Number 22 👇👇👇" />
      <Page22 />
      <PageHeader content="Page Number 24 👇👇👇" />
      <Page24 />
      <PageHeader content="Page Number 25 👇👇👇" />
      <Page25 />

      <PageHeader content="Page Number 27 👇👇👇" />
      <Page27 />
      <PageHeader content="Page Number 29 👇👇👇" />
      <Page29 />
      <PageHeader content="Page Number 30 👇👇👇" />
      <Page30 />
      <PageHeader content="Page Number 32 👇👇👇" />
      <Page32 />
      <PageHeader content="Page Number 34 👇👇👇" />
      <Page34 />
      <PageHeader content="Page Number 36 👇👇👇" />
      <Page36 />

      <PageHeader content="Page Number 40 👇👇👇" />
      <Page40 />
      <PageHeader content="Page Number 42 👇👇👇" />
      <Page42 />
      <PageHeader content="Page Number 43 👇👇👇" />
      <Page43 />
      <PageHeader content="Page Number 44 👇👇👇" />
      <Page44 />
      <PageHeader content="Page Number 45 👇👇👇" />
      <Page45 />
      <PageHeader content="Page Number 46 👇👇👇" />
      <Page46 />
      <PageHeader content="Page Number 48 👇👇👇" />
      <Page48 />
      <PageHeader content="Page Number 49 👇👇👇" />
      <Page49 />
      <PageHeader content="Page Number 50 👇👇👇" />
      <Page50 />
      <PageHeader content="Page Number 51 & 52 👇👇👇" />
      <Page51 />
      <PageHeader content="Page Number 54 👇👇👇" />
      <Page54 />
      <PageHeader content="Page Number 55 👇👇👇" />
      <Page55 />
      <PageHeader content="Page Number 56 👇👇👇" />
      <Page56 />
      <PageHeader content="Page Number 58 👇👇👇" />
      <Page58 />
      <PageHeader content="Page Number 59 👇👇👇" />
      <Page59 />
    </>
  );
}

export default App;
