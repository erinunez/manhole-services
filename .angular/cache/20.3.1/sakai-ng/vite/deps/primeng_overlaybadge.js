import {
  Badge,
  BadgeModule
} from "./chunk-GH23JGRP.js";
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
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵstyleMap
} from "./chunk-QXMXHQOJ.js";
import "./chunk-BNBKH67W.js";
import "./chunk-XNHLAERP.js";
import "./chunk-YUJPHRZ6.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/primeng/fesm2022/primeng-overlaybadge.mjs
var _c0 = ["*"];
var theme = (
  /*css*/
  `
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: dt('overlaybadge.outline.width');
    outline-style: solid;
    outline-color: dt('overlaybadge.outline.color');
}
`
);
var classes = {
  root: "p-overlaybadge"
};
var _OverlayBadgeStyle = class _OverlayBadgeStyle extends BaseStyle {
  name = "overlaybadge";
  theme = theme;
  classes = classes;
};
__name(_OverlayBadgeStyle, "OverlayBadgeStyle");
__publicField(_OverlayBadgeStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵOverlayBadgeStyle_BaseFactory;
  return /* @__PURE__ */ __name(function OverlayBadgeStyle_Factory(__ngFactoryType__) {
    return (ɵOverlayBadgeStyle_BaseFactory || (ɵOverlayBadgeStyle_BaseFactory = ɵɵgetInheritedFactory(_OverlayBadgeStyle)))(__ngFactoryType__ || _OverlayBadgeStyle);
  }, "OverlayBadgeStyle_Factory");
})());
__publicField(_OverlayBadgeStyle, "ɵprov", ɵɵdefineInjectable({
  token: _OverlayBadgeStyle,
  factory: _OverlayBadgeStyle.ɵfac
}));
var OverlayBadgeStyle = _OverlayBadgeStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayBadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var _OverlayBadge = class _OverlayBadge extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = false;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    !this.badgeSize && this.size && console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  _componentStyle = inject(OverlayBadgeStyle);
  constructor() {
    super();
  }
};
__name(_OverlayBadge, "OverlayBadge");
__publicField(_OverlayBadge, "ɵfac", /* @__PURE__ */ __name(function OverlayBadge_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OverlayBadge)();
}, "OverlayBadge_Factory"));
__publicField(_OverlayBadge, "ɵcmp", ɵɵdefineComponent({
  type: _OverlayBadge,
  selectors: [["p-overlayBadge"], ["p-overlay-badge"], ["p-overlaybadge"]],
  inputs: {
    styleClass: "styleClass",
    style: "style",
    badgeSize: "badgeSize",
    severity: "severity",
    value: "value",
    badgeDisabled: [2, "badgeDisabled", "badgeDisabled", booleanAttribute],
    size: "size"
  },
  features: [ɵɵProvidersFeature([OverlayBadgeStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 7,
  consts: [[1, "p-overlaybadge"], [3, "styleClass", "badgeSize", "severity", "value", "badgeDisabled"]],
  template: /* @__PURE__ */ __name(function OverlayBadge_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelement(2, "p-badge", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵstyleMap(ctx.style);
      ɵɵproperty("styleClass", ctx.styleClass)("badgeSize", ctx.badgeSize)("severity", ctx.severity)("value", ctx.value)("badgeDisabled", ctx.badgeDisabled);
    }
  }, "OverlayBadge_Template"),
  dependencies: [CommonModule, BadgeModule, Badge, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var OverlayBadge = _OverlayBadge;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayBadge, [{
    type: Component,
    args: [{
      selector: "p-overlayBadge, p-overlay-badge, p-overlaybadge",
      standalone: true,
      imports: [CommonModule, BadgeModule, SharedModule],
      template: `
        <div class="p-overlaybadge">
            <ng-content></ng-content>
            <p-badge [styleClass]="styleClass" [style]="style" [badgeSize]="badgeSize" [severity]="severity" [value]="value" [badgeDisabled]="badgeDisabled" />
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [OverlayBadgeStyle]
    }]
  }], () => [], {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    badgeSize: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }]
  });
})();
var _OverlayBadgeModule = class _OverlayBadgeModule {
};
__name(_OverlayBadgeModule, "OverlayBadgeModule");
__publicField(_OverlayBadgeModule, "ɵfac", /* @__PURE__ */ __name(function OverlayBadgeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OverlayBadgeModule)();
}, "OverlayBadgeModule_Factory"));
__publicField(_OverlayBadgeModule, "ɵmod", ɵɵdefineNgModule({
  type: _OverlayBadgeModule,
  imports: [OverlayBadge, SharedModule],
  exports: [OverlayBadge, SharedModule]
}));
__publicField(_OverlayBadgeModule, "ɵinj", ɵɵdefineInjector({
  imports: [OverlayBadge, SharedModule, SharedModule]
}));
var OverlayBadgeModule = _OverlayBadgeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayBadgeModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayBadge, SharedModule],
      exports: [OverlayBadge, SharedModule]
    }]
  }], null, null);
})();
export {
  OverlayBadge,
  OverlayBadgeModule,
  OverlayBadgeStyle
};
//# sourceMappingURL=primeng_overlaybadge.js.map
