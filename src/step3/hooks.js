// 모듈패턴으로 전환
export const MyReact = (function () {
  let _val; // 모듈 스코프안에 state를 선언
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
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
  };
})();
