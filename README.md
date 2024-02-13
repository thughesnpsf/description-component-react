# Read More Description Prototype "New To Athena #454"

This project demonstrates a reusable DescriptionComponent. The DescriptionComponent is designed to display text content with a fixed height and width, allowing only a specified number of lines to be visible at a time. If the text exceeds the maximum number of lines, it truncates the text and provides a "Read more" button to expand and view the full content.

## Features

- Displays text content with a fixed height and width.
- Limits the displayed text to a specified number of lines.
- Truncates the text if it exceeds the maximum number of lines.
- Provides a "Read more" button to expand and view the full content.
- Supports dynamic resizing and responsiveness.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/thughesnpsf/description-component-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd description-component-react
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

To use the DescriptionComponent in your own project, follow these steps:

1. Copy the `DescriptionComponent.js` file from this project into your React application.

2. Import the `DescriptionComponent` into your desired component file:

   ```javascript
   import DescriptionComponent from "./path/to/DescriptionComponent";
   ```

3. Use the `DescriptionComponent` in your JSX with the desired text content:

   ```javascript
   <DescriptionComponent text="Your text content goes here." />
   ```

4. Customize the `maxLines` prop if you want to limit the number of visible lines differently.

5. Feel free to ask questions if you need help!

## License

This project is licensed under the [MIT License](LICENSE).

---
