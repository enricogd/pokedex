/**
 * -arrayReplace - creates a new array replacing the index item for the payload
 * @param arr array to replace an item from
 * @param index index of the item to replace
 * @param payload value to put in the given index
 */
export function arrayReplace<T>(
    arr: Array<T>,
    index: number,
    payload: T
): Array<T> {
    const created: Array<T> = []
    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (i !== index) {
            created.push(arr[i])
        } else {
            created.push(payload)
        }
    }
    return created
}