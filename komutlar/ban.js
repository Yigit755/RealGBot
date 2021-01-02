module.exports.run = async (bot, message, args) => {
  message.delete();
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  if (reason.length < 1)
    return message.reply("correct usage is : Softban @user reason").then(m => m.delete(3000));
  if (message.mentions.users.size < 1)
    return message
      .reply("I might be Hades but im no to read brains, mention user")
      .catch(console.error)
      .then(m => m.delete(3000));
  if (!message.guild.member(user).bannable)
    return message.reply("Nether realm is a place where you respect the elderly.").then(m => m.delete(3000));
  var fetched = await message.channel.fetchMessages({ limit: 99 });
  if (user) {
    var fetched = fetched
      .filter(m => m.author.id === user.id)
      .array()
      .slice(0, 99);
  }
  message.channel.bulkDelete(fetched);
  message.guild.ban(user, 2);
  message.channel
    .send(
      `${user} users last 99 message was deleted and \`${reason}\` is the reason he was sent to hell!`
    )
    .then(m => m.delete(3000))
    .catch(error =>
      message.channel.send("messages older then 14 days re not in my responsibily")
    )
    .then(m => m.delete(3000));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["softban", "sb"],
  permlevel: 2
};
exports.help = {
  name: "soft-ban",
  description: "Belirttiğiniz kullanıcının önce mesajlarını siler sonra banlar.",
  usage: "softban <@kulanıcı>"
};