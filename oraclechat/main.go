package main

import (
	"oraclechat/rooms"
	"oraclechat/web"
)

func main() {
	// Create and initialize chat rooms
	chatRooms := rooms.InitRooms()

	// Define routes and handlers
	web.InitRoutes(chatRooms)

	// Start the web server
	go web.StartServer()
}
