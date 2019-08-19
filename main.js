var SamplePetClinicPlay26Apis = require('sample_pet_clinic_play_26_apis');

var defaultClient = SamplePetClinicPlay26Apis.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

var api = new SamplePetClinicPlay26Apis.PetApi()

var body = new SamplePetClinicPlay26Apis.Pet(); // {Pet} Pet object that needs to be added to the store

api.addPet(body).then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
}, function(error) {
    console.error(error);
});