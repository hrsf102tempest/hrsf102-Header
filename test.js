const puppeteer = require('puppeteer');
const pageUrl = 'http://127.0.0.1:3004/biz/?id=';

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('Should dynamically render business name and claimed', () => {

  beforeEach(async () => {
    await page.goto(`${pageUrl}1#`, {waitUntil: 'networkidle2'});
  });

  test ('Test if ID 1 is Nevada Discount Nutrition Claimed', async () => {
    const title = await page.$eval('#title', e => e.textContent);
    expect (title).toEqual("Nevada Discount Nutrition Claimed")
  });

  test ('Test if ID 1 is has correct dollar signs', async () => {
    const dollarsigns = await page.$eval('#dollarsigns', e => e.textContent);
    expect (dollarsigns).toEqual(`$Brewing Supplies, Art Galleries, American (New) EditEdit Categories`)
  });
});

