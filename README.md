# Appium-project

This project is for running a simple Appium tests together with WebdriverIO for:
* Android Native Apps

**FIRST STEP!** Install Appium on a local machine. So, open terminal and enter:
 * **npm install appium-doctor -g**   
 // Appium-doctor - for diagnose and fix common Node, iOS and Android configuration issues before starting Appium.
 * **npm install appium -g**   
 // Appium is cross-platform test automation tool for mobile web and apps  

Now, check the installed programs: 
 Enter command **appium-doctor**.  
* You will see a **### Diagnostic for necessary dependencies starting ###**.  
 If will be a problem with **ANDROID_HOME**, you should download **android studio** from https://developer.android.com/studio/ link and enter command in terminal:  
  **export ANDROID_HOME=/"LINK TO YOUR ANDROID SDK"/Sdk**  
  // for example: export ANDROID_HOME=/home/my.user/Android/Sdk
* Then repeat the command: **appium-doctor**

 Then enter in terminal: **appium**  
 * You will see   
**[Appium] Welcome to Appium v1.10.1  
   [Appium] Appium REST http interface listener started on 0.0.0.0:4723**
 * If will be a problem "command not found", then go to **/usr/local/bin/** and find file **appium**.
 After that, enter in terminal:  
 **sudo chmod -R a+w /usr/local/bin/appium**
 
**SECOND STEP!** Install emulator for your virtual device:   
  * It can be appium-desktop program ( https://github.com/appium/appium-desktop )
  * Or android studio ( https://github.com/webdriverio/appium-boilerplate/blob/v4/docs/ANDROID_IOS_SETUP.md )
  
**THIRD STEP!** Im emulator, configure the same device as in **/config/app.conf.js** file and run it.   

**FOURTH STEP!** Into this project in terminal, enter **npm i**.    

**FIFTH STEP!** Now you can run project. So, also enter **npm run android.app**.   
 