import { useState } from "./hooks";
//
function Counter() {
  const [count, setCount] = useState(0);
  // click 이벤트가 발생해도 처음 가져온 count의 값이 변화하지 않음
  // 이는 Stale Closure의 한 문제
  // 첫번째 useState 호출에서 _val를 참조하고, 다시는 변경되지 않음
  return {
    click: () => setCount(count + 1),
    render: () => console.log("Render: ", { count: count }),
  };
}
//
const C = Counter();
console.log("====================================");
console.log("STEP 2");
C.render(); // Render:  { count: 0 }
C.click();
C.render(); // Render:  { count: 0 }
console.log("====================================");
