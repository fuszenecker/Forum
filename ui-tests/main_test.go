package tests

import (
	"testing"
)

// MainTest tests the webshop.
func TestPageTitle(t *testing.T) {
	page, driver := NavigateToWebShop(t)

	sectionTitle, err := page.FindByXPath("//*[@id=\"root\"]/div/header/div/h6").Text()
	if err != nil {
		t.Error("Error", err)
	} else {
		t.Log(sectionTitle)
	}

	if sectionTitle != "Forum optimum" {
		t.Error("sectionTitle", sectionTitle)
	}

	Finish(t, driver)
}
