
![Logo](https://i.goopics.net/9w9pbv.png)


# Kanap

En poste dans une agence de développement web depuis quelques semaines maintenant. Après avoir réalisé avec succès l’intégration de quelques sites web (HTML/CSS), on me confie une nouvelle mission.

Mon client est Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.

Dans le cadre de cette mission, nous travaillons avec une équipe constituée de 3 Personnes :

- Corinne, le CTO de l’agence .
- Frank, le développeur front-end qui s’est chargé d’intégrer la maquette statique du site .
- Bilal, le développeur back-end qui implémente l’API à laquelle est connecté le front-end.

Voici les différentes tâches que j'ai eu à mener à bien :

- Unifier les travaux déjà réalisés par l’équipe en intégrant dynamiquement les éléments de l’API dans les différentes pages web avec JavaScript. Le code du front-end et de l’API est disponible sur ce repo.

- Mettre en place un plan de test d’acceptation à partir de ce template que nous avons pour habitude d’utiliser.

4 pages ont été mises en place : 
- Page d’Accueil,
- Page Produit, 
- Page Panier 
et 
- La page Confirmation. 

Sur l’ensemble des pages, toutes les parties statiques sont en place, elles était donc prêtes à recevoir le contenu dynamique.

Sur chaque page, un exemple de la partie dynamique était  systématiquement donné  de cette façon, 
je n'ai pas eu a m'occuper de la mise en place de la structure HTML ni du style CSS, tout était déjà fait.

 Je n'avais plus qu’à m’occuper d’intégrer ces éléments dynamiquement grâce à JS et l’API.
## Techno Utilisées

**Front:** HTML ,  CSS

**Back:** Node, JavaScript


## Screenshots

![App Screenshot](https://i.goopics.net/smlewt.png)


## Run Locally

Cloner le projet 

```bash
  git clone https://github.com/ultraasedev/Kanap.git
```

Aller dans le dossier back pour installer npm

```bash
  cd Kanap/back
```

Install les dependences npm

```bash
  npm install
```

Demarrer le server

```bash
  npm run start
```

Ensuite demarrer votre wamp/xamp/docker/liveserver etc
rendez vous ensuite sur 
```bash
  http://votreadresselocal/front/html
```