const request =  require('supertest')
const app = require('./app')
describe('is_prime',()=>{
    test('true_when_x_is_17',async ()=>{
        const response = await request(app).get("/is_prime/17").send()
        console.log(response.json)
        expect(response.status).toBe(200)
        expect(response.type).toEqual('application/json')
        expect(response.body.result).toBe(true)
    })
    test('false_when_x_is_36',async ()=>{
        const response = await request(app).get("/is_prime/36").send()
        console.log(response.json)
        expect(response.status).toBe(200)
        expect(response.type).toEqual('application/json')
        expect(response.body.result).toBe(false)
    })
    test('true_when_x_is_13219',async ()=>{
        const response = await request(app).get("/is_prime/13219").send()
        console.log(response.json)
        expect(response.status).toBe(200)
        expect(response.type).toEqual('application/json')
        expect(response.body.result).toBe(true)
    })
})
