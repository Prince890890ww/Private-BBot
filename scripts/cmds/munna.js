module.exports = {
    config: {
        name: "munna",
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
    if (event.body && event.body.toLowerCase() == "munna") return message.reply("ওর সাথে লাগতে আসলে বিচি আর বিচির জায়গায় তাকবে না 🤌");
}
};