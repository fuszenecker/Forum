package main

import (
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/heroku/x/hmetrics/onload"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "3000"
		// log.Fatal("$PORT must be set")
	}

	router := gin.Default()
	//router.Use(gin.Logger())
	router.Static("/ui", "frontend/build")

	router.GET("/", func(c *gin.Context) {
		c.Redirect(301, "/ui/index.html")
	})

	// router.StaticFile("/index.html", "./frontend/build/index.html")
	// router.StaticFile("/favicon.ico", "./frontend/build/favicon.ico")

	router.Run(":" + port)
}
