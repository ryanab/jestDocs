import * as something from "./something"
// @ponicode
describe("something.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            something.default(11)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            something.default(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            something.default(9)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            something.default(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            something.default(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
