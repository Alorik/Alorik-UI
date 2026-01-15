import CodeShowCase from "@/components-ui/code-showcase";


// A long dummy code snippet for testing
const dummyCode = `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// This is a long component example to test the expansion functionality.
// It needs enough lines to exceed the collapsed height.

export default function ComplexCounterComponent() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  // Effect to log updates
  useEffect(() => {
    console.log("Count updated to:", count);
    if (count > 0 && count % 5 === 0) {
      alert("Multiple of 5 reached!");
    }
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
    setHistory([...history, count + 1]);
  };

  const decrement = () => {
    setCount((prev) => prev > 0 ? prev - 1 : 0);
     if (count > 0) {
        setHistory([...history, count - 1]);
     }
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  }

  // We are getting near the bottom of the snippet now.
  // The fade effect should start appearing around here if collapsed.

  return (
    <div className="p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Complex Counter</h2>
      <div className="text-4xl font-mono mb-6">{count}</div>

      <div className="flex gap-4 mb-6">
        <button onClick={decrement} className="px-4 py-2 bg-red-100 text-red-700 rounded">
          - Decrease
        </button>
        <button onClick={increment} className="px-4 py-2 bg-green-100 text-green-700 rounded">
          + Increase
        </button>
         <button onClick={reset} className="px-4 py-2 bg-slate-100 text-slate-700 rounded">
          Reset
        </button>
      </div>

      <div>
         <h3 className="font-semibold">History:</h3>
         <p className="text-sm text-slate-500">{history.join(', ')}</p>
      </div>
    </div>
  );
}
// End of file
`;

export default function Dummy() {
  return (
    <div className=" mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Code Showcase Example</h1>

      <CodeShowCase title="CounterExample" code={dummyCode} />
    </div>
  );
}
