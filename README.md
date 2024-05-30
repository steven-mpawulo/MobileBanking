This is a simple Mobile Banking Application
It provides users with a login screen, home screen and a transfer amount screen.
My Assumptions: 
I only have one active user with email: johndoe@test.com and password: 123456
This user has an account number of 1, accountBalance of 2000 and fullName of John Doe
This user also initially has some transactions.
This user can only make a transfer to a person with account number of 2.
The account balance and list of transactions will be updated after successful amount transfer.

## Clone and install dependencies
You will have to first clone this repository
Use git clone with the repo url

Change directory into this cloned repository
cd then the name of the clone repository

Then run npm install to get all the dependencies

Finally follow the following steps

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## Congratulations! :tada:

You've successfully run the mobile banking application. :partying_face:


