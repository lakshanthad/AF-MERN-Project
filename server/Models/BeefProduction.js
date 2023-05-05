const mongoose = require('mongoose');

const schema = mongoose.Schema;

const beefProductionSchema = new schema({
    
    Population: {
        type: String,
        required: true
    },

    NeedPerPerson: {
        type: String,
        required: true
    },

    Consuption: {
        type: String,
        required: true
    },

    NeedPerDay: {
        type: String,
        required: true
    },

    NeedPerYearInKg: {
        type: String,
        required: true
    },

    NeedPerYearInTons: {
        type: String,
        required: true
    },

    Production: {
        type: String,
        required: true
    },

    SurplusOrDeficit: {
        type: String,
        required: true
    },

    AvgWeightOfCow: {
        type: String,
        required: true
    },

    MeatPercentageFromWeight: {
        type: String,
        required: true
    },

    CowsPresent: {
        type: String,
        required: true
    },

    CowsToIncreaseProduction: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },
})

const beefProduction = mongoose.model("BeefProduction", beefProductionSchema);
module.exports = beefProduction;