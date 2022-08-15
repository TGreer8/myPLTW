const{Builder, By, Key, until, WebElement, Browser, ChromiumWebDriver, File} = require("selenium-webdriver");



async function login_logout() {
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get('https://my-qa.pltw.org/login')
    await driver.findElement(By.xpath("//input[@id='idp-discovery-username']")).sendKeys("qa.taylor");
    await driver.findElement(By.id("idp-discovery-submit")).click();
    await driver.wait(until.elementLocated(By.xpath("//input[@id='okta-signin-password']")), 30000);
    await driver.findElement(By.xpath("//input[@id='okta-signin-password']")).sendKeys('Test123!');
    await driver.wait(until.elementLocated(By.id("okta-signin-submit")), 30000);
    await driver.findElement(By.id("okta-signin-submit")).click();
    await driver.wait(until.elementLocated(By.xpath("//span[@class='header__spacer___1nTqq']")), 30000);
    await driver.findElement(By.xpath("//span[@class='header__spacer___1nTqq']")).click();
    await driver.wait(until.elementLocated(By.xpath("//li[@value='Logout']")), 30000);
    await driver.findElement(By.xpath("//li[@value='Logout']")).click();
    driver.quit();
};
async function my_sites() {
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get('https://my-qa.pltw.org/login')
    await driver.findElement(By.name("username")).sendKeys("qa.taylor");
    await driver.findElement(By.id("idp-discovery-submit")).click();
    await driver.wait(until.elementLocated(By.xpath("//input[@id='okta-signin-password']")), 30000);
    await driver.findElement(By.xpath("//input[@id='okta-signin-password']")).sendKeys('Test123!');
    await driver.wait(until.elementLocated(By.id("okta-signin-submit")), 30000);
    await driver.findElement(By.id("okta-signin-submit")).click();
    await driver.wait(until.elementLocated(By.xpath("//button[normalize-space()='My Sites']")), 30000);
    await driver.findElement(By.xpath("//button[normalize-space()='My Sites']")).click();
    await driver.wait(until.elementLocated(By.xpath("//a[@id='28312']//p[@class='body__siteSubHeader___3qaMb']")), 30000);
    await driver.findElement(By.xpath("//a[@id='28312']//p[@class='body__siteSubHeader___3qaMb']")).click();
    await driver.findElement(By.xpath("//a[@id='sites-site-sidebar-link-classes']")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//a[normalize-space()='Historic Classes']")).click();
    await driver.sleep(5000);
    await driver.wait(until.elementLocated(By.xpath("//a[@id='sites-site-sidebar-link-users']")), 30000);
    await driver.findElement(By.xpath("//a[@id='sites-site-sidebar-link-users']")).click();
    await driver.sleep(5000);
    await driver.wait(until.elementLocated(By.xpath("//a[@id='sites-site-sidebar-link-siteInfo']")), 30000);
    await driver.findElement(By.xpath("//a[@id='sites-site-sidebar-link-siteInfo']")).click();
    await driver.sleep(5000);
    await driver.wait(until.elementLocated(By.css("#sites-site-sidebar-link-siteProfile")), 30000);
    await driver.findElement(By.css("#sites-site-sidebar-link-siteProfile")).click();
    await driver.findElement(By.css("h2[id='joinSite'] a button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#sites-sidebar-link-users")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#sites-sidebar-link-accountInfo")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#sites-sidebar-link-siteProfile")).click();
    await driver.sleep(5000);
    await driver.navigate().back();
    await driver.findElement(By.css("#sites-sidebar-link-surveyResults")).click();
    await driver.sleep(5000);

   
};
async function grants() {
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get('https://my-qa.pltw.org/login')
    await driver.findElement(By.name("username")).sendKeys("qa.taylor");
    await driver.findElement(By.id("idp-discovery-submit")).click();
    await driver.wait(until.elementLocated(By.xpath("//input[@id='okta-signin-password']")), 30000);
    await driver.findElement(By.xpath("//input[@id='okta-signin-password']")).sendKeys('Test123!');
    await driver.wait(until.elementLocated(By.id("okta-signin-submit")), 30000);
    await driver.findElement(By.id("okta-signin-submit")).click();
    await driver.wait(until.elementLocated(By.xpath("//a[@id='grants']//div[@class='modules__iconHolder___1VSXF']")), 30000);
    await driver.findElement(By.xpath("//a[@id='grants']//div[@class='modules__iconHolder___1VSXF']")).click();
    await driver.wait(until.elementLocated(By.xpath("//span[normalize-space()='Start an Application']")), 30000);
    await driver.findElement(By.xpath("//span[normalize-space()='Start an Application']")).click();
    await driver.findElement(By.xpath("//div[@id='grants-grantsmodal-select-site']")).click();
    await driver.findElement(By.xpath("//li[normalize-space()='Ben and Kyle Test School']")).click();
    await driver.findElement(By.xpath("//div[@id='grants-grantsmodal-select-program']")).click();
    await driver.findElement(By.xpath("//li[normalize-space()='PLTW Computer Science (9-12)']")).click();
    await driver.findElement(By.xpath("//span[normalize-space()='Start Application']")).click();
    await driver.wait(until.elementLocated(By.css("#grants-contactInfo-field-primaryContactSelf")), 30000);
    await driver.findElement(By.css("#grants-contactInfo-field-primaryContactSelf")).click();
    await driver.findElement(By.xpath("//input[@id='grants-contactInfo-field-seondaryContactFirstName']")).sendKeys("qa");
    await driver.findElement(By.xpath("//input[@id='grants-contactInfo-field-seondaryContactLastName']")).sendKeys("teacher");
    await driver.findElement(By.xpath("//input[@id='grants-contactInfo-field-seondaryContactEmail']")).sendKeys("taylorbgreer@gmail.com");
    await driver.findElement(By.xpath("//div[@id='grants-contactInfo-field-secondaryContactRole']")).click();
    await driver.findElement(By.xpath("//li[normalize-space()='IT Professional']")).click();
    await driver.findElement(By.xpath("//input[@id='grants-contactInfo-field-seondaryContactPhone']")).sendKeys("5555555555");



    await driver.findElement(By.xpath("//div[@id='grants-contactInfo-field-heardAboutPLTW']")).click();
    await driver.findElement(By.xpath("//li[normalize-space()='Existing PLTW School']")).click();
    await driver.findElement(By.xpath("//div[@id='grants-application-footer']//span[@class='MuiButton-label'][normalize-space()='Save and Continue']")).click();
    await driver.wait(until.elementLocated(By.xpath("//div[@id='grants-orgProfile-field-orgType']")), 30000);
    await driver.findElement(By.xpath("//div[@id='grants-orgProfile-field-orgType']")).click();
    await driver.findElement(By.xpath("//li[normalize-space()='Public School']")).click();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-check-training']")).click();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-check-grade11th']")).click();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-enrollment']")).clear();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-enrollment']")).sendKeys("100");
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceAmerIndianAlaskan']")).clear();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceAmerIndianAlaskan']")).sendKeys("20");
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceAsianPacificIslander']")).clear();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceAsianPacificIslander']")).sendKeys("30");
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceAfricanAmerican']")).clear();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceAfricanAmerican']")).sendKeys("30");
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceLatino']")).clear();
    await driver.findElement(By.xpath("//input[@id='grants-orgProfile-field-raceLatino']")).sendKeys("20");
    await driver.findElement(By.xpath("//div[@id='grants-application-footer']//span[@class='MuiButton-label'][normalize-space()='Save and Continue']")).click();
    await driver.wait(until.elementLocated(By.xpath("//input[@id='grants-implementing-invPlanning-a-2']")), 30000);
    await driver.findElement(By.xpath("//input[@id='grants-implementing-invPlanning-a-2']")).click();
    await driver.findElement(By.xpath("//input[@id='grants-implementing-invPlanning-prepTech']")).click();
    await driver.findElement(By.xpath("//textarea[@id='grants-implementing-descSupport']")).sendKeys("This is a test!");
    await driver.findElement(By.xpath("//textarea[@id='grants-implementing-selectTeacher']")).sendKeys("This is a test!");
    await driver.findElement(By.xpath("//input[@id='grants-implementing-avail11th']")).click();
    await driver.findElement(By.xpath("//textarea[@id='grants-implementing-planScheduling']")).sendKeys("This is a test!");
    await driver.findElement(By.xpath("//div[@id='grants-implementing-attendanceOptions']")).click();
    await driver.findElement(By.xpath("//li[contains(text(),'Yes, all students at our school are required to pa')]")).click();
    await driver.findElement(By.xpath("//textarea[@id='grants-implementing-underrepresentedPopulations']")).sendKeys("This is a test!");
    await driver.findElement(By.xpath("//div[@id='grants-implementing-participationReq']")).click();
    await driver.findElement(By.xpath("//li[normalize-space()='No']")).click();
    await driver.findElement(By.xpath("//div[@id='grants-implementing-respPay']")).click();
    await driver.findElement(By.xpath("//li[normalize-space()='No']")).click();
    await driver.findElement(By.xpath("//div[@id='grants-application-footer']//span[@class='MuiButton-label'][normalize-space()='Save and Continue']")).click();
    await driver.wait(until.elementLocated(By.xpath("//textarea[@id='grants-growing-text-vision']")), 30000);
    await driver.findElement(By.xpath("//textarea[@id='grants-growing-text-vision']")).sendKeys("This is a Test!");
    await driver.findElement(By.xpath("//textarea[@id='grants-growing-text-financialSupport']")).sendKeys("This is a Test!");
    await driver.findElement(By.xpath("//input[@value='Critical']")).click();
    await driver.findElement(By.xpath("//div[@id='grants-application-footer']//span[@class='MuiButton-label'][normalize-space()='Save and Continue']")).click();
    await driver.wait(until.elementLocated(By.xpath("//div[@id='grants-application-footer']//span[@class='MuiButton-label'][normalize-space()='Save and Submit']")), 30000);
    await driver.findElement(By.xpath("//div[@id='grants-application-footer']//span[@class='MuiButton-label'][normalize-space()='Save and Submit']")).click();
    await driver.wait(until.elementLocated(By.xpath("//body[1]/div[3]/div[3]/div[1]/div[2]/div[1]/button[2]/span[1]")), 30000)
    await driver.findElement(By.xpath("//body[1]/div[3]/div[3]/div[1]/div[2]/div[1]/button[2]/span[1]")).click();
    driver.sleep(10000);
};


    async function roster() {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(By.name("username")).sendKeys("qa.taylor");
        await driver.findElement(By.id("idp-discovery-submit")).click();
        await driver.wait(until.elementLocated(By.xpath("//input[@id='okta-signin-password']")), 30000);
        await driver.findElement(By.xpath("//input[@id='okta-signin-password']")).sendKeys('Test123!');
        await driver.wait(until.elementLocated(By.id("okta-signin-submit")), 30000);
        await driver.findElement(By.id("okta-signin-submit")).click();
        await driver.wait(until.elementLocated(By.xpath("//button[normalize-space()='My Sites']")), 30000);
        await driver.findElement(By.xpath("//button[normalize-space()='My Sites']")).click();
        await driver.wait(until.elementLocated(By.xpath("//a[@id='28312']//p[@class='body__siteSubHeader___3qaMb']")), 30000);
        await driver.findElement(By.xpath("//a[@id='28312']//p[@class='body__siteSubHeader___3qaMb']")).click();
        await driver.wait(until.elementLocated(By.xpath("//span[normalize-space()='Roster Students CSV']")), 30000);
        await driver.findElement(By.xpath("//span[normalize-space()='Roster Students CSV']")).click();
        await driver.wait(until.elementLocated(By.xpath("//input[@id='upload-file']")), 30000);
        await driver.findElement(By.xpath("//input[@id='upload-file']")).sendKeys(__dirname+"\\roster.csv");
    };

    async function createTeacher() {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(By.xpath("//a[normalize-space()='Create Educator Account']")).click();
        await driver.findElement(By.xpath("//input[@id='registration-username']")).sendKeys("qa.teacher");
        await driver.findElement(By.xpath("//input[@id='registration-firstName']")).sendKeys("qa");
        await driver.findElement(By.xpath("//input[@id='registration-lastName']")).sendKeys("teacher");
        await driver.findElement(By.xpath("//input[@id='registration-phone']")).sendKeys("555-555-5555");
        await driver.findElement(By.xpath("//input[@id='registration-email']")).sendKeys("tgreer@pltw.org");
        await driver.findElement(By.xpath("//div[@id='registration-state']")).click();
        await driver.findElement(By.xpath("//li[normalize-space()='GA']")).click();
        await driver.findElement(By.xpath("//input[@id='registration-city']")).sendKeys("City");
        await driver.findElement(By.xpath("//div[@id='registration-describeYou']")).click();
        await driver.findElement(By.xpath("//li[normalize-space()='Teacher']")).click();
        await driver.findElement(By.xpath("//a[normalize-space()='Skip for Now']")).click();
        await driver.findElement(By.xpath("//input[@id='registration-iAgree']")).click();
        await driver.findElement(By.xpath("//span[normalize-space()='Create Educator Account']")).click();
      



    };

    async function createStudent() {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(By.xpath("//a[normalize-space()='Create Student Account']")).click();
        await driver.findElement(By.xpath("//div[@class='MuiFormControl-root MuiTextField-root selfRegister__textInput___3ZbJT false']//input[@type='text']")).sendKeys("qa.student");
        await driver.wait(until.elementLocated(By.xpath("//*[name()='path' and contains(@fill,'none')]")), 30000);
        await driver.findElement(By.xpath("//*[name()='path' and contains(@fill,'none')]")).click();
        await driver.findElement(By.xpath("//p[normalize-space()='7']")).click();
        await driver.findElement(By.xpath("//span[normalize-space()='OK']")).click();
        await driver.findElement(By.xpath("//input[@type='email']")).sendKeys("tgreer@pltw.org");
        await driver.findElement(By.xpath("//span[normalize-space()='Next']")).click();
        await driver.wait(until.elementLocated(By.xpath("//div[@class='MuiFormControl-root MuiTextField-root selfRegister__textInput___3ZbJT false false']//input[@type='text']")), 30000);
        await driver.findElement(By.xpath("//div[@class='MuiFormControl-root MuiTextField-root selfRegister__textInput___3ZbJT false false']//input[@type='text']")).sendKeys("qa.student");
        await driver.findElement(By.xpath("//input[@type='password']")).sendKeys('Test123!');
        await driver.findElement(By.xpath("//span[normalize-space()='Submit']")).click();
        await driver.sleep(200);
       



    };
    grants();

    


    

