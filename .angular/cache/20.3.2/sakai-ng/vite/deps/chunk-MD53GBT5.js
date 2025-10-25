import {
  BaseComponent
<<<<<<<< HEAD:.angular/cache/20.3.2/sakai-ng/vite/deps/chunk-TXKZEEBI.js
} from "./chunk-EEP5DL7E.js";
========
} from "./chunk-PMELNQH5.js";
>>>>>>>> 3e015cf10dd5807aebb34e00948a0920ff3e4e9d:.angular/cache/20.3.2/sakai-ng/vite/deps/chunk-MD53GBT5.js
import {
  s
} from "./chunk-TMXM24YL.js";
import {
  Directive,
  computed,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-C73YR6D2.js";

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : []);
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBaseModelHolder_BaseFactory;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (ɵBaseModelHolder_BaseFactory || (ɵBaseModelHolder_BaseFactory = ɵɵgetInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _BaseModelHolder,
    features: [ɵɵInheritDefinitionFeature]
  });
};
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
<<<<<<<< HEAD:.angular/cache/20.3.2/sakai-ng/vite/deps/chunk-TXKZEEBI.js
//# sourceMappingURL=chunk-TXKZEEBI.js.map
========
//# sourceMappingURL=chunk-MD53GBT5.js.map
>>>>>>>> 3e015cf10dd5807aebb34e00948a0920ff3e4e9d:.angular/cache/20.3.2/sakai-ng/vite/deps/chunk-MD53GBT5.js
