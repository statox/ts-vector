import { test } from 'node:test';
import assert from 'node:assert';

import { Victor } from '../src/Victor.ts';

const assertCloseTo = (actual: number, expected: number, margin: number = 0.000001) => {
    const isInMargin = actual >= expected - margin && actual <= expected + margin;
    assert.strictEqual(isInMargin, true, `Expected ${actual} to be close to ${expected}`);
};

test('distance functions', () => {
    test('distanceX', () => {
        const v1 = new Victor(0, 0);
        const v2 = new Victor(10, 0);

        assert.strictEqual(v1.distanceX(v2), -10);
        assert.strictEqual(v2.distanceX(v1), 10);
    });

    test('absDistanceX', () => {
        const v1 = new Victor(0, 0);
        const v2 = new Victor(10, 0);

        assert.strictEqual(v1.absDistanceX(v2), 10);
        assert.strictEqual(v2.absDistanceX(v1), 10);
    });

    test('distanceY', () => {
        const v1 = new Victor(0, 0);
        const v2 = new Victor(0, 10);

        assert.strictEqual(v1.distanceY(v2), -10);
        assert.strictEqual(v2.distanceY(v1), 10);
    });

    test('absDistanceY', () => {
        const v1 = new Victor(0, 0);
        const v2 = new Victor(0, 10);

        assert.strictEqual(v1.absDistanceY(v2), 10);
        assert.strictEqual(v2.absDistanceY(v1), 10);
    });

    test('distance', () => {
        assert.strictEqual(new Victor(0, 0).distance(new Victor(10, 0)), 10);
        assert.strictEqual(new Victor(10, 0).distance(new Victor(0, 0)), 10);

        assert.strictEqual(new Victor(5, -5).distance(new Victor(5, 5)), 10);
        assert.strictEqual(new Victor(100, 50).distance(new Victor(200, 60)), 100.4987562112089);
    });

    test('distanceSq', () => {
        assert.strictEqual(new Victor(0, 0).distanceSq(new Victor(10, 0)), 100);
        assert.strictEqual(new Victor(10, 0).distanceSq(new Victor(0, 0)), 100);

        assert.strictEqual(new Victor(5, -5).distanceSq(new Victor(5, 5)), 100);
        assert.strictEqual(new Victor(100, 50).distanceSq(new Victor(200, 60)), 10100);
    });
});

test('Helper functions', () => {
    test('length', () => {
        assert.strictEqual(new Victor(100, 0).length(), 100);
        assert.strictEqual(new Victor(0, 100).length(), 100);
        assert.strictEqual(new Victor(100, 50).length(), 111.80339887498948);
    });

    test('toString', () => {
        assert.strictEqual(new Victor(0, 0).toString(), 'x: 0, y: 0');
    });
});

test('Rotation functions', () => {
    test('rotateTo', () => {
        const v = new Victor(10, 0);
        assert.strictEqual(v.horizontalAngle(), 0);

        v.rotateTo(Math.PI);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), Math.PI);
        assert.equal(v.x, -10);
        assert.equal(v.y, 0);

        v.rotateTo(-Math.PI / 2);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), -Math.PI / 2);
        assert.equal(v.x, 0);
        assert.equal(v.y, -10);

        v.rotateTo(Math.PI / 4);
        assert.strictEqual(v.horizontalAngle(), Math.PI / 4);
        assertCloseTo(v.x, 7.0710678);
        assertCloseTo(v.x, v.y);

        v.rotateTo((3 * Math.PI) / 4);
        assert.strictEqual(v.horizontalAngle(), (3 * Math.PI) / 4);
        assertCloseTo(v.x, -7.0710678);
        assertCloseTo(v.x, -v.y);

        v.rotateTo(-2);
        assert.strictEqual(v.horizontalAngle(), -2);
    });

    test('rotateToDeg', () => {
        const v = new Victor(10, 0);
        assert.strictEqual(v.horizontalAngle(), 0);

        v.rotateToDeg(180);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), Math.PI);
        assert.equal(v.x, -10);
        assert.equal(v.y, 0);

        v.rotateToDeg(-90);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), -Math.PI / 2);
        assert.equal(v.x, 0);
        assert.equal(v.y, -10);

        v.rotateToDeg(45);
        assert.strictEqual(v.horizontalAngle(), Math.PI / 4);
        assertCloseTo(v.x, 7.0710678);
        assertCloseTo(v.x, v.y);

        v.rotateToDeg(135);
        assert.strictEqual(v.horizontalAngle(), (3 * Math.PI) / 4);
        assertCloseTo(v.x, -7.0710678);
        assertCloseTo(v.x, -v.y);
    });

    test('rotateDeg', () => {
        const v = new Victor(10, 0);
        assert.strictEqual(v.horizontalAngleDeg(), 0);

        v.rotateDeg(180);
        assert.strictEqual(v.horizontalAngleDeg(), 180);

        v.rotateDeg(10);
        assert.strictEqual(v.horizontalAngleDeg(), -170);

        v.rotateDeg(100);
        assertCloseTo(v.horizontalAngleDeg(), -70);
    });

    test('rotate - 180', () => {
        const v = new Victor(10, 0);
        assert.strictEqual(v.horizontalAngleDeg(), 0);

        v.rotate(Math.PI);
        v.unfloat();
        assert.strictEqual(v.horizontalAngleDeg(), 180);

        v.rotate(Math.PI);
        v.unfloat();
        // Using equal instead of strictEqual because horizontalAngleDeg()
        // produces -0, strictEqual(-0, 0) throws but -0 === 0 is true
        // so we consider test good enough
        assert.equal(v.horizontalAngleDeg(), 0);

        v.rotate(Math.PI);
        v.unfloat();
        assert.strictEqual(v.horizontalAngleDeg(), 180);

        v.rotate(Math.PI / 2);
        v.unfloat();
        assert.equal(v.horizontalAngleDeg(), -90);
    });

    test('rotate - PI/3', () => {
        const v = new Victor(10, 0);
        assert.strictEqual(v.horizontalAngle(), 0);

        v.rotate(Math.PI / 3);
        assert.strictEqual(v.horizontalAngle(), Math.PI / 3);

        v.rotate(Math.PI / 3);
        assertCloseTo(v.horizontalAngle(), (2 * Math.PI) / 3);

        v.rotate(Math.PI / 3);
        assert.strictEqual(v.horizontalAngle(), Math.PI);
    });
});

test('Angle functions', () => {
    test('horizontal angle radians', () => {
        assert.strictEqual(new Victor(0, 0).horizontalAngle(), 0);

        assert.strictEqual(new Victor(10, 0).horizontalAngle(), 0);
        assert.strictEqual(new Victor(0, 10).horizontalAngle(), Math.PI / 2);
        assert.strictEqual(new Victor(-10, 0).horizontalAngle(), Math.PI);
        assert.strictEqual(new Victor(0, -10).horizontalAngle(), -Math.PI / 2);

        assert.strictEqual(new Victor(10, 10).horizontalAngle(), Math.PI / 4);
        assert.strictEqual(new Victor(-10, 10).horizontalAngle(), (3 * Math.PI) / 4);
        assert.strictEqual(new Victor(-10, -10).horizontalAngle(), (-3 * Math.PI) / 4);
        assert.strictEqual(new Victor(10, -10).horizontalAngle(), -Math.PI / 4);
    });

    test('horizontal angle degrees', () => {
        assert.strictEqual(new Victor(0, 0).horizontalAngleDeg(), 0);

        assert.strictEqual(new Victor(10, 0).horizontalAngleDeg(), 0);
        assert.strictEqual(new Victor(0, 10).horizontalAngleDeg(), 90);
        assert.strictEqual(new Victor(-10, 0).horizontalAngleDeg(), 180);
        assert.strictEqual(new Victor(0, -10).horizontalAngleDeg(), -90);

        assert.strictEqual(new Victor(10, 10).horizontalAngleDeg(), 45);
        assert.strictEqual(new Victor(-10, 10).horizontalAngleDeg(), 135);
        assert.strictEqual(new Victor(-10, -10).horizontalAngleDeg(), -135);
        assert.strictEqual(new Victor(10, -10).horizontalAngleDeg(), -45);
    });

    test('vertical angle radians', () => {
        assert.strictEqual(new Victor(0, 0).verticalAngle(), 0);

        assert.strictEqual(new Victor(0, 10).verticalAngle(), 0);
        assert.strictEqual(new Victor(-10, 0).verticalAngle(), -Math.PI / 2);
        assert.strictEqual(new Victor(0, -10).verticalAngle(), Math.PI);
        assert.strictEqual(new Victor(10, 0).verticalAngle(), Math.PI / 2);
    });

    test('vertical angle degrees', () => {
        assert.strictEqual(new Victor(0, 0).verticalAngleDeg(), 0);

        assert.strictEqual(new Victor(0, 10).verticalAngleDeg(), 0);
        assert.strictEqual(new Victor(-10, 0).verticalAngleDeg(), -90);
        assert.strictEqual(new Victor(0, -10).verticalAngleDeg(), 180);
        assert.strictEqual(new Victor(10, 0).verticalAngleDeg(), 90);
    });
});
