export default (url) => {
  try {
    return Boolean(new URL(url))
  } catch (e) {
    return false
  }
}
