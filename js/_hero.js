export const hero = () => {
  const sectionHero = document.createElement('section');
  const container = document.createElement('div');
  const content = document.createElement('div');
  const h1 = document.createElement('h1');
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  
  h1.textContent = "Welcome to my website!";
  
  input.setAttribute('type', 'email');
  input.setAttribute('placeholder', 'Enter your email');
  label.innerHTML = '<i class="bi bi-search"></i>';
  
  sectionHero.classList.add('hero');
  container.classList.add('container');
  content.classList.add('hero__content'); 
  
  sectionHero.appendChild(container);
  container.appendChild(content);
  content.appendChild(h1);
  content.appendChild(form);
  form.appendChild(label);
  form.appendChild(input); 
  
  return sectionHero;
}
