const express = require('express');
const router = express.Router();
const { getalltasks ,createtasks , getsingletasks ,updatetask
    ,deletetasks
   } = require('../controllers/controltask');

router.route("/").get(getalltasks).post(createtasks);
router.route("/:id").get(getsingletasks).patch(updatetask).delete(deletetasks);
 

module.exports = router;
