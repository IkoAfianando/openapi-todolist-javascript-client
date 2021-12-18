/*
 * Todolist RESTful API
 * OpenAPI for Todolist RESTful API
 *
 * OpenAPI spec version: 1
 * Contact: ikoafianando123@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
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
    factory(root.expect, root.TodolistResTfulApi);
  }
}(this, function(expect, TodolistResTfulApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CreateOrUpdateTodolist', function() {
      beforeEach(function() {
        instance = new TodolistResTfulApi.CreateOrUpdateTodolist();
      });

      it('should create an instance of CreateOrUpdateTodolist', function() {
        // TODO: update the code to test CreateOrUpdateTodolist
        expect(instance).to.be.a(TodolistResTfulApi.CreateOrUpdateTodolist);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property priority (base name: "priority")', function() {
        // TODO: update the code to test the property priority
        expect(instance).to.have.property('priority');
        // expect(instance.priority).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));
