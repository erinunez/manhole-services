import {
  BaseComponent
} from "./chunk-UODYQKWI.js";
import {
  BaseStyle
} from "./chunk-OCETKV6Z.js";
import {
  CommonModule
} from "./chunk-4OG6XTFF.js";
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
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/@primeuix/styles/dist/iconfield/index.mjs
var style = "\n    .p-iconfield {\n        position: relative;\n        display: block;\n    }\n\n    .p-inputicon {\n        position: absolute;\n        top: 50%;\n        margin-top: calc(-1 * (dt('icon.size') / 2));\n        color: dt('iconfield.icon.color');\n        line-height: 1;\n        z-index: 1;\n    }\n\n    .p-iconfield .p-inputicon:first-child {\n        inset-inline-start: dt('form.field.padding.x');\n    }\n\n    .p-iconfield .p-inputicon:last-child {\n        inset-inline-end: dt('form.field.padding.x');\n    }\n\n    .p-iconfield .p-inputtext:not(:first-child),\n    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {\n        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-iconfield .p-inputtext:not(:last-child) {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));\n    }\n\n    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));\n    }\n";

// node_modules/primeng/fesm2022/primeng-iconfield.mjs
var _c0 = ["*"];
var classes = {
  root: /* @__PURE__ */ __name(({
    instance
  }) => ["p-iconfield", {
    "p-iconfield-left": instance.iconPosition == "left",
    "p-iconfield-right": instance.iconPosition == "right"
  }], "root")
};
var _IconFieldStyle = class _IconFieldStyle extends BaseStyle {
  name = "iconfield";
  theme = style;
  classes = classes;
};
__name(_IconFieldStyle, "IconFieldStyle");
__publicField(_IconFieldStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵIconFieldStyle_BaseFactory;
  return /* @__PURE__ */ __name(function IconFieldStyle_Factory(__ngFactoryType__) {
    return (ɵIconFieldStyle_BaseFactory || (ɵIconFieldStyle_BaseFactory = ɵɵgetInheritedFactory(_IconFieldStyle)))(__ngFactoryType__ || _IconFieldStyle);
  }, "IconFieldStyle_Factory");
})());
__publicField(_IconFieldStyle, "ɵprov", ɵɵdefineInjectable({
  token: _IconFieldStyle,
  factory: _IconFieldStyle.ɵfac
}));
var IconFieldStyle = _IconFieldStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconFieldStyle, [{
    type: Injectable
  }], null, null);
})();
var IconFieldClasses;
(function(IconFieldClasses2) {
  IconFieldClasses2["root"] = "p-iconfield";
})(IconFieldClasses || (IconFieldClasses = {}));
var _IconField = class _IconField extends BaseComponent {
  /**
   * Position of the icon.
   * @group Props
   */
  iconPosition = "left";
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(IconFieldStyle);
};
__name(_IconField, "IconField");
__publicField(_IconField, "ɵfac", /* @__PURE__ */ (() => {
  let ɵIconField_BaseFactory;
  return /* @__PURE__ */ __name(function IconField_Factory(__ngFactoryType__) {
    return (ɵIconField_BaseFactory || (ɵIconField_BaseFactory = ɵɵgetInheritedFactory(_IconField)))(__ngFactoryType__ || _IconField);
  }, "IconField_Factory");
})());
__publicField(_IconField, "ɵcmp", ɵɵdefineComponent({
  type: _IconField,
  selectors: [["p-iconfield"], ["p-iconField"], ["p-icon-field"]],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function IconField_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
    }
  }, "IconField_HostBindings"),
  inputs: {
    iconPosition: "iconPosition",
    styleClass: "styleClass"
  },
  features: [ɵɵProvidersFeature([IconFieldStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function IconField_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "IconField_Template"),
  dependencies: [CommonModule],
  encapsulation: 2,
  changeDetection: 0
}));
var IconField = _IconField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconField, [{
    type: Component,
    args: [{
      selector: "p-iconfield, p-iconField, p-icon-field",
      standalone: true,
      imports: [CommonModule],
      template: ` <ng-content></ng-content>`,
      providers: [IconFieldStyle],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    iconPosition: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var _IconFieldModule = class _IconFieldModule {
};
__name(_IconFieldModule, "IconFieldModule");
__publicField(_IconFieldModule, "ɵfac", /* @__PURE__ */ __name(function IconFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconFieldModule)();
}, "IconFieldModule_Factory"));
__publicField(_IconFieldModule, "ɵmod", ɵɵdefineNgModule({
  type: _IconFieldModule,
  imports: [IconField],
  exports: [IconField]
}));
__publicField(_IconFieldModule, "ɵinj", ɵɵdefineInjector({
  imports: [IconField]
}));
var IconFieldModule = _IconFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconFieldModule, [{
    type: NgModule,
    args: [{
      imports: [IconField],
      exports: [IconField]
    }]
  }], null, null);
})();

export {
  IconFieldStyle,
  IconFieldClasses,
  IconField,
  IconFieldModule
};
//# sourceMappingURL=chunk-YCMCN3T3.js.map
