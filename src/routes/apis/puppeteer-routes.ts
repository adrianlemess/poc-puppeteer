import * as express from 'express';
import PuppeteerController from '../../controllers/pupeteer.controller';

const router = express.Router();
const puppeteerController = new PuppeteerController();

router.get('/report', (req, res) => puppeteerController.getReport(req, res));
router.get('/snapshot', (req, res) => puppeteerController.getSnapshot(req, res))
export default router;