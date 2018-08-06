//This is where we require Discord.JS
const Discord = require('discord.js');
//Create a new Client.
var client = new Discord.Client();
//Fires if the bot is online
client.on("ready", async () => {
    console.log('I am ready :)');
})
client.on("message", async message => {
    if(!message.content.startsWith('!')) return;
    if(message.content.startsWith('!ping')){
        message.channel.send('Pong!')
    }
})
//login
client.login();