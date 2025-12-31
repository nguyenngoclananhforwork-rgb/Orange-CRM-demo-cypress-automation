import loginPage from "../../support/commands/loginPage"

describe("Verify login to CRM",()=>{
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it('Verify Login to CRM successfully with correct credential',()=>{
        loginPage.verifyLoginSuccessfully("Admin","admin123")
    })

    it('Verify login unsuccessfully with incorrect username',()=>{
        loginPage.verifyLoginFailWithIncorreCredential('aaa','admin123')
    })

    it('Verify login unsuccessfully with incorrect password',()=>{
        loginPage.verifyLoginFailWithIncorreCredential('Admin','admin')
    })

    it('Verify login unsuccessfully with empty username and password',()=>{
        loginPage.verifyLoginFailWithEmptyData()
    })

    it('Verify login unsuccessfully with htlm script',()=>{
        loginPage.verifyLoginFailWithIncorreCredential('<title>Admin</title>','<title>admin123</title>')
      
    })


})