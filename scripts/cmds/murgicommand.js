module.exports = {
    config: {
        name: "murgicommand",
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
    if (event.body && event.body.toLowerCase() == "murgicommand") return message.reply("1.mm-2.murgi-3.gcinfo-4.dt-5.m1-6.kahini1");
}
};