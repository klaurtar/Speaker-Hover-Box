(function () {
  function init() {
    GenieList.forEach((genie) => {
      GenieHoverBoxManager.createHoverBox(genie);
    });
  }
  init();
})();
