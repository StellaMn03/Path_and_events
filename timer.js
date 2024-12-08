const EventEmitter = require("events");
class Timer extends EventEmitter {
  constructor(sec) {
    super();
    this.timer = sec;
  }
  startTimer() {
    this.emit("start");
    while (this.timer >= 0) {
      this.emit("tick", this.timer);
      this.timer--;
    }
    if (this.timer < 0) {
      this.emit("end");
    }
  }
}

const time = new Timer(8);
time.on("start", () => {
  console.log("the timer start");
});
time.on("tick", (timer) => {
  console.log(`${timer}`);
});
time.on("end", () => {
  console.log("the timer ended");
});
time.startTimer();
