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
  HostBinding,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
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
} from "./chunk-QXMXHQOJ.js";
import "./chunk-BNBKH67W.js";
import "./chunk-XNHLAERP.js";
import "./chunk-YUJPHRZ6.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/primeng/fesm2022/primeng-avatargroup.mjs
var _c0 = ["*"];
var classes = {
  root: "p-avatar-group p-component"
};
var _AvatarGroupStyle = class _AvatarGroupStyle extends BaseStyle {
  name = "avatargroup";
  classes = classes;
};
__name(_AvatarGroupStyle, "AvatarGroupStyle");
__publicField(_AvatarGroupStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAvatarGroupStyle_BaseFactory;
  return /* @__PURE__ */ __name(function AvatarGroupStyle_Factory(__ngFactoryType__) {
    return (ɵAvatarGroupStyle_BaseFactory || (ɵAvatarGroupStyle_BaseFactory = ɵɵgetInheritedFactory(_AvatarGroupStyle)))(__ngFactoryType__ || _AvatarGroupStyle);
  }, "AvatarGroupStyle_Factory");
})());
__publicField(_AvatarGroupStyle, "ɵprov", ɵɵdefineInjectable({
  token: _AvatarGroupStyle,
  factory: _AvatarGroupStyle.ɵfac
}));
var AvatarGroupStyle = _AvatarGroupStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarGroupClasses;
(function(AvatarGroupClasses2) {
  AvatarGroupClasses2["root"] = "p-avatar-group";
})(AvatarGroupClasses || (AvatarGroupClasses = {}));
var _AvatarGroup = class _AvatarGroup extends BaseComponent {
  /**
   * Style class of the component
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  get hostClass() {
    return this.styleClass;
  }
  get hostStyle() {
    return this.style;
  }
  _componentStyle = inject(AvatarGroupStyle);
};
__name(_AvatarGroup, "AvatarGroup");
__publicField(_AvatarGroup, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAvatarGroup_BaseFactory;
  return /* @__PURE__ */ __name(function AvatarGroup_Factory(__ngFactoryType__) {
    return (ɵAvatarGroup_BaseFactory || (ɵAvatarGroup_BaseFactory = ɵɵgetInheritedFactory(_AvatarGroup)))(__ngFactoryType__ || _AvatarGroup);
  }, "AvatarGroup_Factory");
})());
__publicField(_AvatarGroup, "ɵcmp", ɵɵdefineComponent({
  type: _AvatarGroup,
  selectors: [["p-avatarGroup"], ["p-avatar-group"], ["p-avatargroup"]],
  hostVars: 8,
  hostBindings: /* @__PURE__ */ __name(function AvatarGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.hostStyle);
      ɵɵclassMap(ctx.hostClass);
      ɵɵclassProp("p-avatar-group", true)("p-component", true);
    }
  }, "AvatarGroup_HostBindings"),
  inputs: {
    styleClass: "styleClass",
    style: "style"
  },
  features: [ɵɵProvidersFeature([AvatarGroupStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function AvatarGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "AvatarGroup_Template"),
  dependencies: [CommonModule, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var AvatarGroup = _AvatarGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroup, [{
    type: Component,
    args: [{
      selector: "p-avatarGroup, p-avatar-group, p-avatargroup",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [AvatarGroupStyle],
      host: {
        "[class.p-avatar-group]": "true",
        "[class.p-component]": "true"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var _AvatarGroupModule = class _AvatarGroupModule {
};
__name(_AvatarGroupModule, "AvatarGroupModule");
__publicField(_AvatarGroupModule, "ɵfac", /* @__PURE__ */ __name(function AvatarGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvatarGroupModule)();
}, "AvatarGroupModule_Factory"));
__publicField(_AvatarGroupModule, "ɵmod", ɵɵdefineNgModule({
  type: _AvatarGroupModule,
  imports: [AvatarGroup, SharedModule],
  exports: [AvatarGroup, SharedModule]
}));
__publicField(_AvatarGroupModule, "ɵinj", ɵɵdefineInjector({
  imports: [AvatarGroup, SharedModule, SharedModule]
}));
var AvatarGroupModule = _AvatarGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupModule, [{
    type: NgModule,
    args: [{
      imports: [AvatarGroup, SharedModule],
      exports: [AvatarGroup, SharedModule]
    }]
  }], null, null);
})();
export {
  AvatarGroup,
  AvatarGroupClasses,
  AvatarGroupModule,
  AvatarGroupStyle
};
//# sourceMappingURL=primeng_avatargroup.js.map
