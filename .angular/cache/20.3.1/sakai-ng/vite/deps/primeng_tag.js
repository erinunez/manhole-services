import {
  BaseComponent
} from "./chunk-O4GOBNQ4.js";
import {
  BaseStyle
} from "./chunk-RYCQW3VD.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-PGA3B33W.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-4OG6XTFF.js";
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
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
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

// node_modules/@primeuix/styles/dist/tag/index.mjs
var style = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c0 = ["icon"];
var _c1 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("icon"));
    ɵɵproperty("ngClass", ctx_r0.icon);
  }
}
__name(Tag_ng_container_1_span_1_Template, "Tag_ng_container_1_span_1_Template");
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tag_ng_container_1_span_1_Template, 1, 3, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.icon);
  }
}
__name(Tag_ng_container_1_Template, "Tag_ng_container_1_Template");
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
__name(Tag_span_2_1_ng_template_0_Template, "Tag_span_2_1_ng_template_0_Template");
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
__name(Tag_span_2_1_Template, "Tag_span_2_1_Template");
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Tag_span_2_1_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("icon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
__name(Tag_span_2_Template, "Tag_span_2_Template");
var classes = {
  root: /* @__PURE__ */ __name(({
    instance
  }) => ["p-tag p-component", {
    "p-tag-info": instance.severity === "info",
    "p-tag-success": instance.severity === "success",
    "p-tag-warn": instance.severity === "warn",
    "p-tag-danger": instance.severity === "danger",
    "p-tag-secondary": instance.severity === "secondary",
    "p-tag-contrast": instance.severity === "contrast",
    "p-tag-rounded": instance.rounded
  }], "root"),
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var _TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  theme = style;
  classes = classes;
};
__name(_TagStyle, "TagStyle");
__publicField(_TagStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵTagStyle_BaseFactory;
  return /* @__PURE__ */ __name(function TagStyle_Factory(__ngFactoryType__) {
    return (ɵTagStyle_BaseFactory || (ɵTagStyle_BaseFactory = ɵɵgetInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
  }, "TagStyle_Factory");
})());
__publicField(_TagStyle, "ɵprov", ɵɵdefineInjectable({
  token: _TagStyle,
  factory: _TagStyle.ɵfac
}));
var TagStyle = _TagStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var _Tag = class _Tag extends BaseComponent {
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _componentStyle = inject(TagStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
};
__name(_Tag, "Tag");
__publicField(_Tag, "ɵfac", /* @__PURE__ */ (() => {
  let ɵTag_BaseFactory;
  return /* @__PURE__ */ __name(function Tag_Factory(__ngFactoryType__) {
    return (ɵTag_BaseFactory || (ɵTag_BaseFactory = ɵɵgetInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
  }, "Tag_Factory");
})());
__publicField(_Tag, "ɵcmp", ɵɵdefineComponent({
  type: _Tag,
  selectors: [["p-tag"]],
  contentQueries: /* @__PURE__ */ __name(function Tag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 4);
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  }, "Tag_ContentQueries"),
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function Tag_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
    }
  }, "Tag_HostBindings"),
  inputs: {
    styleClass: "styleClass",
    severity: "severity",
    value: "value",
    icon: "icon",
    rounded: [2, "rounded", "rounded", booleanAttribute]
  },
  features: [ɵɵProvidersFeature([TagStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [4, "ngTemplateOutlet"]],
  template: /* @__PURE__ */ __name(function Tag_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 3, "span", 1);
      ɵɵelementStart(3, "span");
      ɵɵtext(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconTemplate || ctx._iconTemplate);
      ɵɵadvance();
      ɵɵclassMap(ctx.cx("label"));
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.value);
    }
  }, "Tag_Template"),
  dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var Tag = _Tag;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span [class]="cx('icon')" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span [class]="cx('icon')" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span [class]="cx('label')">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _TagModule = class _TagModule {
};
__name(_TagModule, "TagModule");
__publicField(_TagModule, "ɵfac", /* @__PURE__ */ __name(function TagModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagModule)();
}, "TagModule_Factory"));
__publicField(_TagModule, "ɵmod", ɵɵdefineNgModule({
  type: _TagModule,
  imports: [Tag, SharedModule],
  exports: [Tag, SharedModule]
}));
__publicField(_TagModule, "ɵinj", ɵɵdefineInjector({
  imports: [Tag, SharedModule, SharedModule]
}));
var TagModule = _TagModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();
export {
  Tag,
  TagClasses,
  TagModule,
  TagStyle
};
//# sourceMappingURL=primeng_tag.js.map
