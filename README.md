# WellNest 

## Embrace WellNess. Embrace WellNest

WellNest is your all-in-one solution to bridge the gap between mental health awareness, prevention, and treatment. Especially, if you are a young professional!

## Technology Stack

Our technology stack at WellNest comprises:

1. **React**:  
    - **Efficient Component-Based Architecture**: React's component-based structure allows us to build reusable UI components, which helps in faster development. 

2. **Material UI**:  
    - **Consistent Design**: Material UI offers a range of pre-designed React components and so it ensures design consistency across the app. Moreover, Material UI stands out as a UI framework offering sleek and modern components. This aspect will be particularly appealing to our young professional stakeholders, captivating them with its contemporary design!

3. **Tailwind CSS**:  
    - **Utility-First Styling Approach**: Tailwind CSS simplifies styling by providing utility classes, which allows developers to quickly create and style components by applying these classes directly in the HTML, speeding up the development process.

## Style Guide

Our style guide at WellNest comprises:

## Operational Instructions

In the project directory, you can run:

### `npm install`

npm install is a command used in Node.js development to install dependencies for a project. When you run `npm install`, it looks for a package.json file in the current directory and fetches the packages listed in package.json from the npm registry and installs them in a node_modules directory within your project. 

~~Note: if you are experiencing an npm error complaining about pairing @mui/styles@5.14.19 with react@18.2.0, please safely ignore it by running `npm install --force` instead.~~

(The above problem is fixed by using a package [mui-styles](https://www.npmjs.com/package/mui-styles) to that make mui styles compatible to react 18.X)

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Limitations

Our Product Increment 1 (MVP) of WellNest has the following limitations:

1. **Matching with Therapist Feature**: 

    - **Simulated Google Workspace Integration**: In our current implementation of WellNest, the user cannot integrate with Google Workspace. Instead, we will operate in a simulated environment and provide the user with a pre-determined time and date for the appointment with the matched therapist. 
    - **Absence of Algorithmic Matching**: At present, WellNest doesn't employ sophisticated algorithms for matching therapists. Instead, it just matches the user with a pre-determined list of therapists.  
    - **No Database Storage Functionality**: As of now, WellNest doesn't possess the functionality to store matched therapist data in a database. Hence, the user cannot retain or retrieve information about upcoming appointments and therapists they have been matched with!

2. **Mood Tracking Feature**: 

    - **No Sharing Mood Data on Third-Party Applications**: Currently, WellNest doesn't allow sharing Mood data with third-party applications. Instead, the system will only notify the user that the mood data is successfully shared to simulate the behavior of sharing the mood data through a third-party application!
    - **No Database Storage Functionality**: At present, WellNest doesn't possess the functionality to store mood data in a database. Hence, the user cannot retain or access historical mood information.

3. **Play to Earn Feature**: 

    - **No Database Storage Functionality**: At present, WellNest doesn't possess the functionality to store rewards earned through daily exercises in a database. Hence, the user cannot retain or access rewards-related information.
