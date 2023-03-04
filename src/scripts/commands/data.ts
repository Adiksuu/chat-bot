function _data() {
    const date = new Date();
    if ((date.getMonth() + 1) > 0 && (date.getMonth() + 1) < 9) {
        answer = `Aktualna data: ${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`
        if (date.getDate() > 0 && date.getDate() < 9) {
            answer = `Aktualna data: 0${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`
        }
    } else {
        answer = `Aktualna data: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }
}