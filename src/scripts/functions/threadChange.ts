let threadAll = document.querySelectorAll('.threads p')

function reloadThreads() {
    threadAll = document.querySelectorAll('.threads p')
    threadAll.forEach((p, index) => {
        p.addEventListener('click', () => {
            currentThread = index + 1
            for (let index = 0; index < threads.children.length; index++) {
                threads.children[index].classList.remove('active')
            }
            loadMessages()
            window.location.reload()
        })
    })
}