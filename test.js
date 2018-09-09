const puppeteer = require('puppeteer');
const pageUrl = 'http://127.0.0.1:3004/';

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

describe('first test', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test ('inital test! ', async () => {
    var div = 'h1'
    const title = await page.$eval(div, e => e.textContent);
    expect (title).toEqual("Hello, world!")
  });
});

