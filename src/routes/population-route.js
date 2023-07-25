import {getPopulation, getAllPopulation, updatePopulation, addPopulation, getPopulationWithName, deletePopulation} from "../controllers/population.controller.js";
import express from "express";
import {verifyToken} from "../middleware/auth-middleware.js";

const populationRouter = express.Router();

populationRouter.get('/', (req, res) => res.send('population'))

/**
 * @swagger
 * tags:
 *   name: Population
 *   description: API pour gérer les données de la population
 * /population/all:
 *   get:
 *     summary: Récupère toutes les données de population
 *     description: Récupère toutes les données de population enregistrées.
 *     tags: [Population]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Succès. Retourne la liste de toutes les données de population.
 *       401:
 *         description: Non autorisé. L'utilisateur doit être authentifié.
 *       404:
 *         description: Non trouvé. Aucune donnée de population trouvée.
 */
populationRouter.get(
    "/all",
    [verifyToken],
    getAllPopulation
);


/**
 * @swagger
 * tags:
 *   name: Population
 *   description: API pour gérer les données de la population
 * /population/name:
 *   get:
 *     summary: Récupère la population avec un nom spécifique
 *     description: Récupère les données de population avec le nom spécifié.
 *     tags: [Population]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: name
 *         in: query
 *         description: Nom de la population à rechercher.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès. Retourne les données de population avec le nom spécifié.
 *       401:
 *         description: Non autorisé. L'utilisateur doit être authentifié.
 *       404:
 *         description: Non trouvé. Aucune donnée de population trouvée avec le nom spécifié.
 *       500:
 *         description: Erreur serveur. Impossible de récupérer les données de population.
 */

populationRouter.get(
    "/name",
    [verifyToken],
    getPopulationWithName
);


/**
 * @swagger
 * tags:
 *   name: Population
 *   description: API pour gérer les données de la population
 * /population/{id}:
 *   get:
 *     summary: Récupère les données de population par ID
 *     description: Récupère les données de population enregistrées avec l'ID spécifié.
 *     tags: [Population]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la population à rechercher.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès. Retourne les données de population avec l'ID spécifié.
 *       401:
 *         description: Non autorisé. L'utilisateur doit être authentifié.
 *       404:
 *         description: Non trouvé. Aucune donnée de population trouvée avec l'ID spécifié.
 *       500:
 *         description: Erreur serveur. Impossible de récupérer les données de population.
 */
populationRouter.get(
    "/:id",
    [verifyToken],
    getPopulation
);

/**
 * @swagger
 * tags:
 *   name: Population
 *   description: API pour gérer les données de la population
 * /population/{id}:
 *   put:
 *     summary: Met à jour les données de population par ID
 *     description: Met à jour les données de population enregistrées avec l'ID spécifié.
 *     tags: [Population]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la population à mettre à jour.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nouvelles données de population à utiliser pour la mise à jour.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Population'
 *     responses:
 *       204:
 *         description: Succès, donée mis à jour.
 *       401:
 *         description: Non autorisé. L'utilisateur doit être authentifié.
 *       500:
 *         description: Erreur serveur. Impossible de mettre à jour les données de population.
 */

populationRouter.put(
    "/:id",
    [verifyToken],
    updatePopulation
);


/**
 * @swagger
 * tags:
 *   name: Population
 *   description: API pour gérer les données de la population
 * /population/{id}:
 *   delete:
 *     summary: Supprime les données de population par ID
 *     description: Supprime les données de population enregistrées avec l'ID spécifié.
 *     tags: [Population]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la population à supprimer.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Succè, donnée supprimée.
 *       401:
 *         description: Non autorisé. L'utilisateur doit être authentifié.
 *       500:
 *         description: Erreur serveur. Impossible de supprimer les données de population.
 */

populationRouter.delete(
    "/:id",
    [verifyToken],
    deletePopulation
);


/**
 * @swagger
 * tags:
 *   name: Population
 *   description: API pour gérer les données de la population
 * /population:
 *   post:
 *     summary: Ajoute de nouvelles données de population
 *     description: Ajoute de nouvelles données de population.
 *     tags: [Population]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Données de la nouvelle population à ajouter.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Population'
 *     responses:
 *       201:
 *         description: Créé avec succès. Retourne les données de la nouvelle population créée.
 *       401:
 *         description: Non autorisé. L'utilisateur doit être authentifié.
 *       500:
 *         description: Erreur serveur. Impossible d'ajouter les données de population.
 */
populationRouter.post(
    "/",
    [verifyToken],
    addPopulation
);
export default populationRouter;