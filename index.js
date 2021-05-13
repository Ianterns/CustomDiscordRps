var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "discord.ly/yakeruku",
assets : {
large_image : "yakeruku",
large_text : "discord.ly/yakeruku" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Bot Invite" , url : "https://discord.com/oauth2/authorize?client_id=835658216036892702&permissions=8&scope=bot%20applications.commands"},{label : "Support Server",url : "https://discord.gg/hmXPdhXE4K"}]
}
})
})
client.login({ clientId : "842420351157403709" }).catch(console.error);