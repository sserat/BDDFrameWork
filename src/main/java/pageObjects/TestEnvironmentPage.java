package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class TestEnvironmentPage extends ConfigFileReader {

	// 1 Extend the base class
	// 2. Create a constructor for this class

	public TestEnvironmentPage() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(how = How.XPATH, using = "//span[text () = 'My Account']")
	private WebElement myAccount;

	@FindBy(how = How.XPATH, using = "//a[text () = 'Register']")
	private WebElement register;

	@FindBy(how = How.XPATH, using = "//a[text () = 'Login']")
	private WebElement login;

	@FindBy(how = How.XPATH, using = "//input[@name = 'email']")

	private WebElement emailField;

	@FindBy(how = How.XPATH, using = "//input[@name = 'password']")

	private WebElement passwordField;

	@FindBy(how = How.XPATH, using = "//input[@type= 'submit']")

	private WebElement loginButton;

	public void clickOnMyAccount() {
		myAccount.click();

	}

	public void clickOnRegister() {
		register.click();

	}

	public void clickOnLogin() {
		login.click();
	}

	public String verifyPageURL() {

		String actualRUL = driver.getCurrentUrl();
		return actualRUL;

	}

	public String getPageURL() {

		String actualURL = driver.getCurrentUrl();
		return actualURL;

		// we use junit assertion to pass or fail the verification

	}

	public String getPageTitle() {
		String PageTitle = driver.getTitle();
		return PageTitle;
	}
	// we use junit assertions to pass or fail the verification

	public void enterEmail(String emailAdress) {
		emailField.sendKeys(emailAdress);

	}

	public void enterPassword(String passwordData) {
		passwordField.sendKeys(passwordData);

	}

	public void clickOnLoginButton() {
		loginButton.click();
	}

}
