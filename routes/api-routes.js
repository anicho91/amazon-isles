const Client = require('../models/Client');
const Provider = require('../models/Provider');
const Garment = require('../models/Garment');
const Fabric = require('../models/Fabric');
const Measurement = require('../models/Measurement');
const Clothes = require('../models/Clothes');

module.exports = function (app) {

    //For creating a new client
    app.post("/api/clients", function (req, res) {
        Client.create(req.body)
            .then(function (dbClient) {
                res.json({ Created: dbClient });
            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    //Sending all clients information
    app.get('/api/clients', function (req, res) {
        Client.find({})
            .populate('measurements')
            .populate('clothes')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //For creating a new provider
    app.post("/api/providers", function (req, res) {
        Provider.create(req.body)
            .then(function (dbProvider) {
                res.json({ Created: dbProvider });
            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    //Sending all clients information
    app.get('/api/providers', function (req, res) {
        Provider.find({})
            .populate('clothes')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //For garment
    app.post("/api/garments", function (req, res) {
        Garment.create(req.body)
            .then(function (dbGarment) {
                res.json({ Created: dbGarment });
            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    app.get('/api/garments', function (req, res) {
        Garment.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //For Fabric
    app.post("/api/fabrics", function (req, res) {
        Fabric.create(req.body)
            .then(function (dbFabric) {
                res.json({ Created: dbFabric });
            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    app.get('/api/fabrics', function (req, res) {
        Fabric.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //For Measurement
    app.post("/api/measurements", function (req, res) {

        const clientId = req.body.clientId;
        const newEntry = {
            weist: req.body.weist,
            bust: req.body.bust,
            arm_length: req.body.arm_length,
            leg_length: req.body.leg_length
        }

        Measurement.create(newEntry)
            .then(function (dbMeasurement) {
                return Client.findOneAndUpdate({ _id: clientId }, { $set: { measurements: dbMeasurement._id } }, { new: true });
            })
            .then(function (clientData) {
                res.json(clientData);
            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    app.get('/api/measurements', function (req, res) {
        Measurement.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //For Measurement
    app.post("/api/clothes", function (req, res) {

        const clientId = req.body.clientId;
        const providerId = req.body.providerId;
        const newEntry = {
            budget: req.body.budget,
            fabricId: req.body.fabricId,
            garmentId: req.body.garmentId,
        }

        Clothes.create(newEntry)
            .then((dbClothes) => {
                Provider.findOneAndUpdate({ _id: providerId }, { $push: { clothes: dbClothes._id } }, { new: true })
                    .then(function (providerData) {
                        Client.findOneAndUpdate({ _id: clientId }, { $push: { clothes: dbClothes._id } }, { new: true })
                            .then((clientData) => {
                                res.json(clientData);
                            })
                    });
            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    app.get('/api/clothes', function (req, res) {
        Clothes.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

}