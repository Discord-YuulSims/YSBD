const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

     try{
        var icon = message.guild.iconURL;
           var text = new discord.RichEmbed()
           .setTitle("**YuulSims Sever Bot Commands.**")
           .setThumbnail(icon)
           .setFooter("©YuulSims Server")
           .setColor("#00ffb7")
           .setDescription("**__Algemeen__** \n **!?ac** Maak een mooie een mooi berichtje.")
           //"**YuulSims Bot** \n\n **__Wat kan ik?__** \n\n **__ALgemeen__** \n **!?ac** Maak een announcement aan.";
   
           message.author.send(text);
   
           message.reply("Al de commando's staan in je privé berichten! :mailbox_with_mail:");
   
       }catch (cerror){
           message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen.");
   
       }
   

    /* var commandList = [];
 
     bot.commands.forEach(element => {
 
         var item = {
 
             name: command.help.name,
             description: command.help.description
 
         };
 
         commandList.push(item);
 
     });
 
    var prefix = botconfig.prefix;
    var repsonse = "";
 
 */
    /*var commandsList = [];

    bot.commands.forEach(command => {

        var item = {

            name: command.help.name,
            description: command.help.description,
            // category: command.help.category

        }

        commandsList.push(item);

    });

    // console.log(commandsList);

    var prefix = botConfig.prefix;
    var response = "";

    for (var i = 0; i < commandsList.length; i++) {

        response += `${prefix}${commandsList[i]["name"]} - ${commandsList[i]["description"]} \r\n`;

    }

    message.author.send(response).then(() => {

        message.channel.send("Al de commando's staan in je privé berichten! :mailbox_with_mail:");

    }).catch(() => {

        message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen");

   }); */ 
}

module.exports.help = {

    name: "help",
    description: "Krijg je dit bericht."

}