var entries = [
  {
    title: "article title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat necessitatibus nostrum sapiente quasi voluptate, consequuntur iusto soluta velit nobis rem magnam maiores voluptas facere pariatur omnis iure alias incidunt!",
    date: "2018-07-24",
    img: "http://placekitten.com/100/150"
  },
  {
    title: "article title2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat necessitatibus nostrum sapiente quasi voluptate, consequuntur iusto soluta velit nobis rem magnam maiores voluptas facere pariatur omnis iure alias incidunt!",
    date: "2018-07-24",
    img: "http://placekitten.com/100/100"
  },
  {
    title: "article title3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat necessitatibus nostrum sapiente quasi voluptate, consequuntur iusto soluta velit nobis rem magnam maiores voluptas facere pariatur omnis iure alias incidunt!",
    date: "2018-07-24",
    img: "http://placekitten.com/100/100"
  },
  {
    title: "article title4",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat necessitatibus nostrum sapiente quasi voluptate, consequuntur iusto soluta velit nobis rem magnam maiores voluptas facere pariatur omnis iure alias incidunt!",
    date: "2018-07-24",
    img: "http://placekitten.com/100/100"
  }
];

let art = document.getElementById('main');
for (let i = 0; i < entries.length; i++) {
  let t = document.createElement('article');
  let title = document.createElement('h1');
  title.className = 'entrytitle';
  title.innerHTML = entries[i].title;
  let content = document.createElement('div');
  content.className = 'entrycontent';
  let img = document.createElement('img');
  console.log(img);
  img.setAttribute('src', entries[i].img);
  content.appendChild(img);
  console.log(content);
  content.innerHTML += entries[i].content
  let footer = document.createElement('div');
  footer.className = 'entryfooter';
  footer.innerHTML = `Posted: ${entries[i].date}`
  t.appendChild(title);
  t.appendChild(content);
  t.appendChild(footer);
  art.appendChild(t);
}