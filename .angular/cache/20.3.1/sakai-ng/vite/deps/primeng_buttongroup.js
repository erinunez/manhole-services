import {
  BaseComponent
} from "./chunk-UODYQKWI.js";
import {
  BaseStyle
} from "./chunk-OCETKV6Z.js";
import "./chunk-QI35FFB2.js";
import "./chunk-VVPH32YI.js";
import "./chunk-XU74YL5C.js";
import {
  CommonModule
} from "./chunk-4OG6XTFF.js";
import "./chunk-4NQISY7D.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-4WXSYY4G.js";
import "./chunk-VEIJFJE7.js";
import "./chunk-PU7NJTME.js";
import "./chunk-AHSLHBJ6.js";
import "./chunk-IPZDBIWS.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/@primeuix/styles/dist/buttongroup/index.mjs
var style = "\n    .p-buttongroup {\n        display: inline-flex;\n    }\n\n    .p-buttongroup .p-button {\n        margin: 0;\n    }\n\n    .p-buttongroup .p-button:not(:last-child),\n    .p-buttongroup .p-button:not(:last-child):hover {\n        border-inline-end: 0 none;\n    }\n\n    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {\n        border-radius: 0;\n    }\n\n    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {\n        border-start-start-radius: 0;\n        border-end-start-radius: 0;\n    }\n\n    .p-buttongroup .p-button:focus {\n        position: relative;\n        z-index: 1;\n    }\n";

// node_modules/primeng/fesm2022/primeng-buttongroup.mjs
var _c0 = ["*"];
var theme = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-buttongroup p-button:focus .p-button {
        position: relative;
        z-index: 1;
    }

    .p-buttongroup p-button:not(:last-child) .p-button,
    .p-buttongroup p-button:not(:last-child) .p-button:hover {
        border-right: 0 none;
    }

    .p-buttongroup p-button:not(:first-of-type):not(:last-of-type) .p-button {
        border-radius: 0;
    }

    .p-buttongroup p-button:first-of-type:not(:only-of-type) .p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup p-button:last-of-type:not(:only-of-type) .p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }
`
);
var classes = {
  root: "p-buttongroup p-component"
};
var _ButtonGroupStyle = class _ButtonGroupStyle extends BaseStyle {
  name = "buttongroup";
  theme = theme;
  classes = classes;
};
__name(_ButtonGroupStyle, "ButtonGroupStyle");
__publicField(_ButtonGroupStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵButtonGroupStyle_BaseFactory;
  return /* @__PURE__ */ __name(function ButtonGroupStyle_Factory(__ngFactoryType__) {
    return (ɵButtonGroupStyle_BaseFactory || (ɵButtonGroupStyle_BaseFactory = ɵɵgetInheritedFactory(_ButtonGroupStyle)))(__ngFactoryType__ || _ButtonGroupStyle);
  }, "ButtonGroupStyle_Factory");
})());
__publicField(_ButtonGroupStyle, "ɵprov", ɵɵdefineInjectable({
  token: _ButtonGroupStyle,
  factory: _ButtonGroupStyle.ɵfac
}));
var ButtonGroupStyle = _ButtonGroupStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var ButtonGroupClasses;
(function(ButtonGroupClasses2) {
  ButtonGroupClasses2["root"] = "p-buttongroup";
})(ButtonGroupClasses || (ButtonGroupClasses = {}));
var _ButtonGroup = class _ButtonGroup extends BaseComponent {
  _componentStyle = inject(ButtonGroupStyle);
};
__name(_ButtonGroup, "ButtonGroup");
__publicField(_ButtonGroup, "ɵfac", /* @__PURE__ */ (() => {
  let ɵButtonGroup_BaseFactory;
  return /* @__PURE__ */ __name(function ButtonGroup_Factory(__ngFactoryType__) {
    return (ɵButtonGroup_BaseFactory || (ɵButtonGroup_BaseFactory = ɵɵgetInheritedFactory(_ButtonGroup)))(__ngFactoryType__ || _ButtonGroup);
  }, "ButtonGroup_Factory");
})());
__publicField(_ButtonGroup, "ɵcmp", ɵɵdefineComponent({
  type: _ButtonGroup,
  selectors: [["p-buttonGroup"], ["p-buttongroup"], ["p-button-group"]],
  features: [ɵɵProvidersFeature([ButtonGroupStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [["role", "group", 1, "p-buttongroup", "p-component"]],
  template: /* @__PURE__ */ __name(function ButtonGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  }, "ButtonGroup_Template"),
  dependencies: [CommonModule],
  encapsulation: 2,
  changeDetection: 0
}));
var ButtonGroup = _ButtonGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroup, [{
    type: Component,
    args: [{
      selector: "p-buttonGroup, p-buttongroup, p-button-group",
      standalone: true,
      imports: [CommonModule],
      template: `
        <span class="p-buttongroup p-component" role="group">
            <ng-content></ng-content>
        </span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ButtonGroupStyle]
    }]
  }], null, null);
})();
var _ButtonGroupModule = class _ButtonGroupModule {
};
__name(_ButtonGroupModule, "ButtonGroupModule");
__publicField(_ButtonGroupModule, "ɵfac", /* @__PURE__ */ __name(function ButtonGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonGroupModule)();
}, "ButtonGroupModule_Factory"));
__publicField(_ButtonGroupModule, "ɵmod", ɵɵdefineNgModule({
  type: _ButtonGroupModule,
  imports: [ButtonGroup],
  exports: [ButtonGroup]
}));
__publicField(_ButtonGroupModule, "ɵinj", ɵɵdefineInjector({
  imports: [ButtonGroup]
}));
var ButtonGroupModule = _ButtonGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonGroup],
      exports: [ButtonGroup]
    }]
  }], null, null);
})();
export {
  ButtonGroup,
  ButtonGroupClasses,
  ButtonGroupModule,
  ButtonGroupStyle
};
//# sourceMappingURL=primeng_buttongroup.js.map
