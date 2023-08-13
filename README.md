# Darkmode-toggle-react

## [🌒 Looking for maintainers for Darkmode-toggle-react library](https://github.com/ouchkaih/Darkmode-toggle-react.git)



[darkmode-toggle-react](https://www.npmjs.com/package/darkmode-toggle-react) is a simple React component for implementing a dark mode toggle switch using Tailwind CSS or you can use customaized css instead.

You should consider using reactjs-popup for those couple of reasons :

- **✅ Very tiny library**
- **✅ Fully accessible 🔓**
- **✅ Easy to use 💦**
- **✅ Full style customization 🧩 ( CSS, styled-components)**
- **✅ Default & Custom Animations**

## Demo


## Installing / Getting started


To install and use the DarkMode Toggle React component in your project, follow these steps:

1. Install the tailwindcss (optional):

to install Tailwind CSS, follow these steps:
for more details go take a look at this docuentation [install tailwindcss with react](https://tailwindcss.com/docs/guides/create-react-app)

Install Tailwind CSS:

#### 1- Install Tailwind CSS and its dependencies using npm:

```bash
    npm install -D tailwindcss
```

### 2- Create a Tailwind Configuration File:

- Generate a Tailwind CSS configuration file using the following command:

```bash
    npx tailwindcss init
```
This will create a tailwind.config.js file in your project directory.


### 3- Include Tailwind CSS Styles:

Include Tailwind CSS styles in your project. You can either import the styles directly into your CSS/SCSS file or include them via a link tag in your HTML file:

```bash 
    <!-- In your HTML file -->
    <link href="path/to/tailwind.css" rel="stylesheet">
```

### 4- Set Up Dark Mode :

If you want to enable dark mode using Tailwind CSS, you can configure it in your tailwind.config.js file:

```js
    // tailwind.config.js
    module.exports = {
    darkMode: 'class', // Enable dark mode based on the 'dark' class
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
    };
```

2. install darkModeToggle 

This package is available in NPM repository as [darkmode-toggle-react](https://www.npmjs.com/package/darkmode-toggle-react). It will work correctly with all popular bundlers.

##### install with npm 
```bash 
    npm i darkmode-toggle-react
```

##### install it with yarn 
```bash 
    yarn add darkmode-toggle-react
```
### 



## Include the Component

To start using darkModeToggle you just need to import the component from the darkmode-toggle-react package.

#### using tailwindCss
```jsx
import React from 'react';
import { DarkModeToggle } from 'darkmode-toggle-react'

export default () => (
  <div className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-300 min-h-screen min-w-full" >
        <DarkModeToggle />
  </div>
);
```

#### using css 

```css 
    /* main.css file */
    .dark{
        background-color: #121212; /* Dark background color */
        color: #ffffff; /* Light text color for dark mode */
    }
```

```jsx  

    import React from 'react';
    import { DarkModeToggle } from 'darkmode-toggle-react'
    import main.css

    export default () => (
        <div className="" >
                <DarkModeToggle />
        </div>
    );
```

# Contributing

### Clone Repo

Fork and then clone the repo

    git clone https://github.com/ouchkaih/Darkmode-toggle-react.git

### Start Developing

Install all npm scripts:

    npm install
    or
    yarn install

we use [storybook](https://storybook.js.org/) to build popup use cases.

To start storybook:

```
yarn storybook
```

Run Test in watch mode

```
yarn test
```

To make contributing simply you need to create a new story for your use case under `stories` directory to demonstrate the new features or the bug fix .

Make Changes 😀.

Before submitting a pull request run `npm run test` to run the unit tests .

## Licensing

The code in this project is licensed under MIT license.

# Show your support!

## Sponsor

if you are interested to Sponsor this library and list your logo in this section, [Make sure to contact me](https://twitter.com/ouchkaih).

## Show Your Support

<a href="https://www.buymeacoffee.com/Raivox" target="_blank">
  <img
    src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
    alt="Buy Me A Coffee"
    height="40px"
  />
</a>
<br />

That's all, thank you for your attention, please [![Star on GitHub][github-star-badge]][github-star] the repo to show your support.

we are all made of stars [![Star on GitHub][github-star-badge]][github-star]