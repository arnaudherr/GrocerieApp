# APP GROCERY

Pour cette appli j'ai décidé de faire du mobil first. L'app n'est donc pas responsive et est optimisé (en therme d'ui) pour mobil. N'ayant jamais utilisé de framework javascript, j'ai décidé d'utiliser du jquery et un peu d'angularjs, car on est challenge ou on ne l'est pas ;)

## 1) Installation pour la visualisation
- Pour commencer, il faut simuler un serveur local (xamp/mamp/...)
- Importer la base de donnée App.sql
- Accéder à l'app via localhost/nomdudossier ou via un vHost.

## 2) Installation pour l'édition
- Pour modifier le template on peut éditer de manière classique les fichiers html.
- Pour le css j'ai installé gulp afin de pouvoir utiliser SASS.
- pour installer gulp vous pouvez vous référencer ici: https://www.npmjs.com/package/gulp-install (! NodeJs doit déjà être installé. Si ce n'est pas le cas, installez-le.)
- Une fois gulp installer, pointer la direction vers votre fichier: "cd/Library/AnraudHerr/.../..."
- Pour lancer les tâche (Définies dans gulpfile.js) il suffit de taper la commande: gulp watch

## 3) Features
Actuellement l'app permet d'ajouter des listes de courses. Chaque liste comprendra une partie d'articles deja acheté, et d'articles à aller chercher.
Pour aider les utilisateurs, chaque article sera catégorisé (vegetables, meat, fish,...). Un clique sur la catégorie et l'app vous montre ou se trouve la rayon.
Pour chaque liste, nous avons la possibilité d'ajouter de nouveaux articles. Une fois, tous les articles achetés, l'app vous propose d'insérer le prix de la course permettant ainsi de récolter des statistiques quant aux dépenses effectués et de clôturer pour de bon la liste.
Une navigation (dans le bas de la page) vous permet de passer de vos listes de course à la page des statistiques (google chart API pour la visualisation). (Page des recettes pas implémentée).
