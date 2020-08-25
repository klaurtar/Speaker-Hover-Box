<script type="text/javascript">

const GenieList = [
  {
    name: 'Ben Price',
    imageUrl: 'https://geniecast.com/wp-content/uploads/2017/10/ben-price.jpg',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=3428',
  },
  {
    name: 'Johnny Cupcakes',
    imageUrl:
      'https://geniecast.com/wp-content/uploads/2017/10/johnny-cupcakes-earle-program2_1.jpg',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=2620',
  },
  {
    name: 'Regina Lawless',
    imageUrl:
      'https://geniecast.com/wp-content/uploads/2020/08/76969b314558337669c40e406fdaba8a.jpg',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=6656',
  },
  {
    name: 'Kimberly Lear',
    imageUrl:
      'https://geniecast.com/wp-content/uploads/2017/10/kimberly-lear.jpg',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=3084',
  },
  {
    name: 'Frans Johansson',
    imageUrl:
      'https://geniecast.com/wp-content/uploads/2020/03/c235d80ed8b606d2f3f63daf2094454b.png',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=6193',
  },
  {
    name: 'Marisa Hamamoto',
    imageUrl:
      'https://geniecast.com/wp-content/uploads/2020/06/df95cbee0a646c32da10095bc1e32727.jpeg',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=6595',
  },
  {
    name: 'Neen James',
    imageUrl:
      'https://geniecast.com/wp-content/uploads/2017/10/neen-james-program-4_1.jpg',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=2937',
  },
  {
    name: 'Doug Lipp',
    imageUrl: 'https://geniecast.com/wp-content/uploads/2019/09/DougLipp2.jpg',
    genieInfoUrl: 'https://geniecast.com/genie/?genies=5823',
  },
];


class GenieHoverBox {
  constructor(data) {
    this.data = data;

    this.$genieHoverBox = undefined;
    this.renderHoverBox(this.data.name);

    this.$foreground = undefined;
    this.$background = undefined;
    this.cacheDOMElements();

    this.$background.style.backgroundImage = `url(${this.data.imageUrl})`;

    this.setUpListeners();
  }

  cacheDOMElements() {
    this.$foreground = this.$genieHoverBox.querySelector('.foreground');
    this.$background = this.$genieHoverBox.querySelector('.background');
  }

  getGenieHoverBox() {
    return this.$genieHoverBox;
  }

  renderHoverBox(name) {
    this.$genieHoverBox = document.createElement('div');
    this.$genieHoverBox.className = 'hover-box';

    this.$genieHoverBox.innerHTML = `
        <div class="hover-box">
            <div class="foreground" data-active="false">
            ${name}  
            </div>
            <div class="background" data-active="false"></div>
        </div>`;
  }

  setUpListeners() {
    this.$genieHoverBox.addEventListener('click', () => {
      window.open(this.data.genieInfoUrl);
    });

    this.$genieHoverBox.addEventListener('mouseenter', () => {
      this.$foreground.dataset.active = true;
      this.$background.dataset.active = true;
    });

    this.$genieHoverBox.addEventListener('mouseleave', () => {
      this.$foreground.dataset.active = false;
      this.$background.dataset.active = false;
    });
  }
}


const GenieHoverBoxManager = (function() {
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

(function () {
  function init() {
    GenieList.forEach((genie) => {
      GenieHoverBoxManager.createHoverBox(genie);
    });
  }
  init();
})();
</script>