'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titles = document.querySelectorAll('.titles a');
  const articles1 = document.querySelectorAll('article');
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  const titleClickHandler = function(event) {
      const clickedElement = this;
      for(let article of articles1) {
          article.classList.remove('active');
      }
      for(let title of titles) {
          title.classList.remove('active');
      }
      clickedElement.classList.add('active');
      const id = clickedElement.getAttribute('href');
      const activeArticle = document.querySelector(id);
      activeArticle.classList.add('active');  
  }
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
 
  function generateTitleLinks() {
      const titleList = document.querySelector(optTitleListSelector);
      titleList.innerHTML = "";
      const articles = document.querySelectorAll(optArticleSelector);
      let html = '';
      for(let article of articles) {
          const articleId = article.getAttribute('id');
          const articleTitle = article.querySelector(optTitleSelector).innerHTML;
          const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
          titleList.innerHTML = titleList.innerHTML + linkHTML;
      }
      const activeLinks = document.querySelectorAll('.titles a');
      for(let activeLink of activeLinks) {
          activeLink.addEventListener('click', titleClickHandler);
      }    
  }
  const links = document.querySelectorAll('.titles a');
  console.log ('links');
  generateTitleLinks()
  
