/*!
  2D Transformation MatrixLT v2.7.5 LT
  (c) Epistemex.com 2014-2018
  License: MIT
*/

/**
 * MatrixLT is a stripped down version containing only the most essential
 * methods for the purpose of reducing size. DOM sync support is not included
 * in this version.
 *
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas 2D context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * To synchronize a DOM element you can use [`toCSS()`]{@link MatrixLT#toCSS} or [`toCSS3D()`]{@link MatrixLT#toCSS3D}.
 * together with for example the `style.transform` property.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with MatrixLT
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D} [context] - set or get current synchronized 2D context
 * @constructor
 * @license MIT license (header required)
 * @copyright Epistemex.com 2014-2018
 */
function MatrixLT(context) {

  var me = this, _el;
  me._t = me.transform;

  me.a = me.d = 1;
  me.b = me.c = me.e = me.f = 0;

  // sync context
  if (context)
    (me.context = context).setTransform(1, 0, 0, 1, 0, 0);

}

/**
 * Create and transform a new matrix based on given matrix values, or
 * provide SVGMatrix or a (2D) DOMMatrix, WebKitCSSMatrix or another
 * instance of a generic matrix.
 *
 * @example
 *
 * var m = MatrixLT.from(1, 0.2, 0, 2, 120, 97);
 * var m = MatrixLT.from(domMatrix, ctx);
 * var m = MatrixLT.from(svgMatrix);
 * var m = MatrixLT.from(matrix);
 *
 * @param {*} a - number representing a (scale x) in [a-f], or a Matrix object containing properties a-f.
 * @param {*} [b] - b property (shear y) if a is not a matrix object, or optional canvas 2D context.
 * If vector is input this will be pre-translate for x.
 * @param {number} [c] - c property (shear x)
 * @param {number} [d] - d property (scale y)
 * @param {number} [e] - e property (translate x)
 * @param {number} [f] - f property (translate y)
 * @param {CanvasRenderingContext2D} [context] - optional canvas context to synchronize
 * @returns {MatrixLT} - new MatrixLT instance
 * @static
 */
MatrixLT.from = function(a, b, c, d, e, f, context) {

  var m = new MatrixLT(context), scale, dist, q;

  if (typeof a === "number")
    m.setTransform(a, b, c, d, e, f);

  else {
    if (typeof a.is2D === "boolean" && !a.is2D) throw "Cannot use 3D DOMMatrix.";
    if (b) m.context = b;
    m.multiply(a)
  }

  return m
};

MatrixLT.prototype = {

  /**
   * Short-hand to reset current matrix to an identity matrix.
   * @returns {MatrixLT}
   */
  reset: function() {
    return this.setTransform(1, 0, 0, 1, 0, 0)
  },

  /**
   * Rotates current matrix by angle (accumulative).
   * @param {number} angle - angle in radians
   * @returns {MatrixLT}
   */
  rotate: function(angle) {
    var
      cos = Math.cos(angle),
      sin = Math.sin(angle);
    return this._t(cos, sin, -sin, cos, 0, 0)
  },

  /**
   * Converts a vector given as `x` and `y` to angle, and
   * rotates (accumulative). x can instead contain an object with
   * properties x and y and if so, y parameter will be ignored.
   * @param {number|*} x
   * @param {number} [y]
   * @returns {MatrixLT}
   */
  rotateFromVector: function(x, y) {
    return this.rotate(typeof x === "number" ? Math.atan2(y, x) : Math.atan2(x.y, x.x))
  },

  /**
   * Scales current matrix accumulative.
   * @param {number} sx - scale factor x (1 does nothing)
   * @param {number} sy - scale factor y (1 does nothing)
   * @returns {MatrixLT}
   */
  scale: function(sx, sy) {
    return this._t(sx, 0, 0, sy, 0, 0)
  },

  /**
   * Apply shear to the current matrix accumulative.
   * @param {number} sx - amount of shear for x
   * @param {number} sy - amount of shear for y
   * @returns {MatrixLT}
   */
  shear: function(sx, sy) {
    return this._t(1, sy, sx, 1, 0, 0)
  },

  /**
   * Apply skew to the current matrix accumulative. Angles in radians.
   * Also see [`skewDeg()`]{@link MatrixLT#skewDeg}.
   * @param {number} ax - angle of skew for x
   * @param {number} ay - angle of skew for y
   * @returns {MatrixLT}
   */
  skew: function(ax, ay) {
    return this.shear(Math.tan(ax), Math.tan(ay))
  },

  /**
   * Set current matrix to new absolute matrix.
   * @param {number} a - scale x
   * @param {number} b - shear y
   * @param {number} c - shear x
   * @param {number} d - scale y
   * @param {number} e - translate x
   * @param {number} f - translate y
   * @returns {MatrixLT}
   */
  setTransform: function(a, b, c, d, e, f) {
    var me = this;
    me.a = a;
    me.b = b;
    me.c = c;
    me.d = d;
    me.e = e;
    me.f = f;
    return me._x()
  },

  /**
   * Translate current matrix accumulative.
   * @param {number} tx - translation for x
   * @param {number} ty - translation for y
   * @returns {MatrixLT}
   */
  translate: function(tx, ty) {
    return this._t(1, 0, 0, 1, tx, ty)
  },

  /**
   * Multiplies current matrix with new matrix values. Also see [`multiply()`]{@link MatrixLT#multiply}.
   *
   * @param {number} a2 - scale x
   * @param {number} b2 - skew y
   * @param {number} c2 - skew x
   * @param {number} d2 - scale y
   * @param {number} e2 - translate x
   * @param {number} f2 - translate y
   * @returns {MatrixLT}
   */
  transform: function(a2, b2, c2, d2, e2, f2) {

    var
      me = this,
      a1 = me.a,
      b1 = me.b,
      c1 = me.c,
      d1 = me.d,
      e1 = me.e,
      f1 = me.f;

    /* matrix column order is:
     *   a c e
     *   b d f
     *   0 0 1
     */
    me.a = a1 * a2 + c1 * b2;
    me.b = b1 * a2 + d1 * b2;
    me.c = a1 * c2 + c1 * d2;
    me.d = b1 * c2 + d1 * d2;
    me.e = a1 * e2 + c1 * f2 + e1;
    me.f = b1 * e2 + d1 * f2 + f1;

    return me._x()
  },

  /**
   * Multiplies current matrix with source matrix.
   * @param {MatrixLT|Matrix|DOMMatrix|SVGMatrix} m - source matrix to multiply with.
   * @returns {MatrixLT}
   */
  multiply: function(m) {
    return this._t(m.a, m.b, m.c, m.d, m.e, m.f)
  },

  /**
   * Get an inverse matrix of current matrix. The method returns a new
   * matrix with values you need to use to get to an identity matrix.
   * Context from parent matrix is not applied to the returned matrix.
   *
   * @param {boolean} [cloneContext=false] - clone current context to resulting matrix
   * @throws Exception is input matrix is not invertible
   * @returns {MatrixLT} - new MatrixLT instance
   */
  inverse: function(cloneContext) {

    var
      me = this,
      m  = new MatrixLT(cloneContext ? me.context : null),
      dt = me.determinant();

    if (dt === 0) throw "Matrix not invertible.";

    m.a = me.d / dt;
    m.b = -me.b / dt;
    m.c = -me.c / dt;
    m.d = me.a / dt;
    m.e = (me.c * me.f - me.d * me.e) / dt;
    m.f = -(me.a * me.f - me.b * me.e) / dt;

    return m
  },

  /**
   * Decompose the current matrix into simple transforms using QR.
   *
   * @returns {*} - an object containing current decomposed values (translate, rotation, scale, skew)
   * @see {@link https://en.wikipedia.org/wiki/QR_decomposition|More on QR decomposition}
   */
  decompose: function() {

    var
      me        = this,
      a         = me.a,
      b         = me.b,
      c         = me.c,
      d         = me.d,
      acos      = Math.acos,
      atan      = Math.atan,
      sqrt      = Math.sqrt,
      pi        = Math.PI,

      translate = {x: me.e, y: me.f},
      rotation  = 0,
      scale     = {x: 1, y: 1},
      skew      = {x: 0, y: 0},

      determ    = a * d - b * c,	// determinant(), skip DRY here...
      r, s;

    // Apply the QR-like decomposition.
    if (a || b) {
      r = sqrt(a * a + b * b);
      rotation = b > 0 ? acos(a / r) : -acos(a / r);
      scale = {x: r, y: determ / r};
      skew.x = atan((a * c + b * d) / (r * r));
    }
    else if (c || d) {
      s = sqrt(c * c + d * d);
      rotation = pi * 0.5 - (d > 0 ? acos(-c / s) : -acos(c / s));
      scale = {x: determ / s, y: s};
      skew.y = atan((a * c + b * d) / (s * s));
    }
    else { // a = b = c = d = 0
      scale = {x: 0, y: 0};
    }

    return {
      translate: translate,
      rotation : rotation,
      scale    : scale,
      skew     : skew
    }
  },

  /**
   * Returns the determinant of the current matrix.
   * @returns {number}
   */
  determinant: function() {
    return this.a * this.d - this.b * this.c
  },

  /**
   * Apply current matrix to `x` and `y` of a point.
   * Returns a point object.
   *
   * @param {number} x - value for x
   * @param {number} y - value for y
   * @returns {{x: number, y: number}} A new transformed point object
   */
  applyToPoint: function(x, y) {
    var me = this;
    return {
      x: x * me.a + y * me.c + me.e,
      y: x * me.b + y * me.d + me.f
    }
  },

  /**
   * Apply to any canvas 2D context object. This does not affect the
   * context that optionally was referenced in constructor unless it is
   * the same context.
   *
   * @param {CanvasRenderingContext2D} context - target context
   * @returns {MatrixLT}
   */
  applyToContext: function(context) {
    var me = this;
    context.setTransform(me.a, me.b, me.c, me.d, me.e, me.f);
    return me
  },

  /**
   * Returns true if matrix is an identity matrix (no transforms applied).
   * @returns {boolean}
   */
  isIdentity: function() {
    var me = this;
    return me.a === 1 && !me.b && !me.c && me.d === 1 && !me.e && !me.f
  },

  /**
   * Returns true if matrix is invertible
   * @returns {boolean}
   */
  isInvertible: function() {
    return !this._q(this.determinant(), 0)
  },

  /**
   * The method is intended for situations where scale is accumulated
   * via multiplications, to detect situations where scale becomes
   * "trapped" with a value of zero. And in which case scale must be
   * set explicitly to a non-zero value.
   *
   * @returns {boolean}
   */
  isValid: function() {
    return !(this.a * this.d)
  },

  /**
   * Compares current matrix with another matrix. Returns true if equal
   * (within epsilon tolerance).
   * @param {MatrixLT|Matrix|DOMMatrix|SVGMatrix} m - matrix to compare this matrix with
   * @returns {boolean}
   */
  isEqual: function(m) {

    var
      me = this,
      q = me._q;

    return  q(me.a, m.a) &&
            q(me.b, m.b) &&
            q(me.c, m.c) &&
            q(me.d, m.d) &&
            q(me.e, m.e) &&
            q(me.f, m.f)
  },

  /**
   * Clones current instance and returning a new matrix.
   * @param {boolean} [noContext=false] don't clone context reference if true
   * @returns {MatrixLT} - a new MatrixLT instance with identical transformations as this instance
   */
  clone: function(noContext) {
    return new MatrixLT(noContext ? null : this.context).multiply(this)
  },

  /**
   * Generates a string that can be used with CSS `transform`.
   * @example
   *     element.style.transform = m.toCSS();
   * @returns {string}
   */
  toCSS: function() {
    return "matrix(" + this.toArray() + ")"
  },

  /**
   * Generates a `matrix3d()` string that can be used with CSS `transform`.
   * Although the matrix is for 2D use you may see performance benefits
   * on some devices using a 3D CSS transform instead of a 2D.
   * @example
   *     element.style.transform = m.toCSS3D();
   * @returns {string}
   */
  toCSS3D: function() {
    var me = this;
    return "matrix3d(" + me.a + "," + me.b + ",0,0," + me.c + "," + me.d + ",0,0,0,0,1,0," + me.e + "," + me.f + ",0,1)"
  },

  /**
   * Returns a JSON compatible string of current matrix.
   * @returns {string}
   */
  toJSON: function() {
    var me = this;
    return '{"a":' + me.a + ',"b":' + me.b + ',"c":' + me.c + ',"d":' + me.d + ',"e":' + me.e + ',"f":' + me.f + '}'
  },

  /**
   * Compares floating point values with some tolerance (epsilon)
   * @param {number} f1 - float 1
   * @param {number} f2 - float 2
   * @returns {boolean}
   * @private
   */
  _q: function(f1, f2) {
    return Math.abs(f1 - f2) < 1e-14
  },

  /**
   * Apply current absolute matrix to context if defined, to sync it.
   * Apply current absolute matrix to element if defined, to sync it.
   * @returns {MatrixLT}
   * @private
   */
  _x: function() {

    var me = this;

    if (me.context)
      me.context.setTransform(me.a, me.b, me.c, me.d, me.e, me.f);

    return me
  }
};

// Node support
if (typeof exports !== "undefined") exports.MatrixLT = MatrixLT;
