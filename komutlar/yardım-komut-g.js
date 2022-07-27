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
    .setTitle(` **Strom** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
  **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
 
  <a:rainbow:855248569136578570> **s!v11tov12**\`komutunuzu v11 den v12 ye çevirir.\` \n
  <a:rainbow:855248569136578570> **s!v12tov13**\`komutunuzu v12 den v13 ye çevirir.\` \n
`
    
    
  )
    .setFooter( "Strom / Discord'da Yeni Devrim!", client.user.avatarURL())
  return message.channel.send(embed);

      
     
      
      }


  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardımkomut","yardım-komut","komutyardım","komut-yardım"],
  permLevel: 0
};

exports.help = {
  name: "komut-yardıms",
  description: "a!davet-sistemi Menüsü",
  usage: "komut-yardım"
};
