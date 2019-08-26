import { Request, Response } from 'express';
import { printPDF, snapshot } from '../utils/puppeteer';
import config from '../config/config';

const { puppeteerUrl } = config;

class PuppeteerController {
    getReport(req: Request, res: Response) {
        printPDF(puppeteerUrl).then(pdf => {
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Length': pdf.length
            });
            res.send(pdf);
        })
    }

    getSnapshot(req: Request, res: Response) {
        snapshot().then(image => {
            res.set({
                'Content-Type': 'image/png',
                'Content-Length': image.length
            });
            res.send(image);
        })
    }
}

export default PuppeteerController;