module.exports = {
    config: {
        name: "Siam ",
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
    if (event.body && event.body.toLowerCase() == "Siam") return message.reply("Siam বসকে ডাকলে তোর নাকে ঘুসি মারমু😾 ");
}
};