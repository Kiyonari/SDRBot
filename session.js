const {prefix, token} = require('./config.json');

dict = {
    date: {
        regexp: /\d{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/,
        message: 'Ta date elle est pas valide, chef!'
    },
    time: {
        regexp: /([01]\d|2[0-4]):[0-5]\d:[0-5]\d/,
        message: 'Ton heure elle est pas bonne, Billy.'
    }
}

/*
** test the regex matching the dictionnary type
*/
function testRegex(type, test, message) {
    res = RegExp(dict[type][0]).test(test);
    console.log(RegExp(dict[type][0]));
    console.log(test);
    console.log(res);
    if (!RegExp(dict[type][0]).test(test)) {
        console.log("trying to print : \'" + test + "\'")
        console.log(RegExp(dict[type][0]))
        message.channel.send(`${dict[type][1]}`);
        return false;
    }
    return true;
}

module.exports = {
    nextSession: function(message) {
        command = message.content.slice(prefix.length).split(' ');
        
        date = command[1];
        time = command[2];    
        
        if (!date || !time)
        {
            message.channel.send("Il me manque un truc là.. Il me faut une date et une heure (YYYY-MM-DD hh:mm:ss)");
            return;
        }

        if (!testRegex('date', date, message) || !testRegex('time', time, message)) {
            return false;
        }
        message.guild.channels.find('name', 'general').setTopic(`Prochaine séance : ${date} ${time}`);
    }
}