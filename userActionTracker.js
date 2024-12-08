const EventEmitter = require("events");
class userActionTracker extends EventEmitter {
  constructor() {
    super();
    this.actions = [];
  }
  logAction(action) {
    this.emit("actionLogged", action);
    this.actions.push(action);
    if (this.actions.length >= 5) {
      this.emit("maxActions");
    }
  }
  getActionCount() {
    return this.actions.length;
  }
}
const actionTracker = new userActionTracker();
actionTracker.on("actionLogged", (action) => {
  console.log(`Logged ${action}`);
});
actionTracker.on("maxActions", () => {
  console.log("There is already max count of actions");
});
actionTracker.logAction("login");
actionTracker.logAction("viewProfile");
actionTracker.logAction("logout");
actionTracker.logAction("login");
actionTracker.logAction("updateprofile");
actionTracker.logAction("logout");
