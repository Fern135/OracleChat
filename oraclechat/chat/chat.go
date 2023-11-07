package chat

type Message struct {
	ID      int    `json:"id"`
	Content string `json:"content"`
	Room    string `json:"room"`
}

var chatMessages []Message

func CreateMessage(message, room string) {
	msg := Message{
		ID:      len(chatMessages) + 1,
		Content: message,
		Room:    room,
	}
	chatMessages = append(chatMessages, msg)
}

func GetMessages(room string) []Message {
	var roomMessages []Message
	for _, msg := range chatMessages {
		if msg.Room == room {
			roomMessages = append(roomMessages, msg)
		}
	}
	return roomMessages
}
