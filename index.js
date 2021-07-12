let syncCanRun = true
const syncPreventRepeatClick = (fn, delay, ...data) => {
  if (syncCanRun) {
    syncCanRun = false
    fn(data)
    setTimeout(() => {
      syncCanRun = true
    }, delay || 500)
  }
}

let asyncCanRun = true
const asyncPreventRepeatClick = (fn, delay, ...data) => {
  if (asyncCanRun) {
    asyncCanRun = false
    fn(data).then(() => {
      // 宏任务，先执行
      setTimeout(() => {
        asyncCanRun = true
      }, delay || 500)
    })
  }
}

export {
  syncPreventRepeatClick,
  asyncPreventRepeatClick
}
