/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {
    let tqto = `*BIG THANKS TO*
    
Terimakasih Utama Nya Teruntuk:
➸ @${`${global.owner[0]}`.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ @${'0'.split('@')[0]}

─────────────────────
• God
• My ortu
• Zivfurr / Ziv San ( Me )
• Nurutomo
• Adiwajshing
• Ariffb
• Amel
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• Mursid
• Jarot
• Tio
• Aca Mirabel
• My Crush (crushnya mal)
• Mall
• Penyedia Layanan API 
• Orang-orang yang Berdonasi
─────────────────────
`
await conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/16b154ad8a96d7ad246cb.jpg',  tqto, `Ini Ucapan Terima Kasih Untuk Orang Nya Telah Berpatisipasi

Official By @${'0'.split('@')[0]}`, 'Rules', '.rules', m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
