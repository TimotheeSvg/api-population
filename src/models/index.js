import mongoose from 'mongoose';
import population from './populations-model.js';

mongoose.Promise = globalThis.Promise;

const db = {};

db.mongoose = mongoose;
db.population = population;

export default db;