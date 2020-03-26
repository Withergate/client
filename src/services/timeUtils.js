export const isToday = (someDate) => {
    const date = new Date(someDate)
    const today = new Date()
    return date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth()
      && date.getFullYear() === today.getFullYear()
}