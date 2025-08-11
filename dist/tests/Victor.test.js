import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Victor } from "../src/Victor.js";
describe('Victor', () => {
    it('Should run well', () => {
        const v = new Victor();
        v.addScalarX(10);
        assert.strictEqual(v.x, 10);
        assert.strictEqual(v.y, 0);
    });
});
