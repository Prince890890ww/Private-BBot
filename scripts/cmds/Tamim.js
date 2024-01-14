module.exports = {
    config: {
        name: "Tamim",
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
    if (event.body && event.body.toLowerCase() == "Tamim") return message.reply("তামির রে সবাই বল বার বার বট আইডিতে লগ ইন করতে");
}
};