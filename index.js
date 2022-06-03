const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.once('ready', () => {
    console.log(`ready`)
})
client.on('message', message => {
    console.log(message.content);

    if(message.content.startsWith(`${prefix}code`)) { 
        message.channel.send('le code de aujourdhui  est: 7324 ')
    } else if (message.content.startsWith(`${prefix}natalie`)) {
        message.channel.send('Big Brother is Watching Youuuu!')
    }
})
client.login(token)