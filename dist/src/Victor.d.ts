/**
 * MIT License
 *
 * Copyright (c) 2011 Max Kueng, George Crabtree
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/**
 * # Victor - A JavaScript 2D vector class with methods for common vector operations
 *
 * Taken from https://github.com/maxkueng/victor
 *
 * My plan is to temporarily use this package to port victor to typescript and when
 * it's ready redistribute the package properly. Depending how it goes, that might
 * never happen.
 */
/**
 * Constructor.
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = Victor(42, 1337);
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @return {Victor}
 * @api public
 */
export declare class Victor {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    /**
     * Adds another vector's X axis to this one
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *     var vec2 = new Victor(20, 30);
     *
     *     vec1.addX(vec2);
     *     vec1.toString();
     *     // => x:30, y:10
     *
     * @api public
     */
    addX(vec: Victor): this;
    /**
     * Adds another vector's Y axis to this one
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *     var vec2 = new Victor(20, 30);
     *
     *     vec1.addY(vec2);
     *     vec1.toString();
     *     // => x:10, y:40
     *
     * @api public
     */
    addY(vec: Victor): this;
    /**
     * Adds another vector to this one
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *     var vec2 = new Victor(20, 30);
     *
     *     vec1.add(vec2);
     *     vec1.toString();
     *     // => x:30, y:40
     *
     * @api public
     */
    add(vec: Victor): this;
    /**
     * Adds the given scalar to both vector axis
     *
     * ### Examples:
     *     var vec = new Victor(1, 2);
     *
     *     vec.addScalar(2);
     *     vec.toString();
     *     // => x: 3, y: 4
     *
     * @api public
     */
    addScalar(scalar: number): this;
    /**
     * Adds the given scalar to the X axis
     *
     * ### Examples:
     *     var vec = new Victor(1, 2);
     *
     *     vec.addScalarX(2);
     *     vec.toString();
     *     // => x: 3, y: 2
     *
     * @api public
     */
    addScalarX(scalar: number): this;
    /**
     * Adds the given scalar to the Y axis
     *
     * ### Examples:
     *     var vec = new Victor(1, 2);
     *
     *     vec.addScalarY(2);
     *     vec.toString();
     *     // => x: 1, y: 4
     *
     * @api public
     */
    addScalarY(scalar: number): this;
    /**
     * Subtracts the X axis of another vector from this one
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(20, 30);
     *
     *     vec1.subtractX(vec2);
     *     vec1.toString();
     *     // => x:80, y:50
     *
     * @api public
     */
    subtractX(vec: Victor): this;
    /**
     * Subtracts the Y axis of another vector from this one
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(20, 30);
     *
     *     vec1.subtractY(vec2);
     *     vec1.toString();
     *     // => x:100, y:20
     *
     * @api public
     */
    subtractY(vec: Victor): this;
    /**
     * Subtracts another vector from this one
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(20, 30);
     *
     *     vec1.subtract(vec2);
     *     vec1.toString();
     *     // => x:80, y:20
     *
     * @api public
     */
    subtract(vec: Victor): this;
    /**
     * Subtracts the given scalar from both axis
     *
     * ### Examples:
     *     var vec = new Victor(100, 200);
     *
     *     vec.subtractScalar(20);
     *     vec.toString();
     *     // => x: 80, y: 180
     *
     * @api public
     */
    subtractScalar(scalar: number): this;
    /**
     * Subtracts the given scalar from the X axis
     *
     * ### Examples:
     *     var vec = new Victor(100, 200);
     *
     *     vec.subtractScalarX(20);
     *     vec.toString();
     *     // => x: 80, y: 200
     *
     * @api public
     */
    subtractScalarX(scalar: number): this;
    /**
     * Subtracts the given scalar from the Y axis
     *
     * ### Examples:
     *     var vec = new Victor(100, 200);
     *
     *     vec.subtractScalarY(20);
     *     vec.toString();
     *     // => x: 100, y: 180
     *
     * @api public
     */
    subtractScalarY(scalar: number): this;
    /**
     * Divides the X axis by the x component of given vector
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *     var vec2 = new Victor(2, 0);
     *
     *     vec.divideX(vec2);
     *     vec.toString();
     *     // => x:50, y:50
     *
     * @api public
     */
    divideX(vector: Victor): this;
    /**
     * Divides the Y axis by the y component of given vector
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *     var vec2 = new Victor(0, 2);
     *
     *     vec.divideY(vec2);
     *     vec.toString();
     *     // => x:100, y:25
     *
     * @api public
     */
    divideY(vector: Victor): this;
    /**
     * Divides both vector axis by a axis values of given vector
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *     var vec2 = new Victor(2, 2);
     *
     *     vec.divide(vec2);
     *     vec.toString();
     *     // => x:50, y:25
     *
     * @api public
     */
    divide(vector: Victor): this;
    /**
     * Divides both vector axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.divideScalar(2);
     *     vec.toString();
     *     // => x:50, y:25
     *
     * @api public
     */
    divideScalar(scalar: number): this;
    /**
     * Divides the X axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.divideScalarX(2);
     *     vec.toString();
     *     // => x:50, y:50
     *
     * @api public
     */
    divideScalarX(scalar: number): this;
    /**
     * Divides the Y axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.divideScalarY(2);
     *     vec.toString();
     *     // => x:100, y:25
     *
     * @api public
     */
    divideScalarY(scalar: number): this;
    /**
     * Inverts the X axis
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.invertX();
     *     vec.toString();
     *     // => x:-100, y:50
     *
     * @api public
     */
    invertX(): this;
    /**
     * Inverts the Y axis
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.invertY();
     *     vec.toString();
     *     // => x:100, y:-50
     *
     * @api public
     */
    invertY(): this;
    /**
     * Inverts both axis
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.invert();
     *     vec.toString();
     *     // => x:-100, y:-50
     *
     * @api public
     */
    invert(): this;
    /**
     * Multiplies the X axis by X component of given vector
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *     var vec2 = new Victor(2, 0);
     *
     *     vec.multiplyX(vec2);
     *     vec.toString();
     *     // => x:200, y:50
     *
     * @api public
     */
    multiplyX(vector: Victor): this;
    /**
     * Multiplies the Y axis by Y component of given vector
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *     var vec2 = new Victor(0, 2);
     *
     *     vec.multiplyX(vec2);
     *     vec.toString();
     *     // => x:100, y:100
     *
     * @api public
     */
    multiplyY(vector: Victor): this;
    /**
     * Multiplies both vector axis by values from a given vector
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *     var vec2 = new Victor(2, 2);
     *
     *     vec.multiply(vec2);
     *     vec.toString();
     *     // => x:200, y:100
     *
     * @api public
     */
    multiply(vector: Victor): this;
    /**
     * Multiplies both vector axis by the given scalar value
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.multiplyScalar(2);
     *     vec.toString();
     *     // => x:200, y:100
     *
     * @api public
     */
    multiplyScalar(scalar: number): this;
    /**
     * Multiplies the X axis by the given scalar
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.multiplyScalarX(2);
     *     vec.toString();
     *     // => x:200, y:50
     *
     * @api public
     */
    multiplyScalarX(scalar: number): this;
    /**
     * Multiplies the Y axis by the given scalar
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.multiplyScalarY(2);
     *     vec.toString();
     *     // => x:100, y:100
     *
     * @api public
     */
    multiplyScalarY(scalar: number): this;
    /**
     * Normalize
     *
     * @api public
     */
    normalize(): this;
    norm: () => this;
    /**
     * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.limit(80, 0.9);
     *     vec.toString();
     *     // => x:90, y:50
     *
     * @param {Number} max The maximum value for both x and y axis
     * @param {Number} factor Factor by which the axis are to be multiplied with
     * @api public
     */
    limit(max: number, factor: number): this;
    /**
     * Randomizes both vector axis with a value between 2 vectors
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
     *     vec.toString();
     *     // => x:67, y:73
     *
     * @param {Victor} topLeft first vector
     * @param {Victor} bottomRight second vector
     * @api public
     */
    randomize(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Randomizes the y axis with a value between 2 vectors
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
     *     vec.toString();
     *     // => x:55, y:50
     *
     * @param {Victor} topLeft first vector
     * @param {Victor} bottomRight second vector
     * @api public
     */
    randomizeX(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Randomizes the y axis with a value between 2 vectors
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
     *     vec.toString();
     *     // => x:100, y:66
     *
     * @param {Victor} topLeft first vector
     * @param {Victor} bottomRight second vector
     * @api public
     */
    randomizeY(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Randomly randomizes either axis between 2 vectors
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
     *     vec.toString();
     *     // => x:100, y:77
     *
     * @param {Victor} topLeft first vector
     * @param {Victor} bottomRight second vector
     * @api public
     */
    randomizeAny(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Rounds both axis to an integer value
     *
     * ### Examples:
     *     var vec = new Victor(100.2, 50.9);
     *
     *     vec.unfloat();
     *     vec.toString();
     *     // => x:100, y:51
     *
     * @api public
     */
    unfloat(): this;
    /**
     * Rounds both axis to a certain precision
     *
     * ### Examples:
     *     var vec = new Victor(100.2345, 50.9876);
     *
     *     vec.toFixed(2);
     *     vec.toString();
     *     // => x:100.23, y:51.98
     *
     * @param {Number} precision (default: 8)
     * @api public
     */
    toFixed(precision?: number): this;
    /**
     * Performs a linear blend / interpolation of the X axis towards another vector
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 100);
     *     var vec2 = new Victor(200, 200);
     *
     *     vec1.mixX(vec2, 0.5);
     *     vec.toString();
     *     // => x:150, y:100
     *
     * @param {Victor} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @api public
     */
    mixX(vec: Victor, amount?: number): this;
    /**
     * Performs a linear blend / interpolation of the Y axis towards another vector
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 100);
     *     var vec2 = new Victor(200, 200);
     *
     *     vec1.mixY(vec2, 0.5);
     *     vec.toString();
     *     // => x:100, y:150
     *
     * @param {Victor} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @api public
     */
    mixY(vec: Victor, amount?: number): this;
    /**
     * Performs a linear blend / interpolation towards another vector
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 100);
     *     var vec2 = new Victor(200, 200);
     *
     *     vec1.mix(vec2, 0.5);
     *     vec.toString();
     *     // => x:150, y:150
     *
     * @param {Victor} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @api public
     */
    mix(vec: Victor, amount?: number): this;
    /**
     * Creates a clone of this vector
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *     var vec2 = vec1.clone();
     *
     *     vec2.toString();
     *     // => x:10, y:10
     *
     * @api public
     */
    clone(): Victor;
    /**
     * Copies another vector's X component in to its own
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *     var vec2 = new Victor(20, 20);
     *     var vec2 = vec1.copyX(vec1);
     *
     *     vec2.toString();
     *     // => x:20, y:10
     *
     * @api public
     */
    copyX(vec: Victor): this;
    /**
     * Copies another vector's Y component in to its own
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *     var vec2 = new Victor(20, 20);
     *     var vec2 = vec1.copyY(vec1);
     *
     *     vec2.toString();
     *     // => x:10, y:20
     *
     * @api public
     */
    copyY(vec: Victor): this;
    /**
     * Copies another vector's X and Y components in to its own
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *     var vec2 = new Victor(20, 20);
     *     var vec2 = vec1.copy(vec1);
     *
     *     vec2.toString();
     *     // => x:20, y:20
     *
     * @api public
     */
    copy(vec: Victor): this;
    /**
     * Sets the vector to zero (0,0)
     *
     * ### Examples:
     *     var vec1 = new Victor(10, 10);
     *		 var1.zero();
     *     vec1.toString();
     *     // => x:0, y:0
     *
     * @api public
     */
    zero(): this;
    /**
     * Calculates the dot product of this vector and another
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(200, 60);
     *
     *     vec1.dot(vec2);
     *     // => 23000
     *
     * @param {Victor} vec The second vector
     * @api public
     */
    dot(vec: Victor): number;
    /**
     * Calculates the cross product of this vector and another
     *
     * ### Examples:
     * var vec1 = new Victor(100, 100);
     * var vec2 = new Victor(500, 200);
     *
     * vec1.cross(vec2);
     * // => -30000
     *
     * @api public
     */
    cross(vec: Victor): number;
    /**
     * Projects a vector onto another vector, setting itself to the result.
     *
     * ### Examples:
     *     var vec = new Victor(100, 0);
     *     var vec2 = new Victor(100, 100);
     *
     *     vec.projectOnto(vec2);
     *     vec.toString();
     *     // => x:50, y:50
     *
     * @api public
     */
    projectOnto(vec: Victor): this;
    horizontalAngle(): number;
    horizontalAngleDeg(): number;
    verticalAngle(): number;
    verticalAngleDeg(): number;
    angle: () => number;
    angleDeg: () => number;
    direction: () => number;
    rotate(angle: number): this;
    rotateDeg(angle: number): this;
    rotateTo(rotation: number): this;
    rotateToDeg(rotation: number): this;
    rotateBy(rotation: number): this;
    rotateByDeg(rotation: number): this;
    /**
     * Calculates the distance of the X axis between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(200, 60);
     *
     *     vec1.distanceX(vec2);
     *     // => -100
     *
     * @param {Victor} vec The second vector
     * @api public
     */
    distanceX(vec: Victor): number;
    /**
     * Same as `distanceX()` but always returns an absolute number
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(200, 60);
     *
     *     vec1.absDistanceX(vec2);
     *     // => 100
     *
     * @param {Victor} vec The second vector
     * @api public
     */
    absDistanceX(vec: Victor): number;
    /**
     * Calculates the distance of the Y axis between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(200, 60);
     *
     *     vec1.distanceY(vec2);
     *     // => -10
     *
     * @param {Victor} vec The second vector
     * @api public
     */
    distanceY(vec: Victor): number;
    /**
     * Same as `distanceY()` but always returns an absolute number
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(200, 60);
     *
     *     vec1.distanceY(vec2);
     *     // => 10
     *
     * @param {Victor} vec The second vector
     * @api public
     */
    absDistanceY(vec: Victor): number;
    /**
     * Calculates the euclidean distance between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(200, 60);
     *
     *     vec1.distance(vec2);
     *     // => 100.4987562112089
     *
     * @param {Victor} vec The second vector
     * @api public
     */
    distance(vec: Victor): number;
    /**
     * Calculates the squared euclidean distance between this vector and another
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(200, 60);
     *
     *     vec1.distanceSq(vec2);
     *     // => 10100
     *
     * @param {Victor} vec The second vector
     * @api public
     */
    distanceSq(vec: Victor): number;
    /**
     * Calculates the length or magnitude of the vector
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.length();
     *     // => 111.80339887498948
     *
     * @return Length / Magnitude
     * @api public
     */
    length(): number;
    /**
     * Squared length / magnitude
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *
     *     vec.lengthSq();
     *     // => 12500
     *
     * @return  Length / Magnitude
     * @api public
     */
    lengthSq(): number;
    magnitude: () => number;
    /**
     * Returns true if vector is (0, 0)
     *
     * ### Examples:
     *     var vec = new Victor(100, 50);
     *     vec.zero();
     *
     *     // => true
     *
     * @api public
     */
    isZero(): boolean;
    /**
     * Returns true if this vector is the same as another
     *
     * ### Examples:
     *     var vec1 = new Victor(100, 50);
     *     var vec2 = new Victor(100, 50);
     *     vec1.isEqualTo(vec2);
     *
     *     // => true
     *
     * @api public
     */
    isEqualTo(vec: Victor): boolean;
    /**
     * # Utility Methods
     */
    /**
     * Returns an string representation of the vector
     *
     * ### Examples:
     *     var vec = new Victor(10, 20);
     *
     *     vec.toString();
     *     // => x:10, y:20
     *
     * @return
     * @api public
     */
    toString(): string;
    /**
     * Returns an array representation of the vector
     *
     * ### Examples:
     *     var vec = new Victor(10, 20);
     *
     *     vec.toArray();
     *     // => [10, 20]
     *
     * @return
     * @api public
     */
    toArray(): number[];
    /**
     * Returns an object representation of the vector
     *
     * ### Examples:
     *     var vec = new Victor(10, 20);
     *
     *     vec.toObject();
     *     // => { x: 10, y: 20 }
     *
     * @return
     * @api public
     */
    toObject(): {
        x: number;
        y: number;
    };
}
/**
 * # Static
 */
/**
 * Creates a new instance from an array
 *
 * ### Examples:
 *     var vec = Victor.fromArray([42, 21]);
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromArray
 * @param {Array} arr Array with the x and y values at index 0 and 1 respectively
 * @return The new instance
 * @api public
 */
export declare const fromArray: (arr: [number, number]) => Victor;
/**
 * Creates a new instance from an object
 *
 * ### Examples:
 *     var vec = Victor.fromObject({ x: 42, y: 21 });
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromObject
 * @param {Object} obj Object with the values for x and y
 * @return The new instance
 * @api public
 */
export declare const fromObject: (obj: {
    x?: number;
    y?: number;
}) => Victor;
