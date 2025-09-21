import {
  Ripple
} from "./chunk-B3RF2MUF.js";
import {
  ChevronDownIcon,
  ChevronUpIcon
} from "./chunk-ZYTUYRKH.js";
import "./chunk-4WFIWJES.js";
import {
  transformToBoolean
} from "./chunk-DRXZWCSD.js";
import "./chunk-YYCRJJU3.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-DTQ6XLI7.js";
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
import {
  Q2 as Q,
  bt,
  s3 as s,
  z2 as z
} from "./chunk-XU74YL5C.js";
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
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  computed,
  forwardRef,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-4WXSYY4G.js";
import "./chunk-VEIJFJE7.js";
import "./chunk-PU7NJTME.js";
import "./chunk-AHSLHBJ6.js";
import "./chunk-IPZDBIWS.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/@primeuix/styles/dist/accordion/index.mjs
var style2 = "\n    .p-accordionpanel {\n        display: flex;\n        flex-direction: column;\n        border-style: solid;\n        border-width: dt('accordion.panel.border.width');\n        border-color: dt('accordion.panel.border.color');\n    }\n\n    .p-accordionheader {\n        all: unset;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('accordion.header.padding');\n        color: dt('accordion.header.color');\n        background: dt('accordion.header.background');\n        border-style: solid;\n        border-width: dt('accordion.header.border.width');\n        border-color: dt('accordion.header.border.color');\n        font-weight: dt('accordion.header.font.weight');\n        border-radius: dt('accordion.header.border.radius');\n        transition:\n            background dt('accordion.transition.duration'),\n            color dt('accordion.transition.duration'),\n            outline-color dt('accordion.transition.duration'),\n            box-shadow dt('accordion.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-accordionpanel:first-child > .p-accordionheader {\n        border-width: dt('accordion.header.first.border.width');\n        border-start-start-radius: dt('accordion.header.first.top.border.radius');\n        border-start-end-radius: dt('accordion.header.first.top.border.radius');\n    }\n\n    .p-accordionpanel:last-child > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');\n    }\n\n    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');\n    }\n\n    .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n        box-shadow: dt('accordion.header.focus.ring.shadow');\n        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');\n        outline-offset: dt('accordion.header.focus.ring.offset');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {\n        background: dt('accordion.header.hover.background');\n        color: dt('accordion.header.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {\n        background: dt('accordion.header.active.background');\n        color: dt('accordion.header.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {\n        background: dt('accordion.header.active.hover.background');\n        color: dt('accordion.header.active.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.hover.color');\n    }\n\n    .p-accordioncontent-content {\n        border-style: solid;\n        border-width: dt('accordion.content.border.width');\n        border-color: dt('accordion.content.border.color');\n        background-color: dt('accordion.content.background');\n        color: dt('accordion.content.color');\n        padding: dt('accordion.content.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-accordion.mjs
var _c0 = ["*"];
var _c1 = ["toggleicon"];
var _c2 = /* @__PURE__ */ __name((a0) => ({
  active: a0
}), "_c2");
function AccordionHeader_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
__name(AccordionHeader_Conditional_1_0_ng_template_0_Template, "AccordionHeader_Conditional_1_0_ng_template_0_Template");
function AccordionHeader_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionHeader_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
__name(AccordionHeader_Conditional_1_0_Template, "AccordionHeader_Conditional_1_0_Template");
function AccordionHeader_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionHeader_Conditional_1_0_Template, 1, 0, null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.toggleicon)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.active()));
  }
}
__name(AccordionHeader_Conditional_1_Template, "AccordionHeader_Conditional_1_Template");
function AccordionHeader_Conditional_2_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.pcAccordion.collapseIcon);
    ɵɵproperty("ngClass", ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
__name(AccordionHeader_Conditional_2_ng_container_0_span_1_Template, "AccordionHeader_Conditional_2_ng_container_0_span_1_Template");
function AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
__name(AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template, "AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template");
function AccordionHeader_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionHeader_Conditional_2_ng_container_0_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template, 1, 3, "svg", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.pcAccordion.collapseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.pcAccordion.collapseIcon);
  }
}
__name(AccordionHeader_Conditional_2_ng_container_0_Template, "AccordionHeader_Conditional_2_ng_container_0_Template");
function AccordionHeader_Conditional_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.pcAccordion.expandIcon);
    ɵɵproperty("ngClass", ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
__name(AccordionHeader_Conditional_2_ng_container_1_span_1_Template, "AccordionHeader_Conditional_2_ng_container_1_span_1_Template");
function AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.pcAccordion.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
__name(AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template, "AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template");
function AccordionHeader_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionHeader_Conditional_2_ng_container_1_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.pcAccordion.expandIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.pcAccordion.expandIcon);
  }
}
__name(AccordionHeader_Conditional_2_ng_container_1_Template, "AccordionHeader_Conditional_2_ng_container_1_Template");
function AccordionHeader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionHeader_Conditional_2_ng_container_0_Template, 3, 2, "ng-container", 1)(1, AccordionHeader_Conditional_2_ng_container_1_Template, 3, 2, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.active());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.active());
  }
}
__name(AccordionHeader_Conditional_2_Template, "AccordionHeader_Conditional_2_Template");
var _c3 = /* @__PURE__ */ __name((a0) => ({
  transitionParams: a0
}), "_c3");
var _c4 = /* @__PURE__ */ __name((a0) => ({
  value: "visible",
  params: a0
}), "_c4");
var _c5 = /* @__PURE__ */ __name((a0) => ({
  value: "hidden",
  params: a0
}), "_c5");
var theme = (
  /*css*/
  `
    ${style2}

    /*For PrimeNG*/
    .p-accordionpanel:not(.p-accordionpanel-active) > .p-accordioncontent,
    .p-accordioncontent-content.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader-toggle-icon.icon-start {
        order: -1;
    }

    .p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
        justify-content: flex-start;
        gap: dt('accordion.header.padding');
    }

    .p-accordioncontent.ng-animating {
        overflow: hidden;
    }
`
);
var classes = {
  root: "p-accordion p-component",
  panel: /* @__PURE__ */ __name(({
    instance
  }) => ["p-accordionpanel", {
    "p-accordionpanel-active": instance.active(),
    "p-disabled": instance.disabled()
  }], "panel"),
  header: "p-accordionheader",
  toggleicon: "p-accordionheader-toggle-icon",
  contentContainer: "p-accordioncontent",
  content: "p-accordioncontent-content"
};
var _AccordionStyle = class _AccordionStyle extends BaseStyle {
  name = "accordion";
  theme = theme;
  classes = classes;
};
__name(_AccordionStyle, "AccordionStyle");
__publicField(_AccordionStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAccordionStyle_BaseFactory;
  return /* @__PURE__ */ __name(function AccordionStyle_Factory(__ngFactoryType__) {
    return (ɵAccordionStyle_BaseFactory || (ɵAccordionStyle_BaseFactory = ɵɵgetInheritedFactory(_AccordionStyle)))(__ngFactoryType__ || _AccordionStyle);
  }, "AccordionStyle_Factory");
})());
__publicField(_AccordionStyle, "ɵprov", ɵɵdefineInjectable({
  token: _AccordionStyle,
  factory: _AccordionStyle.ɵfac
}));
var AccordionStyle = _AccordionStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionStyle, [{
    type: Injectable
  }], null, null);
})();
var AccordionClasses;
(function(AccordionClasses2) {
  AccordionClasses2["root"] = "p-accordion";
  AccordionClasses2["contentwrapper"] = "p-accordioncontent";
  AccordionClasses2["content"] = "p-accordioncontent-content";
  AccordionClasses2["header"] = "p-accordionheader";
  AccordionClasses2["toggleicon"] = "p-accordionheader-toggle-icon";
  AccordionClasses2["panel"] = "p-accordionpanel";
})(AccordionClasses || (AccordionClasses = {}));
var _AccordionPanel = class _AccordionPanel extends BaseComponent {
  pcAccordion = inject(forwardRef(() => Accordion));
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * Disables the tab when enabled.
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled",
    transform: /* @__PURE__ */ __name((v) => transformToBoolean(v), "transform")
  }] : [{
    transform: /* @__PURE__ */ __name((v) => transformToBoolean(v), "transform")
  }]);
  active = computed(() => this.pcAccordion.multiple() ? this.valueEquals(this.pcAccordion.value(), this.value()) : this.pcAccordion.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  valueEquals(currentValue, value) {
    if (Array.isArray(currentValue)) {
      return currentValue.includes(value);
    }
    return currentValue === value;
  }
  _componentStyle = inject(AccordionStyle);
};
__name(_AccordionPanel, "AccordionPanel");
__publicField(_AccordionPanel, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAccordionPanel_BaseFactory;
  return /* @__PURE__ */ __name(function AccordionPanel_Factory(__ngFactoryType__) {
    return (ɵAccordionPanel_BaseFactory || (ɵAccordionPanel_BaseFactory = ɵɵgetInheritedFactory(_AccordionPanel)))(__ngFactoryType__ || _AccordionPanel);
  }, "AccordionPanel_Factory");
})());
__publicField(_AccordionPanel, "ɵcmp", ɵɵdefineComponent({
  type: _AccordionPanel,
  selectors: [["p-accordion-panel"], ["p-accordionpanel"]],
  hostVars: 5,
  hostBindings: /* @__PURE__ */ __name(function AccordionPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-pc-name", "accordionpanel")("data-p-disabled", ctx.disabled())("data-p-active", ctx.active());
      ɵɵclassMap(ctx.cx("panel"));
    }
  }, "AccordionPanel_HostBindings"),
  inputs: {
    value: [1, "value"],
    disabled: [1, "disabled"]
  },
  outputs: {
    value: "valueChange"
  },
  features: [ɵɵProvidersFeature([AccordionStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function AccordionPanel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "AccordionPanel_Template"),
  dependencies: [CommonModule],
  encapsulation: 2,
  changeDetection: 0
}));
var AccordionPanel = _AccordionPanel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionPanel, [{
    type: Component,
    args: [{
      selector: "p-accordion-panel, p-accordionpanel",
      imports: [CommonModule],
      standalone: true,
      template: `<ng-content />`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("panel")',
        "[attr.data-pc-name]": '"accordionpanel"',
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-p-active]": "active()"
      },
      providers: [AccordionStyle]
    }]
  }], null, null);
})();
var _AccordionHeader = class _AccordionHeader extends BaseComponent {
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  id = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  disabled = computed(() => this.pcAccordionPanel.disabled(), ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  ariaControls = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  /**
   * Toggle icon template.
   * @type {TemplateRef<AccordionToggleIconTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #toggleicon let-active="active"> </ng-template>
   * ```
   * @see {@link AccordionToggleIconTemplateContext}
   * @group Templates
   */
  toggleicon;
  onClick(event) {
    const wasActive = this.active();
    this.changeActiveValue();
    const isActive = this.active();
    const index = this.pcAccordionPanel.value();
    if (!wasActive && isActive) {
      this.pcAccordion.onOpen.emit({
        originalEvent: event,
        index
      });
    } else if (wasActive && !isActive) {
      this.pcAccordion.onClose.emit({
        originalEvent: event,
        index
      });
    }
  }
  onFocus() {
    this.pcAccordion.selectOnFocus() && this.changeActiveValue();
  }
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.arrowDownKey(event);
        break;
      case "ArrowUp":
        this.arrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
  }
  _componentStyle = inject(AccordionStyle);
  changeActiveValue() {
    this.pcAccordion.updateValue(this.pcAccordionPanel.value());
  }
  findPanel(headerElement) {
    return headerElement?.closest('[data-pc-name="accordionpanel"]');
  }
  findHeader(panelElement) {
    return z(panelElement, '[data-pc-name="accordionheader"]');
  }
  findNextPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.nextElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findNextPanel(element) : this.findHeader(element) : null;
  }
  findPrevPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.previousElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findPrevPanel(element) : this.findHeader(element) : null;
  }
  findFirstPanel() {
    return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild, true);
  }
  findLastPanel() {
    return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild, true);
  }
  changeFocusedPanel(event, element) {
    bt(element);
  }
  arrowDownKey(event) {
    const nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));
    nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
    event.preventDefault();
  }
  arrowUpKey(event) {
    const prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));
    prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstPanel = this.findFirstPanel();
    this.changeFocusedPanel(event, firstPanel);
    event.preventDefault();
  }
  onEndKey(event) {
    const lastPanel = this.findLastPanel();
    this.changeFocusedPanel(event, lastPanel);
    event.preventDefault();
  }
  onEnterKey(event) {
    this.changeActiveValue();
    event.preventDefault();
  }
};
__name(_AccordionHeader, "AccordionHeader");
__publicField(_AccordionHeader, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAccordionHeader_BaseFactory;
  return /* @__PURE__ */ __name(function AccordionHeader_Factory(__ngFactoryType__) {
    return (ɵAccordionHeader_BaseFactory || (ɵAccordionHeader_BaseFactory = ɵɵgetInheritedFactory(_AccordionHeader)))(__ngFactoryType__ || _AccordionHeader);
  }, "AccordionHeader_Factory");
})());
__publicField(_AccordionHeader, "ɵcmp", ɵɵdefineComponent({
  type: _AccordionHeader,
  selectors: [["p-accordion-header"], ["p-accordionheader"]],
  contentQueries: /* @__PURE__ */ __name(function AccordionHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toggleicon = _t.first);
    }
  }, "AccordionHeader_ContentQueries"),
  hostVars: 13,
  hostBindings: /* @__PURE__ */ __name(function AccordionHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", /* @__PURE__ */ __name(function AccordionHeader_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      }, "AccordionHeader_click_HostBindingHandler"))("focus", /* @__PURE__ */ __name(function AccordionHeader_focus_HostBindingHandler($event) {
        return ctx.onFocus($event);
      }, "AccordionHeader_focus_HostBindingHandler"))("keydown", /* @__PURE__ */ __name(function AccordionHeader_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, "AccordionHeader_keydown_HostBindingHandler"));
    }
    if (rf & 2) {
      ɵɵattribute("id", ctx.id())("aria-expanded", ctx.active())("aria-controls", ctx.ariaControls())("aria-disabled", ctx.disabled())("role", "button")("tabindex", ctx.disabled() ? "-1" : "0")("data-p-active", ctx.active())("data-p-disabled", ctx.disabled())("data-pc-name", "accordionheader");
      ɵɵclassMap(ctx.cx("header"));
      ɵɵstyleProp("user-select", "none");
    }
  }, "AccordionHeader_HostBindings"),
  features: [ɵɵProvidersFeature([AccordionStyle]), ɵɵHostDirectivesFeature([Ripple]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", 4, "ngIf"], [3, "ngClass"], ["data-p-icon", "chevron-up"], ["data-p-icon", "chevron-down", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-down"]],
  template: /* @__PURE__ */ __name(function AccordionHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵconditionalCreate(1, AccordionHeader_Conditional_1_Template, 1, 4)(2, AccordionHeader_Conditional_2_Template, 2, 2);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.toggleicon ? 1 : 2);
    }
  }, "AccordionHeader_Template"),
  dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, ChevronDownIcon, ChevronUpIcon],
  encapsulation: 2,
  changeDetection: 0
}));
var AccordionHeader = _AccordionHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionHeader, [{
    type: Component,
    args: [{
      selector: "p-accordion-header, p-accordionheader",
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon],
      standalone: true,
      template: `
        <ng-content />
        @if (toggleicon) {
            <ng-template *ngTemplateOutlet="toggleicon; context: { active: active() }"></ng-template>
        } @else {
            <ng-container *ngIf="active()">
                <span *ngIf="pcAccordion.collapseIcon" [class]="pcAccordion.collapseIcon" [ngClass]="pcAccordion.iconClass" [attr.aria-hidden]="true"></span>
                <svg data-p-icon="chevron-up" *ngIf="!pcAccordion.collapseIcon" [class]="pcAccordion.iconClass" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-container *ngIf="!active()">
                <span *ngIf="pcAccordion.expandIcon" [class]="pcAccordion.expandIcon" [ngClass]="pcAccordion.iconClass" [attr.aria-hidden]="true"></span>
                <svg data-p-icon="chevron-down" *ngIf="!pcAccordion.expandIcon" [class]="pcAccordion.iconClass" [attr.aria-hidden]="true" />
            </ng-container>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('header')",
        "[attr.id]": "id()",
        "[attr.aria-expanded]": "active()",
        "[attr.aria-controls]": "ariaControls()",
        "[attr.aria-disabled]": "disabled()",
        "[attr.role]": '"button"',
        "[attr.tabindex]": 'disabled()?"-1":"0"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-pc-name]": '"accordionheader"',
        "[style.user-select]": '"none"'
      },
      hostDirectives: [Ripple],
      providers: [AccordionStyle]
    }]
  }], null, {
    toggleicon: [{
      type: ContentChild,
      args: ["toggleicon"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _AccordionContent = class _AccordionContent extends BaseComponent {
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  ariaLabelledby = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaLabelledby"
  }] : []);
  id = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
};
__name(_AccordionContent, "AccordionContent");
__publicField(_AccordionContent, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAccordionContent_BaseFactory;
  return /* @__PURE__ */ __name(function AccordionContent_Factory(__ngFactoryType__) {
    return (ɵAccordionContent_BaseFactory || (ɵAccordionContent_BaseFactory = ɵɵgetInheritedFactory(_AccordionContent)))(__ngFactoryType__ || _AccordionContent);
  }, "AccordionContent_Factory");
})());
__publicField(_AccordionContent, "ɵcmp", ɵɵdefineComponent({
  type: _AccordionContent,
  selectors: [["p-accordion-content"], ["p-accordioncontent"]],
  hostVars: 7,
  hostBindings: /* @__PURE__ */ __name(function AccordionContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id())("role", "region")("data-pc-name", "accordioncontent")("data-p-active", ctx.active())("aria-labelledby", ctx.ariaLabelledby());
      ɵɵclassMap(ctx.cx("contentContainer"));
    }
  }, "AccordionContent_HostBindings"),
  features: [ɵɵProvidersFeature([AccordionStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 11,
  template: /* @__PURE__ */ __name(function AccordionContent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div");
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cx("content"));
      ɵɵproperty("@content", ctx.active() ? ɵɵpureFunction1(5, _c4, ɵɵpureFunction1(3, _c3, ctx.pcAccordion.transitionOptions)) : ɵɵpureFunction1(9, _c5, ɵɵpureFunction1(7, _c3, ctx.pcAccordion.transitionOptions)));
    }
  }, "AccordionContent_Template"),
  dependencies: [CommonModule],
  encapsulation: 2,
  data: {
    animation: [trigger("content", [state("hidden", style({
      height: "0",
      // To prevent memory leak, Angular issue. https://github.com/primefaces/primeng/issues/18546
      paddingBlockStart: "0",
      paddingBlockEnd: "0",
      borderBlockStartWidth: "0",
      borderBlockEndWidth: "0",
      //
      visibility: "hidden"
    })), state("visible", style({
      height: "*"
    })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
  },
  changeDetection: 0
}));
var AccordionContent = _AccordionContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionContent, [{
    type: Component,
    args: [{
      selector: "p-accordion-content, p-accordioncontent",
      imports: [CommonModule],
      standalone: true,
      template: `<div [class]="cx('content')" [@content]="active() ? { value: 'visible', params: { transitionParams: pcAccordion.transitionOptions } } : { value: 'hidden', params: { transitionParams: pcAccordion.transitionOptions } }">
        <ng-content />
    </div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("contentContainer")',
        "[attr.id]": "id()",
        "[attr.role]": '"region"',
        "[attr.data-pc-name]": '"accordioncontent"',
        "[attr.data-p-active]": "active()",
        "[attr.aria-labelledby]": "ariaLabelledby()"
      },
      animations: [trigger("content", [state("hidden", style({
        height: "0",
        // To prevent memory leak, Angular issue. https://github.com/primefaces/primeng/issues/18546
        paddingBlockStart: "0",
        paddingBlockEnd: "0",
        borderBlockStartWidth: "0",
        borderBlockEndWidth: "0",
        //
        visibility: "hidden"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      providers: [AccordionStyle]
    }]
  }], null, null);
})();
var _Accordion = class _Accordion extends BaseComponent {
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * When enabled, multiple tabs can be activated at the same time.
   * @defaultValue false
   * @group Props
   */
  multiple = input(false, ...ngDevMode ? [{
    debugName: "multiple",
    transform: /* @__PURE__ */ __name((v) => transformToBoolean(v), "transform")
  }] : [{
    transform: /* @__PURE__ */ __name((v) => transformToBoolean(v), "transform")
  }]);
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Icon of a collapsed tab.
   * @group Props
   */
  expandIcon;
  /**
   * Icon of an expanded tab.
   * @group Props
   */
  collapseIcon;
  /**
   * When enabled, the focused tab is activated.
   * @defaultValue false
   * @group Props
   */
  selectOnFocus = input(false, ...ngDevMode ? [{
    debugName: "selectOnFocus",
    transform: /* @__PURE__ */ __name((v) => transformToBoolean(v), "transform")
  }] : [{
    transform: /* @__PURE__ */ __name((v) => transformToBoolean(v), "transform")
  }]);
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {AccordionTabCloseEvent} event - Custom tab close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke when a tab gets expanded.
   * @param {AccordionTabOpenEvent} event - Custom tab open event.
   * @group Emits
   */
  onOpen = new EventEmitter();
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onTabArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onTabArrowUpKey(event);
        break;
      case "Home":
        if (!event.shiftKey) {
          this.onTabHomeKey(event);
        }
        break;
      case "End":
        if (!event.shiftKey) {
          this.onTabEndKey(event);
        }
        break;
    }
  }
  onTabArrowDownKey(event) {
    const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
    nextHeaderAction ? this.changeFocusedTab(nextHeaderAction) : this.onTabHomeKey(event);
    event.preventDefault();
  }
  onTabArrowUpKey(event) {
    const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
    prevHeaderAction ? this.changeFocusedTab(prevHeaderAction) : this.onTabEndKey(event);
    event.preventDefault();
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    this.changeFocusedTab(firstHeaderAction);
    event.preventDefault();
  }
  changeFocusedTab(element) {
    if (element) {
      bt(element);
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    const headerElement = z(nextTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findNextHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    const headerElement = z(prevTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findPrevHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.el.nativeElement.firstElementChild;
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const lastEl = this.el.nativeElement.lastElementChild;
    return this.findPrevHeaderAction(lastEl, true);
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    this.changeFocusedTab(lastHeaderAction);
    event.preventDefault();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateValue(value) {
    const currentValue = this.value();
    if (this.multiple()) {
      const newValue = Array.isArray(currentValue) ? [...currentValue] : [];
      const index = newValue.indexOf(value);
      if (index !== -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(value);
      }
      this.value.set(newValue);
    } else {
      if (currentValue === value) {
        this.value.set(void 0);
      } else {
        this.value.set(value);
      }
    }
  }
};
__name(_Accordion, "Accordion");
__publicField(_Accordion, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAccordion_BaseFactory;
  return /* @__PURE__ */ __name(function Accordion_Factory(__ngFactoryType__) {
    return (ɵAccordion_BaseFactory || (ɵAccordion_BaseFactory = ɵɵgetInheritedFactory(_Accordion)))(__ngFactoryType__ || _Accordion);
  }, "Accordion_Factory");
})());
__publicField(_Accordion, "ɵcmp", ɵɵdefineComponent({
  type: _Accordion,
  selectors: [["p-accordion"]],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function Accordion_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", /* @__PURE__ */ __name(function Accordion_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, "Accordion_keydown_HostBindingHandler"));
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
    }
  }, "Accordion_HostBindings"),
  inputs: {
    value: [1, "value"],
    multiple: [1, "multiple"],
    styleClass: "styleClass",
    expandIcon: "expandIcon",
    collapseIcon: "collapseIcon",
    selectOnFocus: [1, "selectOnFocus"],
    transitionOptions: "transitionOptions"
  },
  outputs: {
    value: "valueChange",
    onClose: "onClose",
    onOpen: "onOpen"
  },
  features: [ɵɵProvidersFeature([AccordionStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function Accordion_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "Accordion_Template"),
  dependencies: [CommonModule, SharedModule],
  encapsulation: 2,
  changeDetection: 0
}));
var Accordion = _Accordion;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Accordion, [{
    type: Component,
    args: [{
      selector: "p-accordion",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content /> `,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [AccordionStyle]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    onOpen: [{
      type: Output
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _AccordionModule = class _AccordionModule {
};
__name(_AccordionModule, "AccordionModule");
__publicField(_AccordionModule, "ɵfac", /* @__PURE__ */ __name(function AccordionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccordionModule)();
}, "AccordionModule_Factory"));
__publicField(_AccordionModule, "ɵmod", ɵɵdefineNgModule({
  type: _AccordionModule,
  imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent],
  exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent]
}));
__publicField(_AccordionModule, "ɵinj", ɵɵdefineInjector({
  imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, SharedModule]
}));
var AccordionModule = _AccordionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent],
      exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent]
    }]
  }], null, null);
})();
export {
  Accordion,
  AccordionClasses,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel,
  AccordionStyle
};
//# sourceMappingURL=primeng_accordion.js.map
