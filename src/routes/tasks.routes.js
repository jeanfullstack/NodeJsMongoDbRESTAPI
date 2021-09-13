import { Router } from 'express';

import * as taskCtrl from './../controllers/task.controller';

const router = Router();


///api/tasks
router.post('/', taskCtrl.createTask);


router.get('/', taskCtrl.findAllTasks);


router.get('/done', taskCtrl.findAllDoneTasks);


///api/tasks/100
router.get('/:id', taskCtrl.findOneTask);


router.delete('/:id', taskCtrl.deleteTask);


router.put('/:id', taskCtrl.updateTask);








export default router;