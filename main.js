const ProjectAnalyzer = require('./src/ProjectAnalyzer.js');
const args = process.argv.slice(2);

let projectPath = "";
let excludeGit = false;

args.forEach((arg, index) => {
  if (arg.includes("--path=")) {
    projectPath = arg.replace("--path=", "");
  } else if (arg === "--exclude-git") {
    excludeGit = true;
  }
})

const analyzer = new ProjectAnalyzer(projectPath);
analyzer.excludeGit(excludeGit)
  .analyzeProject();