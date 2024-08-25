# Accuknox Dashboard Assignment

This is a website (Analytics Dashboard) I built as part of an assignment for Accuknox.

# How to Run This Project

This project is a React application built using Parcel as the bundler. Follow these steps to run it on your local machine:

## Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
- Git should be installed to clone the repository.

## Steps

1. Clone the repository: git clone [https://github.com/Vinaysankeerth13/Accuknox_Assignment_VinaySankeerthNalla]
2. Navigate to the project directory: cd[Accuknox_Assignment_VinaySankeerthNalla]
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

## Task Performed

1. **Dynamic JSON Structure**: Categories and widgets are loaded from a JSON file.
2. **Dynamic Widget Addition**: Users can add widgets to a category via a popup form.
3. **Random Text for Widgets**: Widgets are created with random progress values and placeholder text.
4. **Widget Addition Form**: A form appears to enter widget name and text when adding a widget.
5. **Remove Widget**: Widgets can be removed from a category using a delete button.
6. **Search Widgets**: A search input filters widgets by name and updates displayed categories accordingly.