
import { useState } from "react";

function App(){

  const [color, setColor] = useState("red")
  return(
    <>
      <div className=" w-full h-screen" style={{ backgroundColor: color}}>
        <div className="mx-10 bottom-10 bg-white px-4 py-3 rounded-lg shadow-lg">
          <button
            className="m-4 px-6 py-3 bg-red-500 text-white outline-none rounded-lg shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="m-4 px-6 py-3 bg-green-600 text-white outline-none rounded-lg shadow-lg"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="m-4 px-6 py-3 bg-blue-600 text-white outline-none rounded-lg shadow-lg"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="m-4 px-6 py-3 bg-orange-600 text-white outline-none rounded-lg shadow-lg"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="m-4 px-6 py-3 bg-pink-600 text-white outline-none rounded-lg shadow-lg"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="m-4 px-6 py-3 bg-violet-600 text-white outline-none rounded-lg shadow-lg"
            onClick={() => setColor("violet")}
          >
            Violet
          </button>
        </div>
      </div>
    </>
  )
}

export default App