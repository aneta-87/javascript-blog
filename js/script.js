'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

const titles = document.querySelectorAll('.titles a');
const articles1 = document.querySelectorAll('article');
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  for (let article of articles1) {
    article.classList.remove('active');
  }
  for (let title of titles) {
    title.classList.remove('active');
  }
  clickedElement.classList.add('active');
  const id = clickedElement.getAttribute('href');
  const activeArticle = document.querySelector(id);
  activeArticle.classList.add('active');
};
/* remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for (let activeLink of activeLinks) {
  activeLink.classList.remove('active');
}

function generateTitleLinks() {
  /* remove title list from left column */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('titleList: remove title list from left column');

  /* for all of articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('optArticleSelector');
  let html = '';
  for (let article of articles) {

    /* find article 'id' and save as 'const' */
    const articleId = article.getAttribute('id');
    console.log('articleId')

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* create HTMl link and save it as const */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML');
    /* insert HTML code to title list at left column*/
    titleList.innerHTML = titleList.innerHTML + linkHTML;
    console.log(titleList);
  }
  const activeLinks = document.querySelectorAll('.titles a');
  console.log('Wyświetlono links: :, links');
  for (let activeLink of activeLinks) {
    activeLink.addEventListener('click', titleClickHandler);
  }
}
const links = document.querySelectorAll('.titles a');
console.log('links');

generateTitleLinks();

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);
}
/* START LOOP: for every article: */
for (let article of articles) {

  /* find tags wrapper */
  const tagsList = article.querySelector(optArticleTagsSelector);
  console.log('tagsList: ', tagsList);

  /* make html variable with empty string */
  let html = '';
  /* get tags from data-tags attribute */
  const articleTags = article.getAttribute('data-tags');
  console.log('articleTags');

  /* split tags into array */
  const articleTagsArray = articleTags.split(' ');
  console.log('articleTagsArray');

  /* START LOOP: for each tag */
  for (let tag of articleTagsArray) {
    console.log('Generate tags:', tag);

    /* generate HTML of the link */
    function generateLinkHTML() {
      const LinkHtml = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>' + '       ';
      console.log('LinkHtml');

      /* const LinkHtml = document.querySelector(optTitleListSelector); */
      titleList.innerHTML = '';
    }
    /* add generated code to html variable */
    html = html + LinkHTML;
    console.log('html');
    /* END LOOP: for each tag */
  }
  /* insert HTML of all the links into the tags wrapper */
  tagsList.insertAdjectHTML('afterBegin', html);
  /* END LOOP: for every article: */
}
generateTags();

