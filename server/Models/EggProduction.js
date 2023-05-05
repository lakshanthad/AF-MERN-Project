const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eggProductionSchema = new schema({
    
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

    NeedPerYear: {
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

    DomesticChickens: {
        type: String,
        required: true
    },

    HensPresent: {
        type: String,
        required: true
    },

    AnnualProductonOfAHen: {
        type: String,
        required: true
    },    

    HensToIncreaseProduction: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },
})

const eggProduction = mongoose.model("EggProduction", eggProductionSchema);
module.exports = eggProduction;