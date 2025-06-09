export default function decorate(block) {
  const images = block.querySelectorAll('picture');

  images.forEach((pic, i) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('animated-hero-image');
    wrapper.style.animationDelay = `${i * 200}ms`;
    pic.parentElement.replaceChild(wrapper, pic);
    wrapper.appendChild(pic);
  });

  block.classList.add('animated-hero');
}
