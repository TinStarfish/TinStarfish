var divHeightToAdd = 500;
var postLength = 500;
var defaultImageWidth = 128;
var allPosts = [];


function main() {
    getAllPosts()
    userName = document.getElementById("userName");
    userName_2 = document.getElementById("userName_2");
    
    topProfilePic = document.getElementById("topProfilePic");
    leftProfilePic = document.getElementById("leftProfilePic");
    postProfilePic = document.getElementById("postProfilePic");
    createPostProfilePic = document.getElementById("createPostProfilePic");
    commentProfilePic = document.getElementById("commentProfilePic");
    userLevel = document.getElementById("userLevel");
    
    
    //Change to use AWS account info in lue of Template when Amazon contacts you
    userNameText = document.createTextNode("\n"+"TinStarfish");
    userName_2Text = document.createTextNode("\n"+"Ruumstag");
    userLevelText = document.createTextNode("\n"+ Math.floor(Math.random() * 100));
    userName.append(userNameText);
    userName_2.append(userName_2Text);
    userLevel.append(userLevelText);
    
    var picLoc = "../sources/profPic_TinStarfish.jpg";
    topProfilePic.src = picLoc;
    leftProfilePic.src = picLoc;
    createPostProfilePic.src = picLoc;


}

function getAllPosts() {
    
    
    
    
}
 
function drawPost(postID, posterName, posterProfilePic, postContent, postImage, comment){
    var imageWidth = defaultImageWidth;

   
    if (postImage==null) {
        postImage = "../sources/fillerImage.png";
        imageWidth = 5;
        
    }
    var currentDate = new Date();
    var postTime = " (" + (currentDate.getMonth()+1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + ") " + currentDate.getHours() + ":" + currentDate.getMinutes() + "";
    
    var div = 
    "<div id = 'post" + postID + "'>" +
    "<img id = 'postProfilePic'+postID src =  '../sources/" + posterProfilePic + "' width = 32px height = 32px>" +
    "<a href='profile.html'>@<b>" + posterName + "</b></a>"+
    "<label>" + postTime + "</label>"+
    "<p>" + postContent +"</p>" +
    "<center><img src = " + postImage + " width = " + imageWidth + "></img></center>" +
    "<hr>"+
    "<label>Comments</label>"+
    "<hr>";
    if (comment!=null) {
        div+=drawComment(postID*2, "prborg", )
        
    }
    
    div +=
    "<textarea id = 'commentInput' maxlength = '150'></textarea>" + 
    "<button class = 'btn'>Reply</button>" + 
    "<hr>";
    
    document.getElementById("middleDiv").innerHTML += div;
    
    document.getElementById("middleDiv").style.height = ""+divHeightToAdd+"px";
    divHeightToAdd+=postLength;
    allPosts[allPosts.length] = div;

    
    
    
}

function drawComment(commentID, commenterName, commenterProfilePic, commentContent) {
    var currentDate = new Date();
    var commentTime = "(" +  (currentDate.getMonth()+1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + ") " + currentDate.getHours() + ":" + currentDate.getMinutes() + "";
    
    var div =
    "<div id = 'post" + postID + "'>" +
    "<img id = 'postProfilePic'+postID src =  '../sources/" + posterProfilePic + "' width = 32px height = 32px>" +
    "<a href='profile.html'>@<b>" + posterName + "</b></a>"+
    "<label>" + postTime + "</label>"+
    "<p>" + postContent +"</p>" +
    "<center><img src = " + postImage + " width = " + imageWidth + "></img></center>" +
    "<hr>" + 
    "<Label>Comments</Label>"+
    "<textarea id = 'commentInput' maxlength = '150'></textarea>" + 
    "<button class = 'btn'>Reply</button>" + 
    "<hr>";  
    
}

function createPost() {
    var postContent = document.getElementById("postInput");
    var postImage = document.getElementById("uploadFile").files[0];
    if (postImage) {
        var reader = new FileReader();
        reader.readasText(postImage);
        reader.onload = function(e) {
            
            
        }
        
        
    }
    
    drawPost(1, "TinStarfish", "../sources/profPic_TinStarfish.jpg", postContent.value, postImage);
    
    
}

function createComment() {
   
    
    
}

function notification() {
    var not = document.getElementById("notification");
    not.src = "../sources/notification_active.png";
    
    
}

main();
drawPost(2, "Gabey_Baby11", "../sources/profPic_Gabey_Baby11.jpg", "If anyone needs help getting Mew in Pokemon Go, I know how to get him.", null);
drawPost(2, "prborg", "../sources/profPic_prborg.jpg", "New Destiny 2 DLC has been announced! Excited to play some more D2!", null);
drawPost(2, "TinStarfish", "../sources/profPic_TinStarfish.jpg", "Haven't had any chances to play any games recently...", null);




