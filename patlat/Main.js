const Discord = require('discord.js') 
const client = new Discord.Client() 
const { readdirSync } = require('fs'); 
const { join } = require('path'); 

client.commands= new Discord.Collection(); 

const prefix = "."

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); 

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); 
}

client.on("error", console.error);

client.on('ready', () => {
    console.log(`${client.user.tag} ${client.guilds.cache.size} Aktif`);
})

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})



client.login('MTAxNTU5NTk5NDI2MTQ5OTkyNQ.GkW_Ek.PMK3kxpqH_UMJE7J8ZJ04dfA5dhGHFpny3ebq0')
//botun tokeni gircen keke