const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = async (client, message) => {


  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Strom | Çekiliş `)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"
    )
    .setDescription(
      `🎁 Strom Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Başlat__`,
      `🎉  \`${prefix}başlat\` Sunucudan Bir Çekiliş Başlatabilirsin.`,
      true
    )
   .addField(
      `__Yenile__`,
      `🎉  \`${prefix}reroll\` Çekilişi Yeniden Çeker.`,
      true
    )
    .addField(
      `__Sonlandır__`,
      `🎊 \`${prefix}sonlandır\` Çekilişi Bitir.`,
      true
    )
   
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | QualitySel İletişim Bilgileri.`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-sistemi'],
  permLevel: 0
};

exports.help = {
  name: "çekiliş",
  description: "Çekiliş Menüsü",
  usage: "çekiliş"
};
