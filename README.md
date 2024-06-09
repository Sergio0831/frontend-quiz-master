# FrontEnd Quiz Master

FrontEnd Quiz Master is a WordPress plugin that allows you to create quizzes with front-end web development questions and answers. This plugin is perfect for testing your knowledge or for educational purposes.

## Features

- Create quizzes with HTML, CSS, and JavaScript questions.
- Easy integration with the WordPress block editor.
- Customizable quiz blocks.
- Interactive and engaging quiz interface.

## Installation

1. Download the plugin zip file from the [releases page](https://github.com/Sergio0831/frontend-quiz-master).
2. In your WordPress admin dashboard, go to `Plugins > Add New`.
3. Click `Upload Plugin` and choose the downloaded zip file.
4. Click `Install Now` and then `Activate`.

## Usage

1. After activation, go to the WordPress block editor.
2. Add a new block and search for "FrontEnd Quiz Master".
3. Add your questions and answers in the block settings.
4. Publish or update your post/page.

## Screenshots

![Quiz Block](screenshots/quiz-block.png)
_Description of the screenshot._

## Development

### Prerequisites

- WordPress 6.5 or higher
- Node.js and npm or yarn (for building the block editor assets)

### Building the Plugin

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/frontend-quiz-master.git
   ```

2. Navigate to the plugin directory:

   ```bash
   cd frontend-quiz-master
   ```

3. Install the dependencies:

   ```bash
   npm install
   yarn install
   ```

4. Build the block editor assets:

   ```bash
   npm run build
   yarn build
   ```
