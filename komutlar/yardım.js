const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {



        const embed = new Discord.MessageEmbed()

        .setColor("BLUE")

        .setFooter( "HydroniX Moderasyon", client.user.avatarURL())

       
        .setDescription(`
       
    
       
       ${client.commands
       
         .filter(cmds => cmds.kategori == "mod")
       
         .map(komut => ` <a:912031936535466034:937394772123979827> **${ayarlar.prefix}${komut.name}** = ${komut.description || "**Açıklama Eklenmemiş**"}`)
       
         .join('\n')}
       
    
    `)
    .setImage("https://cdn.discordapp.com/attachments/936750481659797585/937394102947954688/Digital_rain_banner.gif")
       .setTimestamp()
         
        
       
       message.channel.send({embeds: [embed]}) 
       

},

name: "yardım",
description: "",
aliases: [],
kategori: "",
usage: "",
}