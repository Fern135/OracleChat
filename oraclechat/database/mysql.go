package database

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	_ "github.com/joho/godotenv"
	// "database/sql" // research
)

// todo: move to .env
var (
	username = os.Getenv("username")
	password = os.Getenv("password")
	host     = os.Getenv("host")
	port     = os.Getenv("port")
	dbname   = os.Getenv("dbname")
)

func init() {
	hostString := host + ":" + port
	// Define the MySQL database connection parameters
	dsn := "" + username + ":" + password + "@tcp(" + hostString + ")/" + dbname + ""

	// Open a connection to the database
	db, err := sql.Open("mysql", dsn)
	err = db.Ping()

	if err != nil {
		log.Fatal(err)
	}

	// Ping the database to ensure the connection is valid
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	//#region example usage
	// Define and execute custom SQL queries using the safeExecuteSQL function
	// createTableSQL := `
	// CREATE TABLE IF NOT EXISTS users (
	// 	id INT AUTO_INCREMENT PRIMARY KEY,
	// 	username VARCHAR(50),
	// 	email VARCHAR(100)
	// );`

	// safeExecuteSQL(db, createTableSQL)

	// insertDataSQL := "INSERT INTO users (username, email) VALUES (?, ?)"
	// args := []interface{}{"john", "john@example.com"}
	// safeExecuteSQL(db, insertDataSQL, args...)

	// querySQL := "SELECT username, email FROM users WHERE username = ?"
	// args = []interface{}{"john"}
	// rows, err := safeQueryData(db, querySQL, args...)

	// if err != nil {
	// 	log.Fatal(err)
	// }

	// defer rows.Close()

	// for rows.Next() {
	// 	var username, email string
	// 	err = rows.Scan(&username, &email)
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	fmt.Printf("Username: %s, Email: %s\n", username, email)
	// }
	//#endregion
}

func safeExecuteSQL(db *sql.DB, sql string, args ...interface{}) bool {
	stmt, err := db.Prepare(sql)
	if err != nil {
		log.Fatal(err)
		return false
	}

	defer stmt.Close()

	_, err = stmt.Exec(args...)
	if err != nil {
		log.Fatal(err)
		return false
	}

	return true
}

func safeQueryData(db *sql.DB, sql string, args ...interface{}) (*sql.Rows, error) {
	stmt, err := db.Prepare(sql)
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	rows, err := stmt.Query(args...)
	if err != nil {
		return nil, err
	}

	return rows, nil
}
