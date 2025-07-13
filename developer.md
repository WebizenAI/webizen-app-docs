# **Webizen Developer Guide**

This guide provides a step-by-step walkthrough for setting up a complete development environment for Webizen using Visual Studio Code.

## **1\. Prerequisites**

Before you begin, ensure you have the following installed:

* [Git](https://git-scm.com/)  
* [Node.js v22 (LTS)](https://nodejs.org/)  
* [Python v3.11](https://www.python.org/downloads/release/python-3110/)  
* [Visual Studio Code](https://code.visualstudio.com/)

### **VS Code Extensions**

For the best development experience, please install the following VS Code extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
* [Prettier \- Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## **2\. Environment Setup**

### **Step 2.1: Clone the Repository**

git clone https://github.com/WebizenAI/webizen-dev.git  
cd webizen-dev

### **Step 2.2: Install Node.js Dependencies**

This command installs all necessary packages for the Electron app, React UI, and build scripts.

npm install

### **Step 2.3: Rebuild Native Modules**

Electron requires native Node.js modules to be compiled against its specific version. The rebuild script handles this for you.

npm run rebuild

### **Step 2.4: Set Up Python Environment (for AI Features)**

If you plan to work on the AI features, you'll need to set up the Python environment for Chatterbox and ChromaDB. We recommend using Conda.

\# Create and activate a Conda environment  
conda create \-n chatterbox python=3.11  
conda activate chatterbox

\# Clone and install Chatterbox  
git clone https://github.com/resemble-ai/chatterbox.git  
cd chatterbox  
pip install \-e .  
cd ..

## **3\. VS Code Configuration for Debugging**

To debug both the Electron main (background) and renderer (foreground) processes from VS Code, create a launch.json file inside the .vscode directory.

Create the file .vscode/launch.json and add the following configuration:

{  
  "version": "0.2.0",  
  "configurations": \[  
    {  
      "type": "node",  
      "request": "launch",  
      "name": "Electron Main",  
      "runtimeExecutable": "${workspaceFolder}/node\_modules/.bin/electron",  
      "program": "${workspaceFolder}/app/main.js",  
      "protocol": "inspector"  
    },  
    {  
      "type": "chrome",  
      "request": "launch",  
      "name": "Electron Renderer",  
      "runtimeExecutable": "${workspaceFolder}/node\_modules/.bin/electron",  
      "runtimeArgs": \[  
        "${workspaceFolder}/app/main.js",  
        "--remote-debugging-port=9222"  
      \],  
      "windows": {  
        "runtimeExecutable": "${workspaceFolder}/node\_modules/.bin/electron.cmd"  
      },  
      "webRoot": "${workspaceFolder}"  
    }  
  \],  
  "compounds": \[  
    {  
      "name": "Electron: Main & Renderer",  
      "configurations": \["Electron Main", "Electron Renderer"\]  
    }  
  \]  
}

## **4\. Running and Debugging**

With the launch.json file in place, you can now easily run and debug the application.

1. Go to the "Run and Debug" view in VS Code (Ctrl+Shift+D or Cmd+Shift+D).  
2. Select **"Electron: Main & Renderer"** from the dropdown menu.  
3. Press the **F5** key or click the green play button.

This will launch the Webizen application with the VS Code debugger attached to both the main and renderer processes. You can now set breakpoints, inspect variables, and use the full power of the debugger in your \*.js files.

## **5\. What's Next?**

You now have a fully configured development environment. To learn more about the project's architecture, how to create modules, and how to use the various APIs, please refer to our **full developer documentation site**.