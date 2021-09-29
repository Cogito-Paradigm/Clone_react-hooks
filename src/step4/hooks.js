// 잘못 구현된 싱글톤 형태 (useState와 useEffect가 각각 하나 이상이 존재하면 버그가 발생)
export const MyReact = (function () {
  let _val; // 모듈 스코프안에 state를 선언
  let _deps; // 의존성을 추적하기 위해(의존성이 변경될 때 useEffect가 다시 실행되므로), 이를 추적하는 별도의 변수를 추가
  //
  return {
    useState(initialValue) {
      // 스코프의 _val 또는 초기값을 할당
      _val = _val || initialValue;
      // 클로저, 내부함수
      function setState(newVal) {
        _val = newVal;
      }
      return [_val, setState];
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray; // 의존성배열 유무
      const hasChagedDeps = _deps // 모듈 스코프에 저장된 기존 depandancy array의 내용과 같은지 비교
        ? !depArray.every((el, i) => el === _deps[i])
        : true;
      // depandancy array가 없으면 매번 실행
      // 저장된 _deps와 다른 depArray가 넘어오면 실행
      if (hasNoDeps || hasChagedDeps) {
        callback();
        _deps = depArray;
      }
    },
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
  };
})();
