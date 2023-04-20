export const header = () => {
  const headerElem = document.createElement('header');
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const boxLogo = document.createElement('div');
  const boxContent = document.createElement('div');
  const list = document.createElement('ul');
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');

  const list2 = document.createElement('ul');
  const item21 = document.createElement('li');
  const item22 = document.createElement('li');
  const item23 = document.createElement('li');
  const link21 = document.createElement('a');
  const link22 = document.createElement('a');
  const link23 = document.createElement('a');

  headerElem.classList.add('header');
  container.classList.add('container');
  wrapper.classList.add('header-wrapper');
  boxLogo.classList.add('box_logo');
  boxContent.classList.add('box_content');
  list.classList.add('box_logo__list');
  item1.classList.add('box_logo__item');
  item2.classList.add('box_logo__item');
  item3.classList.add('box_logo__item');

  list2.classList.add('box_logo__list2');
  item21.classList.add('box_logo__item2');
  item22.classList.add('box_logo__item2');
  item23.classList.add('box_logo__item2');
  link21.classList.add('link_a2');
  link22.classList.add('link_a2');
  link23.classList.add('link_a2');

  headerElem.appendChild(container);
  container.appendChild(wrapper);
  wrapper.appendChild(boxLogo);
  wrapper.appendChild(boxContent);
  boxLogo.appendChild(list);
  list.appendChild(item1);
  list.appendChild(item2);
  list.appendChild(item3);

  boxContent.appendChild(list2);
  list2.appendChild(item21);
  list2.appendChild(item22);
  list2.appendChild(item23);

  item21.appendChild(link21);
  item22.appendChild(link22);
  item23.appendChild(link23);

  img1.src = '../images/6ugolnik.png';
  img2.src = '../images/circle.png';
  img3.src = '../images/3ugolnik.png';
  

  link21.textContent = 'Explore';
  link22.textContent = 'Trending🔥';
  link23.textContent = 'FAQ';

  item1.appendChild(img1);
  item2.appendChild(img2);
  item3.appendChild(img3);

  return headerElem;
};
