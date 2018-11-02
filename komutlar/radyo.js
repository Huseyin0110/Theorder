const Discord = require("discord.js");

exports.run = async (client, msg) => {

const radio = {
    "franceinfo": "http://www.dostmedya.com/ply/1001fm.pls",
    "nrj": "http://radyo.dogannet.tv/cnnturk",
    "rtl2": "http://www.canliradyolive.com/dinle/kral-fm.html",
    "skyrock": "http://www.canliradyolive.com/dinle/alem-fm.html",
    "rtl": "http://radyo.dogannet.tv/slowturk",
    "rfm": "http://sunucu2.radyolarburada.com:2006/; ",
    "bfm": "http://chai5she.cdn.dvmr.fr/bfmbusiness",
    "efkarlı": "http://www.radyodinle.fm/#best-fm-98-4"
}
            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Lütfen Bir Odaya Gir  !')

            }

            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();

      if (!args) return msg.channel.send(':x: | Bir Radyo Seçin : **1001fm**, **franceinfo**, **efkarlı**, **rtl2**, **skyrock**, **rtl**, **rfm**, **bfm**')

        if(!radio[args]) return msg.channel.send(':x: | Lütfen Yandaki Radiolardan Birini Seç : **1001fm**, **franceinfo**, **efkarlı**, **rtl2**, **skyrock**, **rtl**, **rfm**, **bfm**')

    msg.member.voiceChannel.join().then(connection => {

    require('http').get(radio[args], (res) => {

            connection.playStream(res);

     let embed = new Discord.RichEmbed()
        .setAuthor(args)
        .setColor(0xFF0000)
        .addField("Radyo", args)
        .addField("Bağlantı", radio[args])
        .setFooter(msg.author.tag);

     msg.channel.send("**İyi Dinlemeler**", embed);

          });

  });

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
  };
exports.help = {
    name : "radyo",
    usage: "radio <nom de radio>",
    description: "Donner l'ordre au bot d'écouter la radio"
}