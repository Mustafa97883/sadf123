const Strom = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  const DBL = require('dblapi.js')

  let prefix  = ayarlar.prefix

const yardım = new Strom.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Strom Yardım`)
.setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
🔧 \`${prefix}ban\:  Belirttiğiniz Üyeyi Sunucudan Yasaklar\`\n
🔧 \`${prefix}nuke\:  Kanaldaki bütün mesajları siler\`\n
🔧 \`${prefix}otorol-sistemi\`otorol komutlarını gösterir\`\n
🔧 \`${prefix}ototag\:  Etiketlediğiniz tagı her gelen üyeye verir\`\n
🔧 \`${prefix}sunucutanıt\:  Sunucunuzu destek sunucusunda tanıtır.\`\n
🔧 \`${prefix}sayaç-ayarla\:  Sunucunuza sayaç ayarlarsınız.\`\n
🔧 \`${prefix}kurallar\:  Sunucu için kurallar atar.\`\n
🔧 \`${prefix}slowmode\:  sohbet kanalına slowmode atarsınız.\`\n
🔧 \`${prefix}servericon\:  sunucu iconunu gösterir.\`\n
🔧 \`${prefix}rank\:  Seviyenizi gösterir.\`\n
🔧 \`${prefix}sohbet-aç\:  sohbet i yazılabilir hale getirir.\`\n
🔧 \`${prefix}sohbet-kapat\:  sohbet i yazılamaz hale getirir.\`\n
🔧 \`${prefix}kick-limit\:  kick limiti ayarlarsınız.\`\n
🔧 \`${prefix}ban-limit\: ban limiti ayarlarsınız.\`\n
🔧 \`${prefix}oylama\: oylama.\`\n
🔧 \`${prefix}çoklu-oylama\:  şıklı oylama.\`\n
🔧 \`${prefix}hesapla\:  Matematik işlemi.\`\n
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

      
      }

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['mod',"moderasyon"], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon-sistemi",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'moderasyonhelp'
};