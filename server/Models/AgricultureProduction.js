const mongoose = require('mongoose');

const schema = mongoose.Schema;

const agricultureProductionSchema = new schema({
    
    District: {
        type: String,
        required: true
    },

    SecretariatDivision: {
        type: String,
        required: true
    },

    OfficerID: {
        type: String,
        required: true
    },

    ProductionName: {
        type: String,
        required: true
    },

    ProductionType: {
        type: String,
        required: true
    },

    Season: {
        type: String,
        required: true
    },

    TargetedLandArea: {
        type: String,
        required: true
    },

    CultivatedLandArea: {
        type: String,
        required: true
    },

    Harvest: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },
})

const agricultureProduction = mongoose.model("AgricultureProduction", agricultureProductionSchema);
module.exports = agricultureProduction;