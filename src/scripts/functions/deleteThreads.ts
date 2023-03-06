function deleteThreads() {
    const userId = firebase.auth().currentUser.uid

    firebase.database().ref(`users/${userId}/threads/`).set('')
    currentThread = 1
    createThreadNow()
    threads.innerHTML = `<p class=""><i class="fa-regular fa-comment-alt"></i></p>`
    threads.children[0].classList.add('active')
    loadMessages()
}