import { useState } from "./hooks";
//
function Counter() {
  const [count, setCount] = useState(0);
  //
  return {
    click: () => setCount(count() + 1),
    render: () => console.log("Render: ", { count: count() }),
  };
}
//
const C = Counter();
console.log("====================================");
console.log("STEP 1");
C.render(); // Render:  { count: 0 }
C.click();
C.render(); // Render:  { count: 1 }
console.log("====================================");
