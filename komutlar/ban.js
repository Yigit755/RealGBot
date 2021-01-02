const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
let banlimit = db.fetch(`plasmiccode.banlimit_${message.guild.id}`)
let banlog = db.fetch(`plasmiccode.banlog_${message.guild.id}`)
let bansayı = db.fetch(`plasmiccode.bansayı_${message.author.id}_${message.guild.id}`)

if(!banlimit) return message.channel.send(`:x: Ban Limiti Ayarlanmamış.`)
let kişi = message.mentions.users.first();
if(!kişi) return message.channel.send(`:x: Yasaklayacağın  Kullanıcıyı Etiketlemelisin.`)
let sebep = args.slice(1).join(` `)
if(!sebep) sebep = `Belirtilmemiş.`
if(bansayı >= banlimit) return message.channel.send(`:x: Yasaklama Limitine Ulaşmışsın.`)
message.guild.member(kişi).ban(sebep)
db.add(`plasmiccode.bansayı_${message.author.id}_${message.guild.id}`, 1)
  const plasmic = new Discord.MessageEmbed()
 .setTitle(`Plasmic Code`)
 .setThumbnail(kişi.user.displayAvatarURL())
 .addField(`${kişi} Adlı Kullanıcı Sunucudan Yasaklandı!`)
 .addField(`Yasaklayan Yetkili: ${message.author.id}`)
 .addField(`Yasaklama Sebebi: ${sebep}`)
 .setDescription(`Banlama Başarılı O Bunu Hak Etmişti!`)
 .setTimestamp()
  return message.channel.send(plasmic)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yasakla'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Üye yasaklarsınız.',
  usage: 'ban @Kullanıcı [Sebep]'
};   