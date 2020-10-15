/**
 * Circle module.
 *
 * @module src/Circle
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------
import { Ellipse } from './Ellipse.js'

/**
 * Represents a circle.
 *
 * @class Circle
 * @extends {Ellipse} - Inherits from Ellipse class.
 */
export class Circle extends Ellipse {
/**
 * Creates an instance of Circle.
 *
 * @param {number} radius - The radius of the circle
 * @memberof Circle
 */
  constructor (radius) {
    super(radius, radius) // Call the parent constructor
  }

  get radius () {
    return this.a
  }

  set radius (value) {
    this.a = this.b
    this.b = value
  }

  /**
   * Represents the circle object as a string.
   *
   * @returns {string} - A string representing the object.
   * @memberof Circle
   */
  toString () {
    return `radius: ${this.radius}, area: ${this.area.toFixed(1)}, circumference: ${this.circumference.toFixed(1)}`
  }
}
