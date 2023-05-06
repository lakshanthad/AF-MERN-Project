const mongoose = require('mongoose');

const schema = mongoose.Schema;

const chickenProductionSchema = new schema({
    
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

    ChickensPresent: {
        type: String,
        required: true
    },

    AvgWeightOfChicken: {
        type: String,
        required: true
    },

    MeatPercentageFromWeight: {
        type: String,
        required: true
    },


    ChickensToIncreaseProduction: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },
})

const chickenProduction = mongoose.model("ChickenProduction", chickenProductionSchema);
module.exports = chickenProduction;