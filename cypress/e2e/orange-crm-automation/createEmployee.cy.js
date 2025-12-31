import { faker } from "@faker-js/faker";
import loginPage from "../../support/commands/loginPage";
import pimPage from "../../support/commands/pimPage";

describe("Create employee in PIM page", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.verifyLoginSuccessfully("Admin", "admin123");
    pimPage.navigateToPIMPage();
  });

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const middleName = faker.person.middleName();
  const uuid = faker.string.alphanumeric({length: {max: 10}});

  it("Verify create employee in PIM page successfully", () => {
    pimPage.addEmployee(firstName, middleName, lastName, uuid);
    pimPage.verifyCreatedEmployeeData(firstName, middleName, lastName);
  });
});
