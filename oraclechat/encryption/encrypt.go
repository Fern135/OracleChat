package encrypt

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"crypto/sha256"
	"io"
	"log"
	"os"

	"github.com/joho/godotenv"
)

var (
	key       []byte
	block     cipher.Block
	iv        []byte
	secretKey string
)

func init() {
	// Load the passphrase from the .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file:", err)
	}

	secretKey = os.Getenv("secret_key")

	// Generate a 32-byte encryption key from the passphrase
	key = generateKey(secretKey)

	// Create a new AES cipher block using the encryption key
	var errCipher error
	block, errCipher = aes.NewCipher(key)
	if errCipher != nil {
		log.Fatal("Error creating AES cipher block:", errCipher)
	}

	// Create a random initialization vector (IV)
	iv = make([]byte, aes.BlockSize)
	_, errIV := io.ReadFull(rand.Reader, iv)
	if errIV != nil {
		log.Fatal("Error generating random IV:", errIV)
	}
}

func generateKey(passphrase string) []byte {
	hash := sha256.New()
	hash.Write([]byte(passphrase))
	return hash.Sum(nil)
}

func encrypt(plaintext string) []byte {
	stream := cipher.NewCTR(block, iv)
	ciphertext := make([]byte, len(plaintext))
	stream.XORKeyStream(ciphertext, []byte(plaintext))
	return ciphertext
}

func decrypt(ciphertext []byte) string {
	stream := cipher.NewCTR(block, iv)
	decryptedText := make([]byte, len(ciphertext))
	stream.XORKeyStream(decryptedText, ciphertext)
	return string(decryptedText)
}

// func main() {
// originalText := "This is a secret message."

// Encrypt the plaintext
// ciphertext := encrypt(originalText)

// Decrypt the ciphertext
// decryptedText := decrypt(ciphertext)

// Check if the decrypted text matches the original text
// 	fmt.Printf("Original Text: %s\n", originalText)
// 	fmt.Printf("Ciphertext: %x\n", ciphertext)
// 	fmt.Printf("Decrypted Text: %s\n", decryptedText)
// 	fmt.Printf("Matches Original: %v\n", originalText == decryptedText)
// }
