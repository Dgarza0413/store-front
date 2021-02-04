export const prodAll = () => {
    return `/api/v1/products`
}
export const prodId = (id) => {
    return `/api/v1/products/${id}`
}
export const prodInc = (inc) => {
    return `/api/v1/products/page/${inc}`
}
export const unique = () => {
    return `/api/v1/products/unique/settings`
}
export const prodUnique = (profile) => {
    return `/api/v1/products/unique/settings/${profile}`
}
export const profile = (profile) => {
    return `/api/v1/profile/${profile}`
}
export const profileUnique = (profile) => {
    return `/api/v1/profile/${profile}/unique`
}
export const table = () => {
    return `/api/v1/table`
}
export const tablelength = () => {
    return "/api/v1/table/length"
}
export const tablePage = (value) => {
    return `/api/v1/table/page/${value}`
}