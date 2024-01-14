module.exports = {
    config: {
        name: "siamk?",
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
    if (event.body && event.body.toLowerCase() == "siamk?") return message.reply(" সিয়াম তোর বাপ মাদারছোদ সিয়াম রে না চিনলে তোর এখোনো জন্ম হয়নি");
}
};