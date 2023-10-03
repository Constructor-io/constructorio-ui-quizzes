try{
var Ze=__STORYBOOKAPI__,{ActiveTabs:Xe,Consumer:Ve,ManagerContext:et,Provider:tt,addons:H,combineParameters:rt,controlOrMetaKey:ot,controlOrMetaSymbol:nt,eventMatchesShortcut:at,eventToShortcut:it,isMacLike:st,isShortcutTaken:lt,keyToSymbol:ut,merge:pt,mockChannel:dt,optionOrAltSymbol:ct,shortcutMatchesShortcut:ft,shortcutToHumanString:mt,types:gt,useAddonState:ht,useArgTypes:bt,useArgs:yt,useChannel:St,useGlobalTypes:vt,useGlobals:xt,useParameter:Ct,useSharedState:wt,useStoryPrepared:Ft,useStorybookApi:_t,useStorybookState:Rt}=__STORYBOOKAPI__;var q=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var zt=__STORYBOOKCLIENTLOGGER__,{deprecate:jt,logger:U,once:Bt,pretty:Mt}=__STORYBOOKCLIENTLOGGER__;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},S.apply(this,arguments)}function oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},v(e,t)}function ne(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,v(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(e)}function ae(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ie(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function F(e,t,r){return ie()?F=Reflect.construct.bind():F=function(o,n,a){var i=[null];i.push.apply(i,n);var l=Function.bind.apply(o,i),u=new l;return a&&v(u,a.prototype),u},F.apply(null,arguments)}function M(e){var t=typeof Map=="function"?new Map:void 0;return M=function(r){if(r===null||!ae(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,o)}function o(){return F(r,arguments,B(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),v(o,r)},M(e)}var se={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function le(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=t[0],n=[],a;for(a=1;a<t.length;a+=1)n.push(t[a]);return n.forEach(function(i){o=o.replace(/%[a-z]/,i)}),o}var m=function(e){ne(t,e);function t(r){for(var o,n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return o=e.call(this,le.apply(void 0,[se[r]].concat(a)))||this,oe(o)}return t}(M(Error));function I(e){return Math.round(e*255)}function ue(e,t,r){return I(e)+","+I(t)+","+I(r)}function x(e,t,r,o){if(o===void 0&&(o=ue),t===0)return o(r,r,r);var n=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*t,i=a*(1-Math.abs(n%2-1)),l=0,u=0,p=0;n>=0&&n<1?(l=a,u=i):n>=1&&n<2?(l=i,u=a):n>=2&&n<3?(u=a,p=i):n>=3&&n<4?(u=i,p=a):n>=4&&n<5?(l=i,p=a):n>=5&&n<6&&(l=a,p=i);var b=r-a/2,y=l+b,g=u+b,E=p+b;return o(y,g,E)}var G={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function pe(e){if(typeof e!="string")return e;var t=e.toLowerCase();return G[t]?"#"+G[t]:e}var de=/^#[a-fA-F0-9]{6}$/,ce=/^#[a-fA-F0-9]{8}$/,fe=/^#[a-fA-F0-9]{3}$/,me=/^#[a-fA-F0-9]{4}$/,A=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ge=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,he=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,be=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function P(e){if(typeof e!="string")throw new m(3);var t=pe(e);if(t.match(de))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ce)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(fe))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(me)){var o=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:o}}var n=A.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var a=ge.exec(t.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var i=he.exec(t);if(i){var l=parseInt(""+i[1],10),u=parseInt(""+i[2],10)/100,p=parseInt(""+i[3],10)/100,b="rgb("+x(l,u,p)+")",y=A.exec(b);if(!y)throw new m(4,t,b);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var g=be.exec(t.substring(0,50));if(g){var E=parseInt(""+g[1],10),te=parseInt(""+g[2],10)/100,re=parseInt(""+g[3],10)/100,$="rgb("+x(E,te,re)+")",w=A.exec($);if(!w)throw new m(4,t,$);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new m(5)}function ye(e){var t=e.red/255,r=e.green/255,o=e.blue/255,n=Math.max(t,r,o),a=Math.min(t,r,o),i=(n+a)/2;if(n===a)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var l,u=n-a,p=i>.5?u/(2-n-a):u/(n+a);switch(n){case t:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-t)/u+2;break;default:l=(t-r)/u+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:p,lightness:i,alpha:e.alpha}:{hue:l,saturation:p,lightness:i}}function W(e){return ye(P(e))}var Se=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},N=Se;function h(e){var t=e.toString(16);return t.length===1?"0"+t:t}function Q(e){return h(Math.round(e*255))}function ve(e,t,r){return N("#"+Q(e)+Q(t)+Q(r))}function R(e,t,r){return x(e,t,r,ve)}function xe(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return R(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return R(e.hue,e.saturation,e.lightness);throw new m(1)}function Ce(e,t,r,o){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof o=="number")return o>=1?R(e,t,r):"rgba("+x(e,t,r)+","+o+")";if(typeof e=="object"&&t===void 0&&r===void 0&&o===void 0)return e.alpha>=1?R(e.hue,e.saturation,e.lightness):"rgba("+x(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new m(2)}function D(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return N("#"+h(e)+h(t)+h(r));if(typeof e=="object"&&t===void 0&&r===void 0)return N("#"+h(e.red)+h(e.green)+h(e.blue));throw new m(6)}function C(e,t,r,o){if(typeof e=="string"&&typeof t=="number"){var n=P(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof o=="number")return o>=1?D(e,t,r):"rgba("+e+","+t+","+r+","+o+")";if(typeof e=="object"&&t===void 0&&r===void 0&&o===void 0)return e.alpha>=1?D(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new m(7)}var we=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Fe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},_e=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Re=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function K(e){if(typeof e!="object")throw new m(8);if(Fe(e))return C(e);if(we(e))return D(e);if(Re(e))return Ce(e);if(_e(e))return xe(e);throw new m(8)}function Z(e,t,r){return function(){var o=r.concat(Array.prototype.slice.call(arguments));return o.length>=t?e.apply(this,o):Z(e,t,o)}}function k(e){return Z(e,e.length,[])}function O(e,t,r){return Math.max(e,Math.min(t,r))}function Te(e,t){if(t==="transparent")return t;var r=W(t);return K(S({},r,{lightness:O(0,1,r.lightness-parseFloat(e))}))}var Pe=k(Te),ke=Pe;function Oe(e,t){if(t==="transparent")return t;var r=W(t);return K(S({},r,{lightness:O(0,1,r.lightness+parseFloat(e))}))}var Ee=k(Oe),Ie=Ee;function Ae(e,t){if(t==="transparent")return t;var r=P(t),o=typeof r.alpha=="number"?r.alpha:1,n=S({},r,{alpha:O(0,1,(o*100+parseFloat(e)*100)/100)});return C(n)}var Ut=k(Ae);function Qe(e,t){if(t==="transparent")return t;var r=P(t),o=typeof r.alpha=="number"?r.alpha:1,n=S({},r,{alpha:O(0,1,+(o*100-parseFloat(e)*100).toFixed(2)/100)});return C(n)}var ze=k(Qe),je=ze,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},J={app:"#F6F9FC",bar:s.lightest,content:s.lightest,gridCellSize:10,hoverable:je(.93,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},T={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Be={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:J.app,appContentBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.mediumdark,barTextColor:s.mediumdark,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:J.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},Y=Be,Me={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},Ne=Me,{window:z}=q;var De=e=>typeof e!="string"?(U.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,Le=e=>!/(gradient|var|calc)/.test(e),$e=(e,t)=>e==="darken"?C(`${ke(1,t)}`,.95):e==="lighten"?C(`${Ie(1,t)}`,.95):t,X=e=>t=>{if(!De(t)||!Le(t))return t;try{return $e(e,t)}catch{return t}},Gt=X("lighten"),Jt=X("darken"),He=()=>!z||!z.matchMedia?"light":z.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",_={light:Y,dark:Ne,normal:Y},j=He(),L=(e={base:j},t)=>{let r={..._[j],..._[e.base]||{},...e,base:_[e.base]?e.base:j};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var qe=__REACT__,{Children:or,Component:nr,Fragment:ar,Profiler:ir,PureComponent:sr,StrictMode:lr,Suspense:ur,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pr,cloneElement:dr,createContext:cr,createElement:fr,createFactory:mr,createRef:gr,forwardRef:hr,isValidElement:br,lazy:yr,memo:Sr,useCallback:vr,useContext:xr,useDebugValue:Cr,useEffect:wr,useImperativeHandle:Fr,useLayoutEffect:_r,useMemo:Rr,useReducer:Tr,useRef:Pr,useState:kr,version:Or}=__REACT__;function V(){let e="light";return window.matchMedia("(prefers-color-scheme: dark)")?.matches&&(e="dark"),e}var ee=L({brandTitle:"Constructor.io",brandUrl:"https://github.com/Constructor-io/constructorio-ui-quizzes",brandImage:V()==="light"?"https://docs.constructor.io/img/logo-dark.svg":"https://docs.constructor.io/img/logo-light.svg",brandTarget:"_blank"});H.setConfig({theme:ee});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
