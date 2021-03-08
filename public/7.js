(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    var checkPending;

    var checkAge = function checkAge(rule, value, callback) {
      clearTimeout(checkPending);

      if (!value) {
        return callback(new Error('Please input the age'));
      }

      checkPending = setTimeout(function () {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    var validatePass = function validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the email'));
      } else {
        if (_this.ruleForm.email !== '') {
          _this.$refs.ruleForm.validateField('email');
        }

        callback();
      }
    };

    var validatePass2 = function validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the password '));
      } else {
        callback();
      }
    };

    var validatePass3 = function validatePass3(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the name '));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        email: '',
        password: '',
        name: ''
      },
      rules: {
        email: [{
          validator: validatePass,
          trigger: 'change'
        }],
        password: [{
          validator: validatePass2,
          trigger: 'change'
        }],
        name: [{
          validator: validatePass3,
          trigger: 'change'
        }]
      },
      layout: {
        labelCol: {
          span: 4
        },
        wrapperCol: {
          span: 14
        }
      }
    };
  },
  methods: {
    submitForm: function submitForm(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/register', {
            name: _this2.ruleForm.name,
            email: _this2.ruleForm.email,
            password: _this2.ruleForm.password
          }).then(function (response) {
            if (response.data.access_token) {
              localStorage.setItem('AToken', response.data.access_token);

              _this2.$router.push('/dashboard');
            }
          }).then(function (error) {
            console.log(error);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/login.vue?vue&type=template&id=339570e8&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/login.vue?vue&type=template&id=339570e8& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { padding: "5% 25%" } },
    [
      _c(
        "a-card",
        { staticStyle: { width: "600px", background: "#e2e8f0" } },
        [
          _c(
            "a-form-model",
            _vm._b(
              {
                ref: "ruleForm",
                attrs: { model: _vm.ruleForm, rules: _vm.rules }
              },
              "a-form-model",
              _vm.layout,
              false
            ),
            [
              _c(
                "a-form-model-item",
                { attrs: { "has-feedback": "", label: "name", prop: "name" } },
                [
                  _c("a-input", {
                    attrs: { type: "text", autocomplete: "off" },
                    model: {
                      value: _vm.ruleForm.name,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "name", $$v)
                      },
                      expression: "ruleForm.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-model-item",
                {
                  attrs: { "has-feedback": "", label: "email", prop: "email" }
                },
                [
                  _c("a-input", {
                    attrs: { type: "email", autocomplete: "off" },
                    model: {
                      value: _vm.ruleForm.email,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "email", $$v)
                      },
                      expression: "ruleForm.email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-model-item",
                {
                  attrs: {
                    "has-feedback": "",
                    label: "password",
                    prop: "password"
                  }
                },
                [
                  _c("a-input", {
                    attrs: { type: "password", autocomplete: "off" },
                    model: {
                      value: _vm.ruleForm.password,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "password", $$v)
                      },
                      expression: "ruleForm.password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-model-item",
                { attrs: { "wrapper-col": { span: 14, offset: 4 } } },
                [
                  _c(
                    "a-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.submitForm("ruleForm")
                        }
                      }
                    },
                    [_vm._v("\n        Submit\n      ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    {
                      staticStyle: { "margin-left": "10px" },
                      on: {
                        click: function($event) {
                          return _vm.resetForm("ruleForm")
                        }
                      }
                    },
                    [_vm._v("\n        Reset\n      ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    {
                      staticStyle: { "margin-left": "10px" },
                      attrs: { type: "primary" }
                    },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/login", exact: "" } },
                        [_vm._v("login\n      ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/components/login.vue":
/*!****************************************!*\
  !*** ./resources/components/login.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_339570e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=339570e8& */ "./resources/components/login.vue?vue&type=template&id=339570e8&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/components/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_339570e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_339570e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/login.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/components/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/login.vue?vue&type=template&id=339570e8&":
/*!***********************************************************************!*\
  !*** ./resources/components/login.vue?vue&type=template&id=339570e8& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_339570e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=339570e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/login.vue?vue&type=template&id=339570e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_339570e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_339570e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);