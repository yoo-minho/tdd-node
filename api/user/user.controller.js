let users = [
    {id: 1, name: 'alice1'},
    {id: 2, name: 'alice2'},
    {id: 3, name: 'alice3'},
    {id: 4, name: 'alice4'},
];

let userModel = {};

const index = (req, res) => {
    const limit = parseInt(req.query.limit || 10, 10);
    if (isNaN(limit)) return res.status(400).end();
    userModel.findAll();
    res.json(users.slice(0, limit))
}

const show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).end();
    const user = users.filter((u) => u.id === id)[0];
    if (!user) return res.status(404).end();
    res.json(user)
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).end();
    users = users.filter((u) => u.id !== id);
    res.status(204).end();
}

const create = (req, res) => {
    const name = req.body.name;
    if (!name) return res.status(400).end();
    const isConflict = users.filter((u) => u.name === name).length > 0;
    if (isConflict) return res.status(409).end();
    const id = Date.now();
    const user = {id, name};
    users.push(user);
    res.status(201).json(user);
}

const update = (req, res) => {

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).end();

    const name = req.body.name;
    if (!name) return res.status(400).end();

    const isConflict = users.filter((u) => u.name === name).length > 0;
    if (isConflict) return res.status(409).end();

    const user = users.filter(u => u.id === id)[0];
    if (!user) return res.status(404).end();
    user.name = name;
    res.json(user);
}

module.exports = (userMd) => {
    userModel = userMd;
    return {index, show, destroy, create, update}
}