const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Real Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/yt96Y47)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=785794666384982046&permissions=8&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> **-rol-ver** → Etiketlediniz kullanıcıya rol verir.
> **-rol-al** → Etiketlediğin kişden rol alır.
> **-anket** → Anket yaparsınız.
> **-rololuştur** → Rol oluşturur.
> **-id** → İstediğin bi kişinin ID sini alır.
> **-kanal-id** → Etiketlediğin kanalın ID sini atar.
> **-davet-oluştur** → Davet oluşturur.
> **-hesapla** → Matamatik işlemi yapar.
> **-davet-sıralaması** → Sunucuda yapılan davetleri sıralar
> **-iltifat** → Etiketlediğin kişiye bot iltifat eder.
> **-nick** → Etiketlediğin kişinin ismini değiştirir.
> **-tekerleme** → Tekerleme yazar.
> **-ilgincbilgi** → İlginç bilgi yazar.
> **-desteaç** → Zula deste açar.
> **-soygunyap** → Vurgun yapmaya hazırmısın? :D

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : <@750215962577600653>**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Real | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'extra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-extra'
};