/**
 * Tests for the Ellipse module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { Ellipse } from '../src/Ellipse.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  Ellipse
// ------------------------------------------------------------------------------
describe('Ellipse', () => {
  describe('Constructor', () => {
    it('The returned object should be an instance of Ellipse', () => {
      const ellipse = new Ellipse()
      expect(ellipse)
        .to.be.an.instanceOf(Ellipse)
    })

    it('Passing 11.7 and 42.3 should set the property a to 11.7 and b to 42.4', () => {
      const ellipse = new Ellipse(11.7, 42.4)
      expect(ellipse)
        .to.have.property('a', 11.7)
      expect(ellipse)
        .to.have.property('b', 42.4)
    })
  })

  describe('Prototype', () => {
    describe('area computed property', () => {
      it('Should be defined.', () => {
        expect(Ellipse.prototype)
          .to.have.property('area').that.is.not.a('Function')
      })

      it('{ a = 78.2, b = 7.4 } should get a value near 1817.9768', () => {
        const ellipse = new Ellipse(78.2, 7.4)
        expect(Math.round(ellipse.area * 10000 + Number.EPSILON) / 10000)
          .to.equal(1817.9768)
      })
    })

    describe('circumference property', () => {
      it('should be defined', () => {
        expect(Ellipse.prototype)
          .to.have.property('circumference').that.is.not.a('Function')
      })

      it('{ a = 6, b = 9.7 } should get a value near 50.6742', () => {
        const ellipse = new Ellipse(6, 9.7)
        expect(Math.round(ellipse.circumference * 10000 + Number.EPSILON) / 10000)
          .to.equal(50.6742)
      })
    })

    describe('toString method', () => {
      it('should be defined', () => {
        expect(Object.hasOwnProperty.call(Ellipse.prototype, 'toString'))
          .to.equal(true)
        expect(Ellipse.prototype.toString)
          .to.be.a('Function')
      })

      it('{ a = 13.2, b = 42.1 } should return \'a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0\'', () => {
        const ellipse = new Ellipse(13.2, 42.1)
        expect(ellipse.toString())
          .to.equal('a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0')
      })
    })
  })
})
