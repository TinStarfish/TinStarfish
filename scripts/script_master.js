var userName;
var username_2;
var leftProfilePic;
var postProfilePic;
var createPostProfilePic;
var commentProfilePic;
var topProfilePic;
var userLevel;


if(!!window.AWSCognito && !!window.AmazonCognitoIdentity){
	console.log("Amazon Cognito SDK is good to use");
}else{
	console.log("Amazon Cognito SDK is NOT loaded properly");
}

AWSCognito.config.region = 'us-east-2';

var poolData = {
    UserPoolId : 'us-east-2_5douPSZTe',
    ClientId : '4jbtsqd40cu6dn6ka6kgpjjmbl'    
    
    
};

var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
var cognitoUser;

function main() {
   

}

function createAccount () {
    var dataObj = {
        usern : document.getElementById("signUpUsername").value,
        email : document.getElementById("signUpEmail").value,
        passw : document.getElementById("signUpPassword").value
        
        
        
        
    };
    
    console.log("Retrieved this username from the form: "+dataObj.usern);
	console.log("Retrieved this password from the form: "+dataObj.passw);
    
    
    
    var attributeList = [];
    
    var dataEmail = {
        Name : 'email',
        Value : dataObj.email
         
    };
    
    
        var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);
        
        userPool.signUp(dataObj.usern, dataObj.passw, attributeList, null, onSignUpResult);
        console.log('Finished create account function');
        
    
    
}

function onSignUpResult(err, result){
	if (err) {
		console.log('Sign up failure: '+err);
		alert(err);
		return;
	}
	console.log('Sign up success: '+JSON.stringify(result));
	cognitoUser = result.user;
	console.log('user name is ' + cognitoUser.getUsername);
    changePage('feed.html');
    
	
}

function performLogin(){
	var usernameToLogin = document.getElementById("signInUsername").value;
	var passwordToLogin = document.getElementById("signInPassword").value;
	
	console.log("Retrieved this username from the login form: "+usernameToLogin);
	console.log("Retrieved this password from the login form: "+passwordToLogin);
	
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails({
		Username : usernameToLogin,
        Password : passwordToLogin
	});
    var userData = {
        Username : usernameToLogin,
        Pool : userPool
    };
    var cognitoUserToLogin = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUserToLogin.authenticateUser(authenticationDetails, {
        onSuccess: onSuccessfulLogin,
 
        onFailure: function(err) {
            alert(err);
        },
		
		newPasswordRequired: function(obj){
			alert("new password required: "+JSON.stringify(obj));
		},
 
    });
    
}

function onSuccessfulLogin(result) {
	console.log("You are successfully logged in.");
    changePage('feed.html');
}

function changePage(pageName) {
    if (window.location!=pageName) {
    window.location = pageName;
    }
    
}

main();