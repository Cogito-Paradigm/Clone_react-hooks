export const MyReact = (function () {
  // 기존 잘못 구현된 싱글톤 형태를 해소하기 위해 배열로 변견
  let hooks = [];
  let currentHook = 0;
  //
  return {
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue; // type: any
      const setStateHookIndex = currentHook; // setState의 클로저를 위해!
      const setState = (newVal) => {
        // 아래 코드로 클로저를 사용하지 않으면, 최초의 할당된 hooks[0]만 바라보게 되는
        // Stale Closure의 한 문제를 일으킴
        // hooks[currentHook] = newVal;
        // 따라서 다음과 같이 클로저 사용
        hooks[setStateHookIndex] = newVal;
      };
      // return 후 이 Hook에 대한 작업 완료로 다음 currentHook으로 이동
      return [hooks[currentHook++], setState];
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      const deps = hooks[currentHook];
      const hasChagedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChagedDeps) {
        callback();
        hooks[currentHook] = depArray;
      }
      currentHook++; // 이 Hook에 대한 작업 완료
    },
    render(Component) {
      const Comp = Component(); // effect들이 실행
      Comp.render();
      currentHook = 0; // 다음 render가 되면 다시 0부터 실행되어야 하기때문에 초기화
      return Comp;
    },
  };
})();
