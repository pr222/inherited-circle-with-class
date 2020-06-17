/**
 * Circle module.
 *
 * @module src/Circle
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

import { Ellipse } from './Ellipse.js'

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Represents a circle.
 *
 * @class Circle
 */
export class Circle extends Ellipse {
  /**
   * Creates a JavaScript Circle instance that represents a circle.
   *
   * @param {number} radius - The circle's radius.
   * @class
   */
  constructor (radius) {
    super(radius, radius)
  }

  /**
   * Gets the radius of the current object.
   *
   * @returns {number} - A number.
   */
  get radius () {
    return this.a
  }

  /**
   * Sets the radius of the current object.
   *
   * @param {number} value - The circle's radius.
   */
  set radius (value) {
    this.a = this.b = value
  }

  /**
   * Returns a string that represents the current object.
   *
   * @returns {string} - A string that represents the current object.
   */
  toString () {
    return `radius: ${this.radius}, area: ${this.area.toFixed(1)}, circumference: ${this.circumference.toFixed(1)}`
  }
}
