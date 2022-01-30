const Discord = require("discord.js");
const db = require("nrc.db")



module.exports = {
    calistir: async(client, message, args) => {
        if (!message.member.roles.cache.has('936681103966756945')) return message.reply(`   **Bu komutu kullanabilmek için "\`Anıtkabir Yetkili\`" yetkisine sahip olmalısın.**`);
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        if (!role) return message.reply('Lütfen Almak İstediğiniz Rolü Etiketleyin!')
        if (!member) return message.reply('Lütfen Rol Almak İstediğiniz Kişiyi Etiketleyin!')
        member.roles.remove(role)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Rolü Aldım`)
        .setDescription(`**Rolü Alınan Kullanıcı: **${message.mentions.users.first()}\n**Alınan Rol: **${role}\n**Yetkili: <@${message.author.id}>**`)
        .setTimestamp()
        .setColor("BLUE")
        message.channel.send({embeds: [embed]})


},

name: "rolal",
description: "İstediğin rolü bir kişiden rol alırsın.",
aliases: [],
kategori: "mod",
usage: "",
}