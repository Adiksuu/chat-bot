function changeForm(form: number) {
    if (form == 0) {
        window.location.search = '?register'
    } 
    else if (form == 1) {
        window.location.search = '?login'
    }
}