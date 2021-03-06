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
    instance = new SamplePetClinicPlay26Apis.Order();
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

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instane = new SamplePetClinicPlay26Apis.Order();
      //expect(instance).to.be.a(SamplePetClinicPlay26Apis.Order);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SamplePetClinicPlay26Apis.Order();
      //expect(instance).to.be();
    });

    it('should have the property petId (base name: "petId")', function() {
      // uncomment below and update the code to test the property petId
      //var instane = new SamplePetClinicPlay26Apis.Order();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new SamplePetClinicPlay26Apis.Order();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instane = new SamplePetClinicPlay26Apis.Order();
      //expect(instance).to.be();
    });

    it('should have the property status2 (base name: "status2")', function() {
      // uncomment below and update the code to test the property status2
      //var instane = new SamplePetClinicPlay26Apis.Order();
      //expect(instance).to.be();
    });

  });

}));
