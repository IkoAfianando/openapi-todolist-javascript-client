# TodolistResTfulApi.TodolistApi

All URIs are relative to *https://{environment}.programmingwithiko.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**todolistGet**](TodolistApi.md#todolistGet) | **GET** /todolist | Get All Todolist
[**todolistPost**](TodolistApi.md#todolistPost) | **POST** /todolist | Create New Todolist
[**todollistTodolistIdDelete**](TodolistApi.md#todollistTodolistIdDelete) | **DELETE** /todollist/{todolistId} | Delete existing Todolist
[**todollistTodolistIdPut**](TodolistApi.md#todollistTodolistIdPut) | **PUT** /todollist/{todolistId} | Update existing Todolist

<a name="todolistGet"></a>
# **todolistGet**
> ArrayTodolist todolistGet(opts)

Get All Todolist

Get all todolist by default

### Example
```javascript
import {TodolistResTfulApi} from 'todolist_res_tful_api';
let defaultClient = TodolistResTfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistResTfulApi.TodolistApi();
let opts = { 
  'includeDone': false, // Boolean | Include done todolist in the result
  'name': "name_example" // String | Filter todolist by name
};
apiInstance.todolistGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeDone** | **Boolean**| Include done todolist in the result | [optional] [default to false]
 **name** | **String**| Filter todolist by name | [optional] 

### Return type

[**ArrayTodolist**](ArrayTodolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todolistPost"></a>
# **todolistPost**
> Todolist todolistPost(body)

Create New Todolist

Create new todolist to database

### Example
```javascript
import {TodolistResTfulApi} from 'todolist_res_tful_api';
let defaultClient = TodolistResTfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistResTfulApi.TodolistApi();
let body = new TodolistResTfulApi.CreateOrUpdateTodolist(); // CreateOrUpdateTodolist | 

apiInstance.todolistPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrUpdateTodolist**](CreateOrUpdateTodolist.md)|  | 

### Return type

[**Todolist**](Todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="todollistTodolistIdDelete"></a>
# **todollistTodolistIdDelete**
> InlineResponse200 todollistTodolistIdDelete(todolistId)

Delete existing Todolist

Delete existing todolist in database

### Example
```javascript
import {TodolistResTfulApi} from 'todolist_res_tful_api';
let defaultClient = TodolistResTfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistResTfulApi.TodolistApi();
let todolistId = "todolistId_example"; // String | Todolist id for updated

apiInstance.todollistTodolistIdDelete(todolistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todolistId** | **String**| Todolist id for updated | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todollistTodolistIdPut"></a>
# **todollistTodolistIdPut**
> Todolist todollistTodolistIdPut(body, todolistId)

Update existing Todolist

Update existing todolist in database

### Example
```javascript
import {TodolistResTfulApi} from 'todolist_res_tful_api';
let defaultClient = TodolistResTfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistResTfulApi.TodolistApi();
let body = new TodolistResTfulApi.CreateOrUpdateTodolist(); // CreateOrUpdateTodolist | 
let todolistId = "todolistId_example"; // String | Todolist id for updated

apiInstance.todollistTodolistIdPut(body, todolistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrUpdateTodolist**](CreateOrUpdateTodolist.md)|  | 
 **todolistId** | **String**| Todolist id for updated | 

### Return type

[**Todolist**](Todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

