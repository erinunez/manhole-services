import {
  BaseComponent
} from "./chunk-WZW2RKS3.js";
import {
  s
} from "./chunk-XU74YL5C.js";
import {
  Directive,
  computed,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-QXMXHQOJ.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var _BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : []);
  writeModelValue(value) {
    this.modelValue.set(value);
  }
};
__name(_BaseModelHolder, "BaseModelHolder");
__publicField(_BaseModelHolder, "ɵfac", /* @__PURE__ */ (() => {
  let ɵBaseModelHolder_BaseFactory;
  return /* @__PURE__ */ __name(function BaseModelHolder_Factory(__ngFactoryType__) {
    return (ɵBaseModelHolder_BaseFactory || (ɵBaseModelHolder_BaseFactory = ɵɵgetInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
  }, "BaseModelHolder_Factory");
})());
__publicField(_BaseModelHolder, "ɵdir", ɵɵdefineDirective({
  type: _BaseModelHolder,
  features: [ɵɵInheritDefinitionFeature]
}));
var BaseModelHolder = _BaseModelHolder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

export {
  BaseModelHolder
};
//# sourceMappingURL=chunk-3ESAFDKR.js.map
