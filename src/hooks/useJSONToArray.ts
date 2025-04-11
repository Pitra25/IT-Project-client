export const useJSONToArray = (data: any) => {
    if (data === null) return undefined
    //if (typeof data !== 'JSON') {}
    return JSON.parse(data)
}