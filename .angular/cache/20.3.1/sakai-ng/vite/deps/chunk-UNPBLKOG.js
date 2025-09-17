import {
  DomHandler
} from "./chunk-MNBMOPCT.js";
import {
  BaseComponent
} from "./chunk-WZW2RKS3.js";
import {
  isPlatformBrowser
} from "./chunk-IVBASKYQ.js";
import {
  DOCUMENT,
  Directive,
  ElementRef,
  Input,
  NgModule,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory
} from "./chunk-QXMXHQOJ.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var _AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  ngAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  ngAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
};
__name(_AutoFocus, "AutoFocus");
__publicField(_AutoFocus, "ɵfac", /* @__PURE__ */ (() => {
  let ɵAutoFocus_BaseFactory;
  return /* @__PURE__ */ __name(function AutoFocus_Factory(__ngFactoryType__) {
    return (ɵAutoFocus_BaseFactory || (ɵAutoFocus_BaseFactory = ɵɵgetInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
  }, "AutoFocus_Factory");
})());
__publicField(_AutoFocus, "ɵdir", ɵɵdefineDirective({
  type: _AutoFocus,
  selectors: [["", "pAutoFocus", ""]],
  inputs: {
    autofocus: [0, "pAutoFocus", "autofocus"]
  },
  features: [ɵɵInheritDefinitionFeature]
}));
var AutoFocus = _AutoFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var _AutoFocusModule = class _AutoFocusModule {
};
__name(_AutoFocusModule, "AutoFocusModule");
__publicField(_AutoFocusModule, "ɵfac", /* @__PURE__ */ __name(function AutoFocusModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoFocusModule)();
}, "AutoFocusModule_Factory"));
__publicField(_AutoFocusModule, "ɵmod", ɵɵdefineNgModule({
  type: _AutoFocusModule,
  imports: [AutoFocus],
  exports: [AutoFocus]
}));
__publicField(_AutoFocusModule, "ɵinj", ɵɵdefineInjector({}));
var AutoFocusModule = _AutoFocusModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

export {
  AutoFocus,
  AutoFocusModule
};
//# sourceMappingURL=chunk-UNPBLKOG.js.map
