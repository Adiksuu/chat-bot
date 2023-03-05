const firebaseConfig = {
  apiKey: "AIzaSyBhiGDohAGr92ybIjTttUSEYiAdY2ERkus",
  authDomain: "chatapp-f3743.firebaseapp.com",
  databaseURL: "https://chatapp-f3743-default-rtdb.firebaseio.com",
  projectId: "chatapp-f3743",
  storageBucket: "chatapp-f3743.appspot.com",
  messagingSenderId: "1004390001447",
  appId: "1:1004390001447:web:46f7b333b9c55189275702"
};
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const auth = firebase.auth()
const database = firebase.database()
const storage = firebase.storage();


const sign_in_box = document.querySelector(".sign_in");
const sign_up_box = document.querySelector(".sign_up");
const chat_box = document.querySelector(".chat");
window.setInterval(() => {
  if (window.location.search == "?continue=login") {
    sign_in_box.classList.add("show");
    sign_up_box.classList.remove("show");
    chat_box.classList.remove('show')
  } else if (window.location.search == "?continue=register") {
    sign_in_box.classList.remove("show");
    sign_up_box.classList.add("show");
    chat_box.classList.remove('show')
  } else if (window.location.search == "?continue=chat") {
    chat_box.classList.add('show')
  }
  if (window.location.search == "") {
    window.location.search = "?continue=login";
    checkCookie();
  }
});

const email = document.querySelector("#email");
const nickname = document.querySelector("#nickname");
const password = document.querySelector("#password");
const error_email = document.querySelector('#error');

const email_in = document.querySelector("#email_in");
const password_in = document.querySelector("#password_in");
const error_email_in = document.querySelector('#error_in');

let email_errors = false;
let nickname_errors = false;
let password_errors = false;

function register() {
  console.log('Register complete')

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes()
  let currentDate = `Day: ${day}.${month}.${year} Time: ${hour}:${minutes}`;

  auth.createUserWithEmailAndPassword(email.value, password.value).then(function() {
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = {
        email: email.value,
        password: password.value,
        nickname: nickname.value,
        last_login: currentDate,
        group: 'global'
    }

    database_ref.child('users/' + user.uid).set(user_data)
    console.log(user_data.nickname)
    auth.signInWithEmailAndPassword(user_data.email, user_data.password).then(function(user) {
      if (firebase.auth().currentUser.emailVerified == false) {
        alertMessage()
        return;
      }
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
          last_login: currentDate,
      }
      database_ref.child('users/' + user.uid).update(user_data)
      window.location.search = "?continue=chat";
    })
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if (firebase.auth().currentUser.emailVerified == false) {
          alertMessage()
          return;
        }
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
          const username = snapshot.val().nickname;
          const email = snapshot.val().email;
          const group = snapshot.val().group;
          console.log("Zalogowałeś się jako " + username + "(" + email + ")");
          document.cookie = "sessionData=" + JSON.stringify({nickname: username, email: email, group: group}) + ";max-age=3600";
        });
      }
    });
  })
  .catch(function(error) {
      if (error.code === 'auth/email-already-in-use') {
          email_errors = true;
          error_email.innerHTML = 'This mail is already used!'
      } else {
          console.error(error);
      }
  })
}
function login() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes()
  let currentDate = `Day: ${day}.${month}.${year} Time: ${hour}:${minutes}`;

  auth.signInWithEmailAndPassword(email_in.value, password_in.value).then(function(user) {
    var user = auth.currentUser
    if (firebase.auth().currentUser.emailVerified == false) {
      alertMessage()
      return;
    }
    var database_ref = database.ref()
    var user_data = {
        last_login: currentDate,
    }
    database_ref.child('users/' + user.uid).update(user_data)
    window.location.search = "?continue=chat";
  })
  .catch(function(error) {
      if (error.code === 'auth/wrong-password') {
          password_errors = true;
          error_email_in.innerHTML = 'Wrong password!'
          return;
      } else if (error.code === 'auth/invalid-email') {
          email_errors = true;
          error_email_in.innerHTML = 'Invalid email!'
          return;
      } else {
          console.error(error);
          email_errors = false;
          password_errors = false;
      }
      console.log(error)
  })
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      if (firebase.auth().currentUser.emailVerified == false) {
        alertMessage()
        return;
      }
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
        const username = snapshot.val().nickname;
        const email = snapshot.val().email;
        const group = snapshot.val().group;
        console.log("Zalogowałeś się jako " + username + "(" + email + ")");
        document.cookie = "sessionData=" + JSON.stringify({nickname: username, email: email, group: group}) + ";max-age=3600";
      });
    }
  });
}
let username;
const messageContainer = document.getElementById('chat_messages')

var cookieData = document.cookie.split(";").map(c => c.trim());
    for (var i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
        currentGroup = sessionData.group
      } else {
        currentGroup = 'global';
      }}

var messagesRef = database.ref(`groups/${currentGroup}/`);

  messagesRef.on("child_added", function(data) {
    var message = data.val();

    var messageElement = document.createElement("div");
    
    if (message.type === 'text') {
      messageElement.classList.add('message-sender')
      messageElement.innerHTML = `<img src="https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png" alt="">
      <div class="message">
      <p>${message.nickname} - ${message.time}</p>
      <span>${message.text}</span>
      </div>`
    }
    
    
    if (message.type === 'image') {
      if (message.url.includes('data:image') == true) {
        messageElement.classList.add('message-sender')
        messageElement.innerHTML = `<img src="https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png" alt="">
        <div class="message">
        <p>${message.nickname} - ${message.time}</p>
        <span><img src="${message.url}"></img></span>
        </div>`
      } else if (message.url.includes('data:video') == true) {
        messageElement.classList.add('message-sender')
        messageElement.innerHTML = `<img src="https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png" alt="">
        <div class="message">
        <p>${message.nickname} - ${message.time}</p>
        <span><video autoplay controls loop src="${message.url}"></video></span>
        </div>`
      }
  }

    messageContainer.appendChild(messageElement);
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");
    deleteIcon.style.display = "none";
    var cookieData = document.cookie.split(";").map(c => c.trim());
    for (var i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
      }}
      if (window.location.search == '?continue=chat') {
        firebase.database().ref(`groups/${currentGroup}/info`).once('value').then(function(snapshot) {
          const groupAdmin = snapshot.val().admin;
          if (sessionData.nickname == groupAdmin || sessionData.email == 'codeadiksuu@gmail.com') {
            messageElement.appendChild(deleteIcon);
          }
    })
}

    // Dodanie nasłuchiwania na najechanie myszą na wiadomość
  messageElement.addEventListener("mouseover", function () {
  deleteIcon.style.display = "block";
  });
  
  // Dodanie nasłuchiwania na opuszczenie myszą wiadomości
  messageElement.addEventListener("mouseout", function () {
  deleteIcon.style.display = "none";
  });

    // Dodanie nasłuchiwania na kliknięcie ikony
    deleteIcon.addEventListener("click", function () {
      // Usunięcie wiadomości z bazy danych
      firebase.database().ref(`groups/${currentGroup}/`).child(data.key).remove();
      location.reload()
    });
  });

const messageInput = document.getElementById('message_input')

function alertMessage() {
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // E-mail został wysłany pomyślnie
      console.log('Wysłano e-mail weryfikacyjny');
    })
    .catch((error) => {
      // Wystąpił błąd podczas wysyłania e-maila
      console.error(error);
    });
  window.alert('You must verify your mail, message has been send to your mail!')
  location.reload()
}

function sendMessage() {
  if ((messageInput.value.length - (messageInput.value.split(" ").length - 1)) <= 0) {
    return;
  }
  var cookieData = document.cookie.split(";").map(c => c.trim());
  for (var i = 0; i < cookieData.length; i++) {
    if (cookieData[i].startsWith("sessionData=")) {
      var sessionData = JSON.parse(cookieData[i].split("=")[1]);
    }}
    if (sessionData.access == 'false') {
      return;
    }
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes()
    let currentDate = `${day}.${month}.${year} ${hour}:${minutes}`;
  var message = {
    nickname: sessionData.nickname,
    email: firebase.auth().currentUser.email,
    text: messageInput.value,
    type: 'text',
    time: currentDate
  };

  
  if (message.type === 'text') {
    messagesRef.push(message);
  } else if (message.type === 'image') {
    
  }
  messageInput.value = "";
  messageContainer.scrollTop = messageContainer.scrollHeight
}

function checkCookie() {
  var cookieData = document.cookie.split(";").map(c => c.trim());
  for (var i = 0; i < cookieData.length; i++) {
    if (cookieData[i].startsWith("sessionData=")) {
      var sessionData = JSON.parse(cookieData[i].split("=")[1]);
      console.log("Zalogowano jako: " + sessionData.nickname);
      if (window.location.search == '?continue=login' || window.location.search == '?continue=register') {
        window.location.search = '?continue=chat'
      }
      break;
    } else {
      if (window.location.search == '?continue=chat') {
        window.location.search = '?continue=login'
      }
    }
  }
}

function logout() {
  document.cookie = 'sessionData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.search = '?continue=login'
}

function sign_up() {
  if (email.value == 0) {
    error_email.innerHTML = 'Email is empty!'
    email_errors = true;
    return;
  }
  else if (!email.value.includes('@')) {
      error_email.innerHTML = 'Email is incorrect!'
      email_errors = true;
      return
  } else if (email.value.length - 9 < 6) {
    error_email.innerHTML = 'Email is too short!';
    email_errors = true;
    return
  } else {
      email_errors = false;
  }
  if (nickname.value == 0) {
    error_email.innerHTML = 'Nickname is empty!'
    nickname_errors = true;
    return;
  }
  else if (nickname.value.length < 3) {
    error_email.innerHTML = 'Nickname is too short! min. 3characters';
    nickname_errors = true;
    return;
  } else {
    nickname_errors = false;
  }
  if (password.value == 0) {
      error_email.innerHTML = 'Password is empty!'
      password_errors = true;
      return;
  }
  else if (password.value.length < 8) {
      error_email.innerHTML = 'Password is to short! min. 8characters';
      password_errors = true;
      return
  } else {
      password_errors = false;
  }
  register();

}
function sign_in() {
  if (email_in.value == 0) {
    error_email_in.innerHTML = 'Email is empty!'
    email_errors = true;
    return;
  }
  else if (!email_in.value.includes('@')) {
      error_email_in.innerHTML = 'Email is incorrect!'
      email_errors = true;
      return
  } else if (email_in.value.length - 9 < 6) {
    error_email_in.innerHTML = 'Email is too short!';
    email_errors = true;
    return
  } else {
      email_errors = false;
  }
  if (password_in.value == 0) {
      error_email_in.innerHTML = 'Password is empty!'
      password_errors = true;
      return;
  }
  else if (password_in.value.length < 8) {
      error_email_in.innerHTML = 'Password is to short! min. 8characters';
      password_errors = true;
      return
  } else {
      password_errors = false;
  }

  login();
}

const messageCount = document.getElementById('messageCount');

window.setInterval(() => {

  messageCount.innerText = `${messageInput.value.length}/${messageInput.maxLength}`
  if (email_errors == true || password_errors == true || nickname_errors == true) {
    error_email.style.opacity = 1;
    error_email_in.style.opacity = 1;
  } else {
    error_email.style.opacity = 0;
    error_email_in.style.opacity = 0;
  }
})
window.addEventListener("keydown", (e) => {
  if (window.location.search == '?continue=chat') {
    if (e.code === "Enter") {
      sendMessage();
    }
  }
});



const imageInput = document.querySelector("#image-input");

imageInput.addEventListener("change", e => {
  const file = imageInput.files[0];
  const reader = new FileReader;
  var cookieData = document.cookie.split(";").map(c => c.trim());
    for (var i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
      }}

  reader.addEventListener("load", () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes()
    let currentDate = `${day}.${month}.${year} ${hour}:${minutes}`;
    const message = { email: sessionData.email, nickname: sessionData.nickname, type: "image", url: reader.result, time: currentDate };
    firebase.database().ref(`groups/${currentGroup}/`).push(message);
  })
  reader.readAsDataURL(file);
})


window.setInterval(() => {
  if (window.location.search == '?continue=chat') {
    var cookieData = document.cookie.split(";").map(c => c.trim());
    for (var i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
      }}
    if (sessionData.email == 'codeadiksuu@gmail.com') {
      messageInput.maxLength = 999;
    }
  }
})




const makeGroup = document.querySelector('#makeGroup')

function changeGroup() {
  if (makeGroup.value != '') {
    var user = auth.currentUser
    var database_ref = database.ref()
    var userId = firebase.auth().currentUser.uid;
    var user_data = {
            group: makeGroup.value,
        }
        database_ref.child('users/' + user.uid).update(user_data)
      firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
        const username = snapshot.val().nickname;
        const email = snapshot.val().email;
        const group = snapshot.val().group;
          document.cookie = "sessionData=" + JSON.stringify({nickname: username, email: email, group: group, access: "false"}) + ";max-age=3600";
          location.reload()
      })
  }
}
function globalGroup() {
  var user = auth.currentUser
  var database_ref = database.ref()
  var userId = firebase.auth().currentUser.uid;
  var user_data = {
          group: 'global',
      }
      database_ref.child('users/' + user.uid).update(user_data)
    firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      const username = snapshot.val().nickname;
      const email = snapshot.val().email;
      const group = snapshot.val().group;
        document.cookie = "sessionData=" + JSON.stringify({nickname: username, email: email, group: group, access: "false"}) + ";max-age=3600";
        location.reload()
    })
}

const groups = document.querySelector('#groups')

function toggleGroups() {
  groups.classList.toggle('show')
}

const passwordCreate = document.querySelector('#passwordCreate')
const createPasswordBox = document.querySelector('.createPassword')
const error_password_group = document.querySelector('#error_password_group')

function submitPasswordGroup() {
  if (passwordCreate.placeholder != 'Enter a password...') {
    if (passwordCreate.value != '') { 
      const dbRef = firebase.database().ref(`groups/${currentGroup}/info`);  
      dbRef.update({
        password: passwordCreate.value
      });  
      createPasswordBox.classList.remove('show')
    } else {
      const dbRef = firebase.database().ref(`groups/${currentGroup}/info`);  
      dbRef.update({
        password: ''
      }); 
      createPasswordBox.classList.remove('show')
    }
  } else {
    firebase.database().ref(`groups/${currentGroup}/info`).once('value').then(function(snapshot) {
      const password = snapshot.val().password;
      if (passwordCreate.value == password) {
        createPasswordBox.classList.remove('show')
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
            const username = snapshot.val().nickname;
            const email = snapshot.val().email;
            const group = snapshot.val().group;
            document.cookie = "sessionData=" + JSON.stringify({nickname: username, email: email, group: group, access: "true"}) + ";max-age=3600";
              location.reload()
            })
      } else {
        error_password_group.classList.add('show')
      }
    })
  }
}
window.addEventListener("keydown", (e) => {
  if (window.location.search == '?continue=chat') {
    if (e.code === "Enter") {
      submitPasswordGroup()
    }
  }
});
const passwordConfirmBtn = document.querySelector('#passwordConfirmBtn')

passwordConfirmBtn.addEventListener('click', function() {
  submitPasswordGroup()
})


if (window.location.search == '?continue=chat') {
  var cookieData = document.cookie.split(";").map(c => c.trim());
    for (var i = 0; i < cookieData.length; i++) {
      if (cookieData[i].startsWith("sessionData=")) {
        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
      }}  
  const dbRef = firebase.database().ref(`groups/${currentGroup}/info`);    
dbRef.once('value', snapshot => {
  if (!snapshot.exists()) {
    dbRef.set({
      admin: sessionData.nickname
    });  
    createPasswordBox.classList.add('show')
  } 
  else {
    firebase.database().ref(`groups/${currentGroup}/info`).once('value').then(function(snapshot) {
      const admin = snapshot.val().admin;
      if (sessionData.nickname != admin) {
        passwordCreate.placeholder = 'Enter a password...'
        createPasswordBox.classList.add('show')
      } else if (sessionData.nickname == admin && sessionData.access == 'false') {
        var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
        const username = snapshot.val().nickname;
        const email = snapshot.val().email;
        const group = snapshot.val().group;
        document.cookie = "sessionData=" + JSON.stringify({nickname: username, email: email, group: group, access: "true"}) + ";max-age=3600";
          location.reload()
        })
      }
    });
  }
});  
}

const scroll_down = document.querySelector('.scroll_down')

scroll_down.addEventListener('click', function() {
  messageContainer.scrollTop = messageContainer.scrollHeight - 320
})

const messagesOnGroup = document.querySelector('#messagesOnGroup')

window.setInterval(() => {
  if (groups.classList.contains('show')) {
    let searchedGroup = makeGroup.value
    let messageRef = firebase.database().ref(`groups/${searchedGroup}`);
    let messageRefInfo = firebase.database().ref(`groups/${searchedGroup}/info`);

    if (makeGroup.value == '') {
      return;
    }

    messageRef.on('value', (snapshot) => {
      let messagesCount = snapshot.numChildren() - 1;
      firebase.database().ref(`groups/${searchedGroup}`).once('value').then(function(snapshot) {
        messageRefInfo.once('value', snapshot => {
          if (snapshot.exists()) {
            const groupAdmin = snapshot.val().admin;
            if (messagesCount >= 0) {
              messagesOnGroup.innerHTML = `Messages count: ${messagesCount} | Owner: ${groupAdmin}`;
            } else {
              messagesOnGroup.innerHTML = `Messages count: 0 | Owner ${groupAdmin}`;
            }
          } else { 
            messagesOnGroup.innerHTML = `Messages count: 0 | Owner: None`;
          }
        })
      })
    });
  }

  if (window.location.search == '?continue=chat') {
    if (sessionData.access == 'true') {
      createPasswordBox.classList.remove('show');
    }
  }

  if (messageContainer.scrollTop < messageContainer.scrollHeight - 500) {
    scroll_down.classList.add('show')
  } else {
    scroll_down.classList.remove('show')
  }
  if (window.location.search == '?continue=chat') {
    if (sessionData.group == 'global' && sessionData.access == 'false' || sessionData.access == undefined) {
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
          const username = snapshot.val().nickname;
          const email = snapshot.val().email;
          const group = snapshot.val().group;
          document.cookie = "sessionData=" + JSON.stringify({nickname: username, email: email, group: group, access: "true"}) + ";max-age=3600";
            location.reload()
      })
    }
  }
},100)