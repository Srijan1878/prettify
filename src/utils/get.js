const get = (obj, path) => {
    let pathArray = path.split('.')
    let currentProperty = { ...obj }
    for (let i = 0; i < pathArray.length; i++) {
        let currentKey = pathArray[i]
        currentProperty = currentProperty[currentKey]
        if (currentProperty === undefined || currentProperty === null) return undefined
    };
    return currentProperty
}

export default get
