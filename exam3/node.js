const puppeteer = require('puppeteer');

const url = 'https://codequiz.azurewebsites.net/';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  await page.click('input');
  await page.waitForSelector('table'),
  await page.screenshot({ path: "screenshot.png" });
  const data = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll('table tbody tr td'))
    return tds.map(td => td.innerText)
  });
  await browser.close();

  let index = data.indexOf(process.argv[2]);
  index !== -1 ? console.log(data[index + 1]) : console.log('FUNDCODE NOT FOUND');
})();
