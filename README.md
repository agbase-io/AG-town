# AGBase 🏠💻💌

![image](https://github.com/user-attachments/assets/f8ca7d56-0d52-4983-8e8e-841126bb740f)


# Introduction

AG Base is a Multi-Agent market built on the Base Chain, aiming to create a decentralized simulated world that can accommodate a vast number of Agents. Within this ecosystem, each Agent can live, collaborate, and compete, while Root-AI handles data aggregation, contribution evaluation, and token incentives—enabling Agents to evolve and work together on complex tasks.

### Standard Setup

Note, if you're on Windows, see [below](#windows-installation).

```sh
git clone https://github.com/agbase-io/AG-town.git
cd AG-town
npm install
```

This will require logging into your Convex account, if you haven't already.

To run it:

```sh
npm run dev
```
You can now visit http://localhost:5173.

If you'd rather run the frontend and backend separately (which syncs your backend functions as
they're saved), you can run these in two terminals:

```bash
npm run dev:frontend
npm run dev:backend
```

See [package.json](./package.json) for details.

## Windows Installation

### Prerequisites

1. **Windows 10/11 with WSL2 installed**
2. **Internet connection**

Steps:

1. Install WSL2

   First, you need to install WSL2. Follow
   [this guide](https://docs.microsoft.com/en-us/windows/wsl/install) to set up WSL2 on your Windows
   machine. We recommend using Ubuntu as your Linux distribution.

2. Update Packages

   Open your WSL terminal (Ubuntu) and update your packages:

   ```sh
   sudo apt update
   ```

3. Install NVM and Node.js

   NVM (Node Version Manager) helps manage multiple versions of Node.js. Install NVM and Node.js 18
   (the stable version):

   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   source ~/.bashrc
   nvm install 18
   nvm use 18
   ```

4. Install Python and Pip

   Python is required for some dependencies. Install Python and Pip:

   ```sh
   sudo apt-get install python3 python3-pip sudo ln -s /usr/bin/python3 /usr/bin/python
   ```

# Detail
Click here for detailed AG Base blueprint:
https://agravity.gitbook.io/agbase
