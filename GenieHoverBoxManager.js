const GenieHoverBoxManager = (function () {
  const $GenieHoverBoxManager = document.createElement('div');
  $GenieHoverBoxManager.className = 'hover-box_container';
  const $firstRow = document.createElement('div');
  $firstRow.className = 'hover-box_row';
  const $secondRow = document.createElement('div');
  $secondRow.className = 'hover-box_row';

  let counter = 0;

  document.body.querySelector('#root').append($GenieHoverBoxManager);
  $GenieHoverBoxManager.append($firstRow);
  $GenieHoverBoxManager.append($secondRow);

  function renderGenies(genie) {
    if (counter < 4) {
      $firstRow.append(genie);
    } else {
      $secondRow.append(genie);
    }
  }

  return {
    createHoverBox: (data) => {
      const genie = new GenieHoverBox(data);
      const $genie = genie.getGenieHoverBox();
      renderGenies($genie);
      counter++;
      return genie;
    },
  };
})();
