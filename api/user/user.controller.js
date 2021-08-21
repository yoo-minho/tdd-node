let userModel = {};

const index = (req, res) => {
    const limit = parseInt(req.query.limit || 10, 10);
    if (isNaN(limit)) return res.status(400).end();
    userModel.findAll().then(userData => {
        res.json(userData)
    });
}

const show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).end();
    userModel.findById(id).then(userData => {
        if (!userData) return res.status(404).end();
        if (userData.length === 0) return res.status(200).json({
            errorMsg: "not exists!"
        }).end();
        res.json(userData)
    });
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).end();
    userModel.destroy(id).then(userData => {
        if (!userData) return res.status(404).end();
        if (userData.length === 0) return res.status(200).json({
            errorMsg: "already been deleted!"
        }).end();
        res.json(userData)
    });
}

const create = (req, res) => {
    const name = req.body.name;
    if (!name) return res.status(400).end();
    userModel.create(name).then(userData => {
        if (!userData) return res.status(404).end();
        if (userData.length === 0) return res.json({
            errorMsg: "duplicate Name!"
        }).end();
        res.status(201).json(userData[0]);
    });
}

const update = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).end();

    const name = req.body.name;
    if (!name) return res.status(400).end();

    userModel.update(id, name).then(userData => {
        if (!userData) return res.status(404).end();
        if (userData.length === 0) return res.json({
            errorMsg: "not exists! or duplicate Name!"
        }).end();
        res.status(201).json(userData[0]);
    });
}

module.exports = (userMd) => {
    userModel = userMd;
    return {index, show, destroy, create, update}
}