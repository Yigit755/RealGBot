const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client,message,args) =>{
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici izniniz bulunmamaktadır")//DARKCODE
    let channel = message.mentions.channels.first()//DARKCODE
    if(!channel) return message.channel.send("Bir kanal Belirtmen Gerekli!")//DARKCODE
    db.set(`taglog_${message.guild.id}`, channel.id)//DARKCODE
    message.channel.send(`Taglog:${channel} `)}//DARKCODE
exports.conf = {//DARKCODE
        enabled: true,//DARKCODE
        guildOnly: false,//DARKCODE
        aliases: ["tag-log"],//DARKCODE
        permLevel: 0,//DARKCODE
    kategori: "logo",//DARKCODE
   //DARKCODE
      };//DARKCODE
      //DARKCODE
    exports.help = {//DARKCODE
        name: 'taglog',//DARKCODE
        description: '',//DARKCODE
        usage: '',//DARKCODE
   //DARKCODE
    };//DARKCODE