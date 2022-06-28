import "./styles.css";
import { useRef, useState } from "react";
import { createHmac } from "crypto";
const secret = "1Ob53LLvnUEQxDu6IZnvldLNzYp9scd8";

export default function App() {
  const [state, setState] = useState({ signature: "" });
  const inputRef = useRef();

  const findSignature = (path) => {
    // Add the first '/' to path.
    const signature = createHmac("sha256", secret).update(path).digest("hex");
    setState({ signature });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>The signature is</h2>
      <h3>{state.signature}</h3>
      <input ref={inputRef} defaultValue={"/test001.png"} />
      <button
        onClick={() => {
          findSignature(inputRef.current.value);
        }}
      >
        Get signature
      </button>
    </div>
  );
}
