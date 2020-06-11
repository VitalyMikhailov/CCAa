const link = 'https://likejean.github.io/homework-5/';
const namePage = "Complex Counter App"
const headerName = ("h1.header");
const totalCount = 'h3.total-count';
const defaultCounterName = "//div[@class]/h3";
const countValue = "span.badge";
const editCounterTitle = ("//div/label[text()='Edit Counter Title: ']");


describe('Before each describe', () => {
    it('should open url CCA',  () =>  {
        browser.url(link);
    });
})
describe('Counter 1', () => {
    it('should return correct page',  () =>  {
        const text = browser.getTitle();
        expect(text).toEqual(namePage);
    });
    it('should Counter is present',  () => {
        const text = $(headerName).getText();
        expect(text).toEqual('Counters');
    });
    it('should Total:0 is present ', function () {
        const text = $(totalCount).getText();
        expect(text).toEqual('Total: 0');
    });
    it('should counter name is present',  () => {
        const text = $(defaultCounterName).getText();
        expect(text).toEqual('1. Default Counter');
    });

    it('should Count value is present',  () => {
        const text = $(countValue).getText();
        expect(text).toEqual('0');
    });

    it ('should check Edit Counter Titel is presented', ()=>{
        const text = $(editCounterTitle).getText();
        expect(text).toEqual("Edit Counter Title:");

    })


})