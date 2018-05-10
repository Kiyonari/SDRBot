randomInt = require('./getRandomInt.js')

function diceRoll(message) {
    command = message.content.slice(prefix.length + 2).split();
    epur = message.content.slice(prefix.length + 2).split(' ').join('').toLowerCase();
    sender = message.author.tag.split('#')

    console.log(command);
    try {
        dice = roll.roll(`${epur}`);
        message.channel.send({
            embed: {
                color: randomInt.getRandomInt(16777214),  //random color between one and 16777214 (dec)
                title: `**${sender[0]}** :game_die:`,
                description: `${command[0]} > **${dice.result}**`
            }
        });
        console.log(`I rolled dices for : ${message.author.tag}`)
    }
    catch (err) {
        console.log(err);
        message.channel.send({
            embed: {
                color: 1,
                title: ':x:',
            }
        });
    }
}

const Discord = require('discord.js');
var Roll = require('roll');

const {prefix, token} = require('./config.json');

const roll = new Roll();
const client = new Discord.Client()

client.on('ready', () =>  console.log(`I am logged as ${client.user.tag} and ready!`));

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}n `)) {
        //nextSession(message);
    }

    if (message.content.startsWith(`${prefix}r `)) {
        diceRoll(message);
        return
    }
});

client.login(token);
