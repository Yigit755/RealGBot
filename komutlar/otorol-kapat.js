const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
      let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
        if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
            const embed = new Discord.MessageEmbed()
                .setDescription(`Otorolü Ayarlamadığın İçin Kapatamazsın!`)
                .setColor("RED")
                .setTimestamp('Otorol kapatmak için -otorol-kapat açmak için ise -otorol-ayarla @rol Mesajın gideceği kanal #kanal')
            message.channel.send({embed})
            return
        }
  exports.run = async (client, message, args, member) => {
          let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
        delete giriscikis[message.guild.id]
        fs.writeFile("./otorol.json", JSON.stringify(giriscikis), (err) => {

        })
        const embed = new Discord.RichEmbed()
            .setDescription(`Otorol Mesajları Başarıyla Kapatıldı :white_check_mark: `)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }}




exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["kapatotoyazı"],
  permLevel: 0
};

exports.help = {
  name: 'otorol-kapat', 
  description: 'Slots oyunu oynar',
  usage: 'otorol-kapat'
};