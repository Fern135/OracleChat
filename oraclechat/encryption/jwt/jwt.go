package jwt

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

// Replace these with your own secret values in a production environment
const secretKey = os.Getenv("secret_key")

type CustomClaims struct {
	Username string `json:"username"`
}

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file:", err)
	}

}

func main() {
	payload := CustomClaims{Username: "exampleUser"}

	token, err := createJWT(payload)

	if err != nil {
		fmt.Println("Error creating JWT:", err)
		return
	}

	fmt.Println("Generated JWT token:", token)

	decodedPayload, err := verifyJWT(token)
	if err != nil {
		fmt.Println("Invalid token")
		return
	}

	fmt.Printf("Decoded payload: %+v\n", decodedPayload)
}

func createJWT(payload CustomClaims) (string, error) {
	header := map[string]interface{}{
		"alg": "HS256",
		"typ": "JWT",
	}

	headerJSON, err := json.Marshal(header)
	if err != nil {
		return "", err
	}

	headerBase64 := base64.RawURLEncoding.EncodeToString(headerJSON)
	payloadJSON, err := json.Marshal(payload)
	if err != nil {
		return "", err
	}

	payloadBase64 := base64.RawURLEncoding.EncodeToString(payloadJSON)

	signatureInput := fmt.Sprintf("%s.%s", headerBase64, payloadBase64)
	signature := generateHMAC256(signatureInput, []byte(secretKey))

	return fmt.Sprintf("%s.%s.%s", headerBase64, payloadBase64, base64.RawURLEncoding.EncodeToString(signature)), nil
}

func verifyJWT(token string) (*CustomClaims, error) {
	parts := SplitToken(token)
	if len(parts) != 3 {
		return nil, fmt.Errorf("Invalid token")
	}

	header, payload, signature := parts[0], parts[1], parts[2]
	expectedSignature := generateHMAC256(fmt.Sprintf("%s.%s", header, payload), []byte(secretKey))
	if !hmac.Equal(expectedSignature, []byte(signature)) {
		return nil, fmt.Errorf("Invalid signature")
	}

	payloadBytes, err := base64.RawURLEncoding.DecodeString(payload)
	if err != nil {
		return nil, err
	}

	var claims CustomClaims
	err = json.Unmarshal(payloadBytes, &claims)
	if err != nil {
		return nil, err
	}

	return &claims, nil
}

func generateHMAC256(data string, key []byte) []byte {
	h := hmac.New(sha256.New, key)
	h.Write([]byte(data))
	return h.Sum(nil)
}

func SplitToken(token string) []string {
	return []string{token[:107], token[107:214], token[214:]}
}
