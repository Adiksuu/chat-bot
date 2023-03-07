const emojis: any = [
    {
        emoji: '😀'
    },
    {
        emoji: '😁'
    },
    {
        emoji: '😂'
    },
    {
        emoji: '🤣'
    },
    {
        emoji: '😅'
    },
    {
        emoji: '😆'
    },
    {
        emoji: '😉'
    },
    {
        emoji: '😊'
    },
    {
        emoji: '😋'
    },
    {
        emoji: '😎'
    },
    {
        emoji: '😍'
    },
    {
        emoji: '😘'
    },
    {
        emoji: '🥰'
    },
    {
        emoji: '😗'
    },
    {
        emoji: '😙'
    },
    {
        emoji: '🥲'
    },
    {
        emoji: '😚'
    },
    {
        emoji: '🙂'
    },
    {
        emoji: '🤗'
    },
    {
        emoji: '🤩'
    },
    {
        emoji: '🤔'
    },
    {
        emoji: '🫡'
    },
    {
        emoji: '🤨'
    },
    {
        emoji: '😐'
    },
    {
        emoji: '😑'
    },
    {
        emoji: '😶'
    },
    {
        emoji: '🫥'
    },
    {
        emoji: '😶‍🌫️'
    },
    {
        emoji: '🙄'
    },
    {
        emoji: '😏'
    },
    {
        emoji: '😣'
    },
    {
        emoji: '😥'
    },
    {
        emoji: '😮'
    },
    {
        emoji: '🤐'
    },
    {
        emoji: '😯'
    },
    {
        emoji: '😪'
    },
    {
        emoji: '😫'
    },
    {
        emoji: '🥱'
    },
    {
        emoji: '😴'
    },
    {
        emoji: '😌'
    },
    {
        emoji: '😛'
    },
    {
        emoji: '😜'
    },
    {
        emoji: '😝'
    },
    {
        emoji: '🤤'
    },
    {
        emoji: '😒'
    },
    {
        emoji: '😓'
    },
    {
        emoji: '😔'
    },
    {
        emoji: '😕'
    },
    {
        emoji: '🫤'
    },
    {
        emoji: '🙃'
    },
    {
        emoji: '🫠'
    },
    {
        emoji: '🤑'
    },
    {
        emoji: '😲'
    },
    {
        emoji: '☹️'
    },
    {
        emoji: '🙁'
    },
    {
        emoji: '😖'
    },
    {
        emoji: '😞'
    },
]

function _emoji(getEmoji: string) {
    let emojiNumber: number = Math.floor(Math.random() * (emojis.length + 1)) 

    getEmoji = getEmoji.substring(7)
    
    if (getEmoji == '') {
        let selEmoji = emojis[emojiNumber].emoji
        answer = `Wylosowana emoji to: ${selEmoji}`
    } else {
        let selEmoji = parseInt(getEmoji)

        if (selEmoji > (emojis.length - 1)) {
            answer = `<i class="fas fa-circle-exclamation"></i> Podana emotka nie istnieje! Największe ID emotki to: ${emojis.length - 1}`
        } else {
            answer = `Wybrana emoji to: ${emojis[selEmoji].emoji}`
        }

    }

}