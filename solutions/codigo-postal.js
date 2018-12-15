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
