function getCurrentYear() {
  const currentDate = new Date()
  return currentDate.getFullYear()
}

function getFormattedDate(day, month, year) {
  return dayjs(`${year}-${month}-${day}`)
    .locale('es')
    .format('dddd D [de] MMMM')
}

function parseType(type) {
  const parsedType = type === 'nolaborable' ? 'no laborable' : type
  return parsedType.slice(0, 1).toUpperCase() + parsedType.slice(1)
}
