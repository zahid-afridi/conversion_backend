import express from 'express';

import { Newmessage, getmessage } from '../Controllers/MessageController.js';

const messageRouter = express.Router();

messageRouter.post('/newmessage',Newmessage)
messageRouter.get('/getmessage/:conversionId',getmessage)


export default messageRouter;
