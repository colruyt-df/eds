import { createTag } from '../../scripts/utils.js';

export default async function decorate(block) {
  const resp = await fetch('/query-index.json');
  const { data } = await resp.json();

  const currentPath = window.location.pathname;

  // eslint-disable-next-line max-len
  const children = data.filter((page) => page.path.startsWith(currentPath) && page.path !== currentPath);

  const ul = createTag('ul');
  children.forEach((child) => {
    const li = createTag('li');
    const a = createTag('a', { href: child.path });
    a.textContent = child.title;
    li.appendChild(a);
    ul.appendChild(li);
  });

  block.appendChild(ul);
}
