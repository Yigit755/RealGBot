const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (message.channel.type !== 'dm') {
    const yenilikler = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Bota Yapılan Yenilikler:`)
    .addField(`1-Yetkilerim kısmı yenilendi! \n`,`mute sistemi eklendi. \n`)
    .addField(`2-Çekiliş \n`, `Çekiliş komutları eklendi.  \n`)
    .addField(`3-Tag \n`, `tag komutları eklendi. \n`)
    message.channel.send(yenilikler) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni',],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota Yapılan Yenilikleri Gösterir.',
  usage: 'yenilikler'
};