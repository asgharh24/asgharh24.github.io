(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(module,exports,__webpack_require__){},13:function(module,exports,__webpack_require__){},17:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(4),react_default=__webpack_require__.n(react),react_dom=__webpack_require__(7),react_dom_default=__webpack_require__.n(react_dom),logo=(__webpack_require__(12),__webpack_require__.p+"static/media/logo.103b5fa1.svg"),workbox_window_prod_es5=(__webpack_require__(13),__webpack_require__(6)),jsx_runtime=(__webpack_require__(16),__webpack_require__(0));var src_App=function(){if("serviceWorker"in navigator){var registration,wb=new workbox_window_prod_es5.a("/service-worker.js"),showSkipWaitingPrompt=function(event){wb.addEventListener("controlling",(function(event){window.location.reload()})),registration&&registration.waiting&&Object(workbox_window_prod_es5.b)(registration.waiting,{type:"SKIP_WAITING"})};wb.addEventListener("waiting",showSkipWaitingPrompt),wb.addEventListener("externalwaiting",showSkipWaitingPrompt),wb.register().then((function(r){return registration=r}))}return Object(jsx_runtime.jsxs)("div",{className:"App",children:[Object(jsx_runtime.jsxs)("header",{className:"App-header",children:[Object(jsx_runtime.jsx)("img",{src:logo,className:"App-logo",alt:"logo"}),Object(jsx_runtime.jsxs)("p",{children:["Edit ",Object(jsx_runtime.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(jsx_runtime.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Updated Application"})]}),Object(jsx_runtime.jsxs)("div",{id:"snackbar",children:["An Update is Available ",Object(jsx_runtime.jsx)("button",{onClick:function(){!function(){var x=document.getElementById("snackbar");x.className="show",setTimeout((function(){x.className=x.className.replace("show","")}),1e4)}()},children:"Update"})]})]})},isLocalhost=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then((function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;null!=installingWorker&&(installingWorker.onstatechange=function(){"installed"===installingWorker.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),config&&config.onUpdate&&config.onUpdate(registration)):(console.log("Content is cached for offline use."),config&&config.onSuccess&&config.onSuccess(registration)))})}})).catch((function(error){console.error("Error during service worker registration:",error)}))}var src_reportWebVitals=function(onPerfEntry){onPerfEntry&&onPerfEntry instanceof Function&&__webpack_require__.e(3).then(__webpack_require__.bind(null,18)).then((function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry),getFID(onPerfEntry),getFCP(onPerfEntry),getLCP(onPerfEntry),getTTFB(onPerfEntry)}))};react_dom_default.a.render(Object(jsx_runtime.jsx)(react_default.a.StrictMode,{children:Object(jsx_runtime.jsx)(src_App,{})}),document.getElementById("root")),function(config){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var swUrl="".concat("","/service-worker.js");isLocalhost?(!function(swUrl,config){fetch(swUrl,{headers:{"Service-Worker":"script"}}).then((function(response){var contentType=response.headers.get("content-type");404===response.status||null!=contentType&&-1===contentType.indexOf("javascript")?navigator.serviceWorker.ready.then((function(registration){registration.unregister().then((function(){window.location.reload()}))})):registerValidSW(swUrl,config)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(swUrl,config),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):registerValidSW(swUrl,config)}))}}(),src_reportWebVitals()}},[[17,1,2]]]);
//# sourceMappingURL=main.8ffdeb07.chunk.js.map