const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {

  let args = message.content.split(' ').slice(1);
  let hata = args.slice(0).join(' ');
  if (hata.length < 50) return message.reply('Lütfen hatayı en az 50 harf olacak şekilde detaylıca anlatınız.')
    message.channel.send('Hatanız başarıyla bot sahibine iletildi. Hatayı bildirdiğiniz için teşekkürler.');
  
    let ally = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle(`Hata Bildirisi`)
    .addField(`Bildiren Kullanıcı`, message.author.tag)
    .addField(`Bildirilen Sunucu`, message.guild.name)
    .addField(`Bildirilen Hata`, hata)
	.setTimestamp()
    client.channels.cache.get("787361235289112586").send(ally)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bug-bildir'],
  permLevel: 0
};

exports.help = {
  name: 'hata-bildir',
  description: 'hata-bildir',
  usage: 'hata-bildir'
};