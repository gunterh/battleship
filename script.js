const renderPage = (page) => {
  const pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    const element = pages[i];
    if (i === page) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
};

renderPage(0);
