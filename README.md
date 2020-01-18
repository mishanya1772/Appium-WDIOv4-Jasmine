# Sample project for running e2e tests on Desktop and Mobile device using webdriverIO + Appium   

### Install Appium on a local machine:  
* **npm install appium-doctor -g**     
* **npm install appium -g**   

### Check if the appium-doctor is installed correctly: 
* **appium-doctor**  

### If you have a problem with **ANDROID_HOME**:
* Download **Android Studio**: *https://developer.android.com/studio/*
* Setup sdk: **export ANDROID_HOME=/"LINK TO YOUR ANDROID SDK"/Sdk** (e.g. export *ANDROID_HOME=/home/my.user/Android/Sdk* )

### Check if the appium is installed correctly: 
* **appium**  
* If you have "command not found" message, go to */usr/local/bin/* and add access:
 **sudo chmod -R a+w /usr/local/bin/appium**
 
### Install emulator:     
* It can be an appium-desktop program: *https://github.com/appium/appium-desktop*
* Or android studio: *https://github.com/webdriverio/appium-boilerplate/blob/v4/docs/ANDROID_IOS_SETUP.md*
  
### Setup dependencies:
* Add emulator to config file: **/config/app.conf.js**
* Install all dependencies: **npm i**

### For running e2e tests in browser: For running tests in mobile browser, choose **appium** branch and
* Choose **appium** branch 
* Run mobile e2e tests: **npm run mob**
* Run desktop e2e tests: **npm run desk**

### For running e2e tests in the application:
* Choose **appiumApp** branch 
* Run e2e tests: **npm run app**
