(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1OZW":function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("TZn1"))},"6Dz3":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o});const n=(e,t,a)=>{const n=new URLSearchParams(e);return n.set(t,a),n.toString()},o=(e,t)=>{return new URLSearchParams(e).get(t)}},"8/g6":function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=n(a("6KpG")),l=n(a("+2mu"));var i=function(e,t){var a=function(t){return o.default.createElement(l.default,t,e)};return a.displayName=t,(a=(0,r.default)(a)).muiName="SvgIcon",a};t.default=i},Ng2W:function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("g",null,o.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})),"Link");t.default=r},Plhq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("wIs1"),l=a("17x9"),i=a.n(l),s=a("SUMQ"),d=a("6ZaM"),c=a.n(d),u=a("zEnc"),p=a.n(u),h=a("Qmzn"),m=a("Ng2W"),f=a.n(m),b=a("1OZW"),g=a.n(b),y=a("nwgO"),v=a.n(y);var S=e=>({button:{margin:e.spacing.unit},modal:{position:"absolute",width:70*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,display:"flex",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},modalInput:{width:"100%",marginRight:4*e.spacing.unit}}),E=a("hzb6"),x=a.n(E),w=a("ZqOF"),C=a.n(w);class U extends o.a.Component{constructor(e){super(e),this.handleUrlChange=(e=>{this.setState({url:e.target.value})}),this.handleKeyPress=(e=>{const{onUrl:t}=this.props,{url:a}=this.state;"Enter"===e.key&&t(a)}),this.handleButtonPress=(()=>{const{onUrl:e}=this.props,{url:t}=this.state;e(t)}),this.state={url:""}}render(){const{classes:e,handleClose:t,open:a}=this.props,{url:n}=this.state;return o.a.createElement(x.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:a,onClose:t},o.a.createElement("div",{className:e.modal},o.a.createElement(C.a,{className:e.modalInput,inputRef:e=>e&&e.focus(),placeholder:"URL for stats.json",value:n,onChange:this.handleUrlChange,onKeyPress:this.handleKeyPress}),o.a.createElement(g.a,{color:"primary",variant:"contained",onClick:this.handleButtonPress},"Ok")))}}U.defaultProps={onUrl:()=>{},handleClose:()=>{}},U.propTypes={classes:i.a.object.isRequired,onUrl:i.a.func,handleClose:i.a.func,open:i.a.bool.isRequired};var k=Object(s.withStyles)(S)(U);class O extends o.a.Component{constructor(e){super(e),this.openModal=(()=>{this.setState({isModalOpened:!0})}),this.closeModal=(()=>{this.setState({isModalOpened:!1})}),this.handleOnUrl=(async e=>{const{onUrl:t}=this.props;this.closeModal(),t(e)}),this.state={isModalOpened:!1}}render(){const{disabled:e,classes:t}=this.props,{isModalOpened:a}=this.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{open:a,handleClose:this.closeModal,onUrl:this.handleOnUrl}),o.a.createElement(v.a,{title:"Upload stats.json file from the url"},o.a.createElement(g.a,{color:"primary",variant:"fab",disabled:e,component:"span",onClick:this.openModal,className:t.button},o.a.createElement(f.a,null))))}}O.propTypes={disabled:i.a.bool.isRequired,classes:i.a.object.isRequired};var M=Object(r.a)(Object(s.withStyles)(S)(O)),j=a("vrOF"),P=a.n(j);var z=e=>({button:{margin:e.spacing.unit},input:{display:"none"}});class R extends o.a.Component{constructor(...e){var t;return t=super(...e),this.handleFileUpload=(e=>{const{onUploadStart:t,onUploadEnd:a}=this.props;t(),null!==e.target.files&&function(e,t){const a=new FileReader;a.onload=(()=>{const e=a.result,n=JSON.parse(e);t(n)}),a.readAsText(e)}(e.target.files[0],e=>{a(e)})}),t}render(){const{classes:e,disabled:t}=this.props;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{accept:".json",className:e.input,id:"button-file",onChange:this.handleFileUpload,type:"file"}),o.a.createElement("label",{htmlFor:"button-file"},o.a.createElement(v.a,{title:"Upload file from the computer"},o.a.createElement(g.a,{color:"primary",variant:"fab",disabled:t,component:"span",className:e.button},o.a.createElement(P.a,null)))))}}R.defaultProps={onUploadStart:()=>{},onUploadEnd:()=>{}},R.propTypes={onUploadStart:i.a.func,onUploadEnd:i.a.func,classes:i.a.object.isRequired,disabled:i.a.bool.isRequired};var N=Object(s.withStyles)(z)(R);var W=e=>({root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},actions:{display:"flex",justifyContent:"center",paddingBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit}});class q extends o.a.Component{constructor(e){super(e),this.onUploadStart=(()=>{this.setState({uploading:!0})}),this.onUploadEnd=((e,t)=>{const{onStatsUploaded:a}=this.props;this.setState({uploading:!1}),a(e,t)}),this.state={uploading:!1}}render(){const{classes:e,onUrl:t}=this.props,{uploading:a}=this.state;return o.a.createElement("div",{className:e.root},o.a.createElement(h.b,null),o.a.createElement("div",null,o.a.createElement(c.a,{align:"center",variant:"headline"},"Please, upload your stats.json data"),o.a.createElement(c.a,{align:"center",variant:"caption",color:"textSecondary",paragraph:!0},"webpack --profile --json > stats.json"),o.a.createElement("div",{className:e.actions},o.a.createElement(N,{onUploadStart:this.onUploadStart,onUploadEnd:this.onUploadEnd,disabled:a}),o.a.createElement(M,{onUrl:t,disabled:a})),a?o.a.createElement(p.a,null):null))}}q.defaultProps={onUrl:()=>{},onStatsUploaded:()=>{}},q.propTypes={classes:i.a.object.isRequired,onUrl:i.a.func,onStatsUploaded:i.a.func};var F=Object(s.withStyles)(W)(q),I=a("6FtM"),T=a("6Dz3");t.default=Object(r.a)(({location:e,history:t})=>o.a.createElement(I.a.Consumer,null,a=>o.a.createElement(F,{onStatsUploaded:n=>{a.onStatsDataLoaded(n);const o={pathname:"/inspect",search:e.search};t.push(o)},onUrl:a=>{const n={pathname:"/inspect",search:Object(T.a)(e.search,"stats",a)};t.push(n)}})))},Qmzn:function(e,t,a){"use strict";a.d(t,"a",function(){return h}),a.d(t,"b",function(){return m});var n=a("q1tI"),o=a.n(n),r=a("E49Y"),l=a.n(r),i=a("1IiC"),s=a.n(i),d=a("nwgO"),c=a.n(d),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};const p=()=>o.a.createElement(l.a,null,o.a.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",fill:"white"},o.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))),h=e=>o.a.createElement("a",u({href:"https://github.com/AlexMost/webpack-inspect"},e,{target:"_blank",rel:"noopener noreferrer"}),o.a.createElement(c.a,{title:"See github page"},o.a.createElement(s.a,{variant:"fab",component:"span"},o.a.createElement(p,null)))),m=()=>o.a.createElement("a",{href:"https://github.com/AlexMost/webpack-inspect"},o.a.createElement("img",{style:{position:"absolute",top:0,right:0,border:0},src:"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png",alt:"Fork me on GitHub"}))},TZn1:function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a("JRbm")),r=n(a("ll+H")),l=n(a("Zdao")),i=n(a("hM+G")),s=n(a("q1tI")),d=(n(a("17x9")),n(a("TSYQ"))),c=n(a("Hk+Y")),u=a("wClv"),p=n(a("U0j5")),h=a("gasH"),m=function(e){return{root:(0,i.default)({},e.typography.button,{lineHeight:"1.4em",boxSizing:"border-box",minWidth:11*e.spacing.unit,minHeight:36,padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),borderRadius:4,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,u.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},colorInherit:{color:"inherit"},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},focusVisible:{},disabled:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,fontSize:24,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},mini:{width:40,height:40},sizeSmall:{padding:"".concat(e.spacing.unit-1,"px ").concat(e.spacing.unit,"px"),minWidth:8*e.spacing.unit,minHeight:32,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"".concat(e.spacing.unit,"px ").concat(3*e.spacing.unit,"px"),minWidth:14*e.spacing.unit,minHeight:40,fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function f(e){var t,a=e.children,n=e.classes,i=e.className,c=e.color,u=e.disabled,m=e.disableFocusRipple,f=e.fullWidth,b=e.focusVisibleClassName,g=e.mini,y=e.size,v=e.variant,S=(0,l.default)(e,["children","classes","className","color","disabled","disableFocusRipple","fullWidth","focusVisibleClassName","mini","size","variant"]),E="fab"===v,x="contained"===v||"raised"===v,w=!x&&!E,C=(0,d.default)(n.root,(t={},(0,r.default)(t,n.contained,x||E),(0,r.default)(t,n.fab,E),(0,r.default)(t,n.mini,E&&g),(0,r.default)(t,n.colorInherit,"inherit"===c),(0,r.default)(t,n.textPrimary,w&&"primary"===c),(0,r.default)(t,n.textSecondary,w&&"secondary"===c),(0,r.default)(t,n.flat,w),(0,r.default)(t,n.flatPrimary,w&&"primary"===c),(0,r.default)(t,n.flatSecondary,w&&"secondary"===c),(0,r.default)(t,n.containedPrimary,!w&&"primary"===c),(0,r.default)(t,n.containedSecondary,!w&&"secondary"===c),(0,r.default)(t,n.raised,x||E),(0,r.default)(t,n.raisedPrimary,(x||E)&&"primary"===c),(0,r.default)(t,n.raisedSecondary,(x||E)&&"secondary"===c),(0,r.default)(t,n.text,"text"===v),(0,r.default)(t,n.outlined,"outlined"===v),(0,r.default)(t,n["size".concat((0,h.capitalize)(y))],"medium"!==y),(0,r.default)(t,n.disabled,u),(0,r.default)(t,n.fullWidth,f),t),i);return s.default.createElement(p.default,(0,o.default)({className:C,disabled:u,focusRipple:!m,focusVisibleClassName:(0,d.default)(n.focusVisible,b)},S),s.default.createElement("span",{className:n.label},a))}t.styles=m,f.propTypes={},f.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var b=(0,c.default)(m,{name:"MuiButton"})(f);t.default=b},vrOF:function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("g",null,o.default.createElement("path",{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"})),"FileUpload");t.default=r}}]);