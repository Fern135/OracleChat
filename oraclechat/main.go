package main

import (
	"./rooms"
	"./web"
)

func main() {
	// Create and initialize chat rooms
	chatRooms := rooms.InitRooms()

	// Define routes and handlers
	web.InitRoutes(chatRooms)

	// Start the web server
	web.StartServer()
}
