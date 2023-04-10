
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the Draw button displays the div with id = choices', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    drawButton.click()
    await driver.sleep(2000)
    const choicesDiv = await driver.findElement(By.id('choices'))
    const displayed = await choicesDiv.isDisplayed()
    expect(displayed).toBe(true)
}) 

test('clicking an Add to Duo button displays the div with id = player-duo', async () => {
    const addButton = await driver.findElement(By.linkText('Add to Duo'))
    addButton.click()
    await driver.sleep(2000)
    const playerDuoDiv = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoDiv.isDisplayed()
    expect(displayed).toBe(true)
})