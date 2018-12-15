// 1. Seteamos el titulo de manera dinámica
function setTitles() {
  const currentYear = getCurrentYear()
  const title = `Feriados ${currentYear}`

  document.title = title
  document.querySelector('h1').textContent = title
}

// 2. Creamos nuestros componentes visuales
function createCardComponent(title, date, type) {
  return `<div class="card">
            <div class="card-header">
              <div class="card-title">${title}</div>
            </div>
            <div class="card-body">
              <div class="card-date"> ${date}</div>
              <div class="card-type">${type}</div>
            </div>
          </div>`
}

// 3. Buscamos los datos a la API de Feriados
async function fetchHolidays() {
  const currentYear = getCurrentYear()
  const apiEndpoint = `https://nolaborables.com.ar/api/v2/feriados/${currentYear}`

  const response = await fetch(apiEndpoint)
  const holidays = await response.json()

  return holidays
}

// 4. Insertamos nuestros datos en el DOM
async function main() {
  setTitles()

  const grid = document.querySelector('.grid')
  const holidays = await fetchHolidays()

  holidays.forEach(function(holiday) {
    const { motivo, tipo, dia, mes } = holiday

    const parsedType = parseType(tipo)
    const currentYear = getCurrentYear()
    const formattedDate = getFormattedDate(dia, mes, currentYear)
    const holidayCard = createCardComponent(motivo, formattedDate, parsedType)

    grid.innerHTML += holidayCard
  })
}

main()

// console.log('dateFormatted: ', dateFormatted)
