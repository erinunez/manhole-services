import {
  BaseComponent
} from "./chunk-WZW2RKS3.js";
import {
  BaseStyle
} from "./chunk-S3EDM67F.js";
import {
  SharedModule
} from "./chunk-J76EK3QS.js";
import {
  CommonModule
} from "./chunk-IVBASKYQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-QXMXHQOJ.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/primeng/fesm2022/primeng-inputicon.mjs
var _c0 = ["*"];
var classes = {
  root: "p-inputicon"
};
var _InputIconStyle = class _InputIconStyle extends BaseStyle {
  name = "inputicon";
  classes = classes;
};
__name(_InputIconStyle, "InputIconStyle");
__publicField(_InputIconStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵInputIconStyle_BaseFactory;
  return /* @__PURE__ */ __name(function InputIconStyle_Factory(__ngFactoryType__) {
    return (ɵInputIconStyle_BaseFactory || (ɵInputIconStyle_BaseFactory = ɵɵgetInheritedFactory(_InputIconStyle)))(__ngFactoryType__ || _InputIconStyle);
  }, "InputIconStyle_Factory");
})());
__publicField(_InputIconStyle, "ɵprov", ɵɵdefineInjectable({
  token: _InputIconStyle,
  factory: _InputIconStyle.ɵfac
}));
var InputIconStyle = _InputIconStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconStyle, [{
    type: Injectable
  }], null, null);
})();
var _InputIcon = class _InputIcon extends BaseComponent {
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(InputIconStyle);
};
__name(_InputIcon, "InputIcon");
__publicField(_InputIcon, "ɵfac", /* @__PURE__ */ (() => {
  let ɵInputIcon_BaseFactory;
  return /* @__PURE__ */ __name(function InputIcon_Factory(__ngFactoryType__) {
    return (ɵInputIcon_BaseFactory || (ɵInputIcon_BaseFactory = ɵɵgetInheritedFactory(_InputIcon)))(__ngFactoryType__ || _InputIcon);
  }, "InputIcon_Factory");
})());
__publicField(_InputIcon, "ɵcmp", ɵɵdefineComponent({
  type: _InputIcon,
  selectors: [["p-inputicon"], ["p-inputIcon"]],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function InputIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
    }
  }, "InputIcon_HostBindings"),
  inputs: {
    styleClass: "styleClass"
  },
  features: [ɵɵProvidersFeature([InputIconStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function InputIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "InputIcon_Template"),
  dependencies: [CommonModule, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var InputIcon = _InputIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIcon, [{
    type: Component,
    args: [{
      selector: "p-inputicon, p-inputIcon",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `<ng-content></ng-content>`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [InputIconStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }]
  });
})();
var _InputIconModule = class _InputIconModule {
};
__name(_InputIconModule, "InputIconModule");
__publicField(_InputIconModule, "ɵfac", /* @__PURE__ */ __name(function InputIconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputIconModule)();
}, "InputIconModule_Factory"));
__publicField(_InputIconModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputIconModule,
  imports: [InputIcon, SharedModule],
  exports: [InputIcon, SharedModule]
}));
__publicField(_InputIconModule, "ɵinj", ɵɵdefineInjector({
  imports: [InputIcon, SharedModule, SharedModule]
}));
var InputIconModule = _InputIconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconModule, [{
    type: NgModule,
    args: [{
      imports: [InputIcon, SharedModule],
      exports: [InputIcon, SharedModule]
    }]
  }], null, null);
})();

export {
  InputIconStyle,
  InputIcon,
  InputIconModule
};
//# sourceMappingURL=chunk-MBQUWWPO.js.map
