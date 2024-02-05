import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should check the size of h2 element', async () => {
        await LoginPage.open()
        const size = await $("h2").getSize()
        await expect(size.height).toBe(52)
        await expect(size.width).toBe(970)
    })
})
