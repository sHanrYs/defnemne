const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {


  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

var prefix = ayarlar.prefix

message.channel.send(new Discord.MessageEmbed()
.setColor('#FF000')
.setDescription(`**Wild Rift Bot Yardım Menüsüne Hoşgeldiniz.**
**
ANA KOMUTLAR 
__________________

.yardım | Tüm Komutları Sıralar.
.ban  | Etiketlediğiniz Kişiyi Banlar
.botbilgi | Botun bilgilerini gösterir.
.davet | Botun davet linkini atar.
.emojikoruma | Sunucunuzdaki Emojileri Korur.
.kanalkoruma | Sunucunuzdaki Kanalları Korur.
.kick | Etiketlediğiniz Kişiyi Banlar.
.küfürengel | Chatteki küfürleri engeller.
.reklamengel | Chatteki reklamları engeller.
.ping | Botun pingini gösterir.
.rol-koruma | Sunucunuzdaki Rolleri korur.
.sil | Belirttiğiniz sayıda mesajları siler.
.unban | Banladığınız kişinin banını kaldırır.
.slowmode | Yavaş modu aktif eder.

**`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ' ')
)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botta ki Komutları Gösterir.',
  usage: 'yardım'
};