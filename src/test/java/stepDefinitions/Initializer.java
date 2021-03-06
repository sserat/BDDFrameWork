package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import constants.ConfigFileReader;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Initializer extends ConfigFileReader {
	
	
	ConfigFileReader configFileReader;
	
	// Cucumber Hooks 
	// @Before and @After 
	// @Before Hooks will run before each scenario/scenario outline
	//@After Hooks will run after each scenario/sceanrio outline 
	
	
	/**
	 * this method will run before each scenario 
	 */
	@Before
	public void beforeScenario() {
		
		configFileReader= new ConfigFileReader();
		System.setProperty("webdriver.chrome.driver", ConfigFileReader.getDriverPath());
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(ConfigFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(ConfigFileReader.getImplicitlyWait(), TimeUnit.SECONDS);

	}
	
	/**
	 * This method will run after each sceanrio
	 */
	
	@After 
	public void afterScenario() {
		
		driver.close();
		driver.quit();
		
	
	}
	
	
	
	

}
