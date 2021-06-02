'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/

const titleClickHandler = function (event) {
  event.preventDefault();
  console.log('Link was clicked!');
  console.log('event');

  const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS]  add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector:', articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector('articleSelector');
  console.log('targetArticle:', targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
optArticleTagsSelector = '.post-tags .list';

/* Function generateTitleLinks */
function generateTitleLinks(customSelector = '') {
  console.log('function generateTitleLinks ');
  console.log('customSelector:', customSelector);

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('remove content of title list');

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  for (let article of articles) {
    console.log('article');
    console.log('customSelector');

    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log('articleId');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML');

    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
}
console.log('html');

const links = document.querySelectorAll('.titles a');
console.log();

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

generateTitleLinks();


/* Function generateTags */
function generateTags() {
  console.log('generateTags');
  /* find all articles */
  const articles = document.querySelectorAll('.post');

  /* START LOOP: for every article: */
  for (let article of articles) {
    console.log('article');

    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log('find tagsWrapper');

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags:', articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('arSplit tags into array');

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('linkHTML');

      /* add generated code to html variable */
      html += linkHTML + ' ';
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    console.log('insert HTML');
    tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }

  generateTags();

