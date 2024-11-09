const ProjectAnalyzer = require('./src/ProjectAnalyzer.js');

const analyzer = new ProjectAnalyzer('./');
analyzer.excludeGit(true)
  .analyzeProject();