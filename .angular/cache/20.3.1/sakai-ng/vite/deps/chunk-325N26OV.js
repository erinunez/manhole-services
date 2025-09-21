import {
  style
} from "./chunk-6PBBDZZF.js";
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

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var _c0 = ["*"];
var classes = {
  root: "p-fluid"
};
var _FluidStyle = class _FluidStyle extends BaseStyle {
  name = "fluid";
  classes = classes;
  theme = style;
};
__name(_FluidStyle, "FluidStyle");
__publicField(_FluidStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵFluidStyle_BaseFactory;
  return /* @__PURE__ */ __name(function FluidStyle_Factory(__ngFactoryType__) {
    return (ɵFluidStyle_BaseFactory || (ɵFluidStyle_BaseFactory = ɵɵgetInheritedFactory(_FluidStyle)))(__ngFactoryType__ || _FluidStyle);
  }, "FluidStyle_Factory");
})());
__publicField(_FluidStyle, "ɵprov", ɵɵdefineInjectable({
  token: _FluidStyle,
  factory: _FluidStyle.ɵfac
}));
var FluidStyle = _FluidStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{
    type: Injectable
  }], null, null);
})();
var FluidClasses;
(function(FluidClasses2) {
  FluidClasses2["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var _Fluid = class _Fluid extends BaseComponent {
  _componentStyle = inject(FluidStyle);
};
__name(_Fluid, "Fluid");
__publicField(_Fluid, "ɵfac", /* @__PURE__ */ (() => {
  let ɵFluid_BaseFactory;
  return /* @__PURE__ */ __name(function Fluid_Factory(__ngFactoryType__) {
    return (ɵFluid_BaseFactory || (ɵFluid_BaseFactory = ɵɵgetInheritedFactory(_Fluid)))(__ngFactoryType__ || _Fluid);
  }, "Fluid_Factory");
})());
__publicField(_Fluid, "ɵcmp", ɵɵdefineComponent({
  type: _Fluid,
  selectors: [["p-fluid"]],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function Fluid_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.cx("root"));
    }
  }, "Fluid_HostBindings"),
  features: [ɵɵProvidersFeature([FluidStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function Fluid_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "Fluid_Template"),
  dependencies: [CommonModule],
  encapsulation: 2,
  changeDetection: 0
}));
var Fluid = _Fluid;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
    type: Component,
    args: [{
      selector: "p-fluid",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FluidStyle],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, null);
})();
var _FluidModule = class _FluidModule {
};
__name(_FluidModule, "FluidModule");
__publicField(_FluidModule, "ɵfac", /* @__PURE__ */ __name(function FluidModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FluidModule)();
}, "FluidModule_Factory"));
__publicField(_FluidModule, "ɵmod", ɵɵdefineNgModule({
  type: _FluidModule,
  imports: [Fluid],
  exports: [Fluid]
}));
__publicField(_FluidModule, "ɵinj", ɵɵdefineInjector({
  imports: [Fluid]
}));
var FluidModule = _FluidModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
    type: NgModule,
    args: [{
      imports: [Fluid],
      exports: [Fluid]
    }]
  }], null, null);
})();

export {
  FluidStyle,
  FluidClasses,
  Fluid,
  FluidModule
};
//# sourceMappingURL=chunk-325N26OV.js.map
