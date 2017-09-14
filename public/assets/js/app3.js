$(function () {

  var vname = "";
  var vemail = "";
  var vphoto = "";
  //var user = firebase.auth().currentUser
  //console.log(firebase.auth().currentUser)

  function checkIfLoggendIn() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          vname = user.displayName;
          vphoto = user.photoURL;
          vemail = user.email;
          console.log(vname + " " + vemail + " " + vphoto );
          document.getElementById("nameToDisplay").value = vname;
          document.getElementById("emailToDisplay").value = vemail;

        } else {
          window.location="/";
        }
      })
  };

  window.addEventListener('load', function() {
    checkIfLoggendIn();
  });

});