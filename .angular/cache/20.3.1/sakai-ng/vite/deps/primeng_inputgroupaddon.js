import {
  BaseComponent
} from "./chunk-O4GOBNQ4.js";
import {
  BaseStyle
} from "./chunk-RYCQW3VD.js";
import {
  SharedModule
} from "./chunk-PGA3B33W.js";
import {
  CommonModule
} from "./chunk-4OG6XTFF.js";
import "./chunk-4NQISY7D.js";
import {
  Component,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleMap
} from "./chunk-4WXSYY4G.js";
import "./chunk-PU7NJTME.js";
import "./chunk-VEIJFJE7.js";
import "./chunk-AHSLHBJ6.js";
import "./chunk-IPZDBIWS.js";
import "./chunk-VVPH32YI.js";
import "./chunk-XU74YL5C.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c0 = ["*"];
var classes = {
  root: "p-inputgroupaddon"
};
var _InputGroupAddonStyle = class _InputGroupAddonStyle extends BaseStyle {
  name = "inputgroupaddon";
  classes = classes;
};
__name(_InputGroupAddonStyle, "InputGroupAddonStyle");
__publicField(_InputGroupAddonStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵInputGroupAddonStyle_BaseFactory;
  return /* @__PURE__ */ __name(function InputGroupAddonStyle_Factory(__ngFactoryType__) {
    return (ɵInputGroupAddonStyle_BaseFactory || (ɵInputGroupAddonStyle_BaseFactory = ɵɵgetInheritedFactory(_InputGroupAddonStyle)))(__ngFactoryType__ || _InputGroupAddonStyle);
  }, "InputGroupAddonStyle_Factory");
})());
__publicField(_InputGroupAddonStyle, "ɵprov", ɵɵdefineInjectable({
  token: _InputGroupAddonStyle,
  factory: _InputGroupAddonStyle.ɵfac
}));
var InputGroupAddonStyle = _InputGroupAddonStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonStyle, [{
    type: Injectable
  }], null, null);
})();
var _InputGroupAddon = class _InputGroupAddon extends BaseComponent {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(InputGroupAddonStyle);
  get hostStyle() {
    return this.style;
  }
};
__name(_InputGroupAddon, "InputGroupAddon");
__publicField(_InputGroupAddon, "ɵfac", /* @__PURE__ */ (() => {
  let ɵInputGroupAddon_BaseFactory;
  return /* @__PURE__ */ __name(function InputGroupAddon_Factory(__ngFactoryType__) {
    return (ɵInputGroupAddon_BaseFactory || (ɵInputGroupAddon_BaseFactory = ɵɵgetInheritedFactory(_InputGroupAddon)))(__ngFactoryType__ || _InputGroupAddon);
  }, "InputGroupAddon_Factory");
})());
__publicField(_InputGroupAddon, "ɵcmp", ɵɵdefineComponent({
  type: _InputGroupAddon,
  selectors: [["p-inputgroup-addon"], ["p-inputGroupAddon"]],
  hostVars: 7,
  hostBindings: /* @__PURE__ */ __name(function InputGroupAddon_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-pc-name", "inputgroupaddon");
      ɵɵstyleMap(ctx.hostStyle);
      ɵɵclassMap(ctx.styleClass);
      ɵɵclassProp("p-inputgroupaddon", true);
    }
  }, "InputGroupAddon_HostBindings"),
  inputs: {
    style: "style",
    styleClass: "styleClass"
  },
  features: [ɵɵProvidersFeature([InputGroupAddonStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function InputGroupAddon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "InputGroupAddon_Template"),
  dependencies: [CommonModule],
  encapsulation: 2
}));
var InputGroupAddon = _InputGroupAddon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputgroup-addon, p-inputGroupAddon",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      host: {
        "[class]": "styleClass",
        "[class.p-inputgroupaddon]": "true",
        "[attr.data-pc-name]": '"inputgroupaddon"'
      },
      providers: [InputGroupAddonStyle]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var _InputGroupAddonModule = class _InputGroupAddonModule {
};
__name(_InputGroupAddonModule, "InputGroupAddonModule");
__publicField(_InputGroupAddonModule, "ɵfac", /* @__PURE__ */ __name(function InputGroupAddonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroupAddonModule)();
}, "InputGroupAddonModule_Factory"));
__publicField(_InputGroupAddonModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputGroupAddonModule,
  imports: [InputGroupAddon, SharedModule],
  exports: [InputGroupAddon, SharedModule]
}));
__publicField(_InputGroupAddonModule, "ɵinj", ɵɵdefineInjector({
  imports: [InputGroupAddon, SharedModule, SharedModule]
}));
var InputGroupAddonModule = _InputGroupAddonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [InputGroupAddon, SharedModule],
      exports: [InputGroupAddon, SharedModule]
    }]
  }], null, null);
})();
export {
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupAddonStyle
};
//# sourceMappingURL=primeng_inputgroupaddon.js.map
