/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Editor js iframe plugin
 * Works only with pasted iframe tags and requires no server-side setup.
 *
 * @typedef {object} IframeData
 * @description Tool's input and output data format
 * @property {string} frame — iframe
 * @property {string} alignment - alignment of iframe
 */
class Iframe {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: IframeData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    /**
     * Editor.js API
     */
    this.api = api;
    this.readOnly = readOnly;

    /**
     * When block is only constructing,
     * current block points to previous block.
     * So real block index will be +1 after rendering
     *
     * @todo place it at the `rendered` event hook to get real block index without +1;
     * @type {number}
     */
    this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1;

    /**
     * Styles
     */
    this.CSS = {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,

      /**
       * Tool's classes
       */
      wrapper: 'editorjs-iframe',
      holder: ['editorjs-iframe__frame', 'flex'],
    };

    /**
     * Nodes cache
     */
    this.nodes = {
      wrapper: null,
      holder: null,
      image: null,
      iframe: null,
    };

    /**
     * Tool's initial data
     */
    this.data = {
      frame:  data.frame !== undefined ? data.frame : '',
      alignment: !!data.alignment ? data.alignment : false
    };

    /**
     * Available Image settings
     */
    this.settings = [
      {
        name: 'LeftAligned',
        icon: `<svg  width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M12.83 344h262.34A12.82 12.82 0 0 0 288 331.17v-22.34A12.82 12.82 0 0 0 275.17 296H12.83A12.82 12.82 0 0 0 0 308.83v22.34A12.82 12.82 0 0 0 12.83 344zm0-256h262.34A12.82 12.82 0 0 0 288 75.17V52.83A12.82 12.82 0 0 0 275.17 40H12.83A12.82 12.82 0 0 0 0 52.83v22.34A12.82 12.82 0 0 0 12.83 88zM432 168H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/></svg>`,
      },
      {
        name: 'Centered',
        icon: `<svg  width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M108.1 88h231.81A12.09 12.09 0 0 0 352 75.9V52.09A12.09 12.09 0 0 0 339.91 40H108.1A12.09 12.09 0 0 0 96 52.09V75.9A12.1 12.1 0 0 0 108.1 88zM432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm-92.09 176A12.09 12.09 0 0 0 352 331.9v-23.81A12.09 12.09 0 0 0 339.91 296H108.1A12.09 12.09 0 0 0 96 308.09v23.81a12.1 12.1 0 0 0 12.1 12.1z"/></svg>`,
      },
      {
        name: 'RightAligned',
        icon: `<svg  width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 216h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm416 208H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 52.83v22.34A12.82 12.82 0 0 0 172.83 88h262.34A12.82 12.82 0 0 0 448 75.17V52.83A12.82 12.82 0 0 0 435.17 40zm0 256H172.83A12.82 12.82 0 0 0 160 308.83v22.34A12.82 12.82 0 0 0 172.83 344h262.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296z"/></svg>`,
      },
    ];
  }

   static title   = 'Bold';
  /**
   * Creates a Block:
   *  1) Show preloader
   *  2) Start to load an image
   *  3) After loading, append iframe
   *
   * @public
   */
  render() {
    const wrapper = this._make('div', [this.CSS.baseClass, this.CSS.wrapper]),
        loader = this._make('div', this.CSS.loading),
        holder = this._make('div', this.CSS.holder),
        iframe = this._make('iframe');

    wrapper.appendChild(loader);

    holder.appendChild(iframe);
    wrapper.classList.remove(this.CSS.loading);
    wrapper.appendChild(holder);
    if (this.data.frame) {
      iframe.parentElement.innerHTML = this.data.frame;
    }
      
    loader.remove();

    iframe.onerror = (e) => {
      // @todo use api.Notifies.show() to show error notification
      // console.log('Failed to load iframe', e);
    };

    this.nodes.holder = holder;
    this.nodes.wrapper = wrapper;
    this.nodes.iframe = iframe;
    if(this.data.alignment){
      console.log(this.data.alignment)
      this._acceptTuneView();
    }

    return wrapper;
  }

  /**
   * @public
   * @param {Element} blockContent - Tool's wrapper
   * @returns {IframeData}
   */
  save(blockContent) {
    const iframe = blockContent.querySelector('iframe');
    // console.log('save', iframe)
    if (!iframe) {
      return this.data;
    }

    var newdata = Object.assign(this.data, {
      frame: iframe.parentElement.innerHTML,
    });
    this._data.frame = iframe.parentElement.innerHTML;

    return this._data;
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      frame:true,
      html: {},
    };
  }

  /**
   * Notify core that read-only mode is suppoorted
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted config
   */
  onPaste(event) {
    switch (event.type) {
      case 'tag': {
        const iframe = event.detail.data;
        this.data = {
          frame: iframe,
        };
        break;
      }
      case "pattern": {
        const iframe = event.detail.data;
        this.data = {
          frame: iframe,
        }

        this._data = Object.assign({}, this.data, {frame:iframe});
        break;
      }
    }
  }

  /**
   * Returns image data
   *
   * @returns {IframeData}
   */
  get data() {
    return this._data;
  }

  /**
   * Set image data and update the view
   *
   * @param {IframeData} data
   */
  set data(data) {
    this._data = Object.assign({}, this.data, data);

    if (this.nodes.iframe) {
      this.nodes.iframe.parentElement.innerHTML = this.data.frame
    }
  }

  /**
   * Specify paste substitutes
   *
   * @see {@link ../../../docs/tools.md#paste-handling}
   * @public
   */
  static get pasteConfig() {
    return {
      tags: [ 'iframe' ],
      patterns: {
        iframe: /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/,
      }
    };
  }

  /**
   * Makes buttons with tunes: add background, add border, stretch image
   *
   * @returns {HTMLDivElement}
   */
  renderSettings() {
    const wrapper = document.createElement('div');

    this.settings.forEach(tune => {
      const el = document.createElement('div');
      el.setAttribute('id', tune.name);
      el.classList.add(this.CSS.settingsButton);
      el.innerHTML = tune.icon;

      el.addEventListener('click', () => {
        this._toggleTune(tune.name);
      });
      if(this.data.alignment == tune.name){
        el.classList.add(this.CSS.settingsButtonActive)
      }

      wrapper.appendChild(el);
    });

    return wrapper;
  };

  /**
   * Helper for making Elements with frame
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} frame        - any frame
   * @returns {Element}
   */
  _make(tagName, classNames = null, frame = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in frame) {
      el[attrName] = frame[attrName];
    }

    return el;
  }

  /**
   * Click on the Settings Button
   *
   * @private
   * @param tune
   */
  _toggleTune(tune) {
    this.data[tune] = !this.data[tune];
    this.data['alignment'] = tune;
    this.settings.forEach(tunes => {
      if(tunes.name == tune){
        document.getElementById(tunes.name).classList.add(this.CSS.settingsButtonActive)
      }else{
        document.getElementById(tunes.name).classList.remove(this.CSS.settingsButtonActive)
      }
    })
    this._acceptTuneView();
  }

  /**
   * Add specified class corresponds with activated tunes
   *
   * @private
   */
  _acceptTuneView() {
      if(this.data['alignment'] == 'LeftAligned'){
        this.nodes.holder.classList.add('iframe-justify-start')
      }else{
        this.nodes.holder.classList.remove('iframe-justify-start')
      }

      if(this.data['alignment'] == 'RightAligned'){
        this.nodes.holder.classList.add('iframe-justify-end')
      }else{
        this.nodes.holder.classList.remove('iframe-justify-end')
      }

      if(this.data['alignment'] == 'Centered'){
        this.nodes.holder.classList.add('iframe-justify-center')
      }else{
        this.nodes.holder.classList.remove('iframe-justify-center')
      }
  }
}

module.exports = Iframe;
