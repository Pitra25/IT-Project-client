export const useGetImages = (key: string): string | undefined => {
    if (!key) console.log(new Error(`Invalid path key: ${ key }`))

    try {
        return new URL(`../contents/Assets/${key}`, import.meta.url).href
    }catch (error) {
        console.error(error)
    }
}