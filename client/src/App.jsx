import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <div className="relative flex flex-col  w-screen h-screen justify-center">
        <div className="bg-white">
          
        </div>
        <div className="absolute bottom-0 flex">
          <div className=" text-3xl mx-12">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="">
            <button>
              <h2>send</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
