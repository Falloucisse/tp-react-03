# TP React JS : Gestion de catalogue de livres

Petite application de gestion du catalogue d'une bibliothèque universitaire.

## Ce qui a été fait

- Affichage d'une liste de livres sous forme de cartes
- Compteur en temps réel des livres disponibles
- Emprunt et retour d'un livre en un clic
- Formulaire pour ajouter un nouveau livre (titre + auteur)

## Outils utilisés

- **React** : construction de l'interface avec des composants
- **Vite** : création et lancement du projet
- **JSX** : écriture de l'interface dans le JavaScript
- **GitHub / GitHub Pages** : partage du code et mise en ligne de la page

## Notions de React utilisées

- **Composants** : `App` (parent) et `BookCard` (enfant)
- **Props** : `titre`, `auteur`, `estDisponible` et `onClickEmprunt` envoyées de `App` vers `BookCard`
- **Rendu conditionnel** : statut (Disponible / Emprunté) et texte du bouton (Emprunter / Rendre)
- **`.map()` et `key`** : un `BookCard` est affiché pour chaque livre, avec l'`id` comme clé
- **`useState`** : états `books`, `titre` et `auteur`
- **Événements** : `onClick` (emprunt), `onChange` et `onSubmit` (formulaire)
- **Champs contrôlés** : les champs du formulaire sont liés à l'état

## Lancer le projet

```bash
npm install
npm run dev
```