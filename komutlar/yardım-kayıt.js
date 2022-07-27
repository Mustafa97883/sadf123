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
    .setTitle(` **Strom Bot Kayıt Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
  **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
  <a:rainbow:855248569136578570> **s!erkek-rol**  \`erkek rolünü ayarlar.\` \n
  <a:rainbow:855248569136578570> **s!kız-rol**  \`kız rolünü ayarlar.\` \n
  <a:rainbow:855248569136578570> **s!alınacak-rol**  \`Kayıt Olunca Alınacak Rolü Ayarlar örn: Kayıtsız üye.\`\n
  <a:rainbow:855248569136578570> **s!kayıt-kanal**  \`Kayıt kanalı ayarlarsınız.\` \n
  <a:rainbow:855248569136578570> **s!kayıt-rol**  \`Kayıt görevlisini ayarlar.\` \n
  <a:rainbow:855248569136578570> **s!kayıt-ver**\`Kayıt yetkisi verir.\`\n
  <a:rainbow:855248569136578570> **s!erkek**\`erkek olarak kayıt eder. \`\n
  <a:rainbow:855248569136578570> **s!kız**\`kız olarak kayıt eder.\` \n
`
    
    
  )
    .setFooter( "Strom / Discord'da Yeni Devrim!", client.user.avatarURL())
  return message.channel.send(embed);

      
      
      }

  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtyardım","kayıt-yardım"],
  permLevel: 0
};

exports.help = {
  name: "kayıt-yardım",
  description: "a!davet-sistemi Menüsü",
  usage: "kayıt-yardım"
};
