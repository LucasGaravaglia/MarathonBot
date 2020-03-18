const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")


client.on("ready", () => {
    console.log(`Bot foi iniciado no servidor.`)
})

function sleep(seconds,msg) {
    milliseconds = seconds*1000
    var start = new Date().getTime();
    while(true){
      if ((new Date().getTime() - start) > milliseconds){
        break;
        }
    }
}
client.on('message', msg => {
    if(msg.author.bot) return
    if(msg.channel.type === "dm") return
    const args =  msg.content.trim().split(' ')
    const command = args.shift()
    if(command === `${config.prefix}ping`) {
        msg.channel.send("Pong!")
    }else if(command === `${config.prefix}start`){
        if(args.length <= 0){
            msg.channel.send('Digite um tempo')
        }else{
            let seconds = args.shift()
            sleep(seconds,msg)
            msg.channel.send(`O tempo de ${seconds} segundos acabou.`)
        }
    }
})

client.login(config.token)