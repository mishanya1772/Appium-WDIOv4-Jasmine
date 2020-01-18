# Sample project for running e2e tests on Desktop and Mobile device using webdriverIO + Appium   

### Install Appium on a local machine:  
         • npm install appium-doctor -g 
         • npm install appium -g   

### Check if the appium-doctor is installed correctly: 
         • appium-doctor  

### If you have a problem with **ANDROID_HOME**:
         • download Android Studio: https://developer.android.com/studio/
         • setup sdk: export ANDROID_HOME=/home/{MyUser}/Android/Sdk 

### Check if the appium is installed correctly: 
         • appium  
         • if you have "command not found" message, go to ~ /usr/local/bin/ 
         • and add access: sudo chmod -R a+w /usr/local/bin/appium
 
### Install emulator:   
         • it can be an appium-desktop program: https://github.com/appium/appium-desktop
         • or android studio: https://github.com/webdriverio/appium-boilerplate/blob/v4/docs/ANDROID_IOS_SETUP.md
  
### Setup dependencies:
         • add emulator to config file: /config/app.conf.js
         • install all dependencies: npm i

### For running e2e tests in browser: For running tests in mobile browser, choose **appium** branch and
         • choose Appium branch 
         • run mobile e2e tests: npm run mob
         • run desktop e2e tests: npm run desk

### For running e2e tests in the application:
         • choose AppiumApp branch 
         • run e2e tests: npm run app
