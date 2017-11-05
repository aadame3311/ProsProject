window.fbAsyncInit = function() {
  FB.init({
    appId      : '1750465371922880',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=353634480666';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function statusChangeCallback(response) {
 if (response.status === 'connected') {
      console.log("Logged in and Authenticated");
      setElements(true);
      testAPI();
     
  } else { 
      console.log("not authenticated");    
      setElements(false);
      

   }
}


function testAPI() {
  FB.api('/me?fields=name,email,birthday,location', function(response) {
    if (response && !response.error) {
      console.log(response);
      userProfile(response);
    }
  });
}

function userProfile(user) {
  let profile =`
    <h1>${user.name}</h1>
    <h3>Birthday: ${user.birthday}</h3>
    <h3>Location: ${user.location.name}</h3>

  `;

  document.getElementById('info').innerHTML = profile;
}

function setElements(isLogged) {
    if (isLogged) {
        document.getElementById("fb-button").style.display = 'none';
        document.getElementById("logout-button").style.display = 'block';
        document.getElementById("info").style.display = 'block';
    } else {
        document.getElementById("fb-button").style.display = 'block';
        document.getElementById("logout-button").style.display = 'none';
        document.getElementById("info").style.display = 'none';

   }
}
function logoutPressed(){
  FB.logout(function(response) {
    setElements(false);
  });
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}