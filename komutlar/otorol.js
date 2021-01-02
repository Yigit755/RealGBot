const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Real bot Otorol komut desteği`)
    .setFooter(message.author.username)
    .setColor('RANDOM')
    .setImage('https://i.gyazo.com/425d2374950bc09caff1fa5199edbf08.gif')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)
    .setFooter("Otorolü kurmak için ilk önce Real adlı rolü verilecek rolün üstüne alın. Ardından verilecek rolü etiketleyin. Eğer etiketleyemiyorsanız. Ayarlar/Roller/Verilecek rol/Rol etiketleme iznini aktif edin. Ve şu komutu kullanarak çalıştırın -otorol-ayarla @rol #kanal")

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'otorol'
};