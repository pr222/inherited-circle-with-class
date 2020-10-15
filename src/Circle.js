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
    constructor (radius) {
        super() // Call the parent constructor
        this.radius = radius
    }



    // Area
    // Circumference 
/**
 * Represents the circle object as a string.
 *
 * @return {string} - A string representing the object.
 * @memberof Circle
 */
toString () {
        return `radius: ${this.radius}, area: ${this.area.toFixed(1)}, circumference: ${this.circumference.toFixed(1)}`
    }
}