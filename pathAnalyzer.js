const path = require("path");
class PathAnalyzer {
  static getBaseName(filePath) {
    return path.basename(filePath);
  }
  static getDirName(filePath) {
    return path.dirname(filePath);
  }
  static getExtension(filePath) {
    return path.extname(filePath);
  }
  static isAbsolutePath(filePath) {
    return path.isAbsolute(filePath);
  }
}
const filePath = "/home/user/documents/report.pdf";
console.log(PathAnalyzer.getBaseName(filePath));
console.log(PathAnalyzer.getDirName(filePath));
console.log(PathAnalyzer.getExtension(filePath));
console.log(PathAnalyzer.isAbsolutePath(filePath));
