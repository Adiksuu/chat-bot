System.register("app", ["firebase/app", "firebase/auth"], function (exports_1, context_1) {
    "use strict";
    var firebase, firebaseConfig, app, auth, database, storage, sign_in_box, sign_up_box, chat_box, email, nickname, password, error_email, email_in, password_in, error_email_in, email_errors, nickname_errors, password_errors, username, messageContainer, cookieData, i, messagesRef, messageInput, messageCount, imageInput, makeGroup, groups, passwordCreate, createPasswordBox, error_password_group, passwordConfirmBtn, scroll_down, messagesOnGroup;
    var __moduleName = context_1 && context_1.id;
    function register() {
        console.log('Register complete');
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var currentDate = "Day: ".concat(day, ".").concat(month, ".").concat(year, " Time: ").concat(hour, ":").concat(minutes);
        auth.createUserWithEmailAndPassword(email.value, password.value).then(function () {
            var user = auth.currentUser;
            var database_ref = database.ref();
            var user_data = {
                email: email.value,
                password: password.value,
                nickname: nickname.value,
                last_login: currentDate,
                group: 'global'
            };
            database_ref.child('users/' + user.uid).set(user_data);
            console.log(user_data.nickname);
            auth.signInWithEmailAndPassword(user_data.email, user_data.password).then(function (user) {
                if (firebase.auth().currentUser.emailVerified == false) {
                    alertMessage();
                    return;
                }
                var user = auth.currentUser;
                var database_ref = database.ref();
                var user_data = {
                    last_login: currentDate
                };
                database_ref.child('users/' + user.uid).update(user_data);
                window.location.search = "?continue=chat";
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    if (firebase.auth().currentUser.emailVerified == false) {
                        alertMessage();
                        return;
                    }
                    var userId = firebase.auth().currentUser.uid;
                    firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
                        var username = snapshot.val().nickname;
                        var email = snapshot.val().email;
                        var group = snapshot.val().group;
                        console.log("Zalogowałeś się jako " + username + "(" + email + ")");
                        document.cookie = "sessionData=" + JSON.stringify({ nickname: username, email: email, group: group }) + ";max-age=3600";
                    });
                }
            });
        })["catch"](function (error) {
            if (error.code === 'auth/email-already-in-use') {
                email_errors = true;
                error_email.innerHTML = 'This mail is already used!';
            }
            else {
                console.error(error);
            }
        });
    }
    function login() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var currentDate = "Day: ".concat(day, ".").concat(month, ".").concat(year, " Time: ").concat(hour, ":").concat(minutes);
        auth.signInWithEmailAndPassword(email_in.value, password_in.value).then(function (user) {
            var user = auth.currentUser;
            if (firebase.auth().currentUser.emailVerified == false) {
                alertMessage();
                return;
            }
            var database_ref = database.ref();
            var user_data = {
                last_login: currentDate
            };
            database_ref.child('users/' + user.uid).update(user_data);
            window.location.search = "?continue=chat";
        })["catch"](function (error) {
            if (error.code === 'auth/wrong-password') {
                password_errors = true;
                error_email_in.innerHTML = 'Wrong password!';
                return;
            }
            else if (error.code === 'auth/invalid-email') {
                email_errors = true;
                error_email_in.innerHTML = 'Invalid email!';
                return;
            }
            else {
                console.error(error);
                email_errors = false;
                password_errors = false;
            }
            console.log(error);
        });
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (firebase.auth().currentUser.emailVerified == false) {
                    alertMessage();
                    return;
                }
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
                    var username = snapshot.val().nickname;
                    var email = snapshot.val().email;
                    var group = snapshot.val().group;
                    console.log("Zalogowałeś się jako " + username + "(" + email + ")");
                    document.cookie = "sessionData=" + JSON.stringify({ nickname: username, email: email, group: group }) + ";max-age=3600";
                });
            }
        });
    }
    function alertMessage() {
        firebase.auth().currentUser.sendEmailVerification()
            .then(function () {
            // E-mail został wysłany pomyślnie
            console.log('Wysłano e-mail weryfikacyjny');
        })["catch"](function (error) {
            // Wystąpił błąd podczas wysyłania e-maila
            console.error(error);
        });
        window.alert('You must verify your mail, message has been send to your mail!');
        location.reload();
    }
    function sendMessage() {
        if ((messageInput.value.length - (messageInput.value.split(" ").length - 1)) <= 0) {
            return;
        }
        var cookieData = document.cookie.split(";").map(function (c) { return c.trim(); });
        for (var i = 0; i < cookieData.length; i++) {
            if (cookieData[i].startsWith("sessionData=")) {
                var sessionData = JSON.parse(cookieData[i].split("=")[1]);
            }
        }
        if (sessionData.access == 'false') {
            return;
        }
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var currentDate = "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hour, ":").concat(minutes);
        var message = {
            nickname: sessionData.nickname,
            email: firebase.auth().currentUser.email,
            text: messageInput.value,
            type: 'text',
            time: currentDate
        };
        if (message.type === 'text') {
            messagesRef.push(message);
        }
        else if (message.type === 'image') {
        }
        messageInput.value = "";
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
    function checkCookie() {
        var cookieData = document.cookie.split(";").map(function (c) { return c.trim(); });
        for (var i = 0; i < cookieData.length; i++) {
            if (cookieData[i].startsWith("sessionData=")) {
                var sessionData = JSON.parse(cookieData[i].split("=")[1]);
                console.log("Zalogowano jako: " + sessionData.nickname);
                if (window.location.search == '?continue=login' || window.location.search == '?continue=register') {
                    window.location.search = '?continue=chat';
                }
                break;
            }
            else {
                if (window.location.search == '?continue=chat') {
                    window.location.search = '?continue=login';
                }
            }
        }
    }
    function logout() {
        document.cookie = 'sessionData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.search = '?continue=login';
    }
    function sign_up() {
        if (email.value == 0) {
            error_email.innerHTML = 'Email is empty!';
            email_errors = true;
            return;
        }
        else if (!email.value.includes('@')) {
            error_email.innerHTML = 'Email is incorrect!';
            email_errors = true;
            return;
        }
        else if (email.value.length - 9 < 6) {
            error_email.innerHTML = 'Email is too short!';
            email_errors = true;
            return;
        }
        else {
            email_errors = false;
        }
        if (nickname.value == 0) {
            error_email.innerHTML = 'Nickname is empty!';
            nickname_errors = true;
            return;
        }
        else if (nickname.value.length < 3) {
            error_email.innerHTML = 'Nickname is too short! min. 3characters';
            nickname_errors = true;
            return;
        }
        else {
            nickname_errors = false;
        }
        if (password.value == 0) {
            error_email.innerHTML = 'Password is empty!';
            password_errors = true;
            return;
        }
        else if (password.value.length < 8) {
            error_email.innerHTML = 'Password is to short! min. 8characters';
            password_errors = true;
            return;
        }
        else {
            password_errors = false;
        }
        register();
    }
    function sign_in() {
        if (email_in.value == 0) {
            error_email_in.innerHTML = 'Email is empty!';
            email_errors = true;
            return;
        }
        else if (!email_in.value.includes('@')) {
            error_email_in.innerHTML = 'Email is incorrect!';
            email_errors = true;
            return;
        }
        else if (email_in.value.length - 9 < 6) {
            error_email_in.innerHTML = 'Email is too short!';
            email_errors = true;
            return;
        }
        else {
            email_errors = false;
        }
        if (password_in.value == 0) {
            error_email_in.innerHTML = 'Password is empty!';
            password_errors = true;
            return;
        }
        else if (password_in.value.length < 8) {
            error_email_in.innerHTML = 'Password is to short! min. 8characters';
            password_errors = true;
            return;
        }
        else {
            password_errors = false;
        }
        login();
    }
    function changeGroup() {
        if (makeGroup.value != '') {
            var user = auth.currentUser;
            var database_ref = database.ref();
            var userId = firebase.auth().currentUser.uid;
            var user_data = {
                group: makeGroup.value
            };
            database_ref.child('users/' + user.uid).update(user_data);
            firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
                var username = snapshot.val().nickname;
                var email = snapshot.val().email;
                var group = snapshot.val().group;
                document.cookie = "sessionData=" + JSON.stringify({ nickname: username, email: email, group: group, access: "false" }) + ";max-age=3600";
                location.reload();
            });
        }
    }
    function globalGroup() {
        var user = auth.currentUser;
        var database_ref = database.ref();
        var userId = firebase.auth().currentUser.uid;
        var user_data = {
            group: 'global'
        };
        database_ref.child('users/' + user.uid).update(user_data);
        firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
            var username = snapshot.val().nickname;
            var email = snapshot.val().email;
            var group = snapshot.val().group;
            document.cookie = "sessionData=" + JSON.stringify({ nickname: username, email: email, group: group, access: "false" }) + ";max-age=3600";
            location.reload();
        });
    }
    function toggleGroups() {
        groups.classList.toggle('show');
    }
    function submitPasswordGroup() {
        if (passwordCreate.placeholder != 'Enter a password...') {
            if (passwordCreate.value != '') {
                var dbRef = firebase.database().ref("groups/".concat(currentGroup, "/info"));
                dbRef.update({
                    password: passwordCreate.value
                });
                createPasswordBox.classList.remove('show');
            }
            else {
                var dbRef = firebase.database().ref("groups/".concat(currentGroup, "/info"));
                dbRef.update({
                    password: ''
                });
                createPasswordBox.classList.remove('show');
            }
        }
        else {
            firebase.database().ref("groups/".concat(currentGroup, "/info")).once('value').then(function (snapshot) {
                var password = snapshot.val().password;
                if (passwordCreate.value == password) {
                    createPasswordBox.classList.remove('show');
                    var userId = firebase.auth().currentUser.uid;
                    firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
                        var username = snapshot.val().nickname;
                        var email = snapshot.val().email;
                        var group = snapshot.val().group;
                        document.cookie = "sessionData=" + JSON.stringify({ nickname: username, email: email, group: group, access: "true" }) + ";max-age=3600";
                        location.reload();
                    });
                }
                else {
                    error_password_group.classList.add('show');
                }
            });
        }
    }
    return {
        setters: [
            function (firebase_1) {
                firebase = firebase_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            firebaseConfig = {
                apiKey: "AIzaSyBhiGDohAGr92ybIjTttUSEYiAdY2ERkus",
                authDomain: "chatapp-f3743.firebaseapp.com",
                databaseURL: "https://chatapp-f3743-default-rtdb.firebaseio.com",
                projectId: "chatapp-f3743",
                storageBucket: "chatapp-f3743.appspot.com",
                messagingSenderId: "1004390001447",
                appId: "1:1004390001447:web:46f7b333b9c55189275702"
            };
            app = firebase.initializeApp(firebaseConfig);
            // Initialize Firebase
            auth = firebase.auth();
            database = firebase.database();
            storage = firebase.storage();
            sign_in_box = document.querySelector(".sign_in");
            sign_up_box = document.querySelector(".sign_up");
            chat_box = document.querySelector(".chat");
            window.setInterval(function () {
                if (window.location.search == "?continue=login") {
                    sign_in_box.classList.add("show");
                    sign_up_box.classList.remove("show");
                    chat_box.classList.remove('show');
                }
                else if (window.location.search == "?continue=register") {
                    sign_in_box.classList.remove("show");
                    sign_up_box.classList.add("show");
                    chat_box.classList.remove('show');
                }
                else if (window.location.search == "?continue=chat") {
                    chat_box.classList.add('show');
                }
                if (window.location.search == "") {
                    window.location.search = "?continue=login";
                    checkCookie();
                }
            });
            email = document.querySelector("#email");
            nickname = document.querySelector("#nickname");
            password = document.querySelector("#password");
            error_email = document.querySelector('#error');
            email_in = document.querySelector("#email_in");
            password_in = document.querySelector("#password_in");
            error_email_in = document.querySelector('#error_in');
            email_errors = false;
            nickname_errors = false;
            password_errors = false;
            messageContainer = document.getElementById('chat_messages');
            cookieData = document.cookie.split(";").map(function (c) { return c.trim(); });
            for (i = 0; i < cookieData.length; i++) {
                if (cookieData[i].startsWith("sessionData=")) {
                    var sessionData = JSON.parse(cookieData[i].split("=")[1]);
                    currentGroup = sessionData.group;
                }
                else {
                    currentGroup = 'global';
                }
            }
            messagesRef = database.ref("groups/".concat(currentGroup, "/"));
            messagesRef.on("child_added", function (data) {
                var message = data.val();
                var messageElement = document.createElement("div");
                if (message.type === 'text') {
                    messageElement.classList.add('message-sender');
                    messageElement.innerHTML = "<img src=\"https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png\" alt=\"\">\n        <div class=\"message\">\n        <p>".concat(message.nickname, " - ").concat(message.time, "</p>\n        <span>").concat(message.text, "</span>\n        </div>");
                }
                if (message.type === 'image') {
                    if (message.url.includes('data:image') == true) {
                        messageElement.classList.add('message-sender');
                        messageElement.innerHTML = "<img src=\"https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png\" alt=\"\">\n          <div class=\"message\">\n          <p>".concat(message.nickname, " - ").concat(message.time, "</p>\n          <span><img src=\"").concat(message.url, "\"></img></span>\n          </div>");
                    }
                    else if (message.url.includes('data:video') == true) {
                        messageElement.classList.add('message-sender');
                        messageElement.innerHTML = "<img src=\"https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png\" alt=\"\">\n          <div class=\"message\">\n          <p>".concat(message.nickname, " - ").concat(message.time, "</p>\n          <span><video autoplay controls loop src=\"").concat(message.url, "\"></video></span>\n          </div>");
                    }
                }
                messageContainer.appendChild(messageElement);
                var deleteIcon = document.createElement("i");
                deleteIcon.classList.add("fas", "fa-trash-alt");
                deleteIcon.style.display = "none";
                var cookieData = document.cookie.split(";").map(function (c) { return c.trim(); });
                for (var i = 0; i < cookieData.length; i++) {
                    if (cookieData[i].startsWith("sessionData=")) {
                        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
                    }
                }
                if (window.location.search == '?continue=chat') {
                    firebase.database().ref("groups/".concat(currentGroup, "/info")).once('value').then(function (snapshot) {
                        var groupAdmin = snapshot.val().admin;
                        if (sessionData.nickname == groupAdmin || sessionData.email == 'codeadiksuu@gmail.com') {
                            messageElement.appendChild(deleteIcon);
                        }
                    });
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
                    firebase.database().ref("groups/".concat(currentGroup, "/")).child(data.key).remove();
                    location.reload();
                });
            });
            messageInput = document.getElementById('message_input');
            messageCount = document.getElementById('messageCount');
            window.setInterval(function () {
                messageCount.innerText = "".concat(messageInput.value.length, "/").concat(messageInput.maxLength);
                if (email_errors == true || password_errors == true || nickname_errors == true) {
                    error_email.style.opacity = 1;
                    error_email_in.style.opacity = 1;
                }
                else {
                    error_email.style.opacity = 0;
                    error_email_in.style.opacity = 0;
                }
            });
            window.addEventListener("keydown", function (e) {
                if (window.location.search == '?continue=chat') {
                    if (e.code === "Enter") {
                        sendMessage();
                    }
                }
            });
            imageInput = document.querySelector("#image-input");
            imageInput.addEventListener("change", function (e) {
                var file = imageInput.files[0];
                var reader = new FileReader;
                var cookieData = document.cookie.split(";").map(function (c) { return c.trim(); });
                for (var i = 0; i < cookieData.length; i++) {
                    if (cookieData[i].startsWith("sessionData=")) {
                        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
                    }
                }
                reader.addEventListener("load", function () {
                    var date = new Date();
                    var day = date.getDate();
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    var hour = date.getHours();
                    var minutes = date.getMinutes();
                    var currentDate = "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hour, ":").concat(minutes);
                    var message = { email: sessionData.email, nickname: sessionData.nickname, type: "image", url: reader.result, time: currentDate };
                    firebase.database().ref("groups/".concat(currentGroup, "/")).push(message);
                });
                reader.readAsDataURL(file);
            });
            window.setInterval(function () {
                if (window.location.search == '?continue=chat') {
                    var cookieData = document.cookie.split(";").map(function (c) { return c.trim(); });
                    for (var i = 0; i < cookieData.length; i++) {
                        if (cookieData[i].startsWith("sessionData=")) {
                            var sessionData = JSON.parse(cookieData[i].split("=")[1]);
                        }
                    }
                    if (sessionData.email == 'codeadiksuu@gmail.com') {
                        messageInput.maxLength = 999;
                    }
                }
            });
            makeGroup = document.querySelector('#makeGroup');
            groups = document.querySelector('#groups');
            passwordCreate = document.querySelector('#passwordCreate');
            createPasswordBox = document.querySelector('.createPassword');
            error_password_group = document.querySelector('#error_password_group');
            window.addEventListener("keydown", function (e) {
                if (window.location.search == '?continue=chat') {
                    if (e.code === "Enter") {
                        submitPasswordGroup();
                    }
                }
            });
            passwordConfirmBtn = document.querySelector('#passwordConfirmBtn');
            passwordConfirmBtn.addEventListener('click', function () {
                submitPasswordGroup();
            });
            if (window.location.search == '?continue=chat') {
                var cookieData = document.cookie.split(";").map(function (c) { return c.trim(); });
                for (var i = 0; i < cookieData.length; i++) {
                    if (cookieData[i].startsWith("sessionData=")) {
                        var sessionData = JSON.parse(cookieData[i].split("=")[1]);
                    }
                }
                var dbRef_1 = firebase.database().ref("groups/".concat(currentGroup, "/info"));
                dbRef_1.once('value', function (snapshot) {
                    if (!snapshot.exists()) {
                        dbRef_1.set({
                            admin: sessionData.nickname
                        });
                        createPasswordBox.classList.add('show');
                    }
                    else {
                        firebase.database().ref("groups/".concat(currentGroup, "/info")).once('value').then(function (snapshot) {
                            var admin = snapshot.val().admin;
                            if (sessionData.nickname != admin) {
                                passwordCreate.placeholder = 'Enter a password...';
                                createPasswordBox.classList.add('show');
                            }
                            else if (sessionData.nickname == admin && sessionData.access == 'false') {
                                var userId = firebase.auth().currentUser.uid;
                                firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
                                    var username = snapshot.val().nickname;
                                    var email = snapshot.val().email;
                                    var group = snapshot.val().group;
                                    document.cookie = "sessionData=" + JSON.stringify({ nickname: username, email: email, group: group, access: "true" }) + ";max-age=3600";
                                    location.reload();
                                });
                            }
                        });
                    }
                });
            }
            scroll_down = document.querySelector('.scroll_down');
            scroll_down.addEventListener('click', function () {
                messageContainer.scrollTop = messageContainer.scrollHeight - 320;
            });
            messagesOnGroup = document.querySelector('#messagesOnGroup');
            window.setInterval(function () {
                if (groups.classList.contains('show')) {
                    var searchedGroup_1 = makeGroup.value;
                    var messageRef = firebase.database().ref("groups/".concat(searchedGroup_1));
                    var messageRefInfo_1 = firebase.database().ref("groups/".concat(searchedGroup_1, "/info"));
                    if (makeGroup.value == '') {
                        return;
                    }
                    messageRef.on('value', function (snapshot) {
                        var messagesCount = snapshot.numChildren() - 1;
                        firebase.database().ref("groups/".concat(searchedGroup_1)).once('value').then(function (snapshot) {
                            messageRefInfo_1.once('value', function (snapshot) {
                                if (snapshot.exists()) {
                                    var groupAdmin = snapshot.val().admin;
                                    if (messagesCount >= 0) {
                                        messagesOnGroup.innerHTML = "Messages count: ".concat(messagesCount, " | Owner: ").concat(groupAdmin);
                                    }
                                    else {
                                        messagesOnGroup.innerHTML = "Messages count: 0 | Owner ".concat(groupAdmin);
                                    }
                                }
                                else {
                                    messagesOnGroup.innerHTML = "Messages count: 0 | Owner: None";
                                }
                            });
                        });
                    });
                }
                if (window.location.search == '?continue=chat') {
                    if (sessionData.access == 'true') {
                        createPasswordBox.classList.remove('show');
                    }
                }
                if (messageContainer.scrollTop < messageContainer.scrollHeight - 500) {
                    scroll_down.classList.add('show');
                }
                else {
                    scroll_down.classList.remove('show');
                }
                if (window.location.search == '?continue=chat') {
                    if (sessionData.group == 'global' && sessionData.access == 'false' || sessionData.access == undefined) {
                        var userId = firebase.auth().currentUser.uid;
                        firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
                            var username = snapshot.val().nickname;
                            var email = snapshot.val().email;
                            var group = snapshot.val().group;
                            document.cookie = "sessionData=" + JSON.stringify({ nickname: username, email: email, group: group, access: "true" }) + ";max-age=3600";
                            location.reload();
                        });
                    }
                }
            }, 100);
        }
    };
});
