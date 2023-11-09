import platform
import subprocess

def run(command):
    # text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE
    subprocess.call(command, shell=True)

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