export default {
  menuOptionButton: '[class="oxd-main-menu-item"]',
  addEmployeeButton: '[class="oxd-button oxd-button--medium oxd-button--secondary"]',
  firstNameInputField: '[name="firstName"]',
  midleNameInputField: '[name="middleName"]',
  lastNameInputField: '[name="lastName"]',
  employeeIdInputField: '[class="orangehrm-employee-form"] [class="oxd-input oxd-input--active"]',
  loginDetailCheckBox: '[type="checkbox"]',
  employeeSaveButton: '[type="submit"]',


  navigateToPIMPage() {
    cy.get(this.menuOptionButton).contains("PIM").click();
  },

  addEmployee(firstName, midleName, lastName, uuid){
    cy.get(this.addEmployeeButton).click()
    cy.get(this.firstNameInputField).clear().type(firstName)
    cy.get(this.midleNameInputField).clear().type(midleName)
    cy.get(this.lastNameInputField).clear().type(lastName)  
    cy.get(this.employeeIdInputField).clear().type(uuid)
    cy.get(this.employeeSaveButton).click()
    cy.wait(10000)
  },

  verifyCreatedEmployeeData(firstName, midleName, lastName){
    cy.get(this.firstNameInputField).should('have.value', firstName)
    cy.get(this.midleNameInputField).should('have.value', midleName)
    cy.get(this.lastNameInputField).should('have.value', lastName)  
  }




};
