# check if go os installed
# if not install it
# install go packages "if any"
# run the script to run the server

# Check if Golang is installed
if (-not (Test-Path "C:\Go" -PathType Container)) {
    # Golang is not installed, so download and install it
    Write-Host "Golang is not installed. Installing Golang..."
    Invoke-WebRequest -Uri "https://golang.org/dl/go1.17.4.windows-amd64.msi" -OutFile "C:\go_installer.msi"
    Start-Process -Wait -FilePath "C:\go_installer.msi"
    Remove-Item -Path "C:\go_installer.msi"
}

# Check if Node.js is installed
if (-not (Test-Path "C:\Program Files\nodejs" -PathType Container)) {
    # Node.js is not installed, so download and install it
    Write-Host "Node.js is not installed. Installing Node.js..."
    Invoke-WebRequest -Uri "https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi" -OutFile "C:\node_installer.msi"
    Start-Process -Wait -FilePath "msiexec" -ArgumentList "/i C:\node_installer.msi /q"
    Remove-Item -Path "C:\node_installer.msi"
}

Write-Host "Golang and Node.js are installed."
