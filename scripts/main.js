class ProgressCard {
  constructor(rootElement) {
    this._root = rootElement;
    this._progress = rootElement.querySelector('.card__progress');
    this._value = 0;
    this._animated = false;
    this._hidden = false;
    this._bindControls();
  }

  setValue(val) {
    const clamped = Math.max(0, Math.min(100, Number(val)));
    this._value = clamped;
    this._progress.style.setProperty('--progress', `${clamped * 3.6}deg`);

    const input = this._root.querySelector('#value-input');
    if (input) {
      input.value = clamped;
    }
  }

  setAnimated(bool) {
    this._animated = bool;
    this._progress.classList.toggle('card__progress--animated', this._animated);

    const checkbox = this._root.querySelector('#animate-checkbox');
    if (checkbox) {
      checkbox.checked = bool;
    }
  }

  setHidden(bool) {
    this._hidden = !!bool;
    this._progress.classList.toggle('card__progress--hidden', this._hidden);
    const checkbox = this._root.querySelector('#hide-checkbox');

    if (checkbox) {
      checkbox.checked = this._hidden;
    }
  }

  getState() {
    return {
      value: this._value,
      animated: this._animated,
      hidden: this._hidden,
    };
  }

  _bindControls() {
    this._root.querySelector('#value-input')?.addEventListener('input', (e) => {
      this.setValue(e.target.value);
    });

    this._root.querySelector('#animate-checkbox')?.addEventListener('change', (e) => {
      this.setAnimated(e.target.checked);
    });

    this._root.querySelector('#hide-checkbox')?.addEventListener('change', (e) => {
      this.setHidden(e.target.checked);
    });
  }
}

const card = new ProgressCard(document.querySelector('.card'));
card.setValue(75);
