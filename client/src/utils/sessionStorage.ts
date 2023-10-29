function setInSessionStorage(key: string, value: any) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

function removeInSessionStorage(key: string) {
  sessionStorage.removeItem(key)
}

export { setInSessionStorage, removeInSessionStorage }
