const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .addField(`Yapımcılar`, `
✧ 《 Shadow Oracle zed》#6427

'LORD_?'_#6666

Berkayy#0010

`)
    .addField(`Destek Sunucusu`, `[TIKLA](https://discord.gg/fr43SS2n64)`)
.setFooter(client.user.username, client.user.avatarURL())

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı','yapımcım'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "yapımcılar",
  description: "yapımcılar",
  usage: "yapımcılar"
};
