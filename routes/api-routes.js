const Client = require('../models/Client');
const Provider = require('../models/Provider');
const Garment = require('../models/Garment');
const Fabric = require('../models/Fabric');
const User = require('../models/User');
const Order = require('../models/Order');

module.exports = function (app) {

    //For creating a new user
    app.post("/api/users", function (req, res) {

        const user = req.body;

        //Check the customer if they are client or provider
        const category = req.body.category;
 

        const newUser = {
            userId: req.body.userId,
            password: req.body.password,
            phone: req.body.phone,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            category: req.body.category
        };


        if (category === "client") {

            User.create(newUser)
                .then(function (userData) {
                    const newClient = {
                        measurement: user.measurement,
                        user: userData._id
                    };

                    Client.create(newClient)
                        .then(function (clientData) {
                            res.json({ Created: clientData, userData });
                        })
                        .catch(function (error) {
                            res.json({ Error: error });
                        });

                })
                .catch(function (error) {
                    res.json({ Error: error });
                });
        }
        else if(category === "provider") {

            User.create(newUser)
                .then(function (userData) {
                    const newProvider = {
                        demo: user.demo,
                        picture: user.picture,
                        availability: user.availability,
                        budget: user.budget,
                        job_category: user.job_category,
                        user: userData._id
                    };

                    Provider.create(newProvider)
                        .then(function (providerData) {
                            res.json({ Created: providerData, userData });
                        })
                        .catch(function (error) {
                            res.json({ Error: error });
                        });

                })
                .catch(function (error) {
                    res.json({ Error: error });
                });
        }


    });

    //Sending all clients information
    app.get('/api/clients', function (req, res) {
        Client.find({})
            .populate('user')
            .populate('measurements')
            .populate('order')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    //Return all prociders information
    app.get('/api/providers', function (req, res) {
        Provider.find({})
            .populate('user')
            .populate('order')
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

    

    //For Order
    app.post("/api/orders", function (req, res) {

        const clientId = req.body.clientId;
        const providerId = req.body.providerId;
        const newEntry = {
            budget: req.body.budget,
            fabric: req.body.fabricId,
            garment: req.body.garmentId,
            client: req.body.clientId,
            measurement: req.body.measurement
        }

        Order.create(newEntry)
            .then((dbOrder) => {
                Provider.findOneAndUpdate({ _id: providerId }, { $push: { orders: dbOrder._id } }, { new: true })
                    .then(function (providerData) {
                        Client.findOneAndUpdate({ _id: clientId }, { $push: { orders: dbOrder._id } }, { new: true })
                            .then((clientData) => {
                                res.json(clientData);
                            })
                    });
            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    app.get('/api/orders', function (req, res) {
        Order.find({})
        .populate("client")
        .populate("provider")
        .populate("garment")
        .populate("fablic")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

}