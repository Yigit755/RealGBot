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
> **-zarat** →  Zar atarsınız
> **-kasaaç** → CsGo kasası açmaya ne dersin?.
> **-emojiyazı** → Emojili yazı yazmaya ne dersin?.
> **-espiri** → Bot espiri yapar.
> **-sor** → Bot sorduğunuz soruya cevap verir.
> **-vine** → Bot size komik paylaşımlar gösterir.
> **-adamasmaca** → Adam asmaca oyunu.
> **-balıktut** → Dereden balık tutarsınız.
> **-mcskin** →Yazdığınız ismin minecraft görünüşünü atar.
> **-token** →  Botun tokenini gösterir.
> **-düello** →  Arkadaşlarınızla düello yaparsınız.
> **-wasted** → Polis tarafından yakalanırsnız
> **-yumruk-at** → Etiketlediğin kişiye bot yumruk atar.
> **-yazan-kazanır** → Yazan kazanır oyunu.
> **-kapaklaf** → Etiketlediğin kişiye bot kapaklaf söyler.
> **-şanslısayım** → Şanslı sayını bulmaya calışır.
> **-kaçcm** → Malafatını ölçer.
> **-nah** → Etiketlediğin kişiye nah çeker.
> **-rte** → RTE komutlarını gösterir.

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
    name: 'eğlence', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};