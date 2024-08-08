// monday = 0, sunday = 0
function getDayInitMonth(month, year) {
  const date = new Date(year, month, 1)
  let weekday = date.getDay()
  if (weekday === 0) {
    weekday = 6
  } else {
    weekday -= 1
  }
  return weekday
}

function getMonthDays(month, year) {
  const date = new Date(year, month, 1)
  date.setMonth(date.getMonth() + 1)
  date.setDate(0)
  return date.getDate()
}

function getNameMonth(numberMonth) {
  const fecha = new Date(null, numberMonth)
  return fecha.toLocaleString('en-US', { month: 'long' })
}

export const getCalendar = (year) => {
  const calendar = {}
  let nameMonth = ''
  for (let a = 0; a < 12; a++) {
    const days = []
    let day = 1
    nameMonth = getNameMonth(a)
    console.log('month', nameMonth)
    const initDay = getDayInitMonth(a, year)
    console.log('iniDAy', initDay)
    const totalDays = getMonthDays(a, year)
    console.log('total', totalDays)

    for (let d = 0; d < totalDays + initDay; d++) {
      if (d < initDay) {
        days.push('.')
      } else {
        days.push(day++)
      }
    }
    calendar[nameMonth] = days
  }
  return calendar;
}
