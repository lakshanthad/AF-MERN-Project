const mongoose = require('mongoose');

const schema = mongoose.Schema;

const beefProductionSchema = new schema({
    
    population: {
        type: Number,
        required: true
    },

    needPerPerson: {
        type: String,
        required: true
    },

    consuption: {
        type: String,
        required: true
    },

    needPerDay: {
        type: String,
        required: true
    },

    needPerYearInKg: {
        type: String,
        required: true
    },

    needPerYearInTons: {
        type: String,
        required: true
    },

    production: {
        type: String,
        required: true
    },

    surplusOrDeficit: {
        type: String,
        required: true
    },

    avgWeightOfCow: {
        type: String,
        required: true
    },

    meetPercentageFromWeight: {
        type: String,
        required: true
    },

    cowsPresent: {
        type: String,
        required: true
    },

    cowsToIncreaseProduction: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },
})

const beefProduction = mongoose.model("BeefProduction", beefProductionSchema);
module.exports = beefProduction;