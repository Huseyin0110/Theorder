const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Koca Yürekli ' + message.author.username + 'Üşenmeden Çay Demledi !')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://img-s2.onedio.com/id-56e80a8f52fee9d1274e14fd/rev-0/w-635/f-jpg-gif-webp-webm-mp4/s-1f72dd6067d7a7734628131a28c915629394ee0e.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çaydemle',
  description: 'Çay Demlersiniz',
  usage: 'çaydemle'
};
