const mongoose = require('mongoose');

const schema = mongoose.Schema;

const goatMeatProductionSchema = new schema({
    
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

    NeedPerDivision: {
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
    
    GoatsPresent: {
        type: String,
        required: true
    },
    
    AvgWeightOfGoat: {
        type: String,
        required: true
    },

    MeatPercentageFromWeight: {
        type: String,
        required: true
    },

    GoatsToIncreaseProduction: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },
})

const goatMeatProduction = mongoose.model("GoatMeatProduction", goatMeatProductionSchema);
module.exports = goatMeatProduction;