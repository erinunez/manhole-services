import {
  BaseComponent
} from "./chunk-WZW2RKS3.js";
import {
  BaseStyle
} from "./chunk-S3EDM67F.js";
import {
  SharedModule
} from "./chunk-J76EK3QS.js";
import "./chunk-VVPH32YI.js";
import "./chunk-XU74YL5C.js";
import {
  CommonModule
} from "./chunk-IVBASKYQ.js";
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
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleMap
} from "./chunk-QXMXHQOJ.js";
import "./chunk-BNBKH67W.js";
import "./chunk-XNHLAERP.js";
import "./chunk-YUJPHRZ6.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/@primeuix/styles/dist/divider/index.mjs
var style = "\n    .p-divider-horizontal {\n        display: flex;\n        width: 100%;\n        position: relative;\n        align-items: center;\n        margin: dt('divider.horizontal.margin');\n        padding: dt('divider.horizontal.padding');\n    }\n\n    .p-divider-horizontal:before {\n        position: absolute;\n        display: block;\n        inset-block-start: 50%;\n        inset-inline-start: 0;\n        width: 100%;\n        content: '';\n        border-block-start: 1px solid dt('divider.border.color');\n    }\n\n    .p-divider-horizontal .p-divider-content {\n        padding: dt('divider.horizontal.content.padding');\n    }\n\n    .p-divider-vertical {\n        min-height: 100%;\n        display: flex;\n        position: relative;\n        justify-content: center;\n        margin: dt('divider.vertical.margin');\n        padding: dt('divider.vertical.padding');\n    }\n\n    .p-divider-vertical:before {\n        position: absolute;\n        display: block;\n        inset-block-start: 0;\n        inset-inline-start: 50%;\n        height: 100%;\n        content: '';\n        border-inline-start: 1px solid dt('divider.border.color');\n    }\n\n    .p-divider.p-divider-vertical .p-divider-content {\n        padding: dt('divider.vertical.content.padding');\n    }\n\n    .p-divider-content {\n        z-index: 1;\n        background: dt('divider.content.background');\n        color: dt('divider.content.color');\n    }\n\n    .p-divider-solid.p-divider-horizontal:before {\n        border-block-start-style: solid;\n    }\n\n    .p-divider-solid.p-divider-vertical:before {\n        border-inline-start-style: solid;\n    }\n\n    .p-divider-dashed.p-divider-horizontal:before {\n        border-block-start-style: dashed;\n    }\n\n    .p-divider-dashed.p-divider-vertical:before {\n        border-inline-start-style: dashed;\n    }\n\n    .p-divider-dotted.p-divider-horizontal:before {\n        border-block-start-style: dotted;\n    }\n\n    .p-divider-dotted.p-divider-vertical:before {\n        border-inline-start-style: dotted;\n    }\n\n    .p-divider-left:dir(rtl),\n    .p-divider-right:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n";

// node_modules/primeng/fesm2022/primeng-divider.mjs
var _c0 = ["*"];
var inlineStyles = {
  root: /* @__PURE__ */ __name(({
    instance
  }) => ({
    justifyContent: instance.layout === "horizontal" ? instance.align === "center" || instance.align == null ? "center" : instance.align === "left" ? "flex-start" : instance.align === "right" ? "flex-end" : null : null,
    alignItems: instance.layout === "vertical" ? instance.align === "center" || instance.align == null ? "center" : instance.align === "top" ? "flex-start" : instance.align === "bottom" ? "flex-end" : null : null
  }), "root")
};
var classes = {
  root: /* @__PURE__ */ __name(({
    instance
  }) => ["p-divider p-component", "p-divider-" + instance.layout, "p-divider-" + instance.type, {
    "p-divider-left": instance.layout === "horizontal" && (!instance.align || instance.align === "left")
  }, {
    "p-divider-center": instance.layout === "horizontal" && instance.align === "center"
  }, {
    "p-divider-right": instance.layout === "horizontal" && instance.align === "right"
  }, {
    "p-divider-top": instance.layout === "vertical" && instance.align === "top"
  }, {
    "p-divider-center": instance.layout === "vertical" && (!instance.align || instance.align === "center")
  }, {
    "p-divider-bottom": instance.layout === "vertical" && instance.align === "bottom"
  }], "root"),
  content: "p-divider-content"
};
var _DividerStyle = class _DividerStyle extends BaseStyle {
  name = "divider";
  theme = style;
  classes = classes;
  inlineStyles = inlineStyles;
};
__name(_DividerStyle, "DividerStyle");
__publicField(_DividerStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵDividerStyle_BaseFactory;
  return /* @__PURE__ */ __name(function DividerStyle_Factory(__ngFactoryType__) {
    return (ɵDividerStyle_BaseFactory || (ɵDividerStyle_BaseFactory = ɵɵgetInheritedFactory(_DividerStyle)))(__ngFactoryType__ || _DividerStyle);
  }, "DividerStyle_Factory");
})());
__publicField(_DividerStyle, "ɵprov", ɵɵdefineInjectable({
  token: _DividerStyle,
  factory: _DividerStyle.ɵfac
}));
var DividerStyle = _DividerStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerStyle, [{
    type: Injectable
  }], null, null);
})();
var DividerClasses;
(function(DividerClasses2) {
  DividerClasses2["root"] = "p-divider";
  DividerClasses2["content"] = "p-divider-content";
})(DividerClasses || (DividerClasses = {}));
var _Divider = class _Divider extends BaseComponent {
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Specifies the orientation.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Border style type.
   * @group Props
   */
  type = "solid";
  /**
   * Alignment of the content.
   * @group Props
   */
  align;
  _componentStyle = inject(DividerStyle);
};
__name(_Divider, "Divider");
__publicField(_Divider, "ɵfac", /* @__PURE__ */ (() => {
  let ɵDivider_BaseFactory;
  return /* @__PURE__ */ __name(function Divider_Factory(__ngFactoryType__) {
    return (ɵDivider_BaseFactory || (ɵDivider_BaseFactory = ɵɵgetInheritedFactory(_Divider)))(__ngFactoryType__ || _Divider);
  }, "Divider_Factory");
})());
__publicField(_Divider, "ɵcmp", ɵɵdefineComponent({
  type: _Divider,
  selectors: [["p-divider"]],
  hostAttrs: ["data-pc-name", "divider", "role", "separator"],
  hostVars: 5,
  hostBindings: /* @__PURE__ */ __name(function Divider_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-orientation", ctx.layout);
      ɵɵstyleMap(ctx.sx("root"));
      ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
    }
  }, "Divider_HostBindings"),
  inputs: {
    styleClass: "styleClass",
    layout: "layout",
    type: "type",
    align: "align"
  },
  features: [ɵɵProvidersFeature([DividerStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  template: /* @__PURE__ */ __name(function Divider_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div");
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cx("content"));
    }
  }, "Divider_Template"),
  dependencies: [CommonModule, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var Divider = _Divider;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Divider, [{
    type: Component,
    args: [{
      selector: "p-divider",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div [class]="cx('content')">
            <ng-content></ng-content>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.aria-orientation]": "layout",
        "data-pc-name": "divider",
        role: "separator",
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      },
      providers: [DividerStyle]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var _DividerModule = class _DividerModule {
};
__name(_DividerModule, "DividerModule");
__publicField(_DividerModule, "ɵfac", /* @__PURE__ */ __name(function DividerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DividerModule)();
}, "DividerModule_Factory"));
__publicField(_DividerModule, "ɵmod", ɵɵdefineNgModule({
  type: _DividerModule,
  imports: [Divider],
  exports: [Divider]
}));
__publicField(_DividerModule, "ɵinj", ɵɵdefineInjector({
  imports: [Divider]
}));
var DividerModule = _DividerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerModule, [{
    type: NgModule,
    args: [{
      imports: [Divider],
      exports: [Divider]
    }]
  }], null, null);
})();
export {
  Divider,
  DividerClasses,
  DividerModule,
  DividerStyle
};
//# sourceMappingURL=primeng_divider.js.map
