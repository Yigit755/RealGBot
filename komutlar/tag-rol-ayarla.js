const Discord = require('discord.js');//DARKCODE
const db = require('quick.db');//DARKCODE
exports.run = async (client,message,args) =>{//DARKCODE
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici izniniz bulunmamaktadır")//DARKCODE
    let rol = message.mentions.roles.first()//DARKCODE
    if(!rol) return message.channel.send("Bir Rol Belirtmen Gerekli!")//DARKCODE
    db.set(`tagrol_${message.guild.id}`, rol.id)//DARKCODE
    message.channel.send(`Tagrol:${rol} `)//DARKCODE
}//DARKCODE
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["tag-rol"],
        permLevel: 0,
    kategori: "logo",
   
      };
      
    exports.help = {
        name: 'tagrol',
        description: '',
        usage: '',
   
    };