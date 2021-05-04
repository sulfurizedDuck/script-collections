try:
    import httplib
except:
    import http.client as httplib

import time

def checkInternetHttplib(url="www.google.com", timeout=3):
    conn = httplib.HTTPConnection(url, timeout=timeout)
    try:
        conn.request("HEAD", "/")
        conn.close()
        return True
    except Exception as e:
        print(e)
        return False

while checkInternetHttplib() == False:
	time.sleep(1)
	continue

print("Internet returned!")

# https://stackoverflow.com/a/16573339
import winsound
duration = 1000 #ms
freq = 440 # Hz
winsound.Beep(freq, duration)
