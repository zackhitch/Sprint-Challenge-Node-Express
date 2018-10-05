const express = require('express');

const router = express.Router();

const actionDb = require('../data/helpers/actionModel');

// ERROR HELPER
const errorHelper = (status, message, res) => {
  res.status(status).json({ error: message });
};

router.get('/', (req, res) => {
  actionDb
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  actionDb
    .get(id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        return errorHelper(400, `No action by that ID`, res);
      }
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.post('/', (req, res) => {
  const { project_id, description, notes, completed } = req.body;
  const newAction = { project_id, description, notes, completed };
  actionDb
    .insert(newAction)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { project_id, description, notes, completed } = req.body;
  const updatedAction = { project_id, description, notes, completed };
  actionDb
    .update(id, updatedAction)
    .then(updatedAction => {
      if (updatedAction) {
        res.status(200).json(updatedAction);
      } else {
        return errorHelper(400, `No Action by that ID.`, res);
      }
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  actionDb
    .remove(id)
    .then(isDeleted => {
      if (isDeleted) {
        res.status(200).json({
          successMessage: `Actions successfully deleted: ${isDeleted}`,
        });
      } else {
        return errorHelper(400, `No Action by that ID: ${err}`, res);
      }
    })
    .catch(err => {
      return errorHelper(500, `Server AFK: ${err}`, res);
    });
});

module.exports = router;
