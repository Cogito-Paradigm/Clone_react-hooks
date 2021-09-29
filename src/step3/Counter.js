import { MyReact } from "./hooks";
//
function Counter() {
  // Recat Hook과 같이 count를 함수가 아닌 변수로 사용
  const [count, setCount] = MyReact.useState(0);
  //
  return {
    click: () => setCount(count + 1),
    render: () => console.log("Render: ", { count: count }),
  };
}
//
let App;
console.log("====================================");
console.log("STEP 3");
App = MyReact.render(Counter); // Render:  { count: 0 }
App.click();
App = MyReact.render(Counter); // Render:  { count: 1 }
console.log("====================================");
