/**
 * The starting point of the application.
 *
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

import { Circle } from './Circle.js'
import { Ellipse } from './Ellipse.js'

console.log('Ellipse')
console.log('=======')

const ellipse = new Ellipse(42.7, 13.8)
console.log(ellipse.toString())

ellipse.a = 63
ellipse.b = 18.4
console.log(ellipse.toString())

ellipse.a = 78.9
ellipse.b = 68.4
console.log(ellipse.toString())

console.log('\nCircle')
console.log('======')

const circle = new Circle(6.7)
console.log(circle.toString())

circle.radius = 3.8
console.log(circle.toString())
