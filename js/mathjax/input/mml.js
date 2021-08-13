!function(r){var o={};function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=r,a.c=o,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=4)}([function(t,e,r){"use strict";var o,a=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,a,n=r.call(t),i=[];try{for(;(void 0===e||0<e--)&&!(o=n.next()).done;)i.push(o.value)}catch(t){a={error:t}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i};Object.defineProperty(e,"__esModule",{value:!0});var n=r(7),l=r(1),u=r(8),c=r(2),h=r(3),i=function(i){function t(t){void 0===t&&(t={});var e=this,r=s(l.separateOptions(t,c.FindMathML.OPTIONS,h.MathMLCompile.OPTIONS),3),o=r[0],a=r[1],n=r[2];return(e=i.call(this,o)||this).findMathML=e.options.FindMathML||new c.FindMathML(a),e.mathml=e.options.MathMLCompile||new h.MathMLCompile(n),e.mmlFilters=new u.FunctionList,e}return a(t,i),t.prototype.setAdaptor=function(t){i.prototype.setAdaptor.call(this,t),this.findMathML.adaptor=t,this.mathml.adaptor=t},t.prototype.setMmlFactory=function(t){i.prototype.setMmlFactory.call(this,t),this.mathml.setMmlFactory(t)},Object.defineProperty(t.prototype,"processStrings",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.compile=function(t,e){var r=t.start.node;if(!r||this.options.forceReparse){var o=this.executeFilters(this.preFilters,t,e,t.math||"<math></math>"),a=this.checkForErrors(this.adaptor.parse(o,"text/"+this.options.parseAs)),n=this.adaptor.body(a);1!==this.adaptor.childNodes(n).length&&this.error("MathML must consist of a single element"),r=this.adaptor.remove(this.adaptor.firstChild(n)),"math"!==this.adaptor.kind(r).replace(/^[a-z]+:/,"")&&this.error("MathML must be formed by a <math> element, not <"+this.adaptor.kind(r)+">")}return r=this.executeFilters(this.mmlFilters,t,e,r),this.executeFilters(this.postFilters,t,e,this.mathml.compile(r))},t.prototype.checkForErrors=function(t){var e=this.adaptor.tags(this.adaptor.body(t),"parsererror")[0];return e&&(""===this.adaptor.textContent(e)&&this.error("Error processing MathML"),this.options.parseError.call(this,e)),t},t.prototype.error=function(t){throw new Error(t)},t.prototype.findMath=function(t){return this.findMathML.findMath(t)},t.NAME="MathML",t.OPTIONS=l.defaultOptions({parseAs:"html",forceReparse:!1,FindMathML:null,MathMLCompile:null,parseError:function(t){this.error(this.adaptor.textContent(t).replace(/\n.*/g,""))}},n.AbstractInputJax.OPTIONS),t}(n.AbstractInputJax);e.MathML=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions},function(t,e,r){"use strict";var o,a=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),f=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(9),M="http://www.w3.org/1998/Math/MathML",i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.findMath=function(t){var e=new Set;this.findMathNodes(t,e),this.findMathPrefixed(t,e);var r=this.adaptor.root(this.adaptor.document);return"html"===this.adaptor.kind(r)&&0===e.size&&this.findMathNS(t,e),this.processMath(e)},e.prototype.findMathNodes=function(t,e){var r,o;try{for(var a=f(this.adaptor.tags(t,"math")),n=a.next();!n.done;n=a.next()){var i=n.value;e.add(i)}}catch(t){r={error:t}}finally{try{n&&!n.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}},e.prototype.findMathPrefixed=function(t,e){var r,o,a,n,i=this.adaptor.root(this.adaptor.document);try{for(var s=f(this.adaptor.allAttributes(i)),l=s.next();!l.done;l=s.next()){var u=l.value;if("xmlns:"===u.name.substr(0,6)&&u.value===M){var c=u.name.substr(6);try{for(var h=(a=void 0,f(this.adaptor.tags(t,c+":math"))),p=h.next();!p.done;p=h.next()){var d=p.value;e.add(d)}}catch(t){a={error:t}}finally{try{p&&!p.done&&(n=h.return)&&n.call(h)}finally{if(a)throw a.error}}}}}catch(t){r={error:t}}finally{try{l&&!l.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}},e.prototype.findMathNS=function(t,e){var r,o;try{for(var a=f(this.adaptor.tags(t,"math",M)),n=a.next();!n.done;n=a.next()){var i=n.value;e.add(i)}}catch(t){r={error:t}}finally{try{n&&!n.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}},e.prototype.processMath=function(t){var e,r,o=[];try{for(var a=f(Array.from(t)),n=a.next();!n.done;n=a.next()){var i=n.value,s="block"===this.adaptor.getAttribute(i,"display")||"display"===this.adaptor.getAttribute(i,"mode"),l={node:i,n:0,delim:""},u={node:i,n:0,delim:""};o.push({math:this.adaptor.outerHTML(i),start:l,end:u,display:s})}}catch(t){e={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(e)throw e.error}}return o},e.OPTIONS={},e}(n.AbstractFindMath);e.FindMathML=i},function(t,e,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},c=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(10),n=r(1),i=r(11),s=function(){function t(t){void 0===t&&(t={});var e=this.constructor;this.options=n.userOptions(n.defaultOptions({},e.OPTIONS),t),this.options.verify&&(this.options.verify=n.userOptions(n.defaultOptions({},e.VERIFY),this.options.verify))}return t.prototype.setMmlFactory=function(t){this.factory=t},t.prototype.compile=function(t){var e=this.makeNode(t);return e.verifyTree(this.options.verify),e.setInheritedAttributes({},!1,0,!1),e.walkTree(this.markMrows),e},t.prototype.makeNode=function(t){var e,r,o=!1,a="",n=this.adaptor.kind(t).replace(/^.*:/,"");try{for(var i=c(this.adaptor.allClasses(t)),s=i.next();!s.done;s=i.next()){var l=s.value;l.match(/^MJX-TeXAtom-/)?(a=l.substr(12),n="TeXAtom"):"MJX-fixedlimits"===l&&(o=!0)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}this.factory.getNodeClass(n)||this.error('Unknown node type "'+n+'"');var u=this.factory.create(n);return a&&this.texAtom(u,a,o),this.addAttributes(u,t),this.checkClass(u,t),this.addChildren(u,t),u},t.prototype.addAttributes=function(t,e){var r,o;try{for(var a=c(this.adaptor.allAttributes(e)),n=a.next();!n.done;n=a.next()){var i=n.value,s=i.name;if("class"!==s){var l=this.filterAttribute(s,i.value);if(null!==l){var u=l.toLowerCase();"true"===u||"false"===u?t.attributes.set(s,"true"===u):t.attributes.set(s,l)}}}}catch(t){r={error:t}}finally{try{n&&!n.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}},t.prototype.filterAttribute=function(t,e){return e},t.prototype.addChildren=function(t,e){var r,o;if(0!==t.arity)try{for(var a=c(this.adaptor.childNodes(e)),n=a.next();!n.done;n=a.next()){var i=n.value,s=this.adaptor.kind(i);if("#comment"!==s)if("#text"===s)this.addText(t,i);else if(t.isKind("annotation-xml"))t.appendChild(this.factory.create("XML").setXML(i));else{var l=t.appendChild(this.makeNode(i));0===l.arity&&this.adaptor.childNodes(i).length&&(this.options.fixMisplacedChildren?this.addChildren(t,i):l.mError("There should not be children for "+l.kind+" nodes",this.options.verify,!0))}}}catch(t){r={error:t}}finally{try{n&&!n.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}},t.prototype.addText=function(t,e){var r=this.adaptor.value(e);(t.isToken||t.getProperty("isChars"))&&t.arity?(t.isToken&&(r=i.translate(r),r=this.trimSpace(r)),t.appendChild(this.factory.create("text").setText(r))):r.match(/\S/)&&this.error('Unexpected text node "'+r+'"')},t.prototype.checkClass=function(t,e){var r,o,a=[];try{for(var n=c(this.adaptor.allClasses(e)),i=n.next();!i.done;i=n.next()){var s=i.value;"MJX-"===s.substr(0,4)?"MJX-variant"===s?t.setProperty("variantForm",!0):"MJX-TeXAtom"!==s.substr(0,11)&&t.attributes.set("mathvariant",s.substr(3)):a.push(s)}}catch(t){r={error:t}}finally{try{i&&!i.done&&(o=n.return)&&o.call(n)}finally{if(r)throw r.error}}a.length&&t.attributes.set("class",a.join(" "))},t.prototype.texAtom=function(t,e,r){t.texClass=a.TEXCLASS[e],"OP"!==e||r||(t.setProperty("movesupsub",!0),t.attributes.setInherited("movablelimits",!0))},t.prototype.markMrows=function(t){if(t.isKind("mrow")&&!t.isInferred&&2<=t.childNodes.length){var e=t.childNodes[0],r=t.childNodes[t.childNodes.length-1];e.isKind("mo")&&e.attributes.get("fence")&&r.isKind("mo")&&r.attributes.get("fence")&&(e.childNodes.length&&t.setProperty("open",e.getText()),r.childNodes.length&&t.setProperty("close",r.getText()))}},t.prototype.trimSpace=function(t){return t.replace(/[\t\n\r]/g," ").trim().replace(/  +/g," ")},t.prototype.error=function(t){throw new Error(t)},t.OPTIONS={MmlFactory:null,fixMisplacedChildren:!0,verify:{},translateEntities:!0},t.VERIFY=o({},a.AbstractMmlNode.verifyDefaults),t}();e.MathMLCompile=s},function(t,e,r){"use strict";r(5);var o=r(0);MathJax.startup&&(MathJax.startup.registerConstructor("mml",o.MathML),MathJax.startup.useInput("mml"))},function(t,e,r){"use strict";var o=r(6),a=s(r(0)),n=s(r(2)),i=s(r(3));function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(0,o.combineWithMathJax)({_:{input:{mathml_ts:a,mathml:{FindMathML:n,MathMLCompile:i}}}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractInputJax=MathJax._.core.InputJax.AbstractInputJax},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FunctionList=MathJax._.util.FunctionList.FunctionList},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractFindMath=MathJax._.core.FindMath.AbstractFindMath},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TEXCLASS=MathJax._.core.MmlTree.MmlNode.TEXCLASS,e.TEXCLASSNAMES=MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES,e.indentAttributes=MathJax._.core.MmlTree.MmlNode.indentAttributes,e.AbstractMmlNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlNode,e.AbstractMmlTokenNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode,e.AbstractMmlLayoutNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode,e.AbstractMmlBaseNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode,e.AbstractMmlEmptyNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode,e.TextNode=MathJax._.core.MmlTree.MmlNode.TextNode,e.XMLNode=MathJax._.core.MmlTree.MmlNode.XMLNode},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.options=MathJax._.util.Entities.options,e.entities=MathJax._.util.Entities.entities,e.add=MathJax._.util.Entities.add,e.remove=MathJax._.util.Entities.remove,e.translate=MathJax._.util.Entities.translate,e.numeric=MathJax._.util.Entities.numeric}]);