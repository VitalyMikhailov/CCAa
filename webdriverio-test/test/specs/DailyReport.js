// const {expect} = require('chai');
// const login = require("../login");
//
// describe('EDIT PROFILE', () => {
//     before(() => {
//         login();
//     })
//     it("click on dairy on main menu", function () {
//         $("//div[@id='site-menu']//a[@qa='diary-link']\n").click()
//         browser.pause(2000);
//     });
//
//     it('should Title is correct', function () {
//         const actualTitle = $("//h1").getText();
//         expect(actualTitle).eq("Daily reports");
//     });
//
//     it('should Button create day report is clickable', function () {
//         const dayReportBtn = $("//a[@qa='create-day-report-button']");
//         const actualResult = dayReportBtn.isClickable();
//         expect(actualResult).true;
//     });
//
//     it('should click on day report btn', function () {
//         $("//a[@qa='create-day-report-button']").click();
//     });
//
//     it('should click I UNDERSTAND EVERYTHING', function () {
//         const elem = $("//label[@for='input-1']");
//         elem.click();
//         browser.pause(2000);
//         const res = $("//input[@id='input-1']");
//         expect(res.isSelected()).true;
//     });
//
//     it('should click HELP CLASSMATE', function () {
//         const elem = $("[for='input-2']");
//         elem.click();
//
//         // expect(elem.isSelected()).true;
//     });

    // it('should check drop down "What is your morale?"', function () {
    //     const elem = $("//select[@name='morale']").selectByVisibleText("8");
    //     browser.pause(2000);
    //     const res = $("//select[@name='morale']").getValue();
    //     expect(res).eq("8");
    // });


})