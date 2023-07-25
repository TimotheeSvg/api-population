# API POPULATION

### Objectif 

donner des informations sur la population d'un pays

### Le dataset
Dataset trouvé sur kaggle. J'ai modifié le nom des 2 premières colonnes pour que ça soit
plus compréhensible.

Lors de l'insertion en base mongo, il faut sélectionner les colonnes population et nom;
vous pouvez décocher les autres

### Les routes

##### CRUD

Cet api contient un CRUD sur une population vous pouvez donc à partir d'un id
UPDATE, GET et DELETE ainsi que créer une nouvelle data avec POST

##### Authentification

Ma route d'authentification démontre juste comment encrypter un Jwt avec les informations
d'un client, ici totalement factice car l'email est inscrit dans l'env
mais nous pouvons imaginer totalement la même chose avec un email contenu en base de données et une
vérification qui va chercher en base. Ceci dit les principes sont exactement les mêmes