const fs = require('fs');
const path = require('path');

/**
 * ProjectAnalyzer class provides functionality to analyze a project directory.
 * It counts the total number of files, lines of code, and folders,
 * while optionally excluding the `.git` directory.
 * 
 * @package ProjectAnalyzer
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
class ProjectAnalyzer {
  /**
   * Creates an instance of the ProjectAnalyzer class.
   * 
   * @param {string} projectPath - The path to the project directory to be analyzed.
   */
  constructor(projectPath) {
    this.projectPath = projectPath;
    this.projectData = {
      totalFiles: 0,
      totalLines: 0,
      totalFolders: 0,
    };
    this.excludeGitFlag = false;
  }

  /**
   * Set whether to exclude the `.git` directory from analysis.
   * 
   * @param {boolean} exclude - A flag to exclude the `.git` directory. If true, the `.git` directory will be ignored.
   * 
   * @returns {ProjectAnalyzer} Returns the current instance of ProjectAnalyzer to allow method chaining.
   */
  excludeGit(exclude) {
    this.excludeGitFlag = exclude;
    return this;
  }

  /**
   * Analyzes the project directory, counting the total number of files, lines of code, and folders.
   * Prints the results to the console in a visually appealing format.
   */
  analyzeProject() {
    this.traverseDirectory(this.projectPath);

    console.log("===============================");
    console.log("Project Analysis Complete:");
    console.log("-------------------------------");
    console.log(`Total Files:           ${this.projectData.totalFiles}`);
    console.log(`Total Folders:         ${this.projectData.totalFolders}`);
    console.log(`Total Lines of Code:   ${this.projectData.totalLines}`);
    console.log("===============================");
  }

  /**
   * Traverses a directory and its subdirectories recursively.
   * For each file, it counts the lines of code and for each directory, it counts the folder.
   * 
   * @param {string} currentPath - The path of the directory currently being traversed.
   */
  traverseDirectory(currentPath) {
    const filesAndDirs = fs.readdirSync(currentPath);

    filesAndDirs.forEach((item) => {
      const fullPath = path.join(currentPath, item);
      const stats = fs.statSync(fullPath);

      if (this.excludeGitFlag && item === '.git') {
        return;
      }

      if (stats.isDirectory()) {
        this.projectData.totalFolders += 1;
        this.traverseDirectory(fullPath);
      } else if (stats.isFile()) {
        this.projectData.totalFiles += 1;
        this.countLinesInFile(fullPath);
      }
    });
  }

  /**
   * Counts the number of lines in a file and adds it to the total line count.
   * 
   * @param {string} filePath - The path to the file whose lines are being counted.
   */
  countLinesInFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lineCount = fileContent.split('\n').length;
    this.projectData.totalLines += lineCount;
  }
}

module.exports = ProjectAnalyzer;
