const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
        let headembed = new Discord.RichEmbed()
            .setColor("0x9400d3")
            .setTitle("The coin landed on :regional_indicator_h: :regional_indicator_e: :regional_indicator_a: :regional_indicator_d: :regional_indicator_s:.")
        message.channel.send(headembed);
    } else if (result == 2) {
        let tailsembed = new Discord.RichEmbed()
            .setColor("0x9400d3")
            .setTitle("The coin landed on :regional_indicator_t: :regional_indicator_a: :regional_indicator_i: :regional_indicator_l: :regional_indicator_s:.")
        message.channel.send(tailsembed);
    }
}

module.exports.help = {
    name: "flip"
}