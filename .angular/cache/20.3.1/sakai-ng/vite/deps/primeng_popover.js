import {
  ConnectedOverlayScrollHandler
} from "./chunk-MNBMOPCT.js";
import {
  zindexutils
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
  OverlayService,
  PrimeTemplate,
  SharedModule
} from "./chunk-QI35FFB2.js";
import {
  rr
} from "./chunk-VVPH32YI.js";
import {
  D,
  K,
  Ut,
  W,
  Yt,
  ut,
  z2 as z
} from "./chunk-XU74YL5C.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-4OG6XTFF.js";
import "./chunk-4NQISY7D.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
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

// node_modules/primeng/fesm2022/primeng-popover.mjs
var _c0 = ["content"];
var _c1 = ["*"];
var _c2 = /* @__PURE__ */ __name((a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
}), "_c2");
var _c3 = /* @__PURE__ */ __name((a0, a1) => ({
  value: a0,
  params: a1
}), "_c3");
var _c4 = /* @__PURE__ */ __name((a0) => ({
  closeCallback: a0
}), "_c4");
function Popover_div_0_3_ng_template_0_Template(rf, ctx) {
}
__name(Popover_div_0_3_ng_template_0_Template, "Popover_div_0_3_ng_template_0_Template");
function Popover_div_0_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Popover_div_0_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
__name(Popover_div_0_3_Template, "Popover_div_0_3_Template");
function Popover_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Popover_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    }, "Popover_div_0_Template_div_click_0_listener"))("@animation.start", /* @__PURE__ */ __name(function Popover_div_0_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    }, "Popover_div_0_Template_div_animation_animation_start_0_listener"))("@animation.done", /* @__PURE__ */ __name(function Popover_div_0_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    }, "Popover_div_0_Template_div_animation_animation_done_0_listener"));
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Popover_div_0_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onContentClick($event));
    }, "Popover_div_0_Template_div_click_1_listener"))("mousedown", /* @__PURE__ */ __name(function Popover_div_0_Template_div_mousedown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onContentClick($event));
    }, "Popover_div_0_Template_div_mousedown_1_listener"));
    ɵɵprojection(2);
    ɵɵtemplate(3, Popover_div_0_3_Template, 1, 0, null, 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    ɵɵproperty("ngStyle", ctx_r1.style)("@animation", ɵɵpureFunction2(14, _c3, ctx_r1.overlayVisible ? "open" : "close", ɵɵpureFunction2(11, _c2, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    ɵɵattribute("aria-modal", ctx_r1.overlayVisible)("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("content"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(17, _c4, ctx_r1.onCloseClick.bind(ctx_r1)));
  }
}
__name(Popover_div_0_Template, "Popover_div_0_Template");
var theme = (
  /*css*/
  `
.p-popover {
    margin-top: dt('popover.gutter');
    background: dt('popover.background');
    color: dt('popover.color');
    border: 1px solid dt('popover.border.color');
    border-radius: dt('popover.border.radius');
    box-shadow: dt('popover.shadow');
    position: absolute
}

.p-popover-content {
    padding: dt('popover.content.padding');
}

.p-popover-flipped {
    margin-top: calc(dt('popover.gutter') * -1);
    margin-bottom: dt('popover.gutter');
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(dt('popover.gutter') - 2px);
    margin-left: calc(-1 * (dt('popover.gutter') - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.background');
}

.p-popover:before {
    border-width: dt('popover.gutter');
    margin-left: calc(-1 * dt('popover.gutter'));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.border.color');
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: dt('popover.background');
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: dt('popover.border.color');
}

`
);
var classes = {
  root: "p-popover p-component",
  content: "p-popover-content"
};
var _PopoverStyle = class _PopoverStyle extends BaseStyle {
  name = "popover";
  theme = theme;
  classes = classes;
};
__name(_PopoverStyle, "PopoverStyle");
__publicField(_PopoverStyle, "ɵfac", /* @__PURE__ */ (() => {
  let ɵPopoverStyle_BaseFactory;
  return /* @__PURE__ */ __name(function PopoverStyle_Factory(__ngFactoryType__) {
    return (ɵPopoverStyle_BaseFactory || (ɵPopoverStyle_BaseFactory = ɵɵgetInheritedFactory(_PopoverStyle)))(__ngFactoryType__ || _PopoverStyle);
  }, "PopoverStyle_Factory");
})());
__publicField(_PopoverStyle, "ɵprov", ɵɵdefineInjectable({
  token: _PopoverStyle,
  factory: _PopoverStyle.ɵfac
}));
var PopoverStyle = _PopoverStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverStyle, [{
    type: Injectable
  }], null, null);
})();
var _Popover = class _Popover extends BaseComponent {
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Enables to hide the overlay when outside is clicked.
   * @group Props
   */
  dismissable = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the panel, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * When enabled, first button receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Callback to invoke when an overlay becomes visible.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when an overlay gets hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  container;
  overlayVisible = false;
  render = false;
  isOverlayAnimationInProgress = false;
  selfClick = false;
  documentClickListener;
  target;
  willHide;
  scrollHandler;
  documentResizeListener;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  destroyCallback;
  overlayEventListener;
  overlaySubscription;
  _componentStyle = inject(PopoverStyle);
  zone = inject(NgZone);
  overlayService = inject(OverlayService);
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  bindDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener) {
        let documentEvent = Ut() ? "touchstart" : "click";
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
          if (!this.dismissable) {
            return;
          }
          if (!this.container?.contains(event.target) && this.target !== event.target && !this.target.contains(event.target) && !this.selfClick) {
            this.hide();
          }
          this.selfClick = false;
          this.cd.markForCheck();
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  /**
   * Toggles the visibility of the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  toggle(event, target) {
    if (this.isOverlayAnimationInProgress) {
      return;
    }
    if (this.overlayVisible) {
      if (this.hasTargetChanged(event, target)) {
        this.destroyCallback = () => {
          this.show(null, target || event.currentTarget || event.target);
        };
      }
      this.hide();
    } else {
      this.show(event, target);
    }
  }
  /**
   * Displays the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  show(event, target) {
    target && event && event.stopPropagation();
    if (this.isOverlayAnimationInProgress) {
      return;
    }
    this.target = target || event.currentTarget || event.target;
    this.overlayVisible = true;
    this.render = true;
    this.cd.markForCheck();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  onContentClick(event) {
    const targetElement = event.target;
    this.selfClick = event.offsetX < targetElement.clientWidth && event.offsetY < targetElement.clientHeight;
  }
  hasTargetChanged(event, target) {
    return this.target != null && this.target !== (target || event.currentTarget || event.target);
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else ut(this.appendTo, this.container);
    }
  }
  restoreAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  align() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.baseZIndex + this.config.zIndex.overlay);
    }
    D(this.container, this.target, false);
    const containerOffset = K(this.container);
    const targetOffset = K(this.target);
    const borderRadius = this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius");
    let arrowLeft = 0;
    if (containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left - parseFloat(borderRadius) * 2;
    }
    this.container?.style.setProperty(rr("popover.arrow.left").name, `${arrowLeft}px`);
    if (containerOffset.top < targetOffset.top) {
      this.container.setAttribute("data-p-popover-flipped", "true");
      W(this.container, "p-popover-flipped");
    }
  }
  onAnimationStart(event) {
    if (event.toState === "open") {
      this.container = event.element;
      this.container?.setAttribute(this.attrSelector, "");
      this.appendContainer();
      this.align();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
      if (this.focusOnShow) {
        this.focus();
      }
      this.overlayEventListener = (e) => {
        if (this.container && this.container.contains(e.target)) {
          this.selfClick = true;
        }
      };
      this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
      this.onShow.emit(null);
    }
    this.isOverlayAnimationInProgress = true;
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.destroyCallback) {
          this.destroyCallback();
          this.destroyCallback = null;
        }
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
      case "close":
        if (this.autoZIndex) {
          zindexutils.clear(this.container);
        }
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        this.onContainerDestroy();
        this.onHide.emit({});
        this.render = false;
        break;
    }
    this.isOverlayAnimationInProgress = false;
  }
  focus() {
    let focusable = z(this.container, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onCloseClick(event) {
    this.hide();
    event.preventDefault();
  }
  onEscapeKeydown(event) {
    this.hide();
  }
  onWindowResize() {
    if (this.overlayVisible && !Yt()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onContainerDestroy() {
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.destroyCallback = null;
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
};
__name(_Popover, "Popover");
__publicField(_Popover, "ɵfac", /* @__PURE__ */ (() => {
  let ɵPopover_BaseFactory;
  return /* @__PURE__ */ __name(function Popover_Factory(__ngFactoryType__) {
    return (ɵPopover_BaseFactory || (ɵPopover_BaseFactory = ɵɵgetInheritedFactory(_Popover)))(__ngFactoryType__ || _Popover);
  }, "Popover_Factory");
})());
__publicField(_Popover, "ɵcmp", ɵɵdefineComponent({
  type: _Popover,
  selectors: [["p-popover"]],
  contentQueries: /* @__PURE__ */ __name(function Popover_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 4);
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  }, "Popover_ContentQueries"),
  hostBindings: /* @__PURE__ */ __name(function Popover_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.escape", /* @__PURE__ */ __name(function Popover_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKeydown($event);
      }, "Popover_keydown_escape_HostBindingHandler"), ɵɵresolveDocument);
    }
  }, "Popover_HostBindings"),
  inputs: {
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    dismissable: [2, "dismissable", "dismissable", booleanAttribute],
    style: "style",
    styleClass: "styleClass",
    appendTo: "appendTo",
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    ariaCloseLabel: "ariaCloseLabel",
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide"
  },
  features: [ɵɵProvidersFeature([PopoverStyle]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["role", "dialog", 3, "class", "ngStyle", "click", 4, "ngIf"], ["role", "dialog", 3, "click", "ngStyle"], [3, "click", "mousedown"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: /* @__PURE__ */ __name(function Popover_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, Popover_div_0_Template, 4, 19, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.render);
    }
  }, "Popover_Template"),
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, SharedModule],
  encapsulation: 2,
  data: {
    animation: [trigger("animation", [state("void", style({
      transform: "scaleY(0.8)",
      opacity: 0
    })), state("close", style({
      opacity: 0
    })), state("open", style({
      transform: "translateY(0)",
      opacity: 1
    })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => close", animate("{{hideTransitionParams}}"))])]
  },
  changeDetection: 0
}));
var Popover = _Popover;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Popover, [{
    type: Component,
    args: [{
      selector: "p-popover",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div
            *ngIf="render"
            [class]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            (click)="onOverlayClick($event)"
            [@animation]="{
                value: overlayVisible ? 'open' : 'close',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
            role="dialog"
            [attr.aria-modal]="overlayVisible"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
        >
            <div [class]="cx('content')" (click)="onContentClick($event)" (mousedown)="onContentClick($event)">
                <ng-content></ng-content>
                <ng-template *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { closeCallback: onCloseClick.bind(this) }"></ng-template>
            </div>
        </div>
    `,
      animations: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("close", style({
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => close", animate("{{hideTransitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PopoverStyle]
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dismissable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var _PopoverModule = class _PopoverModule {
};
__name(_PopoverModule, "PopoverModule");
__publicField(_PopoverModule, "ɵfac", /* @__PURE__ */ __name(function PopoverModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PopoverModule)();
}, "PopoverModule_Factory"));
__publicField(_PopoverModule, "ɵmod", ɵɵdefineNgModule({
  type: _PopoverModule,
  imports: [Popover, SharedModule],
  exports: [Popover, SharedModule]
}));
__publicField(_PopoverModule, "ɵinj", ɵɵdefineInjector({
  imports: [Popover, SharedModule, SharedModule]
}));
var PopoverModule = _PopoverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      imports: [Popover, SharedModule],
      exports: [Popover, SharedModule]
    }]
  }], null, null);
})();
export {
  Popover,
  PopoverModule,
  PopoverStyle
};
//# sourceMappingURL=primeng_popover.js.map
