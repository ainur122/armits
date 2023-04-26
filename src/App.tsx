import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ArmitsButton } from "./components/ArmitsButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ArmitsButton />
    </div>
  );
}

export default App;
