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
      addList();
     
  } else { 
      console.log("not authenticated");    
      setElements(false);

   }
}


function addList() {

  //grandparent variable is list container. 
  //from there, the parent variable is the unordered list created
    //from the div container.
  var grand = document.getElementById("list-cont");
  var list = document.createElement("ul");
  list.id="disp-list";
  grand.appendChild(list);
  var parent = list;

  //add each list item to the html.
  for (i = 0; i < 4; i++) {
    var item = document.createElement("li");
    item.className = "list-item";
    parent.appendChild(item);
  }
}

//delete parent generated from the div container in order
  //to stop displaying list when user logs off. 
function removeList() {
 
  var element = document.getElementById("disp-list");
  element.parentNode.removeChild(element);
}


function testAPI() {
  FB.api('/me?fields=name,email,birthday,location', function(response) {
    if (response && !response.error) {
      console.log(response);
      userProfile(response);
    }
  });
}

//display facebook user profile information.
function userProfile(user) {
  let profile =`
    <h1>${user.name}</h1>
    <h5>${user.location.name}</h5>

  `;

  document.getElementById('info').innerHTML = profile;
}

function setElements(isLogged) {
    if (isLogged) {
        document.getElementById("fb-button").style.display = 'none';
        document.getElementById("logout-button").style.display = 'block';
        document.getElementById("info").style.display = 'block';
    } else {
        removeList();
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