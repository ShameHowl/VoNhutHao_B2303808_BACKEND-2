exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handle" });
};

exports.update = (req, res) => {
    res.send({ message: "update handle" });
};

exports.delete = (req, res) => {
    res.send({ message: "delete handle" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handle" });
};

exports.findAllFavourite = (req, res) => {
    res.send({ message: "findAllFavourite handle" });
};