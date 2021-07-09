let canRun = true
const preventRepeatClick = (fn, delay, ...data) => {
  if (canRun) {
    fn(data)
  }
  canRun = false
  setTimeout(() => {
    canRun = true
  }, delay || 500)
}

export default preventRepeatClick
