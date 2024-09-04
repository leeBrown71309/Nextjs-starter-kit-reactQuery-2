# Next.js 14 Starter Kit

[Image: Logo du kit starter ou capture d'écran de l'application de démonstration]

Ce kit starter offre une base solide pour démarrer rapidement des projets avec Next.js 14, en intégrant des technologies modernes pour une expérience de développement optimale.

## 🚀 Technologies

### Next.js 14

![Next.js Logo](https://www.drupal.org/files/project-images/nextjs-drupal.jpg)

Next.js 14 est un framework React qui permet de créer des applications web rapides et optimisées. Il offre le rendu côté serveur, la génération de sites statiques, et de nombreuses optimisations de performance.

**Caractéristiques clés :**

- Rendu hybride (SSR + SSG)
- Optimisation automatique des images
- Routing basé sur le système de fichiers

### React Query

![React Query Logo](https://miro.medium.com/v2/resize:fit:513/1*NvNjVbjTCT_qqloPnR098w.png)

React Query est une bibliothèque de gestion d'état et de requêtes pour React. Elle simplifie la récupération, la mise en cache, la synchronisation et la mise à jour de l'état du serveur dans vos applications.

**Avantages :**

- Gestion automatique du cache
- Rechargement en arrière-plan
- Gestion des erreurs et des retries

### Zustand

![Zustand Logo](https://th.bing.com/th/id/R.7ca577fd8e2eb0361928fb0da75c82bc?rik=iDOuE%2fBN%2bQicjw&pid=ImgRaw&r=0)

Zustand est une solution de gestion d'état minimaliste pour React. Elle offre une API simple et intuitive pour gérer l'état global de votre application.

**Points forts :**

- API simple et directe
- Pas de boilerplate
- Compatible avec les hooks React

### Ky

![Ky Logo](https://raw.githubusercontent.com/sindresorhus/ky/3ba40cc6333cf1847c02c51744e22ab7c04407f5/media/logo.svg)

Ky est une bibliothèque HTTP basée sur Fetch, légère et puissante. Elle offre une interface moderne pour effectuer des requêtes HTTP.

**Caractéristiques :**

- API Promise-based
- Retries automatiques
- Timeout par défaut

### Tailwind CSS

![Tailwind CSS Logo](https://th.bing.com/th/id/OIP.S-SYtYzIhgPRnmRd8yWH4gHaEH?rs=1&pid=ImgDetMain)

Tailwind CSS est un framework CSS utilitaire qui permet de construire rapidement des designs personnalisés sans quitter votre HTML.

**Avantages :**

- Développement rapide
- Hautement personnalisable
- Taille de bundle optimisée en production

## 🛠 Installation

1. Clonez ce dépôt :
   git clone https://github.com/votre-username/nextjs14-starter-kit.git

2. Installez les dépendances :

```bash
  cd nextjs14-starter-kit npm install
```

3. Lancez le serveur de développement :

```bash
  npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📂 Structure du Projet

Ce projet suit une architecture modulaire et organisée pour faciliter le développement et la maintenance. Voici une description détaillée de sa structure :

## Screenshots

![App Screenshot](/public/assets/directories.png)

## Explication des Dossiers

- **`app/`**: Contient les fichiers de pages spécifiques de Next.js. Chaque fichier représente une route.
- **`app/home/api`**: Contient les fonctions qui font appel aux routes api.
- **`app/home/components`**: Liste des composants React spécifiques à la section **`app/home`**.
- **`app/home/store`**: Store de la section **`app/home`**.
- **`components/`**: Contient des composants globeaux React qui peuvent être réutilisés dans différentes parties de l'application.
- **`lib/`**: Utilisé pour stocker des configurations spécifiques à des bibliothèques telles que `ky`.
- **`lib/hooks`**: Répertoire pour les hooks personalisés notamment pour l'intégration de React Query.
- **`styles/`**: Inclut les styles globaux et la configuration de Tailwind CSS.
- **`public/`**: Contient les ressources statiques accessibles publiquement.

Cette structure de projet aide à maintenir les responsabilités bien définies pour chaque partie du code, améliorant ainsi la lisibilité et la facilité de maintenance. Vous pouvez le réadapter selon vos besoins😊👌.
