let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Tri [089516353968]
│ • Gopay  [089516353968]
│ • Dana  [089516353968]
│ • Saweria  [https://saweria.co/mall12]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6289516353968
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
