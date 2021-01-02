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
        `**${message.author.username}: Umarım Tadına bakmışsındır**`
    )
    .setImage(
      "https://cdn.glitch.com/a3710c3e-ce88-4182-9aff-51c66b31fe65%2Fdc.gif?v=1607770070840"
    );

  return message.channel.send(CrewCodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nahçek","nah"],
  permLevel: 0
};

exports.help = {
  name: "nah-çek",
  description: " nah Atarsınız işte ",
  usage: "-nah-çek"
};
