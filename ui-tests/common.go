package tests

import (
	"testing"

	"github.com/sclevine/agouti"
)

// NavigateToWebShop navigates to the front page.
func NavigateToWebShop(t *testing.T) (*agouti.Page, *agouti.WebDriver) {
	// driver := agouti.PhantomJS()
	driver := agouti.ChromeDriver()
	// driver := agouti.ChromeDriver(
	// 	agouti.ChromeOptions("args", []string{"--headless", "--disable-gpu", "--no-sandbox"}),
	// )

	if err := driver.Start(); err != nil {
		t.Fatal("Failed to start driver:", err)
	}

	page, err := driver.NewPage()
	if err != nil {
		t.Fatal("Failed to open page:", err)
	}

	if err := page.Navigate("https://forum-56745-staging.herokuapp.com/"); err != nil {
		t.Fatal("Failed to navigate:", err)
	}

	return page, driver
}

// Finish closes the browser.
func Finish(t *testing.T, driver *agouti.WebDriver) {
	if err := driver.Stop(); err != nil {
		t.Fatal("Failed to close pages and stop WebDriver:", err)
	}
}
