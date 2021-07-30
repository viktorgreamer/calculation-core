import {Expression} from './Expression';


const exp = new Expression();

describe("check alias", () => {
    it("should exp", () => {
        expect(exp.alias).toBe('exp');
    });
});
