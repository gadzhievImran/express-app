const { Router } = require('express');

const controller = require('../controllers/snippers');

const router = Router();

router.param('snippetId', controller.findOne);

router.get('/', controller.showAll);
router.get('/search', controller.showSearch);

router.route('/create')
  .get(controller.showCreate)
  .post(controller.create);

router.get('/:snippetId', controller.showOne);

router.route('/:snippetId/update')
  .get(controller.showUpdate)
  .post(controller.update);

router.post('/:snippetId/delete', controller.delete);

module.exports = router;
