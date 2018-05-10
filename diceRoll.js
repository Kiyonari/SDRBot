randomInt = require('./getRandomInt.js')
const {prefix, token} = require('./config.json');
var Roll = require('roll');

const roll = new Roll();

module.exports =   {  
    diceRoll: function (message) {
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

}
