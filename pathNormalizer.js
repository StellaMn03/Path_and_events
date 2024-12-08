const path = require("path");

class PathNormalizer {
  static normalizePath(filePath) {
    const parts = filePath.split("/");
    const stack = [];
    for (const part of parts) {
      if (part == "..") {
        if (stack.length > 0) {
          stack.pop();
        }
      } else if (part !== "." && part !== "") {
        stack.push(part);
      }
    }

    return stack.join("/");
  }

  static joinPaths(...paths) {
    const stack = [...paths].join("/");
    return stack;
  }
}

const filePath = "./user/../user/documents//file.txt";
console.log(PathNormalizer.normalizePath(filePath));
const partsToJoin = ["/home", "user", "documents", "file.txt"];
console.log(PathNormalizer.joinPaths(...partsToJoin));
