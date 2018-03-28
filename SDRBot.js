require('./getRandomInt.js')
const Discord = require('discord.js');
var Roll = require('roll');

const {prefix, token} = require('./config.json');

const roll = new Roll();
const client = new Discord.Client()

client.on('ready', () =>  console.log(`I am logged as ${client.user.tag} and ready!`));

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}roll `)) {
        command = message.content.slice(prefix.length+5).split();
        epur = message.content.slice(prefix.length+5).split(' ').join('');
        
        try {
            dice = roll.roll(`${epur}`);
            message.channel.send({
                embed: {
                color: Math.floor(Math.random() * 16777214) + 1,  //random color between one and 16777214 (dec)
                title: ':game_die:',
                description: `${command[0]} > **${dice.result}**`
                }
            });
        }
        catch (err) {
            message.channel.send({
                embed: {
                color: 1,
                title: ':x:',
                }
            });
        }
    }
});

client.login(token);
