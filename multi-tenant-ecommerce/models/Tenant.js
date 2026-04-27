const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
    name: String,
    email: String,
    domain: String
});

module.exports = mongoose.model('Tenant', TenantSchema);
