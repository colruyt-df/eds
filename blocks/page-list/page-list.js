import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const ul = document.createElement('ul');

  const resp = await fetch('/query-index.json');
  const { data } = await resp.json();
  const currentPath = window.location.pathname;

  // eslint-disable-next-line max-len
  const subpages = data.filter((page) => page.path.startsWith(currentPath) && page.path !== currentPath);

  subpages.forEach((page) => {
    const li = document.createElement('li');

    // Image
    const imgDiv = document.createElement('div');
    imgDiv.className = 'cards-card-image';
    if (page.image) {
      const picture = createOptimizedPicture(page.image, page.title, false, [{ width: '750' }]);
      imgDiv.appendChild(picture);
    }

    // Text
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'cards-card-body';

    const title = document.createElement('p');
    title.innerHTML = `<strong>${page.title} title</strong>`;

    const desc = document.createElement('p');
    desc.textContent = page.description || ' desc';

    bodyDiv.append(title, desc);

    // Optional: wrap in <a> to make full card clickable
    const a = document.createElement('a');
    a.href = page.path;
    a.append(imgDiv, bodyDiv);

    li.appendChild(a);
    ul.appendChild(li);
  });

  block.textContent = '';
  block.appendChild(ul);
}
