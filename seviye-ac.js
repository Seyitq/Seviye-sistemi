const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
 
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  
  if(hm) return message.reply('Bu tuhaf! Anlaşılan seviye sistemi zaten aktif edilmiş.. \n Bunu mu arıyorsun? `!seviye-kapat`')
  
  
  
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  
  
  let kontrol;
  if(kanal == null) kontrol = 'Sunucuda Ayarlanmış Bir Logs Bulunamadı!'
  else kontrol = kanal
  
  
  
  
  let codare = new Discord.MessageEmbed()
  .setTitle(' | Aktif Edildi!')
  .setDescription(message.guild.name + ' Sunucusuna başarıyla seviye sistemini aktifleştirdim!\n Genel ayarlar aşağıda veriliyor..')
  .addField('Seviye Log Kanalı:', kontrol, true)
  .setFooter('Seyit!')
  .setColor('RANDOM')
  message.channel.send(codare)
 
message.guild.owner.send('Seviye sistemi **'+message.member.user.username+'** ('+message.member.id+') tarafından aktifleştirildi!\n `Seviye Sistemi`')
  
  
db.set(`seviyeacik_${message.guild.id}`, 'açık')

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-aç',
  description: 'taslak', 
  usage: 'seviye-aç'
};
