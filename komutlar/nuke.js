const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("yetkin yok"); 
message.channel.clone().then(rennia => {
let darkcode = message.channel.position;
rennia.setPosition(darkcode);
message.channel.delete();});
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
    name: 'nuke',
  description: 'x',
  usage: 'x'
};