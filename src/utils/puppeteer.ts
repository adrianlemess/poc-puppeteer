import * as puppeteer from 'puppeteer';
import * as devices from 'puppeteer/DeviceDescriptors';

export const printPDF = async function (puppeteerUrl) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(puppeteerUrl, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });

    await browser.close();
    return pdf
  } catch (err) {
    console.log(err);
  }
}

export const snapshot = async function () {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 767, height: 1024 });
    await page.goto('https://getbootstrap.com/');
    const image = await page.screenshot({ path: 'bootstrap.png', fullPage: true });
    browser.close();
    return image;
  } catch (err) {
    console.log(err);
  }
};

export const login = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('puppeteerUrl', { waitUntil: 'networkidle0' });

  await page.type('#email', process.env.PDF_USER)
  await page.type('#password', process.env.PDF_PASSWORD)
  await page.click('#submit')
}