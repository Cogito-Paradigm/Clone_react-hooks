import { MyReact } from "./hooks";
//
function Counter() {
  // Recat Hook과 같이 count를 함수가 아닌 변수로 사용
  const [count, setCount] = MyReact.useState(0);
  MyReact.useEffect(() => {
    console.log("effect", count);
  }, [count]);
  //
  return {
    click: () => setCount(count + 1),
    noop: () => setCount(count),
    render: () => console.log("Render: ", { count: count }),
  };
}
//
let App;
console.log("====================================");
console.log("STEP 4");
App = MyReact.render(Counter); // efffect 0 // Render:  { count: 0 }
App.click();
App = MyReact.render(Counter); // efffect 1 // Render:  { count: 1 }
App.noop();
App = MyReact.render(Counter); // Render:  { count: 1 }
App.click();
App = MyReact.render(Counter); // efffect 2 // Render:  { count: 2 }
console.log("====================================");
