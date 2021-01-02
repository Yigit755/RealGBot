const Discord = require('discord.js');//DARKCODE
const db = require('quick.db');//DARKCODE
exports.run = async (client,message,args) =>{//DARKCODE
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici izniniz bulunmamaktadır")//DARKCODE
    let rol = args[0]//DARKCODE
    if(!rol) return message.channel.send("Bir TAG Belirtmen Gerekli!")//DARKCODE
    db.set(`tag_${message.guild.id}`, rol)//DARKCODE
    message.channel.send(`Tag:${rol} `)}//DARKCODE
exports.conf = {//DARKCODE
        enabled: true,//DARKCODE
        guildOnly: false,//DARKCODE
        aliases: ["tag-ayarla"],//DARKCODE
    kategori: "logo",//DARKCODE
      };//DARKCODE
    exports.help = {//DARKCODE
        name: 'tagayarla',//DARKCODE//DARKCODE
        description: '',//DARKCODE
        usage: '',//DARKCODE
   
    };