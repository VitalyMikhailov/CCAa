const namePage = 'Complex Counter App';
const headerName = 'h1.header';
const totalCount = 'h3.total-count';
const defaultCounterName = "//div[@class]/h3";
const countValue = "span.badge";
const editCounterTitle = '//div/label[text()="Edit Counter Title: "]';
const llf = "//button[@name='negative']";
const llfValue = "//input[@name='lower']";
const leftRedCrossButton = ".btn-outline-danger";
const rightRedCrossButton = ".btn-outline-danger";
const ulf = ".btn-info:nth-child(6)";
const ulfValue = "//input[@name='upper']";
const subButtons = "btn-black.btn.Ripple-parent";


const link = 'https://likejean.github.io/homework-5/';
const addCounterButton = "//button[@class='btn-success btn Ripple-parent add col-6']";
const secondCounterName = "//div[2]//div[1]//h3[1]";
const thirdCounterName = "//div[3]//div[1]//h3[1]";
const thirdCountValue = "//div[3]//div[2]//span[1]";
const thirdLlf = "//div[3]//div[2]//button[4]";
const thirdLlfValue = "//div[3]//div[2]//input[1]";
const thirdLeftCrossButton = "//div[3]//div[2]//button[4]";
const thirdUlf = "//div[3]//div[2]//button[5]";
const thirdUlfValue = "//div[3]/div[2]/input[@name='upper']";
const thirdRightCrossButton = "//div[3]//div[2]//button[5]";

// describe('Before each describe', () => {
//     it('should open url CCA',  () =>  {
//         browser.url(link);
//         browser.maximizeWindow();
//     });
// })
//
// describe('Counter 3', () => {
//     it ('should create counter 2', ()=>{
//         $(addCounterButton).click();
//         browser.waitUntil(() => $(llf).isDisplayed() === true);
//         const text = $(secondCounterName).getText();
//         expect(text).toEqual('2. Counter Name');
//         browser.pause(1000);
//     })
//
//     it ('should create counter3', ()=> {
//         $(addCounterButton).click();
//         browser.waitUntil(() => $(llf).isDisplayed() === true);
//         const text1 = $(thirdCounterName).getText();
//         expect(text1).toEqual('3. Counter Name');
//         browser.pause(1000);
//     })
//
//     it('should Count value is present',  () => {
//         const text = $(thirdCountValue).getText();
//         expect(text).toEqual('50');
//     });
//
//     it('should check thirdLlf is clickable',  () => {
//         const result = $(thirdLlf).isClickable();
//         expect(result).toEqual(true);
//     });
//     it('should chexk that 1 in LLF is present',  () => {
//         $(thirdLlf).click();
//         browser.waitUntil(() => $(thirdLlfValue).isDisplayed() === true);
//         const text = $(thirdLlfValue).getValue();
//         expect(text).toEqual('1');
//     });
//     it('should check that spinner increase value +1',  () => {
//         $(thirdLlfValue).click();
//         browser.keys('ArrowUp')
//         const text = $(thirdLlfValue).getValue();
//         expect(text).toEqual('2');
//         browser.pause(2000);
//     });
//     it('should check that spinner decrease value -1',  () => {
//         browser.keys('ArrowDown')
//         const text = $(thirdLlfValue).getValue();
//         expect(text).toEqual('1');
//     });
//
//     it ('should check that third left X is clickable', ()=> {
//         const result = $(thirdLeftCrossButton).isClickable();
//         expect(result).toEqual(true);
//     })
//
//     it('should check that third left X works',  () => {
//         $(thirdLeftCrossButton).click();
//         const text = $(thirdLlf).getText();
//         expect(text).toEqual('CHANGE STEP OPTIONS?')
//     });
//
//     it ('should check that third ulf is clickable', ()=>{
//         const result = $(thirdUlf).isClickable();
//         expect(result).toEqual(true);
//     })
//
//     it ('should check that third ulf consist 3',()=>{
//         $(thirdUlf).click();
//         // browser.waitUntil(()=> $(thirdUlfValue).isDisplayed() === true);
//         const result = $(thirdUlfValue).getValue();
//         expect(result).toEqual("3");
//     })
//     it('should check that spinner increase value +1',  () => {
//         $(thirdUlfValue).click();
//         browser.keys('ArrowUp')
//         const text = $(thirdUlfValue).getValue();
//         expect(text).toEqual('4');
//     });
//     it('should check that spinner decrease value -1',  () => {
//
//         browser.keys('ArrowDown')
//         const text = $(thirdUlfValue).getValue();
//         expect(text).toEqual('3');
//     });
//
//     it ('should check that Red Cross is clickable', ()=> {
//         const result = $(thirdRightCrossButton).isClickable();
//         expect(result).toEqual(true);
//     })
//     it('should check that third right X works',  () => {
//         $(thirdRightCrossButton).click();
//         const text = $(thirdUlf).getText();
//         expect(text).toEqual('CHANGE STEP OPTIONS?')
//     });
//
// })
