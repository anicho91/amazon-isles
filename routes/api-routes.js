const Client = require('../models/Client');
const Provider = require('../models/Provider');
const Garment = require('../models/Garment');
const Fabric = require('../models/Fabric');
const User = require('../models/User');
const Order = require('../models/Order');
const Test = require('../models/Test');

module.exports = function (app) {
    
    //For test
    app.post("/api/session", function(req, res) {
        User.findOne({token: req.body.token})
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        });
    });

    
    app.post("/api/test", function (req, res) {
        Test.create(req.body)
            .then(function (dbTest) {
                res.json({ Created: dbTest });
            })
            .catch(function (error) {
                console.log(error);
                res.json({ Error: error });
            });

    });

    app.get('/api/test', function (req, res) {
        Test.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete('/api/test/:token', function (req, res) {
        Test.findOneAndDelete({ token: req.params.token })
            .then(function (userData) {
                res.json(userData);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //For creating a new user
    app.post("/api/users", function (req, res) {

        const user = req.body;

        //Check the customer if they are client or provider
        const category = req.body.category;
        const userData = req.body;

        if (category === "client") {

            Client.create(userData)
                .then(function (clientData) {
                    console.log(clientData);
                    res.json({ Created: clientData });
                })
                .catch(function (error) {
                    console.log(error);
                    res.json({ Error: error });
                });
        }
        else if (category === "provider") {

            Provider.create(userData)
                .then(function (providerData) {
                    res.json({ Created: providerData });
                })
                .catch(function (error) {
                    res.json({ Error: error });
                });

        }
    });

    //Sending all clients information
    app.get('/api/users', function (req, res) {
        User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Sending one client information by client ID.
    app.get('/api/users/:id', function (req, res) {
        User.findOne({ token: req.params.id })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    });

    //Update user
    app.put('/api/users/:id', function (req, res) {
        User.findOneAndUpdate({ token: req.params.id }, { $set: req.body })
            .populate("orders")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Update provider field.
    app.put('/api/providers/:id', function(req, res){
        Provider.findOneAndUpdate({ token: req.params.id }, { $set: req.body })
            .populate("orders")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    });

    //Update client field.
    app.put('/api/clients/:id', function(req, res){
        Client.findOneAndUpdate({ _id: req.params.id }, { $set: {measurement: req.body.measurement}})
            .populate("orders")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    });

    //Delete user
    app.delete('/api/users/:id', function (req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(function (userData) {
                res.json(userData);
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

    //Get all garments
    app.get('/api/garments', function (req, res) {
        Garment.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Update Garments
    app.put('/api/garments/:id', function (req, res) {
        Garment.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
            .then(function (garmentData) {
                res.json(garmentData);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Delete Garments
    app.delete('/api/garments/:id', function (req, res) {
        Garment.findOneAndDelete({ _id: req.params.id })
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

    //Get all fablics
    app.get('/api/fabrics', function (req, res) {
        Fabric.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Update fablics
    app.put('/api/fabrics/:id', function (req, res) {
        Fabric.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
            .then(function (fabricData) {
                res.json(fabricData);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Delete Fabric
    app.delete('/api/fabrics/:id', function (req, res) {
        Fabric.findOneAndDelete({ _id: req.params.id })
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
        const newEntry = {
            budget: req.body.budget,
            fabric: req.body.fabricId,
            garment: req.body.garmentId,
            token: req.body.token,
            measurement: req.body.measurement
        }

        Order.create(newEntry)
            .then((dbOrder) => {
                Client.findOneAndUpdate({ _id: token}, { $push: { orders: dbOrder._id } }, { new: true })
                    .then((clientData) => {
                        res.json(clientData);
                    })
                    .catch(function (error) {
                        res.json({ Error: error });
                    });

            })
            .catch(function (error) {
                res.json({ Error: error });
            });

    });

    //Use this route when provider is decided for order
    app.put('/api/orders/:id', function (req, res) {

        const token = req.body.token;

        Order.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
            .then(function (orderData) {
                return User.findOneAndUpdate({ token: token }, { $push: { orders: orderData._id } }, { new: true });
            })
            .then(function (providerData) {
                res.json(providerData);
            })
            .catch(function (err) {
                res.json(err);
            });


    });

    //Get all orders
    app.get('/api/orders', function (req, res) {
        Order.find({})
            .populate("client")
            .populate("provider")
            .populate("garment")
            .populate("fabric")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Get one order by ID
    app.get('/api/orders/:id', function (req, res) {
        Order.find({ _id: req.params.id })
            .populate("client")
            .populate("provider")
            .populate("garment")
            .populate("fabric")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //Delete order
    app.delete('/api/orders/:id', function (req, res) {
        Order.findOneAndDelete({ _id: req.params.id })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

}