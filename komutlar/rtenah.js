const Discord = require("discord.js");

exports.run = function(client, message) {
 
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const CrewCodeetiketlenenkisi = message.mentions.users.first();

  if (!CrewCodeetiketlenenkisi)
    return message.channel.send(
      "**Birisini etiketlemelisin!**"
    );

  const CrewCodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${CrewCodeetiketlenenkisi}` +
        `**RTE: **`
    )
    .setImage(
      "https://i.hizliresim.com/v6xom8.jpg"
    );

  return message.channel.send(CrewCodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rten","rtenah"],
  permLevel: 0
};

exports.help = {
  name: "rte-nah",
  description: " rte Atarsınız işte ",
  usage: "-rte-nah"
};
