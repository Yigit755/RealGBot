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
**[Destek Sunucusu](https://discord.gg/yt96Y47)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=785794666384982046&permissions=8&scope=bot)** **•** **[Web-Site]( )**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-ilet] → Yapımcıma yazdığınız yazıyı iletir!.**Boş yere kullanmayın!!!**
> [-aşk-ölç] → Etiketlediğin kişinin aşkını ölcer <3 .
> [-kullanıcı-bilgi] → Etiketlediniz kullanıcın bilgilerini gösterir.
> [-toplamkomut] → Botta ne kadar komut oldunu gösterir.
> [-aile] → Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?
> [-sunucu-bilgi] → Sunucu hakkında detaylı bilgi verir.
> [-avatar] → Etiketlediğin birisinin avatarını gösterir.
> [-yetkilerim] → Hangi yetkilere sahip olduğunuzu gösterir.
> [-profil] → Etiketlediğin kişini profilini görürsünüz.
> [-sunucuresmi] → Sunucu resmini gösterir.
> [-ping] → Botun Pingine Bakarsın. 
> [-kurallar] → Genel kuralları gösterir.
> [-davet] → beni sunucuna ekle.
> [-botbilgi] → Bot hakkında bilgi gösterir
> [-instagram] → Yazdığınız instagram kullanıcısı hakkında bilgi verir.
> [-deprembilgi] → Türkiyede yaşanan son 10 deprem hakkında bilgi verir.
> [-korona] → Korona virüs hakkında bilgiler verir.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Verethragna*#1615**
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
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kullanıcı'
};