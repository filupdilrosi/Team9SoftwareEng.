const puppeteer = require('puppeteer')

describe('Testing Scenarios 1', ()=> {
    it('User enterd WRONG user id &  WRONG password. User quits.', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo : 10,
            devtools: false,
            ignoreHTTPSErrors: true,
        })
        const page = await browser.newPage()
        await page.goto('http://localhost:3000')
        await page.click('.inline-flex',{clickCount:1})
        await page.waitForSelector('#identifier-field')
        await page.type('#identifier-field','wrongID')
        // await page.waitForSelector('.cl-formButtonPrimary')
        // await page.click('.cl-formButtonPrimary')
        await page.waitForSelector('#password-field')
        await page.click('#password-field')
        await page.type('#password-field','wrong789#',{delay:110});
        await page.click('.cl-formButtonPrimary',)
    
        await page.waitForSelector('.cl-formFieldErrorText')
        const dashboardText = await page.$eval('.cl-formFieldErrorText', el => el.textContent);
        console.log(dashboardText)
        expect(dashboardText).toContain("Couldn't find your account.");
        // await page.close(); // User quits
    

        // await page.close();
        // await browser.close()
    }, 70000)

    it('User enterd CORRECT user id & WRONG password. User quits.', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo : 10,
            devtools: false,
            ignoreHTTPSErrors: true,
        })
        const page = await browser.newPage()
        await page.goto('http://localhost:3000')
        await page.click('.inline-flex',{clickCount:1})
        await page.waitForSelector('#identifier-field')
        await page.type('#identifier-field','admin')
        await page.waitForSelector('.cl-formButtonPrimary')
        await page.click('.cl-formButtonPrimary')
        
        await page.waitForSelector('#password-field')
        // await page.click('#password-field')
        await page.type('#password-field','wrong789#',{delay:110});
        await page.click('.cl-formButtonPrimary',)
    
        await page.waitForSelector('.cl-formFieldErrorText')
        const dashboardText = await page.$eval('.cl-formFieldErrorText', el => el.textContent);
        console.log(dashboardText)
        expect(dashboardText).toContain("Password is incorrect. Try again, or use another method.");
        // await page.close(); // User quits
    

        // await page.close();
        // await browser.close()
    }, 70000)

    it('User enterd CORRECT user id & CORRECT password. User quits.', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo : 10,
            devtools: false,
            ignoreHTTPSErrors: true,
        })
        const page = await browser.newPage()
        await page.goto('http://localhost:3000')
        await page.click('.inline-flex',{clickCount:1})
        await page.waitForSelector('#identifier-field')
        await page.type('#identifier-field','admin')
        // await page.waitForSelector('.cl-formButtonPrimary')
        // await page.click('.cl-formButtonPrimary')
        await page.waitForSelector('#password-field')
        await page.click('#password-field')
        await page.type('#password-field','admin789#',{delay:110});
        await page.click('.cl-formButtonPrimary',)
    
        await page.waitForSelector('.inline-flex')
        const dashboardText = await page.$eval('.inline-flex', el => el.textContent);
        console.log(dashboardText)
        expect(dashboardText).toContain('Go to Charts');
        // await page.close(); // User quits
    

        // await page.close();
        // await browser.close()
    }, 70000)
 
})