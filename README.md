# Pronote Bot

[![](https://img.shields.io/discord/641706601157361664?label=Gamers-geek&logo=discord&logoColor=%23fff)](https://discord.gg/7ykdCWQGE6)

# ARCHIVE
Ce bot utilise une vieille version de l'API Discord et n'est plus mis à jour.

## Fonctionnalités

PronoteBot permet de récupérer votre emploi du temps ainsi que vos devoirs toutes les 30 minutes via l'API (non officielle) de Pronote. Ces informations sont par la suite envoyés dans un message sous forme d'intégration (embed) sur Discord.

## Installation

```
$ git clone htts://github.com/Gamers-geek/PronoteBot
$ npm i
```

## Configuration

Remplissez le fichier de configuration

```js
module.exports = {
	botToken: "Token du bot Discord",
	url: "URL du serveur Pronote",
	username: "Identifiant du compte Pronote ou de votre ENT",
	password: "Mot de passe du compte Pronote ou de votre ENT",
	cas: "Nom de votre ENT (voir liste en fin du fichier) (optionnel)",
	salonEdt: `ID du salon où sera affiché l'emploi du temps`,
	msgEdt: `ID du message où sera affiché l'emploi du temps`,
	salonDevoirs: `ID du salon où sera affiché les devoirs`,
	msgDevoirs: `ID du message où sera affiché les devoirs`,
	sendMessageWhenAbsent: true, // Permet de définir si un message doit être envoyé lorsqu'un professeur est absent
	absentChannel: `ID du salon où seront envoyés les messages d'absences (laissez vide si "sendMessageWhenAbsent" est réglé sur false)`,
};
```

Les token de bot Discord sont accessible après avoir créé une application sur [l'espace développeur de Discord](https://discord.com/developers/)

## CAS

Lorsque vous ne pouvez pas vous connecter directement sur Pronote à l'aide d'un idenfiant et d'un mot de passe, et que vous devez passer pour un autre site de connexion (tel qu'un ENT), veuillez remplir le champs `cas`

Liste des `cas` disponible :

> - Académie d'Orleans-Tours (CAS : ac-orleans-tours, URL : "ent.netocentre.fr")
> - Académie de Besançon (CAS : ac-besancon, URL : "cas.eclat-bfc.fr")
> - Académie de Bordeaux (CAS : ac-bordeaux, URL : "mon.lyceeconnecte.fr")
> - Académie de Bordeaux 2 (CAS : ac-bordeaux2, URL : "ent2d.ac-bordeaux.fr")
> - Académie de Caen (CAS : ac-caen, URL : "fip.itslearning.com")
> - Académie de Clermont-Ferrand (CAS : ac-clermont, URL : "cas.ent.> auvergnerhonealpes.fr")
> - Académie de Dijon (CAS : ac-dijon, URL : "cas.eclat-bfc.fr")
> - Académie de Grenoble (CAS : ac-grenoble, URL : "cas.ent.auvergnerhonealpes.fr")
> - Académie de la Loire (CAS : cybercolleges42, URL : "cas.cybercolleges42.fr")
> - Académie de Lille (CAS : ac-lille, URL : "cas.savoirsnumeriques62.fr")
> - Académie de Lille (CAS : ac-lille2, URL : "teleservices.ac-lille.fr")
> - Académie de Limoges (CAS : ac-limoges, URL : "mon.lyceeconnecte.fr")
> - Académie de Lyon (CAS : ac-lyon, URL : "cas.ent.auvergnerhonealpes.fr)
> - Académie de Marseille (CAS : atrium-sud, URL : "atrium-sud.fr")
> - Académie de Montpellier (CAS : ac-montpellier, URL : "cas.mon-ent-occitanie.fr")
> - Académie de Nancy-Metz (CAS : ac-nancy-metz, URL : "cas.monbureaunumerique.fr")
> - Académie de Nantes (CAS : ac-nantes, URL : "cas3.e-lyco.fr")
> - Académie de Poitiers (CAS : ac-poitiers, URL : "mon.lyceeconnecte.fr")
> - Académie de Reims (CAS : ac-reims, URL : "cas.monbureaunumerique.fr")
> - Académie de Rouen (Arsene76) (CAS : arsene76, URL : "cas.arsene76.fr")
> - Académie de Rouen (CAS : ac-rouen, URL : "nero.l-educdenormandie.fr")
> - Académie de Strasbourg (CAS : ac-strasbourg, URL : "cas.monbureaunumerique.fr")
> - Académie de Toulouse (CAS : ac-toulouse, URL : "cas.mon-ent-occitanie.fr")
> - Académie du Val-d'Oise (CAS : ac-valdoise, URL : "cas.moncollege.valdoise.fr")
> - ENT "Agora 06" (Nice) (CAS : agora06, URL : "cas.agora06.fr")
> - ENT "Haute-Garonne" (CAS : haute-garonne, URL : "cas.ecollege.haute-garonne.fr")
> - ENT "Hauts-de-France" (CAS : hdf, URL : "enthdf.fr")
> - ENT "La Classe" (Lyon) (CAS : laclasse, URL : "www.laclasse.com")
> - ENT "Lycee Connecte" (Nouvelle-Aquitaine) (CAS : lyceeconnecte, URL : "mon.> lyceeconnecte.fr")
> - ENT "Seine-et-Marne" (CAS : seine-et-marne, URL : "ent77.seine-et-marne.fr")
> - ENT "Somme" (CAS : somme, URL : "college.entsomme.fr")
> - ENT "Portail Famille" (Orleans Tours) (CAS : portail-famille, URL : "seshat.> ac-orleans-tours.fr:8443")
> - ENT "Toutatice" (Rennes) (CAS : toutatice, URL : "www.toutatice.fr")
> - ENT "Île de France" (CAS : iledefrance, URL : "ent.iledefrance.fr")
> - ENT "Mon collège Essonne" (CAS : moncollege-essonne, URL : "www.moncollege-ent.> essonne.fr")
> - ENT "Paris Classe Numerique" (CAS : parisclassenumerique, URL : "ent.> parisclassenumerique.fr")
> - ENT "Lycee Jean Renoir Munich" (CAS : ljr-munich, URL : "cas.kosmoseducation.> com")
> - ENT "L'Eure en Normandie" (CAS : eure-normandie, URL : "cas.ent27.fr")
> - ENT "Mon Bureau Numérique" via EduConnect (CAS: monbureaunumerique-educonnect, > URL: "cas.monbureaunumerique.fr")

## J'ai un problème

En cas de problème, veuillez le signaler [ici](https://github.com/Gamers-geek/PronoteBot/issues/new) ou m'envoyer un MP sur Discord
