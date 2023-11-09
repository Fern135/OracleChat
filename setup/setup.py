import platform
import subprocess

def run(command):
    result = subprocess.run(command, shell=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if result.returncode == 0:
        print("Command output:")
        print(result.stdout)

    else:
        print("Command failed with the following error:")
        print(result.stderr)

def setUp():
    os_name = platform.system()

    if os_name == "Linux" or os_name == "Darwin":
        run("chmod +x ./setup/mac/setUp.sh")
        run("./setup/mac/setUp")

    elif os_name == "Windows":
        print("Running on Windows")
        
    else:
        print("Running on an unknown operating system")

if __name__ == "__main__":
    setUp()