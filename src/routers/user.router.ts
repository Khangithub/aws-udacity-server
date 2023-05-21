import { Router } from 'express';
import { createUser, fetchAll } from '../handlers/user.handler';
import { createDatabaseAndTable } from '../middleware/dbcheck.middleware';

const userRouter = Router();

// POST /users - create a new user
userRouter.post('/', createDatabaseAndTable, createUser);
userRouter.get('/all', createDatabaseAndTable, fetchAll);

export default userRouter;
