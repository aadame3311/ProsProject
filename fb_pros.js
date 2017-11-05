window.fbAsyncInit = function() {
  FB.init({
    appId      : '1750465371922880',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
    
};

(function(d, s, id){

   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


  

function statusChangeCallback(response) {
 if (response.status === 'connected') {
      console.log("Logged in and Authenticated");
      setElements(true);
     
   } else { 
      console.log("not authenticated");    
      setElements(false);
      

   }
}

function setElements(isLogged) {
    if (isLogged) {
        document.getElementById("fb-button").style.display = 'none';
        document.getElementById("logout-button").style.display = 'block';
    } else {
        document.getElementById("fb-button").style.display = 'block';
        document.getElementById("logout-button").style.display = 'none';

   }
}
function logoutPressed(){
  FB.logout(function(response) {
    setElements(false);
  });
  checkLoginState();
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}