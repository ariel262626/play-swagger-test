/**
 * Sample Pet clinic play 2.6 apis
 * Sample Pet clinic play 2.6 apis
 *
 * OpenAPI spec version: 0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SamplePetClinicPlay26Apis);
  }
}(this, function(expect, SamplePetClinicPlay26Apis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SamplePetClinicPlay26Apis.ActionAnyContent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ActionAnyContent', function() {
    it('should create an instance of ActionAnyContent', function() {
      // uncomment below and update the code to test ActionAnyContent
      //var instane = new SamplePetClinicPlay26Apis.ActionAnyContent();
      //expect(instance).to.be.a(SamplePetClinicPlay26Apis.ActionAnyContent);
    });

  });

}));
