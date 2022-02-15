# -
Nexon Hub 

BY Froxy My Guilds :


[Nexon Bot](https://discord.gg/cQ36M4BuSu)

[Nexon Hub](https://discord.gg/rsMakGSeAW)

[Layer Coding](https://discord.gg/KYmeu6Ehrp)



كود الترقية
```js
client.on('message', async (message)=> {
    if(message.content.startsWith(`ترقية-1`)){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.author
        let points = db.get(`point_${message.guild.id}_${message.author}`)
        if (points >= 5){
             message.guild.member(user).roles.add(`${rtb1}`)   
             message.channel.send(`**__تم ترقيتك بنجاح ${message.author.tag}__**`)
            }
        else  {
            let number = ( 5 - points)
            let poinssa = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}`)
            .addField(`انت تملك من النقاط`,`${points}/5`)
            .setDescription(`**__تحتاج الى ${number} للترقية__**`)
            message.channel.send(poinssa)
        }
    }
})
```

By Froxy 
