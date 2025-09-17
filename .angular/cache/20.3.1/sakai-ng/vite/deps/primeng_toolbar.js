import {
  BaseComponent
} from "./chunk-WZW2RKS3.js";
import {
  BaseStyle
} from "./chunk-S3EDM67F.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-J76EK3QS.js";
import "./chunk-VVPH32YI.js";
import "./chunk-XU74YL5C.js";
import {
  CommonModule,
  NgIf,
  NgTemplateOutlet
} from "./chunk-IVBASKYQ.js";
import "./chunk-4NQISY7D.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate
} from "./chunk-QXMXHQOJ.js";
import "./chunk-BNBKH67W.js";
import "./chunk-XNHLAERP.js";
import "./chunk-YUJPHRZ6.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/@primeuix/styles/dist/toolbar/index.mjs
var style = "\n    .p-toolbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        padding: dt('toolbar.padding');\n        background: dt('toolbar.background');\n        border: 1px solid dt('toolbar.border.color');\n        color: dt('toolbar.color');\n        border-radius: dt('toolbar.border.radius');\n        gap: dt('toolbar.gap');\n    }\n\n    .p-toolbar-start,\n    .p-toolbar-center,\n    .p-toolbar-end {\n        display: flex;\n        align-items: center;\n    }\n";

// node_modules/primeng/fesm2022/primeng-toolbar.mjs
var _c0 = ["start"];
var _c1 = ["end"];
var _c2 = ["center"];
var _c3 = ["*"];
function Toolbar_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
__name(Toolbar_div_1_ng_container_1_Template, "Toolbar_div_1_ng_container_1_Template");
function Toolbar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, Toolbar_div_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("start"));
    ɵɵattribute("data-pc-section", "start");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate || ctx_r0._startTemplate);
  }
}
__name(Toolbar_div_1_Template, "Toolbar_div_1_Template");
function Toolbar_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
__name(Toolbar_div_2_ng_container_1_Template, "Toolbar_div_2_ng_container_1_Template");
function Toolbar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, Toolbar_div_2_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("center"));
    ɵɵattribute("data-pc-section", "center");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.centerTemplate || ctx_r0._centerTemplate);
  }
}
__name(Toolbar_div_2_Template, "Toolbar_div_2_Template");
function Toolbar_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
__name(Toolbar_div_3_ng_container_1_Template, "Toolbar_div_3_ng_container_1_Template");
function Toolbar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, Toolbar_div_3_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("end"));
    ɵɵattribute("data-pc-section", "end");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.endTemplate || ctx_r0._endTemplate);
  }
}
__name(Toolbar_div_3_Template, "Toolbar_div_3_Template");
var classes = {
  root: /* @__PURE__ */ __name(() => ["p-toolbar p-component"], "root"),
  start: "p-toolbar-start",
  center: "p-toolbar-center",
  end: "p-toolbar-end"
};
var _ToolbarStyle = class _ToolbarStyle extends BaseStyle {
  name = "toolbar";
  theme = style;
  classes = classes;
};
__name(_ToolbarStyle, "ToolbarStyle");
__publicField(_ToolbarStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵToolbarStyle_BaseFactory;
  return /* @__PURE__ */ __name(function ToolbarStyle_Factory(__ngFactoryType__) {
    return (ɵToolbarStyle_BaseFactory || (ɵToolbarStyle_BaseFactory = ɵɵgetInheritedFactory(_ToolbarStyle)))(__ngFactoryType__ || _ToolbarStyle);
  }, "ToolbarStyle_Factory");
})());
__publicField(_ToolbarStyle, "ɵprov", ɵɵdefineInjectable({
  token: _ToolbarStyle,
  factory: _ToolbarStyle.ɵfac
}));
var ToolbarStyle = _ToolbarStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarStyle, [{
    type: Injectable
  }], null, null);
})();
var ToolbarClasses;
(function(ToolbarClasses2) {
  ToolbarClasses2["root"] = "p-toolbar";
  ToolbarClasses2["start"] = "p-toolbar-start";
  ToolbarClasses2["center"] = "p-toolbar-center";
  ToolbarClasses2["end"] = "p-toolbar-end";
})(ToolbarClasses || (ToolbarClasses = {}));
var _Toolbar = class _Toolbar extends BaseComponent {
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabelledBy;
  _componentStyle = inject(ToolbarStyle);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  /**
   * Defines template option for center.
   * @group Templates
   */
  centerTemplate;
  templates;
  _startTemplate;
  _endTemplate;
  _centerTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "start":
        case "left":
          this._startTemplate = item.template;
          break;
        case "end":
        case "right":
          this._endTemplate = item.template;
          break;
        case "center":
          this._centerTemplate = item.template;
          break;
      }
    });
  }
};
__name(_Toolbar, "Toolbar");
__publicField(_Toolbar, "ɵfac", /* @__PURE__ */ (() => {
  let ɵToolbar_BaseFactory;
  return /* @__PURE__ */ __name(function Toolbar_Factory(__ngFactoryType__) {
    return (ɵToolbar_BaseFactory || (ɵToolbar_BaseFactory = ɵɵgetInheritedFactory(_Toolbar)))(__ngFactoryType__ || _Toolbar);
  }, "Toolbar_Factory");
})());
__publicField(_Toolbar, "ɵcmp", ɵɵdefineComponent({
  type: _Toolbar,
  selectors: [["p-toolbar"]],
  contentQueries: /* @__PURE__ */ __name(function Toolbar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 4);
      ɵɵcontentQuery(dirIndex, _c1, 4);
      ɵɵcontentQuery(dirIndex, _c2, 4);
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  }, "Toolbar_ContentQueries"),
  hostAttrs: ["data-pc-section", "root", "data-pc-name", "toolbar", "role", "toolbar"],
  hostVars: 3,
  hostBindings: /* @__PURE__ */ __name(function Toolbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy);
      ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
    }
  }, "Toolbar_HostBindings"),
  inputs: {
    styleClass: "styleClass",
    ariaLabelledBy: "ariaLabelledBy"
  },
  features: [ɵɵProvidersFeature([ToolbarStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 3,
  consts: [[3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"]],
  template: /* @__PURE__ */ __name(function Toolbar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, Toolbar_div_1_Template, 2, 4, "div", 0)(2, Toolbar_div_2_Template, 2, 4, "div", 0)(3, Toolbar_div_3_Template, 2, 4, "div", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.startTemplate || ctx._startTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.centerTemplate || ctx._centerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.endTemplate || ctx._endTemplate);
    }
  }, "Toolbar_Template"),
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var Toolbar = _Toolbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toolbar, [{
    type: Component,
    args: [{
      selector: "p-toolbar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <div [class]="cx('start')" *ngIf="startTemplate || _startTemplate" [attr.data-pc-section]="'start'">
            <ng-container *ngTemplateOutlet="startTemplate || _startTemplate"></ng-container>
        </div>
        <div [class]="cx('center')" *ngIf="centerTemplate || _centerTemplate" [attr.data-pc-section]="'center'">
            <ng-container *ngTemplateOutlet="centerTemplate || _centerTemplate"></ng-container>
        </div>
        <div [class]="cx('end')" *ngIf="endTemplate || _endTemplate" [attr.data-pc-section]="'end'">
            <ng-container *ngTemplateOutlet="endTemplate || _endTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarStyle],
      host: {
        "[class]": 'cn(cx("root"), styleClass)',
        "data-pc-section": "root",
        "data-pc-name": "toolbar",
        role: "toolbar",
        "[attr.aria-labelledby]": "ariaLabelledBy"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    centerTemplate: [{
      type: ContentChild,
      args: ["center", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _ToolbarModule = class _ToolbarModule {
};
__name(_ToolbarModule, "ToolbarModule");
__publicField(_ToolbarModule, "ɵfac", /* @__PURE__ */ __name(function ToolbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToolbarModule)();
}, "ToolbarModule_Factory"));
__publicField(_ToolbarModule, "ɵmod", ɵɵdefineNgModule({
  type: _ToolbarModule,
  imports: [Toolbar, SharedModule],
  exports: [Toolbar, SharedModule]
}));
__publicField(_ToolbarModule, "ɵinj", ɵɵdefineInjector({
  imports: [Toolbar, SharedModule, SharedModule]
}));
var ToolbarModule = _ToolbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [Toolbar, SharedModule],
      exports: [Toolbar, SharedModule]
    }]
  }], null, null);
})();
export {
  Toolbar,
  ToolbarClasses,
  ToolbarModule,
  ToolbarStyle
};
//# sourceMappingURL=primeng_toolbar.js.map
