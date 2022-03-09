# README

## User Manual 🥳

[MetaPro User Manual](https://csi-studio.github.io/MetaPro/guide/user-manual.html)

## Framework

![](/docs/.vuepress/public/images/image_34.png)

---

## Main Interface

![](/docs/.vuepress/public/images/image_33.png)

---

## Demo

[`http://47.88.77.176`](http://47.88.77.176)

---

## Download

### Software

[AirdPro v1.1](https://github.com/CSi-Studio/AirdPro/releases/tag/1.1)

[MetaPro v1.1.8](https://github.com/CSi-Studio/MetaPro/releases/tag/v1.1.8)

### Test data and libraries

[GoogleDrive](https://drive.google.com/drive/folders/1_FAFca5LlqhFWv6U1-UzU9OkqPvGRsBI?usp=sharing)

[OneDrive](https://1drv.ms/u/s!AqS3L_kdjWbKgp43W1l8-GteFvv6ZQ?e=xukUkb)

---

## How to install

> Extract MetaPro zip file to any directory you want.

> Here we use INSTALLATION_PATH to represent your installation path, for example `C:\`

### Windows

- Open INSTALLATION_PATH folder
- **start:** Right click `MetaproStart.bat`, run as administrator.

  **Successful operation:**

  The following operations appear in the terminal to indicate that the operation is successful:
  ![](/images/win.png)
  **After successful startup, open a browser and connect to** **`localhost:8080`**

- **stop:** Right click `MetaproStop.bat`, run as administrator
- **uninstall:** Stop MetaPro and delete the installation folder.

### MacOs

- Open a terminal

  ```
  cd INSTALLATION_PATH
  cd MetaproForMac
  ```

- start

  ```
  bash MetaproStart.sh
  ```

  **Successful operation:**

  The following operations appear in the terminal to indicate that the operation is successful:

  ```bash
  $ bash ./MetaproStart.sh
  /Users/commands/Documents/code/MetaPro/MetaproForMac
  ********* Start Redis *********
  /Users/commands/Documents/code/MetaPro/MetaproForMac/redis
  ********* Start MongoDB *********
  /Users/commands/Documents/code/MetaPro/MetaproForMac/mongodb
  ********* Start Metapro *********
  about to fork child process, waiting until server is ready for connections.
  forked process: 94332

  $ child process started successfully, parent exiting
  ```

  **After successful startup, open a browser and connect to** **`localhost:8080`**

- stop

  ```
  bash MetaproStop.sh
  ```

- uninstall

  Stop MetaPro and delete the installation folder.

### Linux

- Open a terminal

  ```
  cd INSTALLATION_PATH
  cd MetaproForUbuntu
  ```

- start

  ```
  bash MetaproStart.sh
  ```

  **Successful operation:**

  **After successful startup, open a browser and connect to** **`localhost:8080`**

  The following operations appear in the terminal to indicate that the operation is successful:

  ```bash
  $ bash ./MetaproStart.sh
  /Users/commands/Documents/code/MetaPro/MetaproForMac
  ********* Start Redis *********
  /Users/commands/Documents/code/MetaPro/MetaproForMac/redis
  ********* Start MongoDB *********
  /Users/commands/Documents/code/MetaPro/MetaproForMac/mongodb
  ********* Start Metapro *********
  about to fork child process, waiting until server is ready for connections.
  forked process: 94332

  $ child process started successfully, parent exiting
  ```

  **After successful startup, open a browser and connect to** **`localhost:8080`**

- stop

  ```
  bash MetaproStop.sh
  ```

- uninstall: Stop MetaPro and delete the installation folder.

---

## How to use

[UserManual](../guide/user-manual.md)
