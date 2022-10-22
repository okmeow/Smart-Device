const anchors = document.querySelectorAll('a[href="#feedback-form"]');

const addScrollToFeedback = () => {
  for (let anchor of anchors) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();

      const blockId = anchor.getAttribute('href').substr(1);

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };
};

export {addScrollToFeedback};
