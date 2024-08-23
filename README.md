# Shoonya Life Assignment Website

This is a website I built as part of an assignment for Shoonya Life.

# How to Run This Project

This project is a React application built using Parcel as the bundler. Follow these steps to run it on your local machine:

## Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
- Git should be installed to clone the repository.

## Steps

1. Clone the repository: git clone [https://github.com/Vinaysankeerth13/VinaySankeerthNalla_Shoonya_Assignment]
2. Navigate to the project directory: cd[VinaySankeerthNalla_Shoonya_Assignment]
3. Install the dependencies: npm install
4. Start the development server: npm start
5. Open your web browser and go to `http://localhost:1234` (or whichever port Parcel uses by default).

## Notes

- The `npm start` command runs a script that's defined in the `package.json` file. This script is set up to start the Parcel development server.
- If you encounter any issues, make sure all dependencies are correctly installed and that you're using a compatible version of Node.js.
- To stop the server, press `Ctrl + C` in the terminal where it's running.

## Troubleshooting

If you encounter any problems:
1. Make sure all dependencies are installed correctly.
2. Check if you're using a compatible Node.js version.
3. If you get a "port already in use" error, try changing the port in the start script in `package.json`.

For any other issues, please open an issue in the GitHub repository.

## Features

- **Header**: A simple header with title text.
- **Main Banner**: Displayed only on large screens.
- **Filters**: Three filters are incorporated:
  - **Year**: Filter for the year the retreat event is happening.
  - **Type of Event**: Filter for event types (Yoga, meditation, etc.).
  - **Currency**: Filter to accommodate customers from different countries.
- **Search**: A basic search functionality that enables users to search for the retreat they wish to choose.
- **Scroll Functionality**: Implemented using "Previous" and "Next" buttons to enable users to scroll through retreat options.

## Design Changes
git 
I revised the design of the site as the initial design was not aesthetically pleasing for a wellness retreat website. The initial design had too many colors. Additionally, I added a filter that changes the currency, enabling the website to cater to a broader customer base.