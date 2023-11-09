package web

import (
	"net/http"
)

func InitRoutes()

func StartServer() {
	http.HandleFunc("/", HomeHandler)
	http.HandleFunc("/rooms/create", CreateRoomHandler)
	http.HandleFunc("/rooms/join", JoinRoomHandler)
	http.HandleFunc("/messages/send", SendMessageHandler)
	//http.HandleFunc("/create/update", userInfo) // update userinformation
	//http.HandleFunc("/create/user", userCreate)
	//http.HandleFunc("/forgot/username", forgotUserName)
	//http.HandleFunc("/forgot/password", forgotPassword)

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
