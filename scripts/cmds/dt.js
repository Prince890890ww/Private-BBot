module.exports = {
    config: {
        name: "dt",
        version: "1.0",
        author: "kivv",
        countDown:
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
    if (event.body && event.body.toLowerCase() == "dt") return message.reply("মুরগি চুদার আগে ওর অপরাধ বল,,মাঝে মাঝে হুদাই নিরপরাধ মানুষরে চুদস তাই ওর অপরাধ কি বল?");
}
};
