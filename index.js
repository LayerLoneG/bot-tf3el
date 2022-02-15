const Discord = require(`discord.js`);
const { Client } =require(`discord.js`)
const client = new Client()
const config = require(`./config.json`)
const db = require(`quick.db`)
client.login(config.token);
const prefix = config.prefix;
const servername = config.servername;

client.on('ready', () => {
    console.log(`Im Ready ${client.user.username}`)
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: "By Froxy",
            type: "WATCHING"
        }
    })
})


//------------------------------------رتبة الأدارة للجميع------------------------------------------*//
const managerrole = config.managerrole

//--------------------------------------رتب التفعيل----------------------------------------*//
const addrole1 = config.addrole1
const addrole2 = config.addrole2
const removerole1= config.removerole1
const removerole2 = config.removerole2




//---------------------------------رتب الترقيات---------------------------------------------*//
const rtb1 = config.rtb1
const rtb2 = config.rtb2
const rtb3 = config.rtb3
const rtb4 = config.rtb4
const rtb5 = config.rtb5
const rtb6 = config.rtb6
const rtb7 = config.rtb7
//------------------------------------------------------------------------------*//
/*
client.on('message', async (message) => {
    if(message.content.startsWith(prefix + "")){
        message.channel.send(``)
    }
})
*/
//------------------------------------------------------------------------------*//




client.on('message', async (message) => {
    if(message.content.startsWith(prefix + "تفعيل")){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.mentions.users.first();
        if(!user) return message.channel.send(`Mention user`)
        const safe = message.author;
        message.guild.member(user).roles.add(`${addrole1}`);
        message.guild.member(user).roles.add(`${addrole2}`);
        message.guild.member(user).roles.remove(`${removerole1}`);
        message.guild.member(user).roles.remove(`${removerole2}`);
        db.add(`point_${message.guild.id}_${safe}`, 1)
        const points = db.get(`point_${message.guild.id}_${safe}`)
        let embed = new Discord.MessageEmbed()
        .setTitle(`تفعيل فروكسي`)
        .addField(`تم تفعيله بنجاح `,`${user}`)
        .addField(`${points} نقاطك الأدارة الأن`,`${message.author}`)
        message.channel.send(embed)
    }
})

client.on('message', async (message) => {
    if(message.content.startsWith(prefix + "نقاط")){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const safe = message.mentions.users.first() || message.author;
        let points = db.get(`point_${message.guild.id}_${safe}`)
        if(points == null)  points = `0`
        message.channel.send(`نقاطك الأن هي : ${points} , ${safe.tag}`)
    }
})



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

client.on('message', async (message)=> {
    if(message.content.startsWith(`ترقية-2`)){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.author
        let points = db.get(`point_${message.guild.id}_${message.author}`)
        if(points >= 15) {
            message.guild.member(user).roles.add(`${rtb2}`)   
            message.channel.send(`**__تم ترقيتك بنجاح ${message.author.tag}__**`)
           }
       else  {
           let number = ( 15 - points)
           let poinssa = new Discord.MessageEmbed()
           .setTitle(`${message.author.tag}`)
           .addField(`انت تملك من النقاط`,`${points}/15`)
           .setDescription(`**__تحتاج الى ${number} للترقية__**`)
           message.channel.send(poinssa)
       }
    }
})


client.on('message', async (message)=> {
    if(message.content.startsWith(`ترقية-3`)){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.author
        let points = db.get(`point_${message.guild.id}_${message.author}`)
        if(points >= 25) {
            message.guild.member(user).roles.add(`${rtb3}`)   
            message.channel.send(`**__تم ترقيتك بنجاح ${message.author.tag}__**`)
           }
       else  {
           let number = ( 25 - points)
           let poinssa = new Discord.MessageEmbed()
           .setTitle(`${message.author.tag}`)
           .addField(`انت تملك من النقاط`,`${points}/25`)
           .setDescription(`**__تحتاج الى ${number} للترقية__**`)
           message.channel.send(poinssa)
       }
    }
})


client.on('message', async (message)=> {
    if(message.content.startsWith(`ترقية-4`)){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.author
        let points = db.get(`point_${message.guild.id}_${message.author}`)
        if(points >= 35) {
            message.guild.member(user).roles.add(`${rtb4}`)   
            message.channel.send(`**__تم ترقيتك بنجاح ${message.author.tag}__**`)
           }
       else  {
           let number = ( 35 - points)
           let poinssa = new Discord.MessageEmbed()
           .setTitle(`${message.author.tag}`)
           .addField(`انت تملك من النقاط`,`${points}/35`)
           .setDescription(`**__تحتاج الى ${number} للترقية__**`)
           message.channel.send(poinssa)
       }
    }
})

client.on('message', async (message)=> {
    if(message.content.startsWith(`ترقية-5`)){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.author
        let points = db.get(`point_${message.guild.id}_${message.author}`)
        if(points >= 40) {
             message.guild.member(user).roles.add(`${rtb5}`)   
             message.channel.send(`**__تم ترقيتك بنجاح ${message.author.tag}__**`)
            }
        else  {
            let number = ( 40 - points)
            let poinssa = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}`)
            .addField(`انت تملك من النقاط`,`${points}/40`)
            .setDescription(`**__تحتاج الى ${number} للترقية__**`)
            message.channel.send(poinssa)
        }
    }
})

client.on('message', async (message)=> {
    if(message.content.startsWith(`ترقية-6`)){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.author
        let points = db.get(`point_${message.guild.id}_${message.author}`)
        if(points >= 45) {
            message.guild.member(user).roles.add(`${rtb6}`)   
            message.channel.send(`**__تم ترقيتك بنجاح ${message.author.tag}__** `)
           }
       else  {
           let number = ( 45 - points)
           let poinssa = new Discord.MessageEmbed()
           .setTitle(`${message.author.tag}`)
           .addField(`انت تملك من النقاط`,`${points}/45`)
           .setDescription(`**__تحتاج الى ${number} للترقية__**`)
           message.channel.send(poinssa)
       }
    }
})

client.on('message', async (message)=> {
    if(message.content.startsWith(`ترقية-7`)){
        if(!message.member.roles.cache.has(`${managerrole}`)) return;
        const user = message.author
        let points = db.get(`point_${message.guild.id}_${message.author}`)
        if(points >= 50) {
            message.guild.member(user).roles.add(`${rtb7}`)   
            message.channel.send(`**__تم ترقيتك بنجاح ${message.author.tag}__**`)
           }
       else  {
           let number = ( 50 - points)
           let poinssa = new Discord.MessageEmbed()
           .setTitle(`${message.author.tag}`)
           .addField(`انت تملك من النقاط`,`${points}/50`)
           .setDescription(`**__تحتاج الى ${number} للترقية__**`)
           message.channel.send(poinssa)
       }
    }
})



//------------------------------------فقط للضرورة------------------------------------------*//
/*
client.on('message', async (message)=> {
    if(message.content.startsWith(`clear`)){
        const safe = message.mentions.users.first() || message.author;
         let points = db.delete(`point_${message.guild.id}_${safe}`)
         message.channel.send(`done`)
    }
})

client.on('message', async (message)=> {
    if(message.content.startsWith(`test`)){
        const safe = message.mentions.users.first() || message.author;
         let points = db.add(`point_${message.guild.id}_${safe}`, 5)
         message.channel.send(`done`)
    }
})
*/
