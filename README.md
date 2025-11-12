# HRnet React

Application de gestion des ressources humaines développée avec React.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build de production
npm run build
```

## 📋 Fonctionnalités

- ✅ Création d'employés avec formulaire complet
- ✅ Liste des employés avec tableau interactif
- ✅ Tri et pagination des données
- ✅ Recherche et filtrage
- ✅ Persistance locale des données (localStorage)
- ✅ Interface responsive
- ✅ Composants réutilisables (DatePicker, Select, Modal)

## 🏗️ Technologies

- **React 19.1.1** - Framework JavaScript
- **React Router DOM 7.9.5** - Routage
- **React Data Table Component 7.7.0** - Tableaux de données
- **Vite 7.1.7** - Build tool
- **Styled Components 6.1.19** - Styling

## 🗂️ Structure du projet

```
hrnet-react/
├── src/
│   ├── components/      # Composants réutilisables
│   ├── context/         # Context API (gestion d'état)
│   ├── data/            # Données statiques
│   ├── pages/           # Pages de l'application
│   ├── App.jsx          # Composant racine
│   └── main.jsx         # Point d'entrée
├── DOCUMENTATION.md     # Documentation complète
└── package.json
```

## 🎯 Pages

- **`/`** - Création d'un nouvel employé
- **`/employees`** - Liste de tous les employés

## 💾 Stockage

Les données sont stockées localement dans le **localStorage** du navigateur, permettant la persistance entre les sessions.

## 🛠️ Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Crée le build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

## 📦 Composants principaux

### DatePicker
Sélecteur de date avec conversion automatique de format (ISO ↔ MM/DD/YYYY).

### Select
Liste déroulante personnalisée avec support des options simples ou complexes.

### Modal
Fenêtre modale accessible avec gestion du focus et du scroll.

## 🔧 Configuration

### Vite
Configuration dans `vite.config.js` avec le plugin React.

### ESLint
Règles de linting configurées dans `eslint.config.js`.

## 🌐 Navigateurs supportés

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## 📝 Licence

Ce projet est développé dans un cadre éducatif.

---

Pour plus d'informations, consultez la [documentation technique complète](./DOCUMENTATION.md).

