export function useState(initialValue) {
  // 지역 변수
  var _val = initialValue;
  // 클로저, 내부함수
  function state() {
    return _val;
  }
  // 클로저, 내부함수
  function setState(newVal) {
    _val = newVal;
  }
  // 내부 함수 노출
  return [state, setState];
}
