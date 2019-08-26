import * as express from 'express';
import puppeteerRoutes from './puppeteer-routes';

const router = express.Router();

router.use('/puppeteer', puppeteerRoutes);

export default router;