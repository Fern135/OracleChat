package web

import (
	"encoding/json"
	"fmt"
	"net/http"
	"oraclechat/chat"
	"oraclechat/rooms"
)

func CreateRoomHandler(w http.ResponseWriter, r *http.Request) {
	// Extract room name from the request and create a new room.
	// You can implement input validation and error handling here.
	roomName := r.FormValue("name")
	rooms.CreateRoom(roomName)
	w.WriteHeader(http.StatusCreated)
}

func JoinRoomHandler(w http.ResponseWriter, r *http.Request) {
	// Extract participant name and room name from the request and join the room.
	// You can implement input validation and error handling here.
	participantName := r.FormValue("participant")
	roomName := r.FormValue("room")
	success := rooms.JoinRoom(roomName, participantName)

	if success {
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusNotFound)
	}
}

func SendMessageHandler(w http.ResponseWriter, r *http.Request) {
	// Extract message, room name, and participant name from the request.
	// You can implement input validation and error handling here.
	message := r.FormValue("message")
	roomName := r.FormValue("room")
	// participantName := r.FormValue("participant")

	// Check if the room exists.
	room, found := rooms.GetRoom(roomName)

	if !found {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	if room != nil {
		// not sure
		// todo: figure out if not delete and implement without room var
	}

	// Create and store the chat message.
	chat.CreateMessage(message, roomName)

	// Respond with the created message.
	response := struct {
		Message string `json:"message"`
		Room    string `json:"room"`
	}{message, roomName}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Home Handler Called")
}
