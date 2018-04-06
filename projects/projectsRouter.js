const express = require('express');

const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');

// /api/projects
router.get('/', (req, res) => {
  projectModel
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(`There was an error GETting projects: ${error}`);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  projectModel
    .get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(`There was an error GETting that project: ${error}`);
    });
});

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;

  projectModel
    .getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json(`There was an error GETting that project's actions: ${error}`);
    });
});

module.exports = router;
