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
