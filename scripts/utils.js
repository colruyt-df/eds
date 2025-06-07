/**
 * Creates an HTML tag with optional attributes and children.
 * @param {string} tagName
 * @param {Object} [attrs]
 * @param {Array} [children]
 * @returns {HTMLElement}
 */
export function createTag(tagName, attrs = {}, children = []) {
  const el = document.createElement(tagName);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  children.forEach((child) => el.appendChild(child));
  return el;
}

/**
 * Retrieves metadata from <meta> tags in <head>.
 * @param {string} name
 * @returns {string|null}
 */
export function getMetadata(name) {
  const el = document.querySelector(`meta[name="${name}"]`);
  return el?.content || null;
}
