const discord = require('discord.js')
const client = new discord.Client();

const token = require('./config.json').token;

client.login(token);

client.on('ready', () => {
    let myGuild = client.guilds.get('691204726649389066');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('694618505387180123');
    memberCountChannel.setName('Drunks here: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.get('691204726649389066');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('694618505387180123');
    memberCountChannel.setName('Drunks here: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.get('691204726649389066');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('694618505387180123');
    memberCountChannel.setName('Drunks here: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});