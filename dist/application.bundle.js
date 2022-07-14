(function (exports,ui_vue3,ui_vue3_vuex) {
    'use strict';

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
    var Application = {
      methods: {
        increaseCounter: function increaseCounter() {
          this.$store.dispatch('counterStore/increaseCounter');
        },
        decreaseCounter: function decreaseCounter() {
          this.$store.dispatch('counterStore/decreaseCounter');
        }
      },
      computed: _objectSpread(_objectSpread(_objectSpread({}, ui_vue3_vuex.mapState('counterStore', ['counter'])), ui_vue3_vuex.mapState('statusStore', ['lastAction'])), ui_vue3_vuex.mapGetters('counterStore', ['double'])),
      // language=Vue
      template: "\n        <div class=\"demo-header\">{{$Bitrix.Loc.getMessage('DEMO_VUEX_TITLE')}}</div>\n        <div>\n            <div>{{ $Bitrix.Loc.getMessage('DEMO_VUEX_COUNTER', {'#COUNTER#': this.counter, '#DOUBLE#': this.double}) }}</div> \n            <div>{{ $Bitrix.Loc.getMessage('DEMO_VUEX_LAST_ACTION', {'#COUNTER#': this.lastAction}) }}</div> \n            <div>\n                <button @click=\"increaseCounter\">+</button>\n                <button @click=\"decreaseCounter\">-</button>\n            </div>\n        </div>\n    "
    };

    var counterStore = {
      namespaced: true,
      state: function state() {
        return {
          counter: 0
        };
      },
      getters: {
        "double": function double(store) {
          return store.counter * 2;
        }
      },
      actions: {
        increaseCounter: function increaseCounter(store) {
          store.commit('increaseCounter', {
            count: 1
          });
          this.dispatch('statusStore/setAction', 'Plus');
        },
        decreaseCounter: function decreaseCounter(store) {
          store.commit('increaseCounter', {
            count: -1
          });
          this.dispatch('statusStore/setAction', 'Minus');
        },
        resetCounter: function resetCounter(store) {
          store.commit('resetCounter');
          this.dispatch('statusStore/setAction', 'Reset');
        }
      },
      mutations: {
        increaseCounter: function increaseCounter(state) {
          var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _payload$count = payload.count,
              count = _payload$count === void 0 ? 1 : _payload$count;
          state.counter += count;
        },
        resetCounter: function resetCounter(state) {
          state.counter = 0;
        }
      }
    };

    var statusStore = {
      namespaced: true,
      state: function state() {
        return {
          lastAction: 'None'
        };
      },
      actions: {
        setAction: function setAction(store, payload) {
          var action = payload.toString();
          store.commit('setAction', action);
        }
      },
      mutations: {
        setAction: function setAction(state, action) {
          state.lastAction = action;
        }
      }
    };

    function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

    function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

    var _store = /*#__PURE__*/new WeakMap();

    var _rootNode = /*#__PURE__*/new WeakMap();

    var _application = /*#__PURE__*/new WeakMap();

    var VuexDemo = /*#__PURE__*/function () {
      function VuexDemo(rootNode) {
        babelHelpers.classCallCheck(this, VuexDemo);

        _classPrivateFieldInitSpec(this, _store, {
          writable: true,
          value: void 0
        });

        _classPrivateFieldInitSpec(this, _rootNode, {
          writable: true,
          value: void 0
        });

        _classPrivateFieldInitSpec(this, _application, {
          writable: true,
          value: void 0
        });

        babelHelpers.classPrivateFieldSet(this, _store, ui_vue3_vuex.createStore({
          modules: {
            counterStore: counterStore,
            statusStore: statusStore
          }
        }));
        babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      }

      babelHelpers.createClass(VuexDemo, [{
        key: "start",
        value: function start() {
          babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
            name: 'Vuex Application',
            components: {
              Application: Application
            },
            template: '<Application/>'
          }));
          babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _store));
          babelHelpers.classPrivateFieldGet(this, _application).mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
        }
      }, {
        key: "getStore",
        value: function getStore() {
          return babelHelpers.classPrivateFieldGet(this, _store);
        }
      }]);
      return VuexDemo;
    }();

    exports.VuexDemo = VuexDemo;

}((this.BX = this.BX || {}),BX.Vue3,BX.Vue3.Vuex));
//# sourceMappingURL=application.bundle.js.map
