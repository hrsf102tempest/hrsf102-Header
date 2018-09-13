const puppeteer = require('puppeteer');
const pageUrl = 'http://127.0.0.1:3004/biz/?id=';

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('Should dynamically render business name, dollar signs, and number of reviews for id #1', () => {

  beforeEach(async () => {
    await page.goto(`${pageUrl}1#`, {waitUntil: 'networkidle2'});
  });

  test ('Test if ID 1 business name is dynamically rendered', async () => {
    const title = await page.$eval('#title', e => e.textContent);
    expect (title).toEqual("Nevada Discount Nutrition")
  });
  
  test ('Test if ID 1 dollar signs is dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#dollarsigns', e => e.textContent);
    expect (dollarsigns).toEqual(`$`)
  });

  test ('Test if ID 1 categories is dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#categories', e => e.textContent);
    expect (dollarsigns).toEqual(`Brewing Supplies, Art Galleries, American (New)`)
  });

  test ('Test if ID 1 number of reviews are dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#numberofreviews', e => e.textContent);
    expect (dollarsigns).toEqual("244 reviews")
  });
});

describe('Should dynamically render business name, dollar signs, and number of reviews for id #77', () => {

  beforeEach(async () => {
    await page.goto(`${pageUrl}77#`, {waitUntil: 'networkidle2'});
  });

  test ('Test if ID 77 business name is dynamically rendered', async () => {
    const title = await page.$eval('#title', e => e.textContent);
    expect (title).toEqual("Body Empowered")
  });
  
  test ('Test if ID 77 dollar signs is dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#dollarsigns', e => e.textContent);
    expect (dollarsigns).toEqual(`$$`)
  });

  test ('Test if ID 77 categories is dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#categories', e => e.textContent);
    expect (dollarsigns).toEqual(`Arts & Crafts, Arts & Crafts`)
  });

  test ('Test if ID 77 number of reviews are dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#numberofreviews', e => e.textContent);
    expect (dollarsigns).toEqual("109 reviews")
  });
});

describe('Should dynamically render business name, dollar signs, and number of reviews for id #150', () => {

  beforeEach(async () => {
    await page.goto(`${pageUrl}150#`, {waitUntil: 'networkidle2'});
  });

  test ('Test if ID 150 business name is dynamically rendered', async () => {
    const title = await page.$eval('#title', e => e.textContent);
    expect (title).toEqual("Ben Sherman")
  });
  
  test ('Test if ID 150 dollar signs is dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#dollarsigns', e => e.textContent);
    expect (dollarsigns).toEqual(`$$$`)
  });

  test ('Test if ID 150 categories is dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#categories', e => e.textContent);
    expect (dollarsigns).toEqual(`Brewing Supplies, Burgers`)
  });

  test ('Test if ID 150 number of reviews are dynamically rendered', async () => {
    const dollarsigns = await page.$eval('#numberofreviews', e => e.textContent);
    expect (dollarsigns).toEqual("236 reviews")
  });
});
