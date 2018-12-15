// 1. Agregamos la función getPostalCode cuando se dispare el click del botón
const mainButton = document.querySelector('.btn-zipcode')
mainButton.addEventListener('click', getPostalCode)

// 2. Definimos una función async que se ejecutará cuando clickeemos en el boton
async function getPostalCode(event) {
  const button = event.target
  button.classList.add('is-loading')

  try {
    const position = await getPosition()
    const postalCode = await fetchPostalCode(position)

    notifySuccess(`Tu código postal es ${postalCode}`)
  } catch (error) {
    notifyWarning(error.message)
  } finally {
    button.classList.remove('is-loading')
  }
}

// 3. Definimos una función async que obtendra el código postal de la API en base a la latitud y longitud
async function fetchPostalCode(position) {
  const { latitude, longitude } = position.coords
  const apiEndpoint = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

  const response = await fetch(apiEndpoint)
  const data = await response.json()

  return data.address.postcode
}
