import {
  BaseComponent
} from "./chunk-UODYQKWI.js";
import {
  BaseStyle
} from "./chunk-OCETKV6Z.js";
import {
  SharedModule
} from "./chunk-QI35FFB2.js";
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
} from "./chunk-4WXSYY4G.js";
import "./chunk-VEIJFJE7.js";
import "./chunk-PU7NJTME.js";
import "./chunk-AHSLHBJ6.js";
import "./chunk-IPZDBIWS.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/@primeuix/styles/dist/floatlabel/index.mjs
var style = "\n    .p-floatlabel {\n        display: block;\n        position: relative;\n    }\n\n    .p-floatlabel label {\n        position: absolute;\n        pointer-events: none;\n        top: 50%;\n        transform: translateY(-50%);\n        transition-property: all;\n        transition-timing-function: ease;\n        line-height: 1;\n        font-weight: dt('floatlabel.font.weight');\n        inset-inline-start: dt('floatlabel.position.x');\n        color: dt('floatlabel.color');\n        transition-duration: dt('floatlabel.transition.duration');\n    }\n\n    .p-floatlabel:has(.p-textarea) label {\n        top: dt('floatlabel.position.y');\n        transform: translateY(0);\n    }\n\n    .p-floatlabel:has(.p-inputicon:first-child) label {\n        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-floatlabel:has(input:focus) label,\n    .p-floatlabel:has(input.p-filled) label,\n    .p-floatlabel:has(input:-webkit-autofill) label,\n    .p-floatlabel:has(textarea:focus) label,\n    .p-floatlabel:has(textarea.p-filled) label,\n    .p-floatlabel:has(.p-inputwrapper-focus) label,\n    .p-floatlabel:has(.p-inputwrapper-filled) label,\n    .p-floatlabel:has(input[placeholder]) label,\n    .p-floatlabel:has(textarea[placeholder]) label {\n        top: dt('floatlabel.over.active.top');\n        transform: translateY(0);\n        font-size: dt('floatlabel.active.font.size');\n        font-weight: dt('floatlabel.active.font.weight');\n    }\n\n    .p-floatlabel:has(input.p-filled) label,\n    .p-floatlabel:has(textarea.p-filled) label,\n    .p-floatlabel:has(.p-inputwrapper-filled) label {\n        color: dt('floatlabel.active.color');\n    }\n\n    .p-floatlabel:has(input:focus) label,\n    .p-floatlabel:has(input:-webkit-autofill) label,\n    .p-floatlabel:has(textarea:focus) label,\n    .p-floatlabel:has(.p-inputwrapper-focus) label {\n        color: dt('floatlabel.focus.color');\n    }\n\n    .p-floatlabel-in .p-inputtext,\n    .p-floatlabel-in .p-textarea,\n    .p-floatlabel-in .p-select-label,\n    .p-floatlabel-in .p-multiselect-label,\n    .p-floatlabel-in .p-autocomplete-input-multiple,\n    .p-floatlabel-in .p-cascadeselect-label,\n    .p-floatlabel-in .p-treeselect-label {\n        padding-block-start: dt('floatlabel.in.input.padding.top');\n        padding-block-end: dt('floatlabel.in.input.padding.bottom');\n    }\n\n    .p-floatlabel-in:has(input:focus) label,\n    .p-floatlabel-in:has(input.p-filled) label,\n    .p-floatlabel-in:has(input:-webkit-autofill) label,\n    .p-floatlabel-in:has(textarea:focus) label,\n    .p-floatlabel-in:has(textarea.p-filled) label,\n    .p-floatlabel-in:has(.p-inputwrapper-focus) label,\n    .p-floatlabel-in:has(.p-inputwrapper-filled) label,\n    .p-floatlabel-in:has(input[placeholder]) label,\n    .p-floatlabel-in:has(textarea[placeholder]) label {\n        top: dt('floatlabel.in.active.top');\n    }\n\n    .p-floatlabel-on:has(input:focus) label,\n    .p-floatlabel-on:has(input.p-filled) label,\n    .p-floatlabel-on:has(input:-webkit-autofill) label,\n    .p-floatlabel-on:has(textarea:focus) label,\n    .p-floatlabel-on:has(textarea.p-filled) label,\n    .p-floatlabel-on:has(.p-inputwrapper-focus) label,\n    .p-floatlabel-on:has(.p-inputwrapper-filled) label,\n    .p-floatlabel-on:has(input[placeholder]) label,\n    .p-floatlabel-on:has(textarea[placeholder]) label {\n        top: 0;\n        transform: translateY(-50%);\n        border-radius: dt('floatlabel.on.border.radius');\n        background: dt('floatlabel.on.active.background');\n        padding: dt('floatlabel.on.active.padding');\n    }\n\n    .p-floatlabel:has([class^='p-'][class$='-fluid']) {\n        width: 100%;\n    }\n\n    .p-floatlabel:has(.p-invalid) label {\n        color: dt('floatlabel.invalid.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-floatlabel.mjs
var _c0 = ["*"];
var theme = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`
);
var classes = {
  root: /* @__PURE__ */ __name(({
    instance
  }) => ["p-floatlabel", {
    "p-floatlabel-over": instance.variant === "over",
    "p-floatlabel-on": instance.variant === "on",
    "p-floatlabel-in": instance.variant === "in"
  }], "root")
};
var _FloatLabelStyle = class _FloatLabelStyle extends BaseStyle {
  name = "floatlabel";
  theme = theme;
  classes = classes;
};
__name(_FloatLabelStyle, "FloatLabelStyle");
__publicField(_FloatLabelStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵFloatLabelStyle_BaseFactory;
  return /* @__PURE__ */ __name(function FloatLabelStyle_Factory(__ngFactoryType__) {
    return (ɵFloatLabelStyle_BaseFactory || (ɵFloatLabelStyle_BaseFactory = ɵɵgetInheritedFactory(_FloatLabelStyle)))(__ngFactoryType__ || _FloatLabelStyle);
  }, "FloatLabelStyle_Factory");
})());
__publicField(_FloatLabelStyle, "ɵprov", ɵɵdefineInjectable({
  token: _FloatLabelStyle,
  factory: _FloatLabelStyle.ɵfac
}));
var FloatLabelStyle = _FloatLabelStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabelStyle, [{
    type: Injectable
  }], null, null);
})();
var FloatLabelClasses;
(function(FloatLabelClasses2) {
  FloatLabelClasses2["root"] = "p-floatlabel";
})(FloatLabelClasses || (FloatLabelClasses = {}));
var _FloatLabel = class _FloatLabel extends BaseComponent {
  _componentStyle = inject(FloatLabelStyle);
  /**
   * Defines the positioning of the label relative to the input.
   * @group Props
   */
  variant = "over";
};
__name(_FloatLabel, "FloatLabel");
__publicField(_FloatLabel, "ɵfac", /* @__PURE__ */ (() => {
  let ɵFloatLabel_BaseFactory;
  return /* @__PURE__ */ __name(function FloatLabel_Factory(__ngFactoryType__) {
    return (ɵFloatLabel_BaseFactory || (ɵFloatLabel_BaseFactory = ɵɵgetInheritedFactory(_FloatLabel)))(__ngFactoryType__ || _FloatLabel);
  }, "FloatLabel_Factory");
})());
__publicField(_FloatLabel, "ɵcmp", ɵɵdefineComponent({
  type: _FloatLabel,
  selectors: [["p-floatlabel"], ["p-floatLabel"], ["p-float-label"]],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function FloatLabel_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.cx("root"));
    }
  }, "FloatLabel_HostBindings"),
  inputs: {
    variant: "variant"
  },
  features: [ɵɵProvidersFeature([FloatLabelStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function FloatLabel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "FloatLabel_Template"),
  dependencies: [CommonModule, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var FloatLabel = _FloatLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabel, [{
    type: Component,
    args: [{
      selector: "p-floatlabel, p-floatLabel, p-float-label",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FloatLabelStyle],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, {
    variant: [{
      type: Input
    }]
  });
})();
var _FloatLabelModule = class _FloatLabelModule {
};
__name(_FloatLabelModule, "FloatLabelModule");
__publicField(_FloatLabelModule, "ɵfac", /* @__PURE__ */ __name(function FloatLabelModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FloatLabelModule)();
}, "FloatLabelModule_Factory"));
__publicField(_FloatLabelModule, "ɵmod", ɵɵdefineNgModule({
  type: _FloatLabelModule,
  imports: [FloatLabel, SharedModule],
  exports: [FloatLabel, SharedModule]
}));
__publicField(_FloatLabelModule, "ɵinj", ɵɵdefineInjector({
  imports: [FloatLabel, SharedModule, SharedModule]
}));
var FloatLabelModule = _FloatLabelModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabelModule, [{
    type: NgModule,
    args: [{
      imports: [FloatLabel, SharedModule],
      exports: [FloatLabel, SharedModule]
    }]
  }], null, null);
})();
export {
  FloatLabel,
  FloatLabelClasses,
  FloatLabelModule,
  FloatLabelStyle
};
//# sourceMappingURL=primeng_floatlabel.js.map
