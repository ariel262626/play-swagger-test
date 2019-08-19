# SamplePetClinicPlay26Apis.PetApi

All URIs are relative to *https://localhost:9000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](PetApi.md#addPet) | **POST** /pet | Add a new Pet
[**attachImage**](PetApi.md#attachImage) | **POST** /pet/{id} | Attach an Image File for a pet
[**findPetByStatus**](PetApi.md#findPetByStatus) | **GET** /pet/findByStatus | Finds Pets by status
[**findPetsByTags**](PetApi.md#findPetsByTags) | **GET** /pet/findByTags | Finds Pets by tags
[**getOptions**](PetApi.md#getOptions) | **OPTIONS** /{wholepath} | 
[**getPetById**](PetApi.md#getPetById) | **GET** /pet/{id} | Find pet by ID
[**updatePet**](PetApi.md#updatePet) | **PUT** /pet | Update an existing Pet


<a name="addPet"></a>
# **addPet**
> ActionAnyContent addPet(body)

Add a new Pet



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';
let defaultClient = SamplePetClinicPlay26Apis.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SamplePetClinicPlay26Apis.PetApi();

let body = new SamplePetClinicPlay26Apis.Pet(); // Pet | Pet object that needs to be added to the store

apiInstance.addPet(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Pet**](Pet.md)| Pet object that needs to be added to the store | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachImage"></a>
# **attachImage**
> ActionAnyContent attachImage(id, body, id2)

Attach an Image File for a pet

Is not functional, only used to test file upload params

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.PetApi();

let id = "id_example"; // String | 

let body = "body_example"; // String | Image file to attach

let id2 = "id_example"; // String | ID of pet to which to attach image

apiInstance.attachImage(id, body, id2).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | **String**| Image file to attach | 
 **id2** | **String**| ID of pet to which to attach image | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="findPetByStatus"></a>
# **findPetByStatus**
> [Pet] findPetByStatus(status)

Finds Pets by status

Multiple status values can be provided with comma separated strings

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.PetApi();

let status = ["status_example"]; // [String] | Status values that need to be considered for filter

apiInstance.findPetByStatus(status).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**[String]**](String.md)| Status values that need to be considered for filter | 

### Return type

[**[Pet]**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="findPetsByTags"></a>
# **findPetsByTags**
> [Pet] findPetsByTags(tags)

Finds Pets by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.PetApi();

let tags = ["tags_example"]; // [String] | Tags to filter by

apiInstance.findPetsByTags(tags).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**[String]**](String.md)| Tags to filter by | 

### Return type

[**[Pet]**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOptions"></a>
# **getOptions**
> ActionAnyContent getOptions(wholepath)



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.PetApi();

let wholepath = "wholepath_example"; // String | 

apiInstance.getOptions(wholepath).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wholepath** | **String**|  | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPetById"></a>
# **getPetById**
> Pet getPetById(id)

Find pet by ID

Returns a pet

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';
let defaultClient = SamplePetClinicPlay26Apis.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SamplePetClinicPlay26Apis.PetApi();

let id = "id_example"; // String | ID of the pet to fetch

apiInstance.getPetById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the pet to fetch | 

### Return type

[**Pet**](Pet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updatePet"></a>
# **updatePet**
> ActionAnyContent updatePet(body)

Update an existing Pet



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.PetApi();

let body = new SamplePetClinicPlay26Apis.Pet(); // Pet | Pet object that needs to be updated in the store

apiInstance.updatePet(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Pet**](Pet.md)| Pet object that needs to be updated in the store | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

