use core::result::Result;
use std::error::Error;

use Browser::Chrome;
use selenium_rs::webdriver::{Browser, WebDriver /*, Selector */};

pub fn open_webshop() -> Result<WebDriver, Box<dyn Error>> {
    let mut driver = WebDriver::new(Chrome);
    driver.start_session()?;
    driver.navigate("https://forum-56745-staging.herokuapp.com/")?;

    Ok(driver)
}
