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
**[Destek Sunucusu](https://discord.gg/yt96Y47))** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=785794666384982046&permissions=8&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> **-kayıt-bilgi** →  Kayıt için bilgi.
> **-taç** → Sunucunun sahibini gösterir.
> **-sil** → Yazdığınız miktarda mesajı siler.
> **-nuke** → Kanaldaki bütün mesajları siler.
> **-ban** → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> **-kick** → Etiketlediğiniz kişiyi sunucudan atarsınız.
> **-duyuru** → Bot yazdıgının mesajı duyuru yapar.
> **-küfür** → Küfür engel sistemini açarsınız.
> **-reklam** → Reklam engel sistemi açarsınız.
> **-slowmode** → Yavaş modu ayarlarsınız. 
> **-sa-as** →  Sa-As sistemini aktif eder.
> **-sunucubilgi** →  Sunucu hakkında bilgi verir
> **-üyedurum** →  Sunucu üyeleri hakkında bilgi verir
> **-mute** → Etiketlenen kişiye belirtilen miktarda mute atar.

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
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};