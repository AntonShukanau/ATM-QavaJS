export default {
  titleSpaceReplacer: (string: string) => {
    return string.replace(/#(\d)/g, " #$1")
  },
  defaultHeader: () => {
    // @ts-ignore
    return { "Authorization": `Bearer ${process.env.TOKEN}` }
  },
  postHeader: () => {
    // @ts-ignore
    return { "Authorization": `Bearer ${process.env.TOKEN}`, "Content-Type": "application/json" }
  }
}