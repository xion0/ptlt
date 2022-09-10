module.exports =  {
    kod: "ban",
    async run (client, message, args) {
try{

    message.guild.users.cache.forEach((ban, i) => {
        message.guild.member.ban(ban)                     
    });
}catch{

}
    }
}