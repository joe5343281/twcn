/* eslint-disable no-undef */
var expect = require('chai').expect

describe('twcn', function () {
  var twcn = require('../lib/twcn')

  describe('繁體轉簡體測試', function () {
    it('twcn.convert(寫一個函數將該字串轉為簡體)', function () {
      expect(twcn.convert('寫一個函數將該字串轉為簡體')).to.equal('写一个函数将该字串转为简体')
    })
  })
})
