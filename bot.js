const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const chalk = require("chalk");
const moment = require("moment");
const ayarlar = require("./ayarlar.json");
const express = require("express");
const data = require("quick.db");
const { GiveawaysManager } = require("discord-giveaways");

/////
const app = express();
app.get("/", (req, res) => res.send("Bot Aktif"));
app.listen(process.env.PORT, () =>
  console.log("Port ayarlandı: " + process.env.PORT)
);
//////////////////

client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
});

client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("dnd");
  client.user.setActivity(
    "| -yardım yazarak yardım menüsüne ulaşabilirsin. | "
  );
});
client.on("roleDelete", async role => {
  const data = await require("quick.db").fetch(
    `carl-mute-role.${role.guild.id}`
  );
  if (data && data === role.id)
    require("quick.db").delete(`carl-mute-role.${role.guild.id}`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
let arole = otorole[member.guild.id].sayi
let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
let embed = new Discord.MessageEmbed()
.setTitle('Otorol Sistemi')
.setDescription(`:inbox_tray: @${member.user.tag}'a Otorol Verildi `)
.setColor("RANDOM")
.setFooter("Real", client.user.avatarURL);

if (!giriscikis[member.guild.id].kanal) {
return;
}

try {
let giriscikiskanalID = giriscikis[member.guild.id].kanal;
let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
giriscikiskanali.send(`:inbox_tray:   Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
} catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
return console.log(e)
}

});

client.on("guildMemberAdd", async (member) => {
let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
let role = autorole[member.guild.id].sayi

member.addRole(role)

});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.yetkiler = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = -ayarlar.varsayilanperm;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if (message.author.id === message.guild.ownerID) permlvl = 6;
  if (message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};
//////çekiliş/////////

///////////////////////////////KOMUTLAR//////////////////////////////

client.on("message", async message => {
  if (message.author.bot) return;

  let i = await db.fetch(`reklamFiltre_${message.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "https://",
      "http://",
      "discord.gg",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
          message.delete();
          return message.channel
            .send(`<@${message.author.id}> Reklam Yapmak Yasak!`)
            .then(message => message.delete(10000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
//////çekiliş/////////
if (!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
  async getAllGiveaways() {
    return db.get("giveaways");
  }

  async saveGiveaway(messageID, giveawayData) {
    db.push("giveaways", giveawayData);
    return true;
  }

  async editGiveaway(messageID, giveawayData) {
    const giveaways = db.get("giveaways");
    const newGiveawaysArray = giveaways.filter(
      giveaway => giveaway.messageID !== messageID
    );
    newGiveawaysArray.push(giveawayData);
    db.set("giveaways", newGiveawaysArray);
    return true;
  }

  async deleteGiveaway(messageID) {
    const newGiveawaysArray = db
      .get("giveaways")
      .filter(giveaway => giveaway.messageID !== messageID);
    db.set("giveaways", newGiveawaysArray);
    return true;
  }
};
const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false,
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#0a99ff",
    reaction: "🎉"
  }
});
client.giveawaysManager = manager;
///////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  let a = await db.fetch(`kufur_${msg.guild.id}`);
  if (a == "acik") {
    const küfür = [
      "yarak",
      "mk",
      "amk",
      "aq",
      "orospu",
      "oruspu",
      "oç",
      "sikerim",
      "yarrak",
      "piç",
      "amq",
      "sik",
      "amcık",
      "çocu",
      "sex",
      "seks",
      "amına",
      "orospu çocuğu",
      "sg",
      "siktir git",
      "31",
      "ananın amına yarak"
    ];
    if (küfür.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();

          return msg.channel
            .send(`Küfür etme Yasak az kaldı ban atmama!`)
            .then(msg => msg.delete(10000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!a) return;
});

/////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selam"
    ) {
      try {
        return msg.reply("Aleyküm Selam, Hoş geldin");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

client.login(process.env.token);
///////////////////////////////////////////////////////////
client.on("ready", () => {
  client.channels.cache.get("779423613639983114").join();
});
//////////////////////////////////////////////////

client.on("guildDelete", guild => {
  let Crewembed = new Discord.MessageEmbed()

    .setColor("RED")
    .setTitle(" Bot Bir sunucuda kicklendi,bilgiler;   ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("787361235289112586").send(Crewembed);
});

client.on("guildCreate", guild => {
  let Crewembed = new Discord.MessageEmbed()

    .setColor("GREEN")
    .setTitle(" Bot Bir sunucuya eklendi,bilgiler;  ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("787361235289112586").send(Crewembed);
});

////////////////////////////////////////

//////////////////////////
//Tag alana rol//
client.on("userUpdate", (oldUser, newUser) => {
  client.guilds.cache.forEach(async guild => {
    if (!guild.members.cache.get(newUser.id)) return;
    const tagFetch = await db.fetch(`tag_${guild.id}`);
    const roleFetch = await db.fetch(`tagrol_${guild.id}`);
    const logFetch = await db.fetch(`taglog_${guild.id}`);
    if (!tagFetch || !roleFetch || !logFetch) return;
    let DARKCODE = tagFetch;
    let DARKCODE1 = guild.roles.cache.get(roleFetch);
    let DARKCODE2 = guild.channels.cache.get(logFetch);
    if (oldUser.username === newUser.username) return;
    if (newUser.username.includes && !oldUser.username.includes(DARKCODE)) {
      DARKCODE2.send(
        new Discord.MessageEmbed()
          .setTitle("TAG Alındı.")
          .setColor("RANDOM")
          .setFooter("Real")
          .setDescription(
            `${newUser} **Aramıza hoşgeldin. \`${DARKCODE}\` tagını aldığı için ${DARKCODE1} rolü verildi!**`
          )
      );
      guild.members.cache.get(newUser.id).roles.add(DARKCODE1.id);
    }
    if (oldUser.username.includes && !newUser.username.includes(DARKCODE)) {
      DARKCODE2.send(
        new Discord.MessageEmbed()
          .setTitle("TAG Çıkarıldı.")
          .setColor("RANDOM")
          .setFooter("Real")
          .setDescription(
            `${newUser} **Aramızdan ayrıldı. \`${DARKCODE}\` tagını çıkardığı için ${DARKCODE1} rolü alındı!**`
          )
      );
      guild.members.cache.get(newUser.id).roles.remove(DARKCODE1.id);
    }
  });
});
