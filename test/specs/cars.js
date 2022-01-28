describe('Learn more', () => {
    it('should have to the right title', async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/safety-heritage');
        expect(browser).toHaveTitle(
            'Safety innovations | Volvo Cars');
    });
});