

describe('Volvo Cars', () => {
    it('should have to the right title', async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        expect(browser).toHaveTitle(
            'A million more | Volvo Cars - International');
    });
    it('should click on the cookies button', async () => {
    const acceptCookie = await $('.accept-cookie-container');  
    acceptCookie.click();
    });

    it('should click on the menu button', async () => {
        const menuBtn = await $('#sitenav-sidenav-toggle');
        menuBtn.click();
    });

    it('should click on the Buy button', async () => {
        const buyBtn = await $('._SN-aw=Buy');
        buyBtn.click();
    });

    it('should click on the Car Configurator button', async () => {
        const confBtn = await $('Car Configurator');
        confBtn.click();
    });

    it('should click on the Our Cars button', async () => {
        const car = await $('._SN-aq=Our Cars');
        car.click();
    });

    it('should redirect to a new page and verify the title', async () => {
       expect(browser).toHaveTitle('Design your Volvo | Volvo Cars International');
    });
});




