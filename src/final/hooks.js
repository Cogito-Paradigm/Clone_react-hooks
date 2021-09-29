export const MyReact = (function () {
  let hooks = [];
  let currentHook = 0;
  //
  return {
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue;
      const setStateHookIndex = currentHook; // setState의 클로저를 위해!
      const setState = (newVal) => {
        hooks[setStateHookIndex] = newVal;
      };
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
      currentHook++;
    },
    render(Component) {
      const Comp = Component();
      Comp.render();
      currentHook = 0;
      return Comp;
    },
  };
})();
