package web

import (
	"net/http"
)

func StartServer() {
	http.HandleFunc("/", HomeHandler)
	http.HandleFunc("/rooms/create", CreateRoomHandler)
	http.HandleFunc("/rooms/join", JoinRoomHandler)
	http.HandleFunc("/messages/send", SendMessageHandler)

	// Replace ":8080" with your desired server address.
	addr := ":8080"
	server := &http.Server{
		Addr: addr,
	}

	// Start the web server.
	err := server.ListenAndServe()
	if err != http.ErrServerClosed {
		// Handle server start error, if any.
	}
}
