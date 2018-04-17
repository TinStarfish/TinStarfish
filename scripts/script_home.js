var signInDiv;
var signUpDiv;


function main() {
    signInDiv = $(".signInDiv");
    signUpDiv = $(".signUpDiv");
    signInDiv.hide();
        
    
    
}

function changePage(pageName) {
    if (window.location!=pageName) {
    window.location = pageName;
    }
    
}

function toggleSignIn(toggle) {
    
    if (toggle) {
        console.log("Switching View");
        signInDiv.hide();
        signUpDiv.show();
        
    } else {
        console.log("Switching View");
        signUpDiv.hide();
        signInDiv.show();
        
        
    }
    
}

main();