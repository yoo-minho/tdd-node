const express = require('express');
const router = express.Router();

module.exports = (controller) => {
    router.get('/', controller.index);
    router.get('/:id', controller.show);
    router.delete('/:id', controller.destroy);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    return router;
}
