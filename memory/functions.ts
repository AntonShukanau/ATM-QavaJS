export default {
  titleSpaceReplacer: (string: string) => {
    return string.replace(/#(\d)/g, " #$1")
  }
}