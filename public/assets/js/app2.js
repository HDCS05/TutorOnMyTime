$(function () {

  $("#buttonStudent").on("click", function(event) {
    event.preventDefault();
    signInWithGoogle(true);
  });

  $("#buttonTutor").on("click", function(event) {
    event.preventDefault();
    signInWithGoogle(false);
  });

  function signInWithGoogle(studentOrTutor){
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(function(data){
        console.log(data);
        if(studentOrTutor) {
          window.location="/student";
          //location.replace("/student");
        } else {
          window.location="/tutor";
          //location.replace("/tutor");
        }
      })
      .catch(function(error){
        console.log(error);
      })
  };

});