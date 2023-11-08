#!/bin/bash

# Check if Golang is installed
if ! command -v go &> /dev/null; then
    # Golang is not installed, so install it
    echo "Golang is not installed. Installing Golang..."
    curl -O https://golang.org/dl/go1.17.4.linux-amd64.tar.gz
    tar -C /usr/local -xzf go1.17.4.linux-amd64.tar.gz
    rm go1.17.4.linux-amd64.tar.gz
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    # Node.js is not installed, so install it
    echo "Node.js is not installed. Installing Node.js..."
    curl -sL https://deb.nodesource.com/setup_16.x | bash -
    apt-get install -y nodejs
fi

echo "Golang and Node.js are installed."


# check if go os installed
# if not install it
# install go packages "if any"
# run the script to run the server
