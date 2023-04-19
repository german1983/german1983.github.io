import { i, _ as _decorate, s, e, y, a as e$1 } from './query-assigned-elements-5558b813.js';
import './mwc-textfield-53f914da.js';
import './if-defined-ee12043a.js';
import './directive-2bb7789e.js';
import './directive-helpers-e9e1a73e.js';

const baseStyle = i`
  :host {
    width: 100%;
    display: block;

    --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);
  }

  mwc-textfield {
    width: 100%;
  }
`;
const styles = [baseStyle];

const fire = (element, data) => {
  const args = {
    bubbles: true,
    cancelable: false,
    composed: true,
    ...data
  };
  const event = new CustomEvent('ntx-value-change', args);
  element.dispatchEvent(event);
  return event;
};
let NintexSampleTextfield = _decorate([e$1('netkel-plugin-textfield')], function (_initialize, _LitElement) {
  class NintexSampleTextfield extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: NintexSampleTextfield,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      decorators: [e()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "description",
      value: void 0
    }, {
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "outlined",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "readOnly",
      value() {
        return false;
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return {
          controlName: 'Netkel Material Text field',
          fallbackDisableSubmit: false,
          iconUrl: 'one-line-text',
          version: '1',
          properties: {
            outlined: {
              type: 'boolean',
              title: 'Show Outline'
            },
            value: {
              type: 'string',
              title: 'Value',
              isValueField: true,
              defaultValue: 'This is a text field default value'
            }
          },
          standardProperties: {
            fieldLabel: true,
            description: true,
            defaultValue: true,
            readOnly: true
          }
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y` <mwc-textfield
      id="textfield"
      .label="${this.label}"
      .helper="${this.description}"
      ?outlined="${this.outlined}"
      ?disabled="${this.readOnly}"
      @change="${() => this.onChange()}"
    ></mwc-textfield>`;
      }
    }, {
      kind: "method",
      key: "onChange",
      value: function onChange() {
        const el = this.shadowRoot?.getElementById('textfield');
        if (el) {
          fire(this, {
            detail: el.value
          });
        }
      }
    }]
  };
}, s);

export { NintexSampleTextfield };
