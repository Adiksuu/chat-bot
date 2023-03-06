function login() {
  let log_email: HTMLInputElement = document.querySelector("#log_email");
  let log_password: HTMLInputElement = document.querySelector("#log_password");

  const log_validation: HTMLParagraphElement =document.querySelector("#log_validation");

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let currentDate = `Day: ${day}.${month}.${year} Time: ${hour}:${minutes}`;

  firebase
    .auth()
    .signInWithEmailAndPassword(log_email.value, log_password.value)
    .then(function (user: any) {
      var user = firebase.auth().currentUser;
      var database_ref = firebase.database().ref();
      var user_data = {
        last_login: currentDate,
      };
      database_ref.child("users/" + user.uid + "/info/").update(user_data);
    })
    .catch(function (error: any) {
      if (error.code === "auth/wrong-password") {
        log_validation.innerHTML = "Błędne hasło!";
        log_validation.classList.add("show");
        return;
      } else if (error.code === "auth/invalid-email") {
        log_validation.innerHTML = "Błędny email!";
        log_validation.classList.add("show");
        return;
      } else if (error.code === "auth/user-not-found") {
        log_validation.innerHTML = "Nie znaleziono użytkownika!";
        log_validation.classList.add("show");
        return;
      } else {
        console.error(error);
        log_validation.classList.remove("show");
      }
      console.log(error);
    });
  firebase.auth().onAuthStateChanged(function (use: any) {
    var user = firebase.auth().currentUser;
    if (user) {
      let userId = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref("users/" + userId + "/info/")
        .once("value")
        .then(function (snapshot: any) {
          const email = snapshot.val().email;
          document.cookie =
            "sessionData=" + JSON.stringify({ email: email }) + ";max-age=3600";
        });
    }
  });
}
