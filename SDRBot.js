const randomInt = require('./getRandomInt.js')

const Discord = require('discord.js');
const Dice = require('./diceRoll.js')
const Session = require('./session.js')
var Roll = require('roll');

const {prefix, token} = require('./config.json');

const roll = new Roll();
const client = new Discord.Client()

client.on('ready', () =>  console.log(`I am logged as ${client.user.tag} and ready!`));

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}nextSession `)) {
        res = Session.nextSession(message);
        return
    }

    if (message.content.startsWith(`${prefix}r `)) {
        Dice.diceRoll(message);
        return
    }
});

client.login(token);
