# ProjectAnalyzer

## Description

**ProjectAnalyzer** is a Node.js CLI tool designed to analyze a project directory. It counts the total number of files, folders, and lines of code, providing a detailed summary of the project structure. The tool supports excluding the `.git` directory and displays the analysis in a user-friendly format for the CLI output.

## Features

- **File and Folder Count**: Counts the total number of files and folders in the project directory.
- **Lines of Code**: Calculates the total number of lines in all files.
- **Git Directory Exclusion**: Optionally exclude the `.git` directory from the analysis.
- **CLI Output**: Presents the analysis results with an attractive ASCII art design.
- **Customizable**: Easily extendable to include more metrics or modifications.

## Installation

To use **ProjectAnalyzer**, follow these steps:

1. Ensure you have **Node.js** installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
2. Clone or download the project:
   
```bash
git clone git@github.com:DevT045T/ProjectAnalyzer.git
cd ProjectAnalyzer
```

3. Install dependencies via npm:

```bash
npm install
```

## Usage

### Basic Command

To analyze a project, run the following command:

```bash
node main.js
```

This will analyze the specified project directory and print the results to the terminal.

### Example Output

```bash
Project Analysis Complete:
-----------------------------------
Total Files:  132
Total Folders:  12
Total Lines of Code:  3,245
-----------------------------------
```

### Methods

- **`excludeGit(exclude: boolean)`**: Allows you to exclude the `.git` directory from the analysis if `exclude` is set to `true`. Defaults to `false`.

- **`analyzeProject()`**: Initiates the project analysis, traverses through all files and directories, and outputs the analysis summary.

- **`traverseDirectory(currentPath: string)`**: Recursively traverses the project directory to count files and directories.

- **`countLinesInFile(filePath: string)`**: Counts the number of lines in a specific file.

### Example

```js
const ProjectAnalyzer = require('./src/ProjectAnalyzer.js');
const analyzer = new ProjectAnalyzer('/path/to/your/project');

// Exclude the .git directory
analyzer.excludeGit(true);

// Analyze the project
analyzer.analyzeProject();
```

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

### Contributing

Feel free to fork this project, make improvements, and submit pull requests. Contributions are always welcome!

---
