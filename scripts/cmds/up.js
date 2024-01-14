module.exports = {
    config: {
        name: "up",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "up") return message.reply("🟢 | i have been running for 
❯2 hours 24 minutes 34 second.");
}
};