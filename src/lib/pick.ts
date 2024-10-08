export default function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
    return keys.reduce(
        (acc, key) => {
            if (obj[key] !== undefined) {
                acc[key] = obj[key]
            }
            return acc
        },
        {} as Pick<T, K>,
    )
}
