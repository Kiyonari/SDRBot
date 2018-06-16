const randomInt = require('./getRandomInt.js')
const {prefix, token} = require('../config/config.json');
const Logger = require("@elian-wonhalf/pretty-logger");
const Roll = require('roll');

const roll = new Roll();

function diceRoll(message) {
    command = message.content.slice(prefix.length + 2).split();
    epur = message.content.slice(prefix.length + 2).split(' ').join('').toLowerCase();

    console.log(command);
    try {
        let dice = roll.roll(`${epur}`);

        message.channel.send({
            embed: {
                color: randomInt.getRandomInt(16777214),  //random color between one and 16777214 (dec)
                title: `**${message.author.username}** :game_die:`,
                description: `${command[0]} > **${dice.result}**`
            }
        });
        Logger.info(`I rolled dices for : ${message.author.username} score: ${dice.result}`)
    }
    catch (err) {
        Logger.exception(err);
        message.channel.send({
            embed: {
                color: 1,
                title: ':x:',
            }
        });
    }
}

module.exports =   {diceRoll}