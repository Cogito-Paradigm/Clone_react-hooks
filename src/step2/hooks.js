export function useState(initialValue) {
  // 지역 변수
  var _val = initialValue;
  // 클로저, 내부함수
  function setState(newVal) {
    _val = newVal;
  }
  // React의 useState와 같이 첫번째 반환값을 함수가 아닌 변수로 수정
  // _val를 함수로 감싸지 않고 그대로 노출
  return [_val, setState];
}
