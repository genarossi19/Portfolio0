import "/src/index.css";
import Navbar from "./components/Navbar 01/Navbar";
import phoneme from "./assets/phoneme.png";

function App() {
  return (
    <div id="screen" className="bg-backgray min-h-screen  ">
      <Navbar />
      <div className="flex flex-row">
        <div id="phone" className=" h-auto max-h-[800px]  p-8 ">
          <img
            id="phoneimage"
            src={phoneme}
            alt="phone"
            className="max-h-[800px]  phoneimage"
          />
        </div>
        <h1 className="text-8xl text-purple-500 font-poppins font-bold ">Genaro Rossi</h1>
      </div>
    </div>
  );
}

export default App;
