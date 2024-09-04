import assert from "assert";
import test, { it, describe } from "node:test";

import { add } from "./sample.js";

describe("function add(1,2)", () => {
    test("return 3, the sum both numbers", () => {
        assert.equal(add(1, 2), 3);
    });
});
