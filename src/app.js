/**
 * Starting point of application.
 *
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Ellipse } from './Ellipse.js'
import { Circle } from './Circle.js'

const ellipse = new Ellipse(42.7, 13.8)
console.log(ellipse.toString())

ellipse.a = 63
ellipse.b = 18.4
console.log(ellipse.toString())

ellipse.a = 78.9
ellipse.b = 68.4
console.log(ellipse.toString())

const circle = new Circle(6.7)
console.log(circle.toString())

circle.radius = 3.8
console.log(circle.toString())
