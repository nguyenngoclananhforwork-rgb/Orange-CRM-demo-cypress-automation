export default {
  usernameInputField: '[name="username"]',
  passwordInputField: '[name="password"]',
  submitButton: '[type="submit"]',

  loginToOrangeCRM(name, password) {
    cy.get(this.usernameInputField).type(name);
    cy.get(this.passwordInputField).type(password);
    cy.get(this.submitButton).click();
  },

  verifyLoginSuccessfully(name, password){
    this.loginToOrangeCRM(name, password)
    cy.get('[class="oxd-userdropdown-tab"]').should('be.visible')
  },

  verifyLoginFailWithIncorreCredential(name, password){
    this.loginToOrangeCRM(name, password)
    cy.get('[role="alert"]').should('be.visible').and('contain.text','Invalid credentials')
  },
  
  verifyLoginFailWithEmptyData(){
    cy.get('[type="submit"]').click()
    cy.get('span').contains('Required').should('be.visible')
  }
};
