const Discord = require('discord.js');
const db = require('quick.db')            //seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare
exports.run = async(client, message, args) => {  //seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare

 let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  let kanal = await db.fetch(`svlog_${message.guild.id}`)                //seyit ve codare
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` <a:dikkat:632947931808268290> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  if(!hm) return message.channel.send('Seviye sistemi zaten aktif hale getirilmemiş!\n Bunu mu arıyorsun? `!seviye-aç`')                //seyit ve codare
  
  message.reply('Seviye sistemi devre dışı durumuna getiriliyor..').then(seyit => {                       //seyit ve codare
    
 db.delete(`seviyeacik_${message.guild.id}`)
    //seyit ve codare
 db.delete(`svlog_${message.guild.id}`)//seyit ve codare                          //seyit ve codare

  seyit.edit('sistem devre dışı bırakıldı!')  
    
  }, 5000)//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare//seyit ve codare
                            //seyit ve codare
  

  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false,                   //seyit ve codare
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-kapat',
  description: 'taslak',            //seyit ve codare
  usage: 'seviye-kapat'
};        //seyit ve codare
