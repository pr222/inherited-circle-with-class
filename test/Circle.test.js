/**
 * Tests for the Circle module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { Circle } from '../src/Circle.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  Circle
// ------------------------------------------------------------------------------
describe('Circle', () => {
  describe('Constructor', () => {
    it('The returned object should be an instance of Circle', () => {
      const circle = new Circle()
      expect(circle)
        .to.be.an.instanceOf(Circle)
    })

    it('Passing 11.7 and 42.3 should set the property a to 11.7 and b to 42.4', () => {
      const circle = new Circle(11.7)
      expect(circle)
        .to.have.property('a', 11.7)
      expect(circle)
        .to.have.property('b', 11.7)
      expect(circle)
        .to.have.property('radius', 11.7)
    })
  })

  describe('Prototype', () => {
    describe('area computed property', () => {
      it('Should be defined.', () => {
        expect(Circle.prototype)
          .to.have.property('area').that.is.not.a('Function')
      })

      it('{ radius = 7.8 } should get a value near 191.1345', () => {
        const circle = new Circle(7.8)
        expect(Math.round(circle.area * 10000 + Number.EPSILON) / 10000)
          .to.equal(191.1345)
      })
    })

    describe('circumference property', () => {
      it('should be defined', () => {
        expect(Circle.prototype)
          .to.have.property('circumference').that.is.not.a('Function')
      })

      it('{ radius = 9.7 } should get a value near 60.9469', () => {
        const circle = new Circle(9.7)
        expect(Math.round(circle.circumference * 10000 + Number.EPSILON) / 10000)
          .to.equal(60.9469)
      })
    })

    describe('toString method', () => {
      it('should be defined', () => {
        expect(Object.hasOwnProperty.call(Circle.prototype, 'toString'))
          .to.equal(true)
        expect(Circle.prototype.toString)
          .to.be.a('Function')
      })

      it('{ radius = 13.2 } should return \'radius: 13.2, area: 547.4, circumference: 82.9\'', () => {
        const circle = new Circle(13.2)
        expect(circle.toString())
          .to.equal('radius: 13.2, area: 547.4, circumference: 82.9')
      })
    })
  })
})
