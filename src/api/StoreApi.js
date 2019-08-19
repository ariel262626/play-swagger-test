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


import ApiClient from "../ApiClient";
import ActionAnyContent from '../model/ActionAnyContent';
import Order from '../model/Order';

/**
* Store service.
* @module api/StoreApi
* @version 0.2
*/
export default class StoreApi {

    /**
    * Constructs a new StoreApi. 
    * @alias module:api/StoreApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param {String} orderId ID of the order that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionAnyContent} and HTTP response
     */
    deleteOrderWithHttpInfo(orderId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrder");
      }


      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ActionAnyContent;

      return this.apiClient.callApi(
        '/store/order/{orderId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param {String} orderId ID of the order that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionAnyContent}
     */
    deleteOrder(orderId) {
      return this.deleteOrderWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;&#x3D; 5. Anything above 5 or nonintegers will generate API errors
     * @param {String} orderId ID of pet that needs to be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    getOrderByIdWithHttpInfo(orderId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderById");
      }


      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = Order;

      return this.apiClient.callApi(
        '/store/order/{orderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;&#x3D; 5. Anything above 5 or nonintegers will generate API errors
     * @param {String} orderId ID of pet that needs to be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    getOrderById(orderId) {
      return this.getOrderByIdWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets orders in the system
     * 
     * @param {String} isComplete Get all orders or only those which are complete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Order>} and HTTP response
     */
    getOrdersWithHttpInfo(isComplete) {
      let postBody = null;

      // verify the required parameter 'isComplete' is set
      if (isComplete === undefined || isComplete === null) {
        throw new Error("Missing the required parameter 'isComplete' when calling getOrders");
      }


      let pathParams = {
      };
      let queryParams = {
        'isComplete': isComplete
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = [Order];

      return this.apiClient.callApi(
        '/store/order', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets orders in the system
     * 
     * @param {String} isComplete Get all orders or only those which are complete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Order>}
     */
    getOrders(isComplete) {
      return this.getOrdersWithHttpInfo(isComplete)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get Orders with query and implicit params as Option[Int] type
     * Returns orders
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit 
     * @param {Integer} opts.limitimplicit Number of orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Order>} and HTTP response
     */
    getOrders_0WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'limitimplicit': opts['limitimplicit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = [Order];

      return this.apiClient.callApi(
        '/store/order43', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get Orders with query and implicit params as Option[Int] type
     * Returns orders
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit 
     * @param {Integer} opts.limitimplicit Number of orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Order>}
     */
    getOrders_0(opts) {
      return this.getOrders_0WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Place an order for a pet
     * 
     * @param {module:model/Order} body order placed for purchasing the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionAnyContent} and HTTP response
     */
    placeOrderWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placeOrder");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ActionAnyContent;

      return this.apiClient.callApi(
        '/store/order', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Place an order for a pet
     * 
     * @param {module:model/Order} body order placed for purchasing the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionAnyContent}
     */
    placeOrder(body) {
      return this.placeOrderWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
