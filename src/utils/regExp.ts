export const regExpPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\d\s]).{8,})\S$/
export const regExpString = /^(?![_.])(?!.*[-_.]{2})[a-zA-Z0-9-._]+(?<![-_.])$/
export const regExpEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
export const regExpPhone = /^([+]?)([0-9]{1,3})([0-9]{9,10})$/
