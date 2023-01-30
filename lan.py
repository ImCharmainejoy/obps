import subprocess
import socket

def start_lan_development():
    try:
        host_ip = socket.gethostbyname("")
        start = 'npm run dev -- --hostname ' + host_ip + ' --port 4200'
        subprocess.check_call(start, shell=True)
    except:
        print("Unable to get Hostname and IP")


start_lan_development()
