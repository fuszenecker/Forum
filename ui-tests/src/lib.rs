#[warn(unused_imports)]
use selenium_rs::webdriver::{Selector};

mod common;

#[test]
fn it_works() {
    let driver = common::open_webshop().unwrap();

    let search_bar = driver.find_element(Selector::XPath, "//*[@id=\"root\"]/div/header/div/h6");

    assert_eq!(String::from("Forum optimum"), search_bar.unwrap().get_text().unwrap());
}

/// This is the example coming from https://github.com/saresend/selenium-rs and still doesn't work.
/// Issue: https://github.com/saresend/selenium-rs/issues/35
#[test]
fn test_demo()
{
    use selenium_rs::webdriver::{Browser, WebDriver, Selector};
    let mut driver = WebDriver::new(Browser::Chrome);

    driver.start_session();
    driver.navigate("http://google.com");
    let search_bar = driver.find_element(Selector::CSS, "input[maxlength=\"2048\"]").unwrap();

    search_bar.type_text("selenium-rs github");
    let search_button = driver.find_element(Selector::CSS, "input[name=\"btnK\"]").unwrap();
    search_button.click();
    search_button.click();
}