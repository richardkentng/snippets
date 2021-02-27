function removeExtraSpaces(str) {
    //if string has 2 spaces, replace them with one space, until no more 2 spaces are found
    let i = 0;
    while (str.indexOf('  ') !== -1) {
        str = str.replace('  ',' ')
        i++
    }
    //if first character of string is a space, remove it
    if (str[0] === ' ') {
        const strChars = str.split('')
        strChars.shift()
        str = strChars.join('')
    }
    //if last character of string is a space, remove it    
    if (str[str.length - 1] === ' ') {
        const strChars2 = str.split('')
        strChars2.pop()
        str = strChars2.join('')
    }
    return str
}