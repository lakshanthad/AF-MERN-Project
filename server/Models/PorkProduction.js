const mongoose = require('mongoose');

const schema = mongoose.Schema;

const porkProductionSchema = new schema({
    
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

    NeedAsPerDivision: {
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

    AvgWeightOfPig: {
        type: String,
        required: true
    },

    MeatPercentageFromWeight: {
        type: String,
        required: true
    },

    PigsPresent: {
        type: String,
        required: true
    },

    PigsToIncreaseProduction: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },
})

const porkProduction = mongoose.model("PorkProduction", porkProductionSchema);
module.exports = porkProduction;