function getPosition(options) {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options))
  } else {
    return new Promise(resolve => resolve({}))
  }
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
