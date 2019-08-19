# SamplePetClinicPlay26Apis.UserApi

All URIs are relative to *https://localhost:9000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create user
[**createUsersWithArrayInput**](UserApi.md#createUsersWithArrayInput) | **POST** /user/createWithArray | Creates list of users with given input array
[**createUsersWithListInput**](UserApi.md#createUsersWithListInput) | **POST** /user/createWithList | Creates list of users with given list input
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{username} | Delete user
[**getUserByName**](UserApi.md#getUserByName) | **GET** /user/{username} | Get user by user name
[**loginUser**](UserApi.md#loginUser) | **GET** /user/login | Logs user into the system
[**logoutUser**](UserApi.md#logoutUser) | **GET** /user/logout | Logs out current logged in user session
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{username} | Updated user


<a name="createUser"></a>
# **createUser**
> ActionAnyContent createUser(body)

Create user

This can only be done by the logged in user.

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();

let body = new SamplePetClinicPlay26Apis.User(); // User | Created user object

apiInstance.createUser(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Created user object | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createUsersWithArrayInput"></a>
# **createUsersWithArrayInput**
> ActionAnyContent createUsersWithArrayInput(body)

Creates list of users with given input array



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();

let body = "body_example"; // String | List of user object

apiInstance.createUsersWithArrayInput(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| List of user object | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createUsersWithListInput"></a>
# **createUsersWithListInput**
> ActionAnyContent createUsersWithListInput(body)

Creates list of users with given list input



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();

let body = "body_example"; // String | List of user object

apiInstance.createUsersWithListInput(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| List of user object | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteUser"></a>
# **deleteUser**
> ActionAnyContent deleteUser(username)

Delete user

This can only be done by the logged in user.

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();

let username = "username_example"; // String | The name that needs to be deleted

apiInstance.deleteUser(username).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be deleted | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserByName"></a>
# **getUserByName**
> User getUserByName(username)

Get user by user name



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();

let username = "username_example"; // String | The name that needs to be fetched. Use user1 for testing. 

apiInstance.getUserByName(username).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be fetched. Use user1 for testing.  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="loginUser"></a>
# **loginUser**
> &#39;String&#39; loginUser(username, password)

Logs user into the system



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();

let username = "username_example"; // String | The user name for login

let password = "password_example"; // String | The password for login in clear text

apiInstance.loginUser(username, password).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name for login | 
 **password** | **String**| The password for login in clear text | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="logoutUser"></a>
# **logoutUser**
> ActionAnyContent logoutUser()

Logs out current logged in user session



### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();
apiInstance.logoutUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateUser"></a>
# **updateUser**
> ActionAnyContent updateUser(username, username2, body)

Updated user

This can only be done by the logged in user.

### Example
```javascript
import SamplePetClinicPlay26Apis from 'sample_pet_clinic_play_26_apis';

let apiInstance = new SamplePetClinicPlay26Apis.UserApi();

let username = "username_example"; // String | 

let username2 = "username_example"; // String | name that need to be updated

let body = new SamplePetClinicPlay26Apis.User(); // User | Updated user object

apiInstance.updateUser(username, username2, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **username2** | **String**| name that need to be updated | 
 **body** | [**User**](User.md)| Updated user object | 

### Return type

[**ActionAnyContent**](ActionAnyContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

