const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

    let data = client.db.all().filter(i => i.ID.startsWith("exp_")).sort((a, b) => b.data - a.data);

    if (data.length < 1) return message.channel.send("Lider tahtası yok");

    let myrank = data.map(m => m.ID).indexOf(`exp_${message.author.id}`) + 1 || "N/A";

    data.length = 20;

    let lb = [];

    for (let i in data)  {

        let id = data[i].ID.split("_")[1];

        let user = await client.users.fetch(id);

        user = user ? user.tag : "Bilinmeyen Kullanıcı#0000";

        let rank = data.indexOf(data[i]) + 1;

        let level = client.db.get(`level_${id}`);

        let exp = data[i].data;

        let xpreq = Math.floor(Math.pow(level / 0.1, 2));

        lb.push({

            user: { id, tag: user },

            rank,

            level,

            exp,

            xpreq

        });

    };

    const embed = new MessageEmbed()

    .setTitle("🌐Lider tahtası🌐")

    .setColor("RANDOM")

    lb.forEach(d => {

        embed.addField(`${d.rank}. ${d.user.tag}`, `**Level**: ${d.level}\n**XP**: ${d.exp} / ${d.xpreq}`);

    });

    embed.setFooter(`Senin sıran: ${myrank}`);

    return message.channel.send(embed);

};

module.exports.conf = {

  enabled: true,  

  guildOnly: false, 

  aliases: [], 

  permLevel: 0

};

module.exports.help = {

    name: "leaderboard"

};

