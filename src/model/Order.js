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


import ApiClient from '../ApiClient';





/**
* The Order model module.
* @module model/Order
* @version 0.2
*/
export default class Order {
    /**
    * Constructs a new <code>Order</code>.
    * @alias module:model/Order
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Order} obj Optional instance to populate.
    * @return {module:model/Order} The populated <code>Order</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
            }
            if (data.hasOwnProperty('petId')) {
                obj['petId'] = ApiClient.convertToType(data['petId'], 'Integer');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
            }
            if (data.hasOwnProperty('shipDate')) {
                obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'Date');
            }
            if (data.hasOwnProperty('status2')) {
                obj['status2'] = ApiClient.convertToType(data['status2'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Integer} id
    */
    id = undefined;
    /**
    * @member {Integer} petId
    */
    petId = undefined;
    /**
    * @member {Integer} quantity
    */
    quantity = undefined;
    /**
    * @member {Date} shipDate
    */
    shipDate = undefined;
    /**
    * @member {String} status2
    */
    status2 = undefined;








}


