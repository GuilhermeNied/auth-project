function setInLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getInLocalStorage(key: string) {
  const item = localStorage.getItem(key)

  if (item) {
    const parsedItem = JSON.parse(item)
    return parsedItem
  }
}

function removeInLocalStorage(key: string) {
  localStorage.removeItem(key)
}

export { setInLocalStorage, getInLocalStorage, removeInLocalStorage }
