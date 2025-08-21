import "./App.css";
import Body from "./components/Body";
// import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Body />
      {/* <h1>hiiii</h1> */}
      <Toaster />
    </div>
  );
}

export default App;
