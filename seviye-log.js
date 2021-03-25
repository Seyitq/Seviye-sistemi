const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
   let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
   if(!hm) return message.reply('Bu tuhaf! aktif edilmeyen bir seviye sistemine xp değeri eklemeyi düşünmedin umarım? \n Bunu Deniyebilirsin: `$seviye-aç`')
  let kanals = message.mentions.channels.first()
  if(!kanals) return message.channel.send('Kanal ayarlamam için bir kanal belirtmen gerekiyor. |n Örnek: `!seviye-log #level-log`')
  
  
  
  let codare= new Discord.RichEmbed()
  .setTitle('İşlem Başarılı!')
  .setDescription('Seviye log kanalı ayarlandı.Üyeler seviye atlayınca orda belirteceğim.')
  .addBlankField()
  .addField('Seviye Log Kanalı:', kanals, true)
  .setFooter('Seyit')
  .setColor('RANDOM')
  message.channel.send(codare)
  
  message.guild.owner.send('Seviye sistemi **'+message.member.user.username+'** ('+message.member.id+') tarafından log kanalı **'+kanals+'** Olarak ayarlandı.!\n `Seviye Sistemi`')
  db.set(`svlog_${message.guild.id}`, kanals)

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-log',
  description: 'taslak', 
  usage: 'seviye-log'
};
