function Stopwatch() {
  // Private lets
  let startAt = 0 // Time of last start / resume. (0 if not running)
  let lapTime = 0 // Time on the clock when last stopped in milliseconds

  let now = () => (new Date()).getTime()

  // Public methods
  // Start or resume
  this.start = () => startAt = startAt
    ? startAt
    : now()

  // Stop or pause
  this.stop = () => {
    // If running, update elapsed time otherwise keep it
    lapTime = startAt
      ? lapTime + now() - startAt
      : lapTime
    startAt = 0 // Paused
  }

  // Reset
  this.reset = () => lapTime = startAt = 0

  // Duration
  this.time = () => formatTime(lapTime + (startAt
    ? now() - startAt
    : 0))
}

function pad(num, size) {
  let s = "0000" + num
  return s.substr(s.length - size)
}

function formatTime(time) {
  let {h, m, s, ms} = 0
  let newTime = ''

  h = Math.floor(time / (60 * 60 * 1000))
  time = time % (60 * 60 * 1000)
  m = Math.floor(time / (60 * 1000))
  time = time % (60 * 1000)
  s = Math.floor(time / 1000)
  ms = time % 1000

  newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3)
  return newTime
}

export default Stopwatch
