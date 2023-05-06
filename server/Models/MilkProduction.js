const mongoose = require('mongoose');

const schema = mongoose.Schema;

const milkProductionSchema = new schema({
    
    Population: {
        type: String,
        required: true
    },

    District: {
        type: String,
        required: true
    },

    SecretariatDivision: {
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

    NeedPerYearInMl: {
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

    AvgMilkProductionPerYear: {
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

const milkProduction = mongoose.model("MilkProduction", milkProductionSchema);
module.exports = milkProduction;