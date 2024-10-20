import { sum } from "../../../sum";

test("Sum method tested", ()=>{
    const result= sum(2,4);
    expect(result).toBe(6);
})