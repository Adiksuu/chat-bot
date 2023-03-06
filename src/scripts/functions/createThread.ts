const threads: HTMLDivElement = document.querySelector('.threads')

function createThreadNow() {
    let thread = document.createElement('p');

    thread.innerHTML = `<i class="fa-regular fa-comment-alt"></i>`

    for (let index = 0; index < threads.children.length; index++) {
        threads.children[index].classList.remove('active')
    }

    // thread.classList.add('active')

    threads.appendChild(thread)
    threads.scrollTop = threads.scrollHeight
    // currentThread++
    reloadThreads()
    threadDb()
}
function createThread() {
    let thread = document.createElement('p');

    thread.innerHTML = `<i class="fa-regular fa-comment-alt"></i>`

    threads.appendChild(thread)
    threads.scrollTop = threads.scrollHeight
    currentThread = threads.children.length
    reloadThreads()
    threadDb()
    loadMessages()
    for (let index = 0; index < threads.children.length; index++) {
        threads.children[index].classList.remove('active')
    }
    let thActive = currentThread - 1
    threads.children[thActive].classList.add('active')
}
function createThreadEmpty() {
    let thread = document.createElement('p');

    thread.innerHTML = `<i class="fa-regular fa-comment-alt"></i>`

    threads.appendChild(thread)
    threads.scrollTop = threads.scrollHeight
}

function threadDb() {
    const userId = firebase.auth().currentUser.uid

    const threadInfo: any = {
        id: currentThread
    }

    firebase.database().ref(`users/${userId}/threads/thread_${currentThread}`).update(threadInfo)

}