let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *@6282287750102 Ada yang memanggil anda :V*`, m)

  conn.reply(m.chat, `
Kak Alpin⁩ (@6282287750102  ), Ada Yang Manggil anda😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6282287750102 /i
handler.command = new RegExp

module.exports = handler
