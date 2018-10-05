const express = require('express');

const router = express.Router();

const projectDb = require('../data/helpers/projectModel');

// ERROR HELPER
const errorHelper = (status, message, res) => {
  res.status(status).json({ error: message });
};

router.get('/', (req, res) => {
  projectDb
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  projectDb
    .get(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        return errorHelper(400, `No project by that ID`, res);
      }
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  projectDb
    .getProjectActions(id)
    .then(projectActions => {
      if (projectActions) {
        res.status(200).json(projectActions);
      } else {
        return errorHelper(400, `No project by that ID`, res);
      }
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.post('/', (req, res) => {
  const { name, description, completed } = req.body;
  const newProject = { name, description, completed };
  projectDb
    .insert(newProject)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  const updatedProject = { name, description, completed };
  projectDb
    .update(id, updatedProject)
    .then(updatedProj => {
      if (updatedProj) {
        res.status(200).json(updatedProj);
      } else {
        return errorHelper(400, `No Project by that ID.`, res);
      }
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  projectDb
    .remove(id)
    .then(isDeleted => {
      if (isDeleted) {
        res.status(200).json({
          successMessage: `Projects successfully deleted: ${isDeleted}`,
        });
      } else {
        return errorHelper(400, `No Project by that ID: ${err}`, res);
      }
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

module.exports = router;
