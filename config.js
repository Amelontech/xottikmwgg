module.exports = {
    bot: {
        token: process.env.TOKEN,
        prefix: "_",
        owners: ["661557499056619520"],// OWNERS ID
        mongourl: "mongodb+srv://itbrexie:System1153.@cluster0.xy22dyw.mongodb.net/?retryWrites=true&w=majority"

    },

    website: {
        callback: "https://xottikmwgg.drmizayt.repl.co/callback",
        secret: "JfMr8kPhS_DlnSOaPhl74CLFnN0CTiKi",
        clientID: "1090370167311171644",
        tags: [ "Moderation", "Fun", "Rocket League","Economy","Guard","NSFW",,"Invite","Music","Logging", "Web Dashboard","Reddit","Youtube","Twitch","Leveling","Game","Roleplay","Utility","English","Dutch","Netherlands","Auto Roles","XottikMW","Social","Reaction Roles","Multifunctional","Crypto","Meme","Role Management","Media","Minecraft","Bot","Gaming","" ]    
    },

    server: {
        id: "1091381093120344245",// SERVER ID
        roles: {
            yonetici: "1091394393098952804", //ADMIN ROLE ID
            moderator: "1091394671835619370",// MOD ROLE ID 
            profile: {
                booster: "1091401208234790962",// BOOSTER ROLE ID 
            },
            codeshare: {
                javascript: "JS",
                html: "HTML",
                altyapilar: "ALTYAPILAR",
                bdfd: "BDFD",
                besdavet: "BESDAVET",
                ondavet: "ONDAVET",
                onbesdavet: "ONBESDAVET",
                yirmidavet: "YIRMIDAVET"
            },
            botlist: {
                developer: "1091401897132433548",// DEV ROLE ID 
                certified_developer: "1091401832548544622",// ROLE ID 
                bot: "1091402025947901964", //ROLE BOTS YOUR SERVER ID
                certified_bot: "1091401692811104378" // ROLE ID 
            }
        },
        channels: { // PUT ID channels LOGS
            codelog: "1091402367154532372",
            login: "1091402444778524783",
            webstatus: "1091402494099341353",
            uptimelog: "1091402561531162736",
            botlog: "1091402622327599244",
            votes: "1091393828424003684"
        }
    }


}
