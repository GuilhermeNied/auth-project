function setInSessionStorage(key: string, value: any) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

function getInSessionStorage(key: string) {
  const item = sessionStorage.getItem(key)

  if (item) {
    const parsedItem = JSON.parse(item)
    return parsedItem
  }
}

function removeInSessionStorage(key: string) {
  sessionStorage.removeItem(key)
}

export { setInSessionStorage, getInSessionStorage, removeInSessionStorage }
