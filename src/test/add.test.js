const add = require('../add.js');

test('add', () => {
    //첫번째 인자,테스트 문자열이름, 두번째 콜백함수, 세번째 비동기
    expect(add(1,2)).toBe(3);
})