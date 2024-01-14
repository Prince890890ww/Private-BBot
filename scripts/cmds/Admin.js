module.exports = {
    config: {
        name: "Admin",
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
    if (event.body && event.body.toLowerCase() == "Admin") return message.reply("আমার বস সিয়াম ইসলাম☺️ সিয়াম এর সাথে দেখা করতে তোমার জোজ্ঞতা লাগবে😞
}
};