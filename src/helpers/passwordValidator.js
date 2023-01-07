export function passwordValidator(password) {
    if (!password) return "Andikamo umubare wibanga"
    if (password.length < 4) return 'umubare wibanga ugomba kuba ugizwe ninyuguti zirenze 4'
    return ''
  }
  