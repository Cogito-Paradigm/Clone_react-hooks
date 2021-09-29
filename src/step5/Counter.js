import { MyReact } from "./hooks";
//
function Counter() {
  const [count, setCount] = MyReact.useState(0);
  const [text, setText] = MyReact.useState("foo");
  MyReact.useEffect(() => {
    console.log("effect", count, text);
  }, [count, text]);
  //
  return {
    click: () => setCount(count + 1),
    type: (txt) => setText(txt),
    noop: () => setCount(count),
    render: () => console.log("Render: ", { count, text }),
  };
}
//
let App;
console.log("====================================");
console.log("STEP 5");
App = MyReact.render(Counter); // efffect 0 foo // Render:  { count: 0, text: 'foo' }
App.click();
App = MyReact.render(Counter); // efffect 1 foo // Render:  { count: 1, text: 'foo' }
App.type("bar");
App = MyReact.render(Counter); // efffect 1 bar // Render:  { count: 1, text: 'bar' }
App.noop();
App = MyReact.render(Counter); // Render:  { count: 1, text: 'bar' }
App.click();
App = MyReact.render(Counter); // efffect 2 // Render:  { count: 2, text: 'bar'}
console.log("====================================");
