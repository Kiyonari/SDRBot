const {prefix, token} = require('./config.json');
const Logger = require("@elian-wonhalf/pretty-logger");

dict = {
    date: {
        regexp: /\d{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/,
        message: 'Ta date elle est pas valide, chef!'
    },
    time: {
        regexp: /([01]\d|2[0-4]):[0-5]\d:[0-5]\d$/,
        message: 'Ton heure elle est pas bonne, Billy.'
    }
}

/*
** test the regex matching the dictionnary type
*/
function testRegex(type, test, message) {
    res = dict[type].regexp.test(test);

    if (!dict[type].regexp.test(test)) {
        message.channel.send(`${dict[type].message}`);
        return false;
    }
    return true;
}

/*
** Main function of this file
*/
function nextSession(message) {
    command = message.content.slice(prefix.length).split(' ');
    
    date = command[1];
    time = command[2];    
    
    if (!date || !time){
        message.channel.send("Il me manque un truc là.. Il me faut une date et une heure (YYYY-MM-DD hh:mm:ss)");
        return;
    }

    if (!testRegex('date', date, message) || !testRegex('time', time, message)) {
        return false;
    }
    message.guild.channels.find('name', 'boite-a-pizza').setTopic(`Prochaine séance : ${date} ${time}`).catch(Logger.exception);
    message.guild.channels.find('name', 'boite-a-pizza').send(`@everyone J'ai modifié la date de la prochaine séance! Elle aura lieu le **${date}** à **${time}**`).catch(Logger.exception);
}


module.exports = {nextSession}