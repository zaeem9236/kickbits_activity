const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({ //Lead Schema
    Lead_name: { type: String, required: true },
    Lead_company: { type: String, required: true },
    Lead_domain: { type: String, required: true },
    Lead_conversion_status: { type: Boolean, default: false },
    Lead_brodcast_status: { type: Boolean, default: false },
    Lead_created_by: { type: String, required: true },
    Lead_created_date: { type: Date, default: Date.now() },
    Registered_email: { type: String, required: true}
});

const leads = new mongoose.model('lead', leadSchema); // blueprint for leads record by sales person

const authSchema = new mongoose.Schema({ //authentication Schema
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false }
});

const authusers = new mongoose.model('authuser', authSchema); // blueprint for leads record by sales person





module.exports = {leads, authusers};