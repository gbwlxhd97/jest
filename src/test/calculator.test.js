const calculator = require('../calculator.js');



describe('Calculator', () => {
    let cal;
    beforeEach(() => {
        cal = new calculator(); //각각독립적으로 사용할 수 있게 해주는작업
    })
    it('init with 0', () => { 
        expect(cal.value).toBe(0);        
    })
    it('sets', () => {
        cal.set(9)
        expect(cal.value).toBe(9)
    })
    it('clear', () => {
        cal.set(9);
        cal.clear();
        expect(cal.value).toBe(0);
    })
    it('add', () => {
        cal.set(1);
        cal.add(2);
        expect(cal.value).toBe(3)
    })
    it('add should throw an error value is greater than 100' ,() => {
        expect(() => { //error case
            cal.add(101)
        }).toThrow('Value can not be greater than 100')
    })
    it('subtracts', () => {
        cal.subtract(1);
        expect(cal.value).toBe(-1)
    })
    it('multiplies', () => {
        cal.set(5);
        cal.multiply(4);
        expect(cal.value).toBe(20);
    })
})

describe('divides', () => {
    let cal;
    beforeEach(() => {
        cal = new calculator(); //각각독립적으로 사용할 수 있게 해주는작업
    })
    it(' 0 / 0 === NaN', () => {
        cal.divide(0);
        expect(cal.value).toBe(NaN)
    })
    it('1 / 0 === Infinity', () => {
        cal.set(1);
        cal.divide(0);
        expect(cal.value).toBe(Infinity)
    })
})

// test('init', () => {
//     expect(cal.value).toBe(0);
// })

// test('set', () => {
//     cal.set(5)
//     expect(cal.value).toBe(5);
// })

// test('clear', () => {
//     cal.clear()
//     expect(cal.value).toBe(0);
// })

// test('add', () => {
//     cal.add(10)
//     expect(cal.value).toBe(10);
// })

// test('subtract', () => {
//     cal.subtract(5)
//     expect(cal.value).toBe(5);
// })

// test('multiply', () => {
//     cal.multiply(5)
//     expect(cal.value).toBe(25);
// })

// test('divide', () => {
//     cal.divide(5)
//     expect(cal.value).toBe(5);
// })