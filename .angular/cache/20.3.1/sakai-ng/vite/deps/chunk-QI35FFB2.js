import {
  Y,
  c,
  k
} from "./chunk-XU74YL5C.js";
import {
  CommonModule
} from "./chunk-4OG6XTFF.js";
import {
  Component,
  Directive,
  Injectable,
  Input,
  NgModule,
  TemplateRef,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-4WXSYY4G.js";
import {
  Subject
} from "./chunk-AHSLHBJ6.js";
import {
  __name,
  __publicField
} from "./chunk-2CC2VYW7.js";

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var _ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
};
__name(_ConfirmationService, "ConfirmationService");
__publicField(_ConfirmationService, "ɵfac", /* @__PURE__ */ __name(function ConfirmationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmationService)();
}, "ConfirmationService_Factory"));
__publicField(_ConfirmationService, "ɵprov", ɵɵdefineInjectable({
  token: _ConfirmationService,
  factory: _ConfirmationService.ɵfac
}));
var ConfirmationService = _ConfirmationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var _ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
};
__name(_ContextMenuService, "ContextMenuService");
__publicField(_ContextMenuService, "ɵfac", /* @__PURE__ */ __name(function ContextMenuService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContextMenuService)();
}, "ContextMenuService_Factory"));
__publicField(_ContextMenuService, "ɵprov", ɵɵdefineInjectable({
  token: _ContextMenuService,
  factory: _ContextMenuService.ɵfac
}));
var ContextMenuService = _ContextMenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var _FilterMatchMode = class _FilterMatchMode {
};
__name(_FilterMatchMode, "FilterMatchMode");
__publicField(_FilterMatchMode, "STARTS_WITH", "startsWith");
__publicField(_FilterMatchMode, "CONTAINS", "contains");
__publicField(_FilterMatchMode, "NOT_CONTAINS", "notContains");
__publicField(_FilterMatchMode, "ENDS_WITH", "endsWith");
__publicField(_FilterMatchMode, "EQUALS", "equals");
__publicField(_FilterMatchMode, "NOT_EQUALS", "notEquals");
__publicField(_FilterMatchMode, "IN", "in");
__publicField(_FilterMatchMode, "LESS_THAN", "lt");
__publicField(_FilterMatchMode, "LESS_THAN_OR_EQUAL_TO", "lte");
__publicField(_FilterMatchMode, "GREATER_THAN", "gt");
__publicField(_FilterMatchMode, "GREATER_THAN_OR_EQUAL_TO", "gte");
__publicField(_FilterMatchMode, "BETWEEN", "between");
__publicField(_FilterMatchMode, "IS", "is");
__publicField(_FilterMatchMode, "IS_NOT", "isNot");
__publicField(_FilterMatchMode, "BEFORE", "before");
__publicField(_FilterMatchMode, "AFTER", "after");
__publicField(_FilterMatchMode, "DATE_IS", "dateIs");
__publicField(_FilterMatchMode, "DATE_IS_NOT", "dateIsNot");
__publicField(_FilterMatchMode, "DATE_BEFORE", "dateBefore");
__publicField(_FilterMatchMode, "DATE_AFTER", "dateAfter");
var FilterMatchMode = _FilterMatchMode;
var _FilterOperator = class _FilterOperator {
};
__name(_FilterOperator, "FilterOperator");
__publicField(_FilterOperator, "AND", "and");
__publicField(_FilterOperator, "OR", "or");
var FilterOperator = _FilterOperator;
var _FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = c(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    }, "startsWith"),
    contains: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    }, "contains"),
    notContains: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    }, "notContains"),
    endsWith: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }, "endsWith"),
    equals: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return Y(value.toString()).toLocaleLowerCase(filterLocale) == Y(filter.toString()).toLocaleLowerCase(filterLocale);
    }, "equals"),
    notEquals: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return Y(value.toString()).toLocaleLowerCase(filterLocale) != Y(filter.toString()).toLocaleLowerCase(filterLocale);
    }, "notEquals"),
    in: /* @__PURE__ */ __name((value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (k(value, filter[i])) {
          return true;
        }
      }
      return false;
    }, "in"),
    between: /* @__PURE__ */ __name((value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    }, "between"),
    lt: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    }, "lt"),
    lte: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    }, "lte"),
    gt: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    }, "gt"),
    gte: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    }, "gte"),
    is: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    }, "is"),
    isNot: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    }, "isNot"),
    before: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    }, "before"),
    after: /* @__PURE__ */ __name((value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    }, "after"),
    dateIs: /* @__PURE__ */ __name((value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    }, "dateIs"),
    dateIsNot: /* @__PURE__ */ __name((value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    }, "dateIsNot"),
    dateBefore: /* @__PURE__ */ __name((value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    }, "dateBefore"),
    dateAfter: /* @__PURE__ */ __name((value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      value.setHours(0, 0, 0, 0);
      return value.getTime() > filter.getTime();
    }, "dateAfter")
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
};
__name(_FilterService, "FilterService");
__publicField(_FilterService, "ɵfac", /* @__PURE__ */ __name(function FilterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterService)();
}, "FilterService_Factory"));
__publicField(_FilterService, "ɵprov", ɵɵdefineInjectable({
  token: _FilterService,
  factory: _FilterService.ɵfac,
  providedIn: "root"
}));
var FilterService = _FilterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {ToastMessageOptions} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
};
__name(_MessageService, "MessageService");
__publicField(_MessageService, "ɵfac", /* @__PURE__ */ __name(function MessageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MessageService)();
}, "MessageService_Factory"));
__publicField(_MessageService, "ɵprov", ɵɵdefineInjectable({
  token: _MessageService,
  factory: _MessageService.ɵfac
}));
var MessageService = _MessageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var _OverlayService = class _OverlayService {
  clickSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
};
__name(_OverlayService, "OverlayService");
__publicField(_OverlayService, "ɵfac", /* @__PURE__ */ __name(function OverlayService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OverlayService)();
}, "OverlayService_Factory"));
__publicField(_OverlayService, "ɵprov", ɵɵdefineInjectable({
  token: _OverlayService,
  factory: _OverlayService.ɵfac,
  providedIn: "root"
}));
var OverlayService = _OverlayService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _PrimeIcons = class _PrimeIcons {
};
__name(_PrimeIcons, "PrimeIcons");
__publicField(_PrimeIcons, "ADDRESS_BOOK", "pi pi-address-book");
__publicField(_PrimeIcons, "ALIGN_CENTER", "pi pi-align-center");
__publicField(_PrimeIcons, "ALIGN_JUSTIFY", "pi pi-align-justify");
__publicField(_PrimeIcons, "ALIGN_LEFT", "pi pi-align-left");
__publicField(_PrimeIcons, "ALIGN_RIGHT", "pi pi-align-right");
__publicField(_PrimeIcons, "AMAZON", "pi pi-amazon");
__publicField(_PrimeIcons, "ANDROID", "pi pi-android");
__publicField(_PrimeIcons, "ANGLE_DOUBLE_DOWN", "pi pi-angle-double-down");
__publicField(_PrimeIcons, "ANGLE_DOUBLE_LEFT", "pi pi-angle-double-left");
__publicField(_PrimeIcons, "ANGLE_DOUBLE_RIGHT", "pi pi-angle-double-right");
__publicField(_PrimeIcons, "ANGLE_DOUBLE_UP", "pi pi-angle-double-up");
__publicField(_PrimeIcons, "ANGLE_DOWN", "pi pi-angle-down");
__publicField(_PrimeIcons, "ANGLE_LEFT", "pi pi-angle-left");
__publicField(_PrimeIcons, "ANGLE_RIGHT", "pi pi-angle-right");
__publicField(_PrimeIcons, "ANGLE_UP", "pi pi-angle-up");
__publicField(_PrimeIcons, "APPLE", "pi pi-apple");
__publicField(_PrimeIcons, "ARROWS_ALT", "pi pi-arrows-alt");
__publicField(_PrimeIcons, "ARROW_CIRCLE_DOWN", "pi pi-arrow-circle-down");
__publicField(_PrimeIcons, "ARROW_CIRCLE_LEFT", "pi pi-arrow-circle-left");
__publicField(_PrimeIcons, "ARROW_CIRCLE_RIGHT", "pi pi-arrow-circle-right");
__publicField(_PrimeIcons, "ARROW_CIRCLE_UP", "pi pi-arrow-circle-up");
__publicField(_PrimeIcons, "ARROW_DOWN", "pi pi-arrow-down");
__publicField(_PrimeIcons, "ARROW_DOWN_LEFT", "pi pi-arrow-down-left");
__publicField(_PrimeIcons, "ARROW_DOWN_LEFT_AND_ARROW_UP_RIGHT_TO_CENTER", "pi pi-arrow-down-left-and-arrow-up-right-to-center");
__publicField(_PrimeIcons, "ARROW_DOWN_RIGHT", "pi pi-arrow-down-right");
__publicField(_PrimeIcons, "ARROW_LEFT", "pi pi-arrow-left");
__publicField(_PrimeIcons, "ARROW_RIGHT_ARROW_LEFT", "pi pi-arrow-right-arrow-left");
__publicField(_PrimeIcons, "ARROW_RIGHT", "pi pi-arrow-right");
__publicField(_PrimeIcons, "ARROW_UP", "pi pi-arrow-up");
__publicField(_PrimeIcons, "ARROW_UP_LEFT", "pi pi-arrow-up-left");
__publicField(_PrimeIcons, "ARROW_UP_RIGHT", "pi pi-arrow-up-right");
__publicField(_PrimeIcons, "ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER", "pi pi-arrow-up-right-and-arrow-down-left-from-center");
__publicField(_PrimeIcons, "ARROWS_H", "pi pi-arrows-h");
__publicField(_PrimeIcons, "ARROWS_V", "pi pi-arrows-v");
__publicField(_PrimeIcons, "ASTERISK", "pi pi-asterisk");
__publicField(_PrimeIcons, "AT", "pi pi-at");
__publicField(_PrimeIcons, "BACKWARD", "pi pi-backward");
__publicField(_PrimeIcons, "BAN", "pi pi-ban");
__publicField(_PrimeIcons, "BARCODE", "pi pi-barcode");
__publicField(_PrimeIcons, "BARS", "pi pi-bars");
__publicField(_PrimeIcons, "BELL", "pi pi-bell");
__publicField(_PrimeIcons, "BELL_SLASH", "pi pi-bell-slash");
__publicField(_PrimeIcons, "BITCOIN", "pi pi-bitcoin");
__publicField(_PrimeIcons, "BOLT", "pi pi-bolt");
__publicField(_PrimeIcons, "BOOK", "pi pi-book");
__publicField(_PrimeIcons, "BOOKMARK", "pi pi-bookmark");
__publicField(_PrimeIcons, "BOOKMARK_FILL", "pi pi-bookmark-fill");
__publicField(_PrimeIcons, "BOX", "pi pi-box");
__publicField(_PrimeIcons, "BRIEFCASE", "pi pi-briefcase");
__publicField(_PrimeIcons, "BUILDING", "pi pi-building");
__publicField(_PrimeIcons, "BUILDING_COLUMNS", "pi pi-building-columns");
__publicField(_PrimeIcons, "BULLSEYE", "pi pi-bullseye");
__publicField(_PrimeIcons, "CALCULATOR", "pi pi-calculator");
__publicField(_PrimeIcons, "CALENDAR", "pi pi-calendar");
__publicField(_PrimeIcons, "CALENDAR_CLOCK", "pi pi-calendar-clock");
__publicField(_PrimeIcons, "CALENDAR_MINUS", "pi pi-calendar-minus");
__publicField(_PrimeIcons, "CALENDAR_PLUS", "pi pi-calendar-plus");
__publicField(_PrimeIcons, "CALENDAR_TIMES", "pi pi-calendar-times");
__publicField(_PrimeIcons, "CAMERA", "pi pi-camera");
__publicField(_PrimeIcons, "CAR", "pi pi-car");
__publicField(_PrimeIcons, "CARET_DOWN", "pi pi-caret-down");
__publicField(_PrimeIcons, "CARET_LEFT", "pi pi-caret-left");
__publicField(_PrimeIcons, "CARET_RIGHT", "pi pi-caret-right");
__publicField(_PrimeIcons, "CARET_UP", "pi pi-caret-up");
__publicField(_PrimeIcons, "CART_ARROW_DOWN", "pi pi-cart-arrow-down");
__publicField(_PrimeIcons, "CART_MINUS", "pi pi-cart-minus");
__publicField(_PrimeIcons, "CART_PLUS", "pi pi-cart-plus");
__publicField(_PrimeIcons, "CHART_BAR", "pi pi-chart-bar");
__publicField(_PrimeIcons, "CHART_LINE", "pi pi-chart-line");
__publicField(_PrimeIcons, "CHART_PIE", "pi pi-chart-pie");
__publicField(_PrimeIcons, "CHART_SCATTER", "pi pi-chart-scatter");
__publicField(_PrimeIcons, "CHECK", "pi pi-check");
__publicField(_PrimeIcons, "CHECK_CIRCLE", "pi pi-check-circle");
__publicField(_PrimeIcons, "CHECK_SQUARE", "pi pi-check-square");
__publicField(_PrimeIcons, "CHEVRON_CIRCLE_DOWN", "pi pi-chevron-circle-down");
__publicField(_PrimeIcons, "CHEVRON_CIRCLE_LEFT", "pi pi-chevron-circle-left");
__publicField(_PrimeIcons, "CHEVRON_CIRCLE_RIGHT", "pi pi-chevron-circle-right");
__publicField(_PrimeIcons, "CHEVRON_CIRCLE_UP", "pi pi-chevron-circle-up");
__publicField(_PrimeIcons, "CHEVRON_DOWN", "pi pi-chevron-down");
__publicField(_PrimeIcons, "CHEVRON_LEFT", "pi pi-chevron-left");
__publicField(_PrimeIcons, "CHEVRON_RIGHT", "pi pi-chevron-right");
__publicField(_PrimeIcons, "CHEVRON_UP", "pi pi-chevron-up");
__publicField(_PrimeIcons, "CIRCLE", "pi pi-circle");
__publicField(_PrimeIcons, "CIRCLE_FILL", "pi pi-circle-fill");
__publicField(_PrimeIcons, "CLIPBOARD", "pi pi-clipboard");
__publicField(_PrimeIcons, "CLOCK", "pi pi-clock");
__publicField(_PrimeIcons, "CLONE", "pi pi-clone");
__publicField(_PrimeIcons, "CLOUD", "pi pi-cloud");
__publicField(_PrimeIcons, "CLOUD_DOWNLOAD", "pi pi-cloud-download");
__publicField(_PrimeIcons, "CLOUD_UPLOAD", "pi pi-cloud-upload");
__publicField(_PrimeIcons, "CODE", "pi pi-code");
__publicField(_PrimeIcons, "COG", "pi pi-cog");
__publicField(_PrimeIcons, "COMMENT", "pi pi-comment");
__publicField(_PrimeIcons, "COMMENTS", "pi pi-comments");
__publicField(_PrimeIcons, "COMPASS", "pi pi-compass");
__publicField(_PrimeIcons, "COPY", "pi pi-copy");
__publicField(_PrimeIcons, "CREDIT_CARD", "pi pi-credit-card");
__publicField(_PrimeIcons, "CROWN", "pi pi-crown");
__publicField(_PrimeIcons, "DATABASE", "pi pi-database");
__publicField(_PrimeIcons, "DESKTOP", "pi pi-desktop");
__publicField(_PrimeIcons, "DELETE_LEFT", "pi pi-delete-left");
__publicField(_PrimeIcons, "DIRECTIONS", "pi pi-directions");
__publicField(_PrimeIcons, "DIRECTIONS_ALT", "pi pi-directions-alt");
__publicField(_PrimeIcons, "DISCORD", "pi pi-discord");
__publicField(_PrimeIcons, "DOLLAR", "pi pi-dollar");
__publicField(_PrimeIcons, "DOWNLOAD", "pi pi-download");
__publicField(_PrimeIcons, "EJECT", "pi pi-eject");
__publicField(_PrimeIcons, "ELLIPSIS_H", "pi pi-ellipsis-h");
__publicField(_PrimeIcons, "ELLIPSIS_V", "pi pi-ellipsis-v");
__publicField(_PrimeIcons, "ENVELOPE", "pi pi-envelope");
__publicField(_PrimeIcons, "EQUALS", "pi pi-equals");
__publicField(_PrimeIcons, "ERASER", "pi pi-eraser");
__publicField(_PrimeIcons, "ETHEREUM", "pi pi-ethereum");
__publicField(_PrimeIcons, "EURO", "pi pi-euro");
__publicField(_PrimeIcons, "EXCLAMATION_CIRCLE", "pi pi-exclamation-circle");
__publicField(_PrimeIcons, "EXCLAMATION_TRIANGLE", "pi pi-exclamation-triangle");
__publicField(_PrimeIcons, "EXPAND", "pi pi-expand");
__publicField(_PrimeIcons, "EXTERNAL_LINK", "pi pi-external-link");
__publicField(_PrimeIcons, "EYE", "pi pi-eye");
__publicField(_PrimeIcons, "EYE_SLASH", "pi pi-eye-slash");
__publicField(_PrimeIcons, "FACE_SMILE", "pi pi-face-smile");
__publicField(_PrimeIcons, "FACEBOOK", "pi pi-facebook");
__publicField(_PrimeIcons, "FAST_BACKWARD", "pi pi-fast-backward");
__publicField(_PrimeIcons, "FAST_FORWARD", "pi pi-fast-forward");
__publicField(_PrimeIcons, "FILE", "pi pi-file");
__publicField(_PrimeIcons, "FILE_ARROW_UP", "pi pi-file-arrow-up");
__publicField(_PrimeIcons, "FILE_CHECK", "pi pi-file-check");
__publicField(_PrimeIcons, "FILE_EDIT", "pi pi-file-edit");
__publicField(_PrimeIcons, "FILE_IMPORT", "pi pi-file-import");
__publicField(_PrimeIcons, "FILE_PDF", "pi pi-file-pdf");
__publicField(_PrimeIcons, "FILE_PLUS", "pi pi-file-plus");
__publicField(_PrimeIcons, "FILE_EXCEL", "pi pi-file-excel");
__publicField(_PrimeIcons, "FILE_EXPORT", "pi pi-file-export");
__publicField(_PrimeIcons, "FILE_WORD", "pi pi-file-word");
__publicField(_PrimeIcons, "FILTER", "pi pi-filter");
__publicField(_PrimeIcons, "FILTER_FILL", "pi pi-filter-fill");
__publicField(_PrimeIcons, "FILTER_SLASH", "pi pi-filter-slash");
__publicField(_PrimeIcons, "FLAG", "pi pi-flag");
__publicField(_PrimeIcons, "FLAG_FILL", "pi pi-flag-fill");
__publicField(_PrimeIcons, "FOLDER", "pi pi-folder");
__publicField(_PrimeIcons, "FOLDER_OPEN", "pi pi-folder-open");
__publicField(_PrimeIcons, "FOLDER_PLUS", "pi pi-folder-plus");
__publicField(_PrimeIcons, "FORWARD", "pi pi-forward");
__publicField(_PrimeIcons, "GAUGE", "pi pi-gauge");
__publicField(_PrimeIcons, "GIFT", "pi pi-gift");
__publicField(_PrimeIcons, "GITHUB", "pi pi-github");
__publicField(_PrimeIcons, "GLOBE", "pi pi-globe");
__publicField(_PrimeIcons, "GOOGLE", "pi pi-google");
__publicField(_PrimeIcons, "GRADUATION_CAP", "pi pi-graduation-cap");
__publicField(_PrimeIcons, "HAMMER", "pi pi-hammer");
__publicField(_PrimeIcons, "HASHTAG", "pi pi-hashtag");
__publicField(_PrimeIcons, "HEADPHONES", "pi pi-headphones");
__publicField(_PrimeIcons, "HEART", "pi pi-heart");
__publicField(_PrimeIcons, "HEART_FILL", "pi pi-heart-fill");
__publicField(_PrimeIcons, "HISTORY", "pi pi-history");
__publicField(_PrimeIcons, "HOME", "pi pi-home");
__publicField(_PrimeIcons, "HOURGLASS", "pi pi-hourglass");
__publicField(_PrimeIcons, "ID_CARD", "pi pi-id-card");
__publicField(_PrimeIcons, "IMAGE", "pi pi-image");
__publicField(_PrimeIcons, "IMAGES", "pi pi-images");
__publicField(_PrimeIcons, "INBOX", "pi pi-inbox");
__publicField(_PrimeIcons, "INDIAN_RUPEE", "pi pi-indian-rupee");
__publicField(_PrimeIcons, "INFO", "pi pi-info");
__publicField(_PrimeIcons, "INFO_CIRCLE", "pi pi-info-circle");
__publicField(_PrimeIcons, "INSTAGRAM", "pi pi-instagram");
__publicField(_PrimeIcons, "KEY", "pi pi-key");
__publicField(_PrimeIcons, "LANGUAGE", "pi pi-language");
__publicField(_PrimeIcons, "LIGHTBULB", "pi pi-lightbulb");
__publicField(_PrimeIcons, "LINK", "pi pi-link");
__publicField(_PrimeIcons, "LINKEDIN", "pi pi-linkedin");
__publicField(_PrimeIcons, "LIST", "pi pi-list");
__publicField(_PrimeIcons, "LIST_CHECK", "pi pi-list-check");
__publicField(_PrimeIcons, "LOCK", "pi pi-lock");
__publicField(_PrimeIcons, "LOCK_OPEN", "pi pi-lock-open");
__publicField(_PrimeIcons, "MAP", "pi pi-map");
__publicField(_PrimeIcons, "MAP_MARKER", "pi pi-map-marker");
__publicField(_PrimeIcons, "MARS", "pi pi-mars");
__publicField(_PrimeIcons, "MEGAPHONE", "pi pi-megaphone");
__publicField(_PrimeIcons, "MICROCHIP", "pi pi-microchip");
__publicField(_PrimeIcons, "MICROCHIP_AI", "pi pi-microchip-ai");
__publicField(_PrimeIcons, "MICROPHONE", "pi pi-microphone");
__publicField(_PrimeIcons, "MICROSOFT", "pi pi-microsoft");
__publicField(_PrimeIcons, "MINUS", "pi pi-minus");
__publicField(_PrimeIcons, "MINUS_CIRCLE", "pi pi-minus-circle");
__publicField(_PrimeIcons, "MOBILE", "pi pi-mobile");
__publicField(_PrimeIcons, "MONEY_BILL", "pi pi-money-bill");
__publicField(_PrimeIcons, "MOON", "pi pi-moon");
__publicField(_PrimeIcons, "OBJECTS_COLUMN", "pi pi-objects-column");
__publicField(_PrimeIcons, "PALETTE", "pi pi-palette");
__publicField(_PrimeIcons, "PAPERCLIP", "pi pi-paperclip");
__publicField(_PrimeIcons, "PAUSE", "pi pi-pause");
__publicField(_PrimeIcons, "PAUSE_CIRCLE", "pi pi-pause-circle");
__publicField(_PrimeIcons, "PAYPAL", "pi pi-paypal");
__publicField(_PrimeIcons, "PEN_TO_SQUARE", "pi pi-pen-to-square");
__publicField(_PrimeIcons, "PENCIL", "pi pi-pencil");
__publicField(_PrimeIcons, "PERCENTAGE", "pi pi-percentage");
__publicField(_PrimeIcons, "PHONE", "pi pi-phone");
__publicField(_PrimeIcons, "PINTEREST", "pi pi-pinterest");
__publicField(_PrimeIcons, "PLAY", "pi pi-play");
__publicField(_PrimeIcons, "PLAY_CIRCLE", "pi pi-play-circle");
__publicField(_PrimeIcons, "PLUS", "pi pi-plus");
__publicField(_PrimeIcons, "PLUS_CIRCLE", "pi pi-plus-circle");
__publicField(_PrimeIcons, "POUND", "pi pi-pound");
__publicField(_PrimeIcons, "POWER_OFF", "pi pi-power-off");
__publicField(_PrimeIcons, "PRIME", "pi pi-prime");
__publicField(_PrimeIcons, "PRINT", "pi pi-print");
__publicField(_PrimeIcons, "QRCODE", "pi pi-qrcode");
__publicField(_PrimeIcons, "QUESTION", "pi pi-question");
__publicField(_PrimeIcons, "QUESTION_CIRCLE", "pi pi-question-circle");
__publicField(_PrimeIcons, "RECEIPT", "pi pi-receipt");
__publicField(_PrimeIcons, "REDDIT", "pi pi-reddit");
__publicField(_PrimeIcons, "REFRESH", "pi pi-refresh");
__publicField(_PrimeIcons, "REPLAY", "pi pi-replay");
__publicField(_PrimeIcons, "REPLY", "pi pi-reply");
__publicField(_PrimeIcons, "SAVE", "pi pi-save");
__publicField(_PrimeIcons, "SEARCH", "pi pi-search");
__publicField(_PrimeIcons, "SEARCH_MINUS", "pi pi-search-minus");
__publicField(_PrimeIcons, "SEARCH_PLUS", "pi pi-search-plus");
__publicField(_PrimeIcons, "SEND", "pi pi-send");
__publicField(_PrimeIcons, "SERVER", "pi pi-server");
__publicField(_PrimeIcons, "SHARE_ALT", "pi pi-share-alt");
__publicField(_PrimeIcons, "SHIELD", "pi pi-shield");
__publicField(_PrimeIcons, "SHOP", "pi pi-shop");
__publicField(_PrimeIcons, "SHOPPING_BAG", "pi pi-shopping-bag");
__publicField(_PrimeIcons, "SHOPPING_CART", "pi pi-shopping-cart");
__publicField(_PrimeIcons, "SIGN_IN", "pi pi-sign-in");
__publicField(_PrimeIcons, "SIGN_OUT", "pi pi-sign-out");
__publicField(_PrimeIcons, "SITEMAP", "pi pi-sitemap");
__publicField(_PrimeIcons, "SLACK", "pi pi-slack");
__publicField(_PrimeIcons, "SLIDERS_H", "pi pi-sliders-h");
__publicField(_PrimeIcons, "SLIDERS_V", "pi pi-sliders-v");
__publicField(_PrimeIcons, "SORT", "pi pi-sort");
__publicField(_PrimeIcons, "SORT_ALPHA_DOWN", "pi pi-sort-alpha-down");
__publicField(_PrimeIcons, "SORT_ALPHA_DOWN_ALT", "pi pi-sort-alpha-down-alt");
__publicField(_PrimeIcons, "SORT_ALPHA_UP", "pi pi-sort-alpha-up");
__publicField(_PrimeIcons, "SORT_ALPHA_UP_ALT", "pi pi-sort-alpha-up-alt");
__publicField(_PrimeIcons, "SORT_ALT", "pi pi-sort-alt");
__publicField(_PrimeIcons, "SORT_ALT_SLASH", "pi pi-sort-alt-slash");
__publicField(_PrimeIcons, "SORT_AMOUNT_DOWN", "pi pi-sort-amount-down");
__publicField(_PrimeIcons, "SORT_AMOUNT_DOWN_ALT", "pi pi-sort-amount-down-alt");
__publicField(_PrimeIcons, "SORT_AMOUNT_UP", "pi pi-sort-amount-up");
__publicField(_PrimeIcons, "SORT_AMOUNT_UP_ALT", "pi pi-sort-amount-up-alt");
__publicField(_PrimeIcons, "SORT_DOWN", "pi pi-sort-down");
__publicField(_PrimeIcons, "SORT_DOWN_FILL", "pi pi-sort-down-fill");
__publicField(_PrimeIcons, "SORT_NUMERIC_DOWN", "pi pi-sort-numeric-down");
__publicField(_PrimeIcons, "SORT_NUMERIC_DOWN_ALT", "pi pi-sort-numeric-down-alt");
__publicField(_PrimeIcons, "SORT_NUMERIC_UP", "pi pi-sort-numeric-up");
__publicField(_PrimeIcons, "SORT_NUMERIC_UP_ALT", "pi pi-sort-numeric-up-alt");
__publicField(_PrimeIcons, "SORT_UP", "pi pi-sort-up");
__publicField(_PrimeIcons, "SORT_UP_FILL", "pi pi-sort-up-fill");
__publicField(_PrimeIcons, "SPARKLES", "pi pi-sparkles");
__publicField(_PrimeIcons, "SPINNER", "pi pi-spinner");
__publicField(_PrimeIcons, "SPINNER_DOTTED", "pi pi-spinner-dotted");
__publicField(_PrimeIcons, "STAR", "pi pi-star");
__publicField(_PrimeIcons, "STAR_FILL", "pi pi-star-fill");
__publicField(_PrimeIcons, "STAR_HALF", "pi pi-star-half");
__publicField(_PrimeIcons, "STAR_HALF_FILL", "pi pi-star-half-fill");
__publicField(_PrimeIcons, "STEP_BACKWARD", "pi pi-step-backward");
__publicField(_PrimeIcons, "STEP_BACKWARD_ALT", "pi pi-step-backward-alt");
__publicField(_PrimeIcons, "STEP_FORWARD", "pi pi-step-forward");
__publicField(_PrimeIcons, "STEP_FORWARD_ALT", "pi pi-step-forward-alt");
__publicField(_PrimeIcons, "STOP", "pi pi-stop");
__publicField(_PrimeIcons, "STOP_CIRCLE", "pi pi-stop-circle");
__publicField(_PrimeIcons, "STOPWATCH", "pi pi-stopwatch");
__publicField(_PrimeIcons, "SUN", "pi pi-sun");
__publicField(_PrimeIcons, "SYNC", "pi pi-sync");
__publicField(_PrimeIcons, "TABLE", "pi pi-table");
__publicField(_PrimeIcons, "TABLET", "pi pi-tablet");
__publicField(_PrimeIcons, "TAG", "pi pi-tag");
__publicField(_PrimeIcons, "TAGS", "pi pi-tags");
__publicField(_PrimeIcons, "TELEGRAM", "pi pi-telegram");
__publicField(_PrimeIcons, "TH_LARGE", "pi pi-th-large");
__publicField(_PrimeIcons, "THUMBS_DOWN", "pi pi-thumbs-down");
__publicField(_PrimeIcons, "THUMBS_DOWN_FILL", "pi pi-thumbs-down-fill");
__publicField(_PrimeIcons, "THUMBS_UP", "pi pi-thumbs-up");
__publicField(_PrimeIcons, "THUMBS_UP_FILL", "pi pi-thumbs-up-fill");
__publicField(_PrimeIcons, "THUMBTACK", "pi pi-thumbtack");
__publicField(_PrimeIcons, "TICKET", "pi pi-ticket");
__publicField(_PrimeIcons, "TIKTOK", "pi pi-tiktok");
__publicField(_PrimeIcons, "TIMES", "pi pi-times");
__publicField(_PrimeIcons, "TIMES_CIRCLE", "pi pi-times-circle");
__publicField(_PrimeIcons, "TRASH", "pi pi-trash");
__publicField(_PrimeIcons, "TROPHY", "pi pi-trophy");
__publicField(_PrimeIcons, "TRUCK", "pi pi-truck");
__publicField(_PrimeIcons, "TURKISH_LIRA", "pi pi-turkish-lira");
__publicField(_PrimeIcons, "TWITCH", "pi pi-twitch");
__publicField(_PrimeIcons, "TWITTER", "pi pi-twitter");
__publicField(_PrimeIcons, "UNDO", "pi pi-undo");
__publicField(_PrimeIcons, "UNLOCK", "pi pi-unlock");
__publicField(_PrimeIcons, "UPLOAD", "pi pi-upload");
__publicField(_PrimeIcons, "USER", "pi pi-user");
__publicField(_PrimeIcons, "USER_EDIT", "pi pi-user-edit");
__publicField(_PrimeIcons, "USER_MINUS", "pi pi-user-minus");
__publicField(_PrimeIcons, "USER_PLUS", "pi pi-user-plus");
__publicField(_PrimeIcons, "USERS", "pi pi-users");
__publicField(_PrimeIcons, "VENUS", "pi pi-venus");
__publicField(_PrimeIcons, "VERIFIED", "pi pi-verified");
__publicField(_PrimeIcons, "VIDEO", "pi pi-video");
__publicField(_PrimeIcons, "VIMEO", "pi pi-vimeo");
__publicField(_PrimeIcons, "VOLUME_DOWN", "pi pi-volume-down");
__publicField(_PrimeIcons, "VOLUME_OFF", "pi pi-volume-off");
__publicField(_PrimeIcons, "VOLUME_UP", "pi pi-volume-up");
__publicField(_PrimeIcons, "WALLET", "pi pi-wallet");
__publicField(_PrimeIcons, "WAREHOUSE", "pi pi-warehouse");
__publicField(_PrimeIcons, "WAVE_PULSE", "pi pi-wave-pulse");
__publicField(_PrimeIcons, "WHATSAPP", "pi pi-whatsapp");
__publicField(_PrimeIcons, "WIFI", "pi pi-wifi");
__publicField(_PrimeIcons, "WINDOW_MAXIMIZE", "pi pi-window-maximize");
__publicField(_PrimeIcons, "WINDOW_MINIMIZE", "pi pi-window-minimize");
__publicField(_PrimeIcons, "WRENCH", "pi pi-wrench");
__publicField(_PrimeIcons, "YOUTUBE", "pi pi-youtube");
var PrimeIcons = _PrimeIcons;
var _Header = class _Header {
};
__name(_Header, "Header");
__publicField(_Header, "ɵfac", /* @__PURE__ */ __name(function Header_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Header)();
}, "Header_Factory"));
__publicField(_Header, "ɵcmp", ɵɵdefineComponent({
  type: _Header,
  selectors: [["p-header"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function Header_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "Header_Template"),
  encapsulation: 2
}));
var Header = _Header;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var _Footer = class _Footer {
};
__name(_Footer, "Footer");
__publicField(_Footer, "ɵfac", /* @__PURE__ */ __name(function Footer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Footer)();
}, "Footer_Factory"));
__publicField(_Footer, "ɵcmp", ɵɵdefineComponent({
  type: _Footer,
  selectors: [["p-footer"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function Footer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "Footer_Template"),
  encapsulation: 2
}));
var Footer = _Footer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var _PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
};
__name(_PrimeTemplate, "PrimeTemplate");
__publicField(_PrimeTemplate, "ɵfac", /* @__PURE__ */ __name(function PrimeTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrimeTemplate)(ɵɵdirectiveInject(TemplateRef));
}, "PrimeTemplate_Factory"));
__publicField(_PrimeTemplate, "ɵdir", ɵɵdefineDirective({
  type: _PrimeTemplate,
  selectors: [["", "pTemplate", ""]],
  inputs: {
    type: "type",
    name: [0, "pTemplate", "name"]
  }
}));
var PrimeTemplate = _PrimeTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var _SharedModule = class _SharedModule {
};
__name(_SharedModule, "SharedModule");
__publicField(_SharedModule, "ɵfac", /* @__PURE__ */ __name(function SharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedModule)();
}, "SharedModule_Factory"));
__publicField(_SharedModule, "ɵmod", ɵɵdefineNgModule({
  type: _SharedModule,
  declarations: [Header, Footer],
  imports: [CommonModule, PrimeTemplate],
  exports: [Header, Footer, PrimeTemplate]
}));
__publicField(_SharedModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var SharedModule = _SharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer]
    }]
  }], null, null);
})();
var _TranslationKeys = class _TranslationKeys {
};
__name(_TranslationKeys, "TranslationKeys");
__publicField(_TranslationKeys, "STARTS_WITH", "startsWith");
__publicField(_TranslationKeys, "CONTAINS", "contains");
__publicField(_TranslationKeys, "NOT_CONTAINS", "notContains");
__publicField(_TranslationKeys, "ENDS_WITH", "endsWith");
__publicField(_TranslationKeys, "EQUALS", "equals");
__publicField(_TranslationKeys, "NOT_EQUALS", "notEquals");
__publicField(_TranslationKeys, "NO_FILTER", "noFilter");
__publicField(_TranslationKeys, "LT", "lt");
__publicField(_TranslationKeys, "LTE", "lte");
__publicField(_TranslationKeys, "GT", "gt");
__publicField(_TranslationKeys, "GTE", "gte");
__publicField(_TranslationKeys, "IS", "is");
__publicField(_TranslationKeys, "IS_NOT", "isNot");
__publicField(_TranslationKeys, "BEFORE", "before");
__publicField(_TranslationKeys, "AFTER", "after");
__publicField(_TranslationKeys, "CLEAR", "clear");
__publicField(_TranslationKeys, "APPLY", "apply");
__publicField(_TranslationKeys, "MATCH_ALL", "matchAll");
__publicField(_TranslationKeys, "MATCH_ANY", "matchAny");
__publicField(_TranslationKeys, "ADD_RULE", "addRule");
__publicField(_TranslationKeys, "REMOVE_RULE", "removeRule");
__publicField(_TranslationKeys, "ACCEPT", "accept");
__publicField(_TranslationKeys, "REJECT", "reject");
__publicField(_TranslationKeys, "CHOOSE", "choose");
__publicField(_TranslationKeys, "UPLOAD", "upload");
__publicField(_TranslationKeys, "CANCEL", "cancel");
__publicField(_TranslationKeys, "PENDING", "pending");
__publicField(_TranslationKeys, "FILE_SIZE_TYPES", "fileSizeTypes");
__publicField(_TranslationKeys, "DAY_NAMES", "dayNames");
__publicField(_TranslationKeys, "DAY_NAMES_SHORT", "dayNamesShort");
__publicField(_TranslationKeys, "DAY_NAMES_MIN", "dayNamesMin");
__publicField(_TranslationKeys, "MONTH_NAMES", "monthNames");
__publicField(_TranslationKeys, "MONTH_NAMES_SHORT", "monthNamesShort");
__publicField(_TranslationKeys, "FIRST_DAY_OF_WEEK", "firstDayOfWeek");
__publicField(_TranslationKeys, "TODAY", "today");
__publicField(_TranslationKeys, "WEEK_HEADER", "weekHeader");
__publicField(_TranslationKeys, "WEAK", "weak");
__publicField(_TranslationKeys, "MEDIUM", "medium");
__publicField(_TranslationKeys, "STRONG", "strong");
__publicField(_TranslationKeys, "PASSWORD_PROMPT", "passwordPrompt");
__publicField(_TranslationKeys, "EMPTY_MESSAGE", "emptyMessage");
__publicField(_TranslationKeys, "EMPTY_FILTER_MESSAGE", "emptyFilterMessage");
__publicField(_TranslationKeys, "SHOW_FILTER_MENU", "showFilterMenu");
__publicField(_TranslationKeys, "HIDE_FILTER_MENU", "hideFilterMenu");
__publicField(_TranslationKeys, "SELECTION_MESSAGE", "selectionMessage");
__publicField(_TranslationKeys, "ARIA", "aria");
__publicField(_TranslationKeys, "SELECT_COLOR", "selectColor");
__publicField(_TranslationKeys, "BROWSE_FILES", "browseFiles");
var TranslationKeys = _TranslationKeys;
var _TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
};
__name(_TreeDragDropService, "TreeDragDropService");
__publicField(_TreeDragDropService, "ɵfac", /* @__PURE__ */ __name(function TreeDragDropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TreeDragDropService)();
}, "TreeDragDropService_Factory"));
__publicField(_TreeDragDropService, "ɵprov", ɵɵdefineInjectable({
  token: _TreeDragDropService,
  factory: _TreeDragDropService.ɵfac
}));
var TreeDragDropService = _TreeDragDropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

export {
  ConfirmEventType,
  ConfirmationService,
  ContextMenuService,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  MessageService,
  OverlayService,
  PrimeIcons,
  Header,
  Footer,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  TreeDragDropService
};
//# sourceMappingURL=chunk-QI35FFB2.js.map
