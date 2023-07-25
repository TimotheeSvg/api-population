import mongoose from "mongoose";

const populationSchema = new mongoose.Schema({
    name: String,
    population: Number,
});


const populationModel = mongoose.model('populations', populationSchema);

export default populationModel;