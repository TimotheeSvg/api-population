import db from "../models/index.js";
import Populations from "../models/populations-model.js";

const Population = db.population;



export const getPopulation = async (req, res) => {
    const id = req.params.id;
    const country = await Population.findById(id);

    if(country) {
        res.status(200).send(country)
    } else {
        res.status(404).send("Ressource non trouvée")
    }
};

export const getPopulationWithName = async (req, res) => {
    const name = req.query.name;

    if (name !== undefined) {
        const country = await Population.findOne({name: name});

        if (country) {
            res.status(200).send(country)
        } else {
            res.status(404).send("Ressource non trouvée")
        }
    } else {
        res.status(500).send("Une erreur s'est produite lors de la récupération des informations");
    }

};



export const getAllPopulation = async (req, res) => {
    const country = await Population.find({});

    if (country) {
        res.status(200).send(country)
    } else {
        res.status(404).send("Ressource non trouvée")
    }
};


export const updatePopulation = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.query.name
        const population = req.query.population

        try {
            await Population.updateOne({ _id: id }, { $set: {name: name, population: population}});

            res.status(204).send({message: 'L\'id ' + id + ' a bien ete mis à jour'}); // Répondre avec les nouvelles informations du pays mises à jour
        } catch (error) {
            res.status(500).send("Une erreur s'est produite lors de la mise à jour du pays");
        }

    } catch (error) {
        res.status(500).send("Une erreur s'est produite lors de la récupération des informations");
    }
};

export const addPopulation = async (req, res) => {
    try {
        const name = req.body.name
        const value = req.body.population
        try {
            if (name !== undefined && value !== undefined) {
                const population = new Populations({name: name, population: value});
                const newPopulation = await population.save();
                res.status(201).json(newPopulation);
            } else {
                res.status(500).send('Erreur lors de la création')
            }
        } catch (error) {
            res.status(500).send("Une erreur s'est produite lors de la création");
        }

    } catch (error) {
        res.status(500).send("Une erreur s'est produite lors de la récupération des informations");
    }
};

export const deletePopulation = async (req, res) => {
    try {
        const id = req.params.id;
        await Population.findOneAndDelete(id);
        res.status(204).send('élément supprimé')

    } catch (error) {
        res.status(500).send("Une erreur s'est produite")
    }
};