const emojis: any = [
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐คฃ'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐ฅฐ'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐ฅฒ'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐ค'
    },
    {
        emoji: '๐คฉ'
    },
    {
        emoji: '๐ค'
    },
    {
        emoji: '๐ซก'
    },
    {
        emoji: '๐คจ'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐ถ'
    },
    {
        emoji: '๐ซฅ'
    },
    {
        emoji: '๐ถโ๐ซ๏ธ'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐ฃ'
    },
    {
        emoji: '๐ฅ'
    },
    {
        emoji: '๐ฎ'
    },
    {
        emoji: '๐ค'
    },
    {
        emoji: '๐ฏ'
    },
    {
        emoji: '๐ช'
    },
    {
        emoji: '๐ซ'
    },
    {
        emoji: '๐ฅฑ'
    },
    {
        emoji: '๐ด'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐คค'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐ซค'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐ซ '
    },
    {
        emoji: '๐ค'
    },
    {
        emoji: '๐ฒ'
    },
    {
        emoji: 'โน๏ธ'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
    },
    {
        emoji: '๐'
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
            answer = `<i class="fas fa-circle-exclamation"></i> Podana emotka nie istnieje! Najwiฤksze ID emotki to: ${emojis.length - 1}`
        } else {
            answer = `Wybrana emoji to: ${emojis[selEmoji].emoji}`
        }

    }

}