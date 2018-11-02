const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('》 Komut Grupları 《')
.setTimestamp()
.addField('》 :tada:Eğlence Komutları', 't!eğlence')
.addField('》 :shield:Moderatör Komutları', 't!moderatör')
.addField('》 :gear:Genel Komutlar', 't!genel')
.addField('》 :microphone:Müzik Komutlar', 't!müzik')
.addField('》 :musical_score:Radyo Komutları', 't!radyo')
.addField('》 :video_game:Oyun Komutları', 't!oyun')
.addField('》 :green_book:Matematik Komutları', 't!matematik')
.setFooter('© 2018 》  TheOrder  《', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
