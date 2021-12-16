const { client } = require('../index')
const pronote = require('@dorian-eydoux/pronote-api')
const { url, username, password, cas, salonEdt, msgEdt, salonDevoirs, msgDevoirs, absentChannel, sendMessageWhenAbsent } = require('../config')
const { MessageEmbed, Collection } = require('discord.js')
const ms = require('ms')
const profAbsent = new Collection()

client.on(`ready`, async () => {
    console.log(`${client.user.tag} is ready !`)
    const session = await pronote.login(url, username, password, cas);
    session.setKeepAlive(true);
    const timetableChannel = await client.channels.cache.get(salonEdt);
    const timetableMsg = await timetableChannel.messages.fetch(msgEdt)

    const homeworksChannel = await client.channels.cache.get(salonDevoirs);
    const homeworksMsg = await homeworksChannel.messages.fetch(msgDevoirs)
    // Répéter une action toutes les 30 minutes
    setInterval(async () => {
        // Récupérer l'emploi du temps
        session.timetable().then(timetable => {
            const embed = new MessageEmbed()
                .setColor('#0099ff')
            if (timetable.length === 0) {
                embed.setDescription(`Aucun cours n'est prévu aujourd'hui`)
            }
            timetable.map(cours => {
                const coursDate = new Date(cours.from)
                embed.setTitle(`Emploi du temps du ${coursDate.toLocaleDateString()}`)
                embed.addField(cours.status === "Prof. absent" ? `❌ Prof. absent : ${cours.subject}` : `✅ ${cours.subject}`, cours.status === "Prof. absent" ? `~~**Salle :** ${cours.room ? cours.room : "Aucune salle précisé."}\n**Professeur :** ${cours.teacher}\n**Début :** <t:${Math.floor(coursDate / 1000)}:t>~~` : `**Salle :** ${cours.room ? cours.room : "Aucune salle précisé."}\n**Professeur :** ${cours.teacher}\n**Début :** <t:${Math.floor(coursDate / 1000)
                    }:t> `)
                console.log(cours.status === "Prof. absent" && sendMessageWhenAbsent)
                if (cours.status === "Prof. absent" && sendMessageWhenAbsent) {
                    if (profAbsent.has(cours.id)) return
                    const absentChannel = client.channels.cache.get(absentChannel)
                    const embed = new MessageEmbed()
                        .setTitle(`Professeur absent : ${cours.teacher}`)
                        .setDescription(`**Salle :** ${cours.room ? cours.room : "Aucune salle précisé."}\n**Début :** <t:${Math.floor(coursDate / 1000)}:t>`)
                        .setColor("RED")
                    absentChannel.send({ embeds: [embed] })
                    profAbsent.set(cours.id, cours.teacher)
                }
            })
            timetableMsg.edit({ embeds: [embed] })
        })
        // Récupérer les devoirs à faire
        const today = new Date().getDate()
        const year = new Date().getFullYear()
        const month = new Date().getMonth()
        session.homeworks(new Date, new Date(year, month, (today + 1))).then(homeworks => {
            console.log(homeworks)
            const embed = new MessageEmbed()
                .setColor('#0099ff')
            if (homeworks.length === 0) {
                embed.setDescription(`Aucun devoir à faire aujourd'hui`)
            }
            homeworks.map(homework => {
                const homeworkDate = new Date(homework.for)
                embed.setTitle(`Devoirs du ${homeworkDate.toLocaleDateString()}`)
                embed.addField(`${homework.subject}`, `${homework.description}\n`, true)
            })
            homeworksMsg.edit({ embeds: [embed] })
        })
    }, ms("15m"))
})