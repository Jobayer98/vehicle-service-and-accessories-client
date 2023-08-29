import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                c2--;
              }
              for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                if (sampleLines[s2] !== controlLines[c2]) {
                  if (s2 !== 1 || c2 !== 1) {
                    do {
                      s2--;
                      c2--;
                      if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a2) {
          return isArrayImpl(a2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e2) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/@smastrom/react-rating/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var f = (r2) => {
};
var d = "undefined" == typeof window ? import_react.useEffect : import_react.useLayoutEffect;
var h = (r2) => "number" == typeof r2 && r2 > 0;
var m = (r2) => h(r2) ? r2 : 0;
var O = (r2) => Math.round(100 * r2) / 100;
var L = (r2) => Math.round(2 * r2) / 2;
var p = (r2) => 0 === r2 ? 0 : -1 * O(r2);
var S = {};
var g = { GROUP: "rr--group", BOX: "rr--box", SVG: "rr--svg", RESET: "rr--reset", GROUP_RESET: "rr--focus-reset", DEF_50: "rr--svg-stop-1", DEF_100: "rr--svg-stop-2" };
var R = "rr--on";
var b = "rr--off";
var y = { ZOOM: "rr--fx-zoom", POSITION: "rr--fx-position", OPACITY: "rr--fx-opacity", COLORS: "rr--fx-colors" };
var E = { SMALL: "rr--rx-sm", MEDIUM: "rr--rx-md", LARGE: "rr--rx-lg", FULL: "rr--rx-full" };
var M = { SMALL: "rr--gap-sm", MEDIUM: "rr--gap-md", LARGE: "rr--gap-lg" };
var A = { SMALL: "rr--space-sm", MEDIUM: "rr--space-md", LARGE: "rr--space-lg" };
var v = "rr--pointer";
var B = "rr--disabled";
var I = "rr--dir-y";
var x = "rr--dir-x";
var C = "rr--has-stroke";
var D = "rr--has-border";
var N = "rr--hf-box-on";
var $ = "rr--hf-box-int";
var F = "rr--hf-box-off";
var w = "rr--hf-svg-on";
var T = "rr--hf-svg-off";
var k = { FILL: "--rr--fill-on-color", BOX: "--rr--box-on-color", BORDER: "--rr--border-on-color", STROKE: "--rr--stroke-on-color" };
var U = { FILL: "--rr--fill-off-color", BOX: "--rr--box-off-color", BORDER: "--rr--border-off-color", STROKE: "--rr--stroke-off-color" };
var G = "--rr--border-width";
var P = "horizontal";
var W = "vertical";
var X = "svg";
var K = "box";
var Z = { NONE: "none", SMALL: "small", MEDIUM: "medium", LARGE: "large", FULL: "full" };
var _ = { NONE: "none", ZOOM: "zoom", POSITION: "position", OPACITY: "opacity", COLORS: "colors" };
var V = { FILL: "activeFillColor", BOX: "activeBoxColor", BORDER: "activeBoxBorderColor", STROKE: "activeStrokeColor" };
var H = { FILL: "inactiveFillColor", BOX: "inactiveBoxColor", BORDER: "inactiveBoxBorderColor", STROKE: "inactiveStrokeColor" };
function j({ itemShapes: t2, testId: n2, itemStrokeWidth: a2 = 0, orientation: s2 = P, hasHF: c2 = false }) {
  const l2 = a2 > 0 ? -a2 / 2 : 0, u2 = a2 > 0 ? `${l2} ${l2}` : "0 0", f2 = (0, import_react.useRef)(null), h2 = (0, import_react.useRef)(null), [m2, L2] = (0, import_react.useState)(null);
  return d(() => {
    if (c2 && !h2.current && (h2.current = `rr_hf_${(Math.random() + 1).toString(36).substring(7)}`), f2.current) {
      const { width: r2, height: e2, x: t3, y: n3 } = f2.current.getBBox();
      if (((...r3) => r3.every((r4) => "number" == typeof r4))(r2, e2, t3, n3)) {
        const o2 = `${u2} ${O(r2 + a2)} ${O(e2 + a2)}`, i2 = `${p(t3)} ${p(n3)}`;
        L2({ viewBox: o2, translateData: i2 });
      }
    }
  }, [t2, a2, c2]), (0, import_jsx_runtime.jsxs)("svg", { "aria-hidden": "true", className: g.SVG, xmlns: "http://www.w3.org/2000/svg", viewBox: m2 ? m2.viewBox : "0 0 0 0", preserveAspectRatio: "xMidYMid meet", ...a2 > 0 ? { strokeWidth: a2 } : {}, ...n2, children: [c2 && h2.current && (0, import_jsx_runtime.jsx)("defs", { children: (0, import_jsx_runtime.jsxs)("linearGradient", { id: h2.current, ...s2 === W ? { gradientTransform: "rotate(90)" } : {}, children: [(0, import_jsx_runtime.jsx)("stop", { className: g.DEF_50, offset: "50%" }), (0, import_jsx_runtime.jsx)("stop", { className: g.DEF_100, offset: "50%" })] }) }), (0, import_jsx_runtime.jsx)("g", { ref: f2, shapeRendering: "geometricPrecision", ...function() {
    if (m2) {
      const r2 = `translate(${m2 == null ? void 0 : m2.translateData})`;
      return "translate(0 0)" === r2 ? {} : { transform: r2 };
    }
    return { transform: void 0 };
  }(), ...c2 ? { fill: `url('#${h2.current}')` } : {}, children: t2 })] });
}
function Y(r2, e2, t2) {
  switch (e2) {
    case V.FILL:
      return r2[k.FILL] = t2, true;
    case V.BOX:
      return r2[k.BOX] = t2, true;
    case V.BORDER:
      return r2[k.BORDER] = t2, true;
    case V.STROKE:
      return r2[k.STROKE] = t2, true;
  }
  return false;
}
function z(r2, e2, t2) {
  if (!Y(r2, e2, t2))
    switch (e2) {
      case H.FILL:
        r2[U.FILL] = t2;
        break;
      case H.BOX:
        r2[U.BOX] = t2;
        break;
      case H.BORDER:
        r2[U.BORDER] = t2;
        break;
      case H.STROKE:
        r2[U.STROKE] = t2;
    }
}
function q(r2, e2, t2) {
  const n2 = {};
  let o2;
  for (const [t3, o3] of Object.entries(r2))
    Y(n2, t3, o3[e2]);
  return t2 ? (o2 = Array(e2).fill({}), o2.push(n2)) : o2 = Array(e2 + 1).fill(n2), o2;
}
var J = (r2) => `${r2} ${y.COLORS}`;
function Q({ className: r2, radius: e2, readOnly: t2, isDisabled: n2, isDynamic: o2, transition: i2, orientation: a2, absoluteBoxBorderWidth: s2, absoluteStrokeWidth: c2, spaceBetween: l2, spaceInside: u2 }) {
  const f2 = o2 ? v : "", d2 = function(r3) {
    switch (r3) {
      case Z.SMALL:
        return M.SMALL;
      case Z.MEDIUM:
        return M.MEDIUM;
      case Z.LARGE:
        return M.LARGE;
      default:
        return "";
    }
  }(l2), h2 = function(r3) {
    switch (r3) {
      case Z.SMALL:
        return A.SMALL;
      case Z.MEDIUM:
        return A.MEDIUM;
      case Z.LARGE:
        return A.LARGE;
      default:
        return "";
    }
  }(u2), m2 = !t2 && n2 ? B : "", O2 = o2 && i2 !== _.NONE ? function(r3) {
    switch (r3) {
      case _.ZOOM:
        return J(y.ZOOM);
      case _.POSITION:
        return J(y.POSITION);
      case _.OPACITY:
        return J(y.OPACITY);
      case _.COLORS:
        return y.COLORS;
      default:
        return "";
    }
  }(i2) : "", L2 = a2 === W ? I : x, p2 = function(r3) {
    switch (r3) {
      case Z.SMALL:
        return E.SMALL;
      case Z.MEDIUM:
        return E.MEDIUM;
      case Z.LARGE:
        return E.LARGE;
      case Z.FULL:
        return E.FULL;
      default:
        return "";
    }
  }(e2), S2 = s2 > 0 ? D : "", R2 = c2 > 0 ? C : "";
  return `${g.GROUP} ${L2} ${R2} ${S2}
${O2} ${p2} ${f2} ${m2} ${d2}
${h2} ${r2}`.replace(/  +/g, " ").trimEnd();
}
function rr(r2, e2, t2) {
  return Array.from({ length: e2 }, (e3, n2) => r2 ? n2 === t2 ? R : b : n2 <= t2 ? R : b);
}
function er(r2, e2, t2) {
  const n2 = Math.floor(L(r2));
  return Array.from({ length: e2 }, (r3, e3) => "box" === t2 ? e3 > n2 ? F : e3 === n2 ? $ : N : e3 > n2 ? T : w);
}
function tr(r2, e2) {
  const t2 = {};
  h(e2) && (t2[G] = `${e2}px`);
  const n2 = Object.entries(r2);
  if (n2.length > 0)
    for (const [r3, e3] of n2)
      z(t2, r3, e3);
  return t2;
}
var nr = [V.FILL, V.BOX, V.STROKE, V.BORDER];
function or(r2, e2, t2 = false) {
  return Array.from({ length: r2 }, (n2, o2) => t2 && e2 < 0 ? o2 === r2 - 1 ? 0 : -1 : e2 <= 0 ? 0 === o2 ? 0 : -1 : e2 > 0 ? o2 === e2 ? 0 : -1 : void 0);
}
var ir = "@smastrom/react-rating";
var ar = (r2) => `[${ir}] - Nothing's returned from rendering. Reason: ${r2}.`;
function sr(r2, e2) {
  return r2.shouldRender = false, r2.reason = ar(e2), r2;
}
var cr = "itemShapes is not a valid JSX element";
var lr = (0, import_jsx_runtime.jsx)("polygon", { points: "25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02" });
var ur = (0, import_jsx_runtime.jsx)("path", { d: "M12.5,18.16l-7.73,5.61,2.95-9.08L0,9.07H9.55S12.5,0,12.5,0l2.95,9.07h9.55l-7.73,5.62,2.95,9.08-7.73-5.61Z" });
var fr = (0, import_jsx_runtime.jsx)("path", { d: "M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z" });
var dr = (0, import_jsx_runtime.jsx)("path", { d: "M22.72,8.24h-6.68L13.97,1.88c-.81-2.51-2.13-2.51-2.95,0l-2.07,6.36H2.28c-2.63,0-3.04,1.25-.91,2.8l5.41,3.93-2.06,6.36c-.81,2.51,.25,3.28,2.39,1.73l5.41-3.93,5.41,3.93c2.13,1.55,3.2,.77,2.39-1.73l-2.07-6.36,5.41-3.93c2.13-1.55,1.72-2.8-.91-2.8Z" });
var hr = (0, import_jsx_runtime.jsx)("path", { d: "M11.58,.77c.51-1.02,1.33-1.02,1.84,0l2.34,4.73c.5,1.02,1.84,2,2.98,2.16l5.22,.76c1.13,.17,1.39,.95,.57,1.75l-3.78,3.68c-.82,.8-1.33,2.37-1.14,3.5l.89,5.2c.19,1.13-.48,1.61-1.49,1.08l-4.67-2.45c-1.01-.53-2.67-.53-3.68,0l-4.67,2.46c-1.01,.53-1.68,.05-1.49-1.08l.89-5.2c.19-1.13-.32-2.7-1.14-3.5L.48,10.17c-.82-.8-.56-1.58,.57-1.75l5.22-.76c1.13-.16,2.47-1.14,2.98-2.16L11.58,.77h0Z" });
var mr = (0, import_jsx_runtime.jsx)("path", { d: "M19.29,1.61c-2.15-2.15-5.63-2.15-7.78,0,0,0,0,0,0,0l-1.06,1.06-1.06-1.06C7.24-.54,3.76-.54,1.61,1.61-.54,3.76-.54,7.24,1.61,9.39l1.06,1.06,7.78,7.78,7.78-7.78,1.06-1.06c2.15-2.15,2.15-5.63,0-7.78,0,0,0,0,0,0Z" });
var Or = { itemShapes: lr, itemStrokeWidth: 2, activeFillColor: "#ffb23f", inactiveFillColor: "#fff7ed", activeStrokeColor: "#e17b21", inactiveStrokeColor: "#eda76a" };
var Lr = (0, import_react.forwardRef)(({ value: n2, items: s2 = 5, readOnly: h2 = false, onChange: O2 = f, onHoverChange: p2 = f, onFocus: R2 = f, onBlur: b2 = f, isDisabled: y2 = false, highlightOnlySelected: E2 = false, orientation: M2 = P, spaceBetween: A2 = Z.NONE, spaceInside: v2 = Z.SMALL, radius: B2 = Z.NONE, transition: I2 = _.COLORS, itemStyles: x2 = Or, isRequired: C2 = false, halfFillMode: D2 = X, visibleLabelId: N2, visibleItemLabelIds: $2, invisibleItemLabels: F2, invisibleLabel: w2 = h2 ? n2 > 0 ? `Rated ${n2} on ${s2}` : "Not rated" : "Rating Selection", resetLabel: T2 = "Reset rating", id: k2, className: U2, style: G2 }, W2) => {
  const V2 = Array.from({ length: s2 }, (r2, e2) => e2 + 1), H2 = h2 && !Number.isInteger(n2), Y2 = H2 && !E2, z2 = H2 && E2 ? Math.round(n2) : n2, J2 = !h2 && !y2, ir2 = z2 >= 0.25, ar2 = "string" == typeof U2 ? U2 : "", lr2 = D2 === K ? K : X, ur2 = Y2 && !((r2) => Number.isInteger(L(r2)))(z2), fr2 = !C2 && !h2, dr2 = C2 ? s2 : s2 + 1, hr2 = Y2 ? function(r2, e2) {
    const t2 = L(e2);
    return Number.isInteger(t2) ? r2.indexOf(t2) : Math.floor(t2);
  }(V2, z2) : V2.indexOf(z2), { staticColors: mr2, arrayColors: Lr2, itemShapes: pr, absoluteStrokeWidth: Sr, absoluteBoxBorderWidth: gr } = (0, import_react.useMemo)(() => {
    const { itemShapes: r2, itemStrokeWidth: e2, boxBorderWidth: t2, ...n3 } = x2, o2 = function(r3) {
      const e3 = { ...r3 }, t3 = {}, n4 = Object.entries(e3);
      if (n4.length > 0)
        for (const [r4, o3] of n4)
          if (Array.isArray(o3) || "string" == typeof o3) {
            if (Array.isArray(o3))
              for (const n5 of nr)
                if (n5 === r4) {
                  const n6 = o3.filter((r5) => "string" == typeof r5);
                  n6.length > 0 && (t3[r4] = n6, delete e3[r4]);
                } else
                  delete e3[r4];
          } else
            delete e3[r4];
      return { arrayColors: t3, staticColors: e3 };
    }(n3);
    return { itemShapes: r2, absoluteStrokeWidth: m(e2), absoluteBoxBorderWidth: m(t2), ...o2 };
  }, [x2]), Rr = Object.keys(Lr2).length > 0, br = (0, import_react.useCallback)((r2, e2) => ({ dynamicClassNames: ur2 ? er(z2, s2, lr2) : rr(E2, s2, r2), dynamicCssVars: e2 && Rr ? q(Lr2, r2, E2) : [] }), [Lr2, Rr, E2, lr2, ur2, s2, z2]), yr = (0, import_react.useCallback)(() => Dr(or(dr2, hr2, !C2)), [hr2, dr2, C2]), Er = (0, import_react.useRef)(true), Mr = (0, import_react.useRef)(true), Ar = (0, import_react.useRef)(null), vr = (0, import_react.useRef)([]), Br = (0, import_react.useRef)(false), [Ir, xr] = (0, import_react.useState)({ staticCssVars: tr(mr2, gr), ...br(hr2, ir2) }), [Cr, Dr] = (0, import_react.useState)(() => J2 ? or(dr2, hr2, !C2) : []);
  d(() => {
    J2 && vr.current && (Br.current = function(r2) {
      if (r2)
        return "rtl" === getComputedStyle(r2).getPropertyValue("direction");
      return false;
    }(vr.current[0]));
  }, [J2]), (0, import_react.useEffect)(() => {
    if (!Er.current)
      return xr({ staticCssVars: tr(mr2, gr), ...br(hr2, ir2) });
    Er.current = false;
  }, [mr2, br, gr, hr2, ir2]), (0, import_react.useEffect)(() => {
    if (!Mr.current && J2)
      return yr();
    Mr.current = false;
  }, [J2, yr]);
  const { shouldRender: Nr, reason: $r } = function({ items: r2, itemShapes: e2 }) {
    const t2 = { shouldRender: true, reason: "" };
    if ("number" != typeof r2 || r2 < 1 || r2 > 10)
      return sr(t2, "items is invalid");
    if (!e2)
      return sr(t2, "itemStyles needs at least the property itemShapes set");
    if (!Array.isArray(e2) && !(0, import_react.isValidElement)(e2))
      return sr(t2, cr);
    if (Array.isArray(e2)) {
      if (e2.length !== r2)
        return sr(t2, "itemShapes length mismatch");
      if (!e2.every((r3) => (0, import_react.isValidElement)(r3)))
        return sr(t2, cr);
    }
    return t2;
  }({ items: s2, itemShapes: pr });
  if (!Nr)
    return console.error($r), null;
  function Fr(r2, e2, t2 = () => {
  }) {
    vr.current.some((e3) => e3 === r2.relatedTarget) ? t2() : e2();
  }
  function wr() {
    p2(0), yr();
  }
  function Tr(r2) {
    Fr(r2, () => {
      wr();
    }), xr({ ...Ir, ...br(hr2, ir2) });
  }
  function kr(r2) {
    Fr(r2, () => {
      wr(), b2();
    });
  }
  function Ur(r2, e2) {
    const t2 = !C2 && e2 === V2.length ? 0 : e2 + 1;
    Fr(r2, () => {
      R2(), p2(t2);
    }, () => {
      p2(t2);
    });
  }
  function Gr(r2) {
    Dr(or(dr2, r2, !C2)), vr.current[r2].focus();
  }
  const Pr = Q({ className: ar2, radius: B2, readOnly: h2, isDisabled: y2, isDynamic: J2, transition: I2, orientation: M2, absoluteBoxBorderWidth: gr, absoluteStrokeWidth: Sr, spaceBetween: A2, spaceInside: v2 });
  function Wr(r2) {
    return { ref: (e2) => vr.current[r2] = e2 };
  }
  function Xr(r2) {
    return { tabIndex: Cr[r2], onKeyDown: (e2) => function(r3, e3) {
      let t2 = 0;
      const n3 = C2 ? V2.length - 1 : V2.length, o2 = e3 - 1, i2 = e3 + 1, a2 = !C2 && e3 === V2.length, s3 = 0 === e3 ? n3 : o2, c2 = n3 === e3 ? 0 : i2;
      switch (r3.code) {
        case "Shift":
        case "Tab":
          return true;
        case "ArrowDown":
        case "ArrowRight":
          return t2 = Br.current ? s3 : c2, Gr(t2);
        case "ArrowUp":
        case "ArrowLeft":
          return t2 = Br.current ? c2 : s3, Gr(t2);
        case "Enter":
        case "Space":
          return r3.preventDefault(), O2(a2 ? 0 : e3 + 1);
      }
      r3.preventDefault(), r3.stopPropagation();
    }(e2, r2) };
  }
  function Kr(r2) {
    return { onClick: (e2) => function(r3, e3) {
      r3.stopPropagation(), O2(C2 || hr2 !== e3 ? e3 + 1 : 0);
    }(e2, r2), onMouseEnter: () => function(r3) {
      p2(r3 + 1), xr({ ...Ir, ...br(r3, true) });
    }(r2), onMouseLeave: Tr };
  }
  function Zr(r2) {
    if (h2)
      return {};
    const e2 = {};
    if (Array.isArray($2))
      e2["aria-labelledby"] = $2[r2];
    else {
      const t2 = Array.isArray(F2) ? F2 : V2.map((r3, e3) => `Rate ${e3 + 1}`);
      e2["aria-label"] = t2[r2];
    }
    return y2 && (e2["aria-disabled"] = "true"), { role: "radio", "aria-checked": r2 + 1 === z2, ...e2 };
  }
  function _r(r2) {
    const e2 = { itemShapes: Array.isArray(pr) ? pr[r2] : pr, itemStrokeWidth: Sr, orientation: M2, hasHF: false, testId: {} };
    return ur2 && lr2 === X && (e2.hasHF = r2 === hr2), e2;
  }
  return (0, import_jsx_runtime.jsx)("div", { id: k2, className: Pr, style: { ...G2, ...Ir.staticCssVars }, ref: function(r2) {
    J2 && !C2 && (Ar.current = r2), W2 && (W2.current = r2);
  }, ...function() {
    if (!h2) {
      const r2 = C2 && !y2, e2 = { role: "radiogroup", "aria-required": r2 };
      return r2 && (e2["aria-invalid"] = z2 <= 0), "string" == typeof N2 && N2.length > 0 ? e2["aria-labelledby"] = N2 : e2["aria-label"] = w2, e2;
    }
    return { role: "img", "aria-label": w2 };
  }(), ...S, children: V2.map((t2, n3) => {
    return (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [(0, import_jsx_runtime.jsx)("div", { className: `${g.BOX} ${Ir.dynamicClassNames[n3]}`, style: Ir.dynamicCssVars[n3], ...Zr(n3), ...(i2 = n3, J2 ? { ...Wr(i2), ...Xr(i2), ...Kr(i2), onFocus: (r2) => Ur(r2, i2), onBlur: (r2) => kr(r2) } : {}), children: (0, import_jsx_runtime.jsx)(j, { ..._r(n3) }) }), fr2 && n3 === V2.length - 1 && (0, import_jsx_runtime.jsx)("div", { ...(o2 = n3 + 1, { className: g.RESET, role: "radio", "aria-label": T2, "aria-checked": 0 === z2, onClick: () => O2(0), onFocus: (r2) => {
      var _a;
      Ur(r2, o2), (_a = Ar.current) == null ? void 0 : _a.classList.add(g.GROUP_RESET);
    }, onBlur: (r2) => {
      var _a;
      kr(r2), (_a = Ar.current) == null ? void 0 : _a.classList.remove(g.GROUP_RESET);
    }, ...Xr(o2), ...Wr(o2), ...y2 ? { "aria-disabled": "true" } : {} }) })] }, t2);
    var o2, i2;
  }) });
});
Lr.displayName = "Rating";
export {
  mr as Heart,
  Lr as Rating,
  fr as RoundedStar,
  lr as Star,
  hr as StickerStar,
  dr as ThinRoundedStar,
  ur as ThinStar
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@smastrom_react-rating.js.map
