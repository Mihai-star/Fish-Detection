import os
while (1):
    for j in range(1, 10):
        cmd = "pscp -pw Fishdetection@myskills C:\Users\Mihai\Desktop\Software\directory_result_detection_fish\image_FILE_TEXT%s.jpg root@167.71.2.16:/srv/Detection/Fish-Detection" %j
        os.system(cmd)
print("again")
