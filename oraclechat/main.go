package main

import (
	"oraclechat/rooms"
	"oraclechat/web"
)

func main() {
	// Create and initialize chat rooms
	rooms.InitRooms()

	// Define routes and handlers
	web.InitRoutes()

	// Start the web server
	go web.StartServer()
}
