// routes/exampleRoute.ts

import express from 'express';
import { getExample } from '../controllers/exampleController.js';

const router = express.Router();

// http://localhost:4000/api/example
router.get('/example', getExample);

export default router;
