const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
 
  
  const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#d02090")
    .setTitle(` **Strom Bot otorol-sistemi Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
  **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  

  <a:rainbow:855248569136578570> **s!otorol\`sunucuya giren kişiye otomatik rol verir.\` \n
  <a:rainbow:855248569136578570> **s!otorol-sıfırla\`otorol sıfırlanır.\` \n
  <a:rainbow:855248569136578570> **s!otorol-mesaj\`otorol mesajı ayarlarsınız.\` \n
  <a:rainbow:855248569136578570> **s!otorol-mesaj-sıfırla\`otorol mesajı sıfırlarsınız.\` \n
`
    
    
  )
    .setFooter( "Strom / Discord'da Yeni Devrim!", client.user.avatarURL())
  return message.channel.send(embed);

      
     
      }


  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorol-sistemi","otorol-sistemi"],
  permLevel: 0
};

exports.help = {
  name: "otorol-sistemi",
  description: "a!davet-sistemi Menüsü",
  usage: "otorol-sistemi"
};
