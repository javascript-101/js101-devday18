function getPosition(options) {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options))
  } else {
    return new Promise(resolve => resolve({}))
  }
}

async function fetchPostalCode(position) {
  const { latitude, longitude } = position.coords
  const apiEndpoint = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

  const response = await fetch(apiEndpoint)
  const data = await response.json()

  return data.address.postcode
}

function notifySuccess(message) {
  bulmaToast.toast({
    message,
    type: 'is-info',
    animate: { in: 'fadeIn', out: 'fadeOut' },
  })
}

function notifyWarning(message) {
  bulmaToast.toast({
    message,
    type: 'is-warning',
    animate: { in: 'fadeIn', out: 'fadeOut' },
  })
}
