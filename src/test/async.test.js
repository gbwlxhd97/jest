const fetchProduct = require('../async.js');

test('fetch',() => {
    expect(fetchProduct('error')).toBe('newwork error')
})

test('sucessFetchDone', (done) => {
    expect(fetchProduct()).then(item => {
        expect(item).toEqual({item: "milk", price: 200})
        done()
    })
})

//return이 시간복잡도 better
test('sucessFetchReturn', () => {
    return fetchProduct().then(item => {
        expect(item).toEqual({item: "milk", price: 200})
    })
})

test('sucessFetchAwait', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({item:'milk',price:200})
})