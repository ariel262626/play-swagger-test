# SamplePetClinicPlay26Apis.StoreApi

All URIs are relative to *https://localhost:9000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrder**](StoreApi.md#deleteOrder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
[**getOrderById**](StoreApi.md#getOrderById) | **GET** /store/order/{orderId} | Find purchase order by ID
[**getOrders**](StoreApi.md#getOrders) | **GET** /store/order | Gets orders in the system
[**getOrders_0**](StoreApi.md#getOrders_0) | **GET** /store/order43 | get Orders with query and implicit params as Option[Int] type
[**placeOrder**](StoreApi.md#placeOrder) | **POST** /store/order | Place an order for a pet


<a name="deleteOrder"></a>
# **deleteOrder**
> ActionAnyContent deleteOrder(orderId)

Delete purchase order by ID

For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.StoreApi();

let orderId = "orderId_example"; // String | ID of the order that needs to be deleted

apiInstance.deleteOrder(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID of the order that needs to be deleted | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrderById"></a>
# **getOrderById**
> Order getOrderById(orderId)

Find purchase order by ID

For valid response try integer IDs with value &lt;&#x3D; 5. Anything above 5 or nonintegers will generate API errors

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.StoreApi();

let orderId = "orderId_example"; // String | ID of pet that needs to be fetched

apiInstance.getOrderById(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID of pet that needs to be fetched | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrders"></a>
# **getOrders**
> [Order] getOrders(isComplete)

Gets orders in the system



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.StoreApi();

let isComplete = "isComplete_example"; // String | Get all orders or only those which are complete

apiInstance.getOrders(isComplete).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isComplete** | **String**| Get all orders or only those which are complete | 

### Return type

[**[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrders_0"></a>
# **getOrders_0**
> [Order] getOrders_0(opts)

get Orders with query and implicit params as Option[Int] type

Returns orders

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.StoreApi();

let opts = { 
  'limit': 56, // Integer | 
  'limitimplicit': 56 // Integer | Number of orders
};
apiInstance.getOrders_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**|  | [optional] 
 **limitimplicit** | **Integer**| Number of orders | [optional] 

### Return type

[**[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="placeOrder"></a>
# **placeOrder**
> ActionAnyContent placeOrder(body)

Place an order for a pet



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.StoreApi();

let body = new SamplePetClinicPlay26Apis.Order(); // Order | order placed for purchasing the pet

apiInstance.placeOrder(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)| order placed for purchasing the pet | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

