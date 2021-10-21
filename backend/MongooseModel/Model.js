const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    Lead_name: { type: String, required: true },
    Lead_company: { type: String, required: true },
    Lead_domain: { type: String, required: true },
    Lead_conversion_status: { type: Boolean, default: false },
    Lead_brodcast_status: { type: Boolean, default: false },
    Lead_created_by: { type: String, required: true },
    Lead_created_date: { type: Date, default: Date.now() }
});


const leads = new mongoose.model('lead', leadSchema);

module.exports = leads;