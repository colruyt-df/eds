export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`customponent-${cols.length}-cols`);
}
