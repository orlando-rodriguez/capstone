module.exports=__NEXT_REGISTER_PAGE("/product",function(){return{page:webpackJsonp([4],{689:function(e,t,n){e.exports=n(690)},690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),a=n.n(r),o=n(0),l=n.n(o),i=n(91),u=n(78),c=n(42);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,n,r,o,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),f=0;f<i;f++)c[f]=arguments[f];return p(r,(n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),Object.defineProperty(m(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{loading:!1,quantity:1}}),Object.defineProperty(m(r),"_handleSubmit",{configurable:!0,enumerable:!0,writable:!0,value:(o=a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.productId,n=r.state.quantity,r.setState({loading:!0}),e.next=5,Object(u.a)(t,n);case 5:e.sent,r.setState({loading:!1,quantity:1});case 7:case"end":return e.stop()}},e,this)}),l=function(){var e=this,t=arguments;return new Promise(function(n,r){var a=o.apply(e,t);function l(e,t){try{var o=a[e](t),l=o.value}catch(e){return void r(e)}o.done?n(l):Promise.resolve(l).then(i,u)}function i(e){l("next",e)}function u(e){l("throw",e)}i()})},function(){return l.apply(this,arguments)})}),Object.defineProperty(m(r),"_handleChange",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;return r.setState({quantity:t})}}),n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state,n=t.loading,r=t.quantity;return l.a.createElement(c.g,{type:"number",placeholder:"Quantity",value:r,onChange:function(t){return e._handleChange(t)},action:{color:"orange",content:"Add to Cart",icon:"plus cart",onClick:this._handleSubmit,loading:n,disabled:n}})}}])&&s(n.prototype,r),o&&s(n,o),t}(),b=function(e){var t=e.id,n=e.image,r=e.name,a=e.meta,o=e.sku;return l.a.createElement(c.h.Group,null,l.a.createElement(c.h,null,l.a.createElement(c.h.Image,{size:"medium",src:n}),l.a.createElement(c.h.Content,null,l.a.createElement(c.h.Header,null,r),l.a.createElement(c.h.Description,null,l.a.createElement("p",null,a.display_price.with_tax.formatted),l.a.createElement(c.i,null,"SKU: ",o)),l.a.createElement(c.h.Extra,null,l.a.createElement(d,{productId:t})))))},y=function(e){var t=e.description,n=e.ingredients;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.e,{as:"h3"},"About this product"),l.a.createElement("p",null,t),l.a.createElement(c.c,null),l.a.createElement(c.n,{celled:!0},l.a.createElement(c.n.Header,null,l.a.createElement(c.n.Row,null,l.a.createElement(c.n.HeaderCell,{colSpan:"2"},"Attributes"))),l.a.createElement(c.n.Body,null,l.a.createElement(c.n.Row,null,l.a.createElement(c.n.Cell,null,"Ingredients"),l.a.createElement(c.n.Cell,null,n)))))};function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){var t=e.product;return l.a.createElement(i.a,{title:t.name},l.a.createElement(b,t),l.a.createElement(y,t))};g.getInitialProps=function(){var e,t=(e=a.a.mark(function e(t){var n,r,o,l,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.id,e.next=3,Object(u.d)(n);case 3:return r=e.sent,o=r.data,l=r.included.main_images,i=!!o.relationships.main_image&&o.relationships.main_image.data.id,e.abrupt("return",{product:h({},o,{image:i?l.find(function(e){return e.id===i}).link.href:"/static/moltin-light-hex.svg"})});case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function l(e,t){try{var n=o[e](t),l=n.value}catch(e){return void a(e)}n.done?r(l):Promise.resolve(l).then(i,u)}function i(e){l("next",e)}function u(e){l("throw",e)}i()})});return function(e){return t.apply(this,arguments)}}();t.default=g}},[689]).default}});