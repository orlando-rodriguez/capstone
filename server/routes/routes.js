const express = require('express');
const router = express.Router();

const queries = require('../queries/queries.js');

router.get("/", (request, response, next) => {
    queries.list().then(articles => {
        response.json({articles});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(resolution => {
        resolution
            ? response.json({resolution})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(resolution => {
        response.status(201).json({resolution: resolution});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(resolution => {
        response.json({resolution: resolution[0]});
    }).catch(next);
});

module.exports = router;
