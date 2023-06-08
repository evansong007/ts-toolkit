import { main } from "../../src/EventBus/demo";

describe('event bus', () => {
    it('demo has been defined', () => {
        main()
        expect(main).toBeDefined()
    })
})