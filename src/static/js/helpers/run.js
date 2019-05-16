export default function run(selector, func, args = null) {
  let nodes = document.querySelectorAll(selector);
  if (nodes.length) {
    nodes.forEach(item => {
      func(item, args);
    });
  }
}
