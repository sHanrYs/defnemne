const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
  return
}
if (args[0] === 'kapat') {
  db.delete(`kufur_${message.guild.id}`)
message.channel.send('Başarılı Şekilde `Kapatıldı.`')
return
}
  message.channel.send('Lüten `aç` yada `kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};