module.exports = {
    config: {
        name: "@Siamislam󱢏",
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
    if (event.body && event.body.toLowerCase() == "@Siamislam󱢏") return message.reply("কিরে তোর মরোনের চুলকানি উঠছে সিয়াম বসকে ডাকসিস কেনো?😾");
}
};