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
    instance = new SamplePetClinicPlay26Apis.PetApi();
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

  describe('PetApi', function() {
    describe('addPet', function() {
      it('should call addPet successfully', function(done) {
        //uncomment below and update the code to test addPet
        //instance.addPet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachImage', function() {
      it('should call attachImage successfully', function(done) {
        //uncomment below and update the code to test attachImage
        //instance.attachImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetByStatus', function() {
      it('should call findPetByStatus successfully', function(done) {
        //uncomment below and update the code to test findPetByStatus
        //instance.findPetByStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetsByTags', function() {
      it('should call findPetsByTags successfully', function(done) {
        //uncomment below and update the code to test findPetsByTags
        //instance.findPetsByTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptions', function() {
      it('should call getOptions successfully', function(done) {
        //uncomment below and update the code to test getOptions
        //instance.getOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPetById', function() {
      it('should call getPetById successfully', function(done) {
        //uncomment below and update the code to test getPetById
        //instance.getPetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePet', function() {
      it('should call updatePet successfully', function(done) {
        //uncomment below and update the code to test updatePet
        //instance.updatePet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));