export function addTimeStamps() {
  console.logCopy = console.log.bind(console);

  console.log = function (data) {
    var currentDate = "[" + new Date().toUTCString() + "] ";
    this.logCopy(currentDate, data);
  };
}
