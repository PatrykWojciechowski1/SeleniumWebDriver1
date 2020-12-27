const {Builder, By, Key, util} = require("selenium-webdriver");
async function test1(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
    await driver.findElement(By.id("inputEmail3")).sendKeys("Patryk",Key.RETURN);
    await driver.findElement(By.id("inputPassword3")).sendKeys("Wojciechowski",Key.RETURN);
    await driver.findElement(By.id("dataU")).sendKeys("01-01-2010",Key.RETURN); 
    await driver.findElement(By.id("rodzice")).sendKeys(Key.SPACE);
    await driver.findElement(By.id("lekarz")).sendKeys(Key.SPACE);
    await driver.findElement(By.className("btn btn-default")).sendKeys(Key.ENTER);

    await driver.switchTo().alert().accept();
    await driver.switchTo().alert().accept();
    
}
test1();