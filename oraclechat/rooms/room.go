package rooms

import "../chat"

// Room represents a chat room.
type Room struct {
	Name         string
	Participants []string
	Messages     []chat.Message
}

const (
	maxOccupants = 20
)

// chatRooms holds the list of chat rooms.
var chatRooms []Room

// CreateRoom creates a new chat room.
func CreateRoom(name string) {
	room := Room{Name: name}
	chatRooms = append(chatRooms, room)
}

// GetRoom retrieves a chat room by name.
func GetRoom(name string) (*Room, bool) {
	for _, room := range chatRooms {
		if room.Name == name {
			return &room, true
		}
	}
	return nil, false
}

// JoinRoom allows a participant to join a chat room.
func JoinRoom(roomName, participantName string) bool {
	room, found := GetRoom(roomName)
	if found {
		room.Participants = append(room.Participants, participantName)
		return true
	}
	return false
}
