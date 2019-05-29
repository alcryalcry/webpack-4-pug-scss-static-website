export default function(selector, name) {
  const elements = document.querySelectorAll(selector)
  elements.forEach((item) => {
    import(`../../../components/${name}.js`).then(({ default: component }) => {
      component(item)
    })
  })
}
