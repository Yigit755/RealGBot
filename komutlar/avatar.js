const Discord = require('discord.js');
  const db = require('quick.db')
  
  
  
exports.run = async (client, message, args) => {
      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

 const avatar = new Discord.MessageEmbed()
        .setColor("RANDOM")
       .setAuthor("İşte sana avatarın!,")
        .setImage(user.avatarURL())
    message.channel.send(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp","av"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
   usage:'-avatar <@kişi-etiket> veya -avatar'
}