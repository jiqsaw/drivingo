# Drivingo

# FIREBASE Functions within NX System

To integrate Firebase functions into the NX application, some workarounds were applied.

A new project named `functions` was created within the NX monorepo system. The build target in `project.json` within the functions project was modified to export the build files directly to the functions project. This approach allows the Firebase deploy script, which runs within the functions folder, to access the build folder.

```json
"outputPath": "functions/dist"
```


## Firebase Configuration

- The `firebasesrc` file specifies the default project but is optional.
- A Firebase config file (`firebase.json`) was added to the root.

Firebase scripts run directly from the root, and necessary methods were added to the `package.json` scripts.

## Build and Deploy

The `functions:deploy` script in `package.json` handles the deployment process.

The goal is to build the `functions` project with the NX build command, exporting the build files to `functions/dist`. This process is automatically managed by the `predeploy` script in `firebase.json`.

Once the build files are ready, the Firebase deploy script initiates. As specified in `firebase.json`, it targets the `functions` folder. During deployment, it looks for a `package.json` file inside the functions folder with two parameters: `engines`, to define the Node.js runtime, and `main`, to define the entry point.

Instead of using the `engines` parameter in `package.json`, the line `"runtime": "nodejs22"` was added to `firebase.json`. To define the entry point, a `package.json` file is still required in the functions folder. As a workaround, a mock `package.json` file was added, which is generally incompatible with the Nx monorepo system. Nx lacks an application packaging system, but the mock `package.json` solution works. 

The `main` parameter in this file specifies the build files to be used as the entry point. For example:
```
"main": "dist/functions/src/main.js"
```
Note: The file must be located in the src folder, not the main.js file in the root directory.

!! This mock package.json must include all the npm packages required by the functions.

### GCloud Functions Deployment Security Configuration

Firebase functions are essentially GCloud functions and can now integrate directly with GCloud Run (as of November 2024).

Deploying GCloud functions requires certain permissions. While private key JSON files were previously used to manage these permissions, they are now handled by the default service account created by Firebase. The JSON path should be added to the environment variables:

\`\`\`bash
export GOOGLE_APPLICATION_CREDENTIALS=path/to/json
\`\`\`

This JSON file contains the service-account information needed for Firebase scripts. However, using a private key file might not work as expected, as Firebase deploy scripts rely on the default account, which lacks permissions to deploy and manage Cloud Functions. Therefore, the custom service account created by Firebase must be used.

The following GCloud configurations must be applied to each GCloud function:

1. Complete the deployment (even if errors occur) and access the non-functional deployed functions on GCloud to update the configuration as needed.
2. Alternatively, create an empty template function via GCloud directly to manage configuration settings.

To configure the function:

1. Go to the Cloud Functions page: [Cloud Functions Console](https://console.cloud.google.com/functions/list?referrer=search&authuser=3&inv=1&invt=Abhfpw&project=drivingo-app)
2. Click through to the function that needs configuration.
3. Select `EDIT`.
4. Expand `Runtime, build, connections, and security settings`.
5. Switch to the `BUILD` tab.
6. Select `Custom service account` and choose the Firebase-created service account.

Following these steps enables successful deployment.

By default, deployed functions require authentication, meaning they can only be accessed from the same domain. Since mobile apps lack a dedicated server to store app files, the functions (API) must be public. To make a function (API) public:

1. Go to the Cloud Run page: [Cloud Run Console](https://console.cloud.google.com/run?authuser=3&project=drivingo-app&supportedpurview=project)
2. Select the checkbox for the function.
3. Click `Permissions` above the checkbox.
4. Click `ADD PRINCIPAL`.
5. In New Principals, enter `allUsers`.
6. For the Role dropdown, select `Cloud Run Invoker`.

Then:

1. Navigate to the function's detail page.
2. Go to the `SECURITY` tab.
3. Ensure `Allow unauthenticated invocations` is selected.

---

### Environment Variables 

To access and execute transactions on Firebase databases like Firestore, Firebase Admin must be initialized. The initialization process requires credentials containing the service account information and private key.

Secret keys, environment variables, api keys are stored in `.env` files. These variables can easily be accessed within Firebase function parameters. No need to export/define an environment variable in terminal or keep a separate json file. 


"resolveJsonModule": true


        "assets": [
          {
            "glob": "firebase-private-key.json",
            "input": "functions",
            "output": "functions"
          }
        ],

        var serviceAccount = require('../firebase-private-key.json');


Avoid using other projects refernces because functions would exported too bug