function register() {
    let reg_email: HTMLInputElement = document.querySelector('#reg_email')
    let reg_password: HTMLInputElement = document.querySelector('#reg_password')

    const reg_validation: HTMLParagraphElement =document.querySelector("#reg_validation");


    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let currentDate = `Day: ${day}.${month}.${year} Time: ${hour}:${minutes}`;
  
    firebase.auth().createUserWithEmailAndPassword(reg_email.value, reg_password.value).then(function () {
      var user = firebase.auth().currentUser;
      var database_ref = firebase.database().ref();
      var user_data = {
        email: reg_email.value,
        password: reg_password.value,
        last_login: currentDate,
        create_date: currentDate
      };
  
      database_ref.child("users/" + user.uid + "/info/").set(user_data);
      firebase.auth().signInWithEmailAndPassword(user_data.email, user_data.password).then(function (user: any) {
        var user = firebase.auth().currentUser;
        var database_ref = firebase.database().ref();
        var user_data = {
          last_login: currentDate,
        };
        database_ref.child("users/" + user.uid + "/info/").update(user_data);
      });
      firebase.auth().onAuthStateChanged(function (use: any) {
        if (user) {
          let userId = firebase.auth().currentUser.uid;
          firebase.database().ref("users/" + userId + "/info/").once("value").then(function (snapshot: any) {
            const email = snapshot.val().email;
            document.cookie ="sessionData=" + JSON.stringify({ email: email }) + ";max-age=3600";
          });
        }
      });
    })
    .catch(function (error: any) {
      if (error.code === "auth/wrong-password") {
        reg_validation.innerHTML = "Błędne hasło!";
        reg_validation.classList.add("show");
        return;
      } else if (error.code === "auth/invalid-email") {
        reg_validation.innerHTML = "Błędny email!";
        reg_validation.classList.add("show");
        return;
      } else if (error.code === "auth/user-not-found") {
        reg_validation.innerHTML = "Nie znaleziono użytkownika!";
        reg_validation.classList.add("show");
        return;
      } else if (error.code === "auth/weak-password") {
        reg_validation.innerHTML = "Hasło jest zbyt krótkie!";
        reg_validation.classList.add("show");
        return;
      } else if (error.code === "auth/email-already-in-use") {
        reg_validation.innerHTML = "Ten email jest już zajęty!";
        reg_validation.classList.add("show");
        return;
      } else {
        console.error(error);
        reg_validation.classList.remove("show");
      }
      console.log(error);
    });
}