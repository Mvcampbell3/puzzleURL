const getLocalStorage = () => {
  const stor = localStorage.getItem('puzzleURL');
  if (stor) {
    return JSON.parse(stor);
  }
  return null;
}

const setLocalStorage = (newStep) => {
  const prevValue = getLocalStorage();
  console.log(prevValue)
  let saveObj = {};
  saveObj[newStep.route] = newStep.place;
  for (let key in prevValue) {
    saveObj[key] = prevValue[key];
  }
  localStorage.setItem('puzzleURL', JSON.stringify(saveObj))
}

const clearLocalStorage = () => {
  localStorage.removeItem('puzzleURL')
}

const storage = {
  getLocalStorage,
  setLocalStorage,
  clearLocalStorage
}

export default storage;