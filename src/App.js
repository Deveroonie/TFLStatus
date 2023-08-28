import "./App.css";
import TubeStatus from "./components/TubeStatus";
import DLRStatus from "./components/DLRStatus";
import ElizabethLineStatus from "./components/ElizabethLineStatus";
import OvergroundStatus from "./components/OvergroundStatus";
import FerryStatus from "./components/FerryStatus";

function App() {


  return (
    <div>
      <div className="container mx-auto p-8 m-10">
        <h1 className="text-white text-center text-3xl">TfL Network Status (Underground, DLR, ELizabeth Line, Overground & Ferries)</h1>
        <br />
    <TubeStatus></TubeStatus>
    <DLRStatus></DLRStatus>
    <ElizabethLineStatus></ElizabethLineStatus>
    <OvergroundStatus></OvergroundStatus>
    <FerryStatus></FerryStatus>
    </div>
    </div>
  );
 }

export default App;
//<div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
//<h3
//className="text-left hfont text-lg">
//    Frontend Development&nbsp;&nbsp;
//</h3>
//</div>