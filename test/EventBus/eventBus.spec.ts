import { main } from "../../src/EventBus/demo";

describe('demo', () => {
    it('test1', () => {
        main()
        expect("2").not.toBeNull()
    })
})