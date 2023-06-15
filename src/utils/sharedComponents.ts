

export function handleInputChange(context: string) {

    const submitButton = document.getElementById('submitButton')!
    const alertDiv = document.getElementById('alertDiv')!

    submitButton.textContent = context

    if(!alertDiv.classList.contains('hidden')) {
      alertDiv.classList.add('hidden')
    }
  };

  export function hideAlertShowLink(hide: boolean) {
    const alertDiv = document.getElementById('alertDiv')!
    const hiddenDiv = document.getElementById('hiddenDiv')!

    if(!hide && alertDiv.classList.contains('hidden')) {
      alertDiv.classList.remove('hidden')
      hiddenDiv.classList.add('hidden')
    }
    else if(hide && hiddenDiv.classList.contains('hidden')) {
      alertDiv.classList.add('hidden')
      hiddenDiv.classList.remove('hidden')
    }
  }