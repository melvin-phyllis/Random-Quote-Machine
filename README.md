# Random Quote Machine

## Apercu
Random Quote Machine est une application React qui affiche des citations aleatoires en s appuyant sur TypeScript et Vite. Au montage, l app charge une collection de citations depuis un jeu de donnees public, les memorise dans l etat global, puis permet a l utilisateur de parcourir la liste pour decouvrir de nouvelles inspirations.

## Fonctionnalites principales
- Recuperation de la collection depuis [ce gist FreeCodeCamp](https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json) via Axios lors du montage du composant principal.
- Mise en cache locale des citations pour eviter des requetes repetitives.
- Affichage d une citation et de son auteur dans une mise en page responsive inspiree du projet FreeCodeCamp.
- Bouton "New quote" qui selectionne une citation au hasard dans la liste chargee.
- Icônes Twitter et Tumblr (React Icons) pretes a etre raccordees pour partager la citation.

## Stack technique
- React 18 + TypeScript (outillage Vite).
- Axios pour les requetes HTTP.
- React Icons pour les pictogrammes sociaux.
- Tailwind CSS / DaisyUI et styles globaux (`src/css/style.css`) pour la mise en forme.

## Structure du projet
- `src/App.tsx` : composant racine qui instancie l etat global des citations et affiche `Citation`.
- `src/components/Citation.tsx` : logique d affichage de la citation courante et des actions utilisateur.
- `src/controllers/GetCitaion.ts` : service charge de recuperer les citations et de les stocker dans l etat.
- `src/controllers/RandomShow.ts` : utilitaire qui choisit une citation aleatoire et met a jour l etat local du composant.
- `src/types/index.ts` : definitions TypeScript pour typer les citations et les props.
- `src/css/style.css` : styles supplementaires pour personnaliser le rendu.
- `public/` : ressources statiques disponibles telles quelles pendant le build.


## Notes de fonctionnement
- `GetCitaion` et `RandomShow` sont isoles dans `src/controllers` pour distinguer la logique metier du rendu React.
- La liste complete de citations est stockee dans l etat du composant parent, ce qui permet au composant `Citation` de se concentrer sur l affichage.
- Le projet est configure avec ESLint; lancez `npm run lint` pour verifier le style et la coherence TypeScript.

