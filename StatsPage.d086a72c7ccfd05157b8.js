(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/zjr":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("17x9"),o=a.n(r),l=a("1h/R"),i=a.n(l),u=a("/DBP"),c=a.n(u),d=a("24wR"),p=a.n(d),f=a("ZqOF"),g=a.n(f),m=a("pPbJ"),h=a.n(m),b=a("n5s8"),y=a.n(b),v=a("SUMQ");var S=e=>({container:{flexGrow:1,position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing.unit,left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},input:{color:"white"}}),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function j(e){const{classes:t,ref:a}=e,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["classes","ref"]);return s.a.createElement(g.a,{fullWidth:!0,InputProps:E({inputRef:a,classes:{input:t.input}},n)})}function w(e,{query:t,isHighlighted:a}){const n=c()(e.label,t),r=p()(e.label,n);return s.a.createElement(y.a,{selected:a,component:"div"},s.a.createElement("div",null,r.map((e,t)=>e.highlight?s.a.createElement("span",{key:String(t),style:{fontWeight:300}},e.text):s.a.createElement("strong",{key:String(t),style:{fontWeight:500}},e.text))))}function O(e){const{containerProps:t,children:a}=e;return s.a.createElement(h.a,E({},t,{square:!0}),a)}function R(e){return e.label}class x extends s.a.Component{constructor(e){super(e),this.storeInputReference=(e=>{null!==e&&(this.input=e.input)}),this.handleSuggestionsClearRequested=(()=>{this.setState({suggestions:[]})}),this.handleChange=((e,{newValue:t})=>{this.setState({value:t})}),this.handleSuggestionsFetchRequested=(({value:e})=>{const{modules:t}=this.props;this.setState({suggestions:function(e,t){const a=e.trim().toLowerCase(),n=[];if(0===a.length)return[];let s=0;for(let r=0;r<t.length;r++){const e=t[r];-1!==e.label.toLowerCase().indexOf(a)&&s<10&&(n.push(e),s++)}return n}(e,t)})}),this.handleSuggestionSelected=((e,t)=>{const{onSuggestionSelected:a}=this.props;a(t.suggestion.id)}),this.state={value:e.inputValue,suggestions:[]}}render(){const{classes:e}=this.props,{suggestions:t,value:a}=this.state;return s.a.createElement(i.a,{theme:{container:e.container,suggestionsContainerOpen:e.suggestionsContainerOpen,suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderInputComponent:j,suggestions:t,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,onSuggestionSelected:this.handleSuggestionSelected,renderSuggestionsContainer:O,getSuggestionValue:R,renderSuggestion:w,ref:this.storeInputReference,inputProps:{classes:e,placeholder:"Search and select module for the inspection",value:a,onChange:this.handleChange}})}}x.defaultProps={inputValue:""},x.propTypes={classes:o.a.object.isRequired,onSuggestionSelected:o.a.func.isRequired,modules:o.a.arrayOf(o.a.object).isRequired,inputValue:o.a.string};var P=Object(v.withStyles)(S)(x);const M=({modules:e,onModuleSelected:t,inputValue:a})=>e.length?s.a.createElement(P,{modules:function(e){return e.map(e=>({label:e.name,id:e.id,module:e}))}(e),onSuggestionSelected:t,inputValue:a}):null;M.defaultProps={inputValue:""},M.propTypes={modules:o.a.arrayOf(o.a.object).isRequired,onModuleSelected:o.a.func.isRequired,inputValue:o.a.string};t.a=M},"1hzN":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),r=a("mf+E"),o=a("wIs1"),l=a("17x9"),i=a.n(l),u=a("Xhep"),c=a("6Dz3"),d=a("SUMQ"),p=a("YDiY"),f=a.n(p),g=a("2VVu"),m=a.n(g),h=a("zEnc"),b=a.n(h),y=a("Qmzn"),v=a("/zjr"),S=a("6ZaM"),E=a.n(S),j=a("IPLq"),w=a.n(j),O=a("Ce3J"),R=a.n(O),x=a("Ndn5"),P=a.n(x),M=a("T2Yo");var q=e=>({statsRoot:{flexGrow:1,margin:e.spacing.unit},statsList:{display:"flex",flexGrow:1,flexWrap:"wrap"},moduleInfo:{width:40*e.spacing.unit,marginRight:2*e.spacing.unit,marginTop:2*e.spacing.unit,cursor:"pointer"}});const C=Object(d.withStyles)(q)(({id:e,label:t,path:a,classes:n,onClick:r})=>s.a.createElement(w.a,{className:n.moduleInfo,onClick:()=>r(e)},s.a.createElement(R.a,null,s.a.createElement(P.a,{title:t,subheader:a}))));C.propTypes={label:i.a.string.isRequired,classes:i.a.object.isRequired};const T=e=>{const{modules:t,classes:a,onModuleClick:n}=e;if(!t.length)return null;const r=t.sort((e,t)=>t.reasons.length-e.reasons.length).slice(0,40);return s.a.createElement("div",{className:a.statsRoot},s.a.createElement(E.a,{variant:"headline"},function(e){let t=0;for(let a=0;a<e.length;a++)Object(M.b)(e[a])&&t++;return t}(t)," files loaded"),s.a.createElement(E.a,null,"Most popular ",40,":"),s.a.createElement("div",{className:a.statsList},r.map(({id:e,label:t,name:a})=>s.a.createElement(C,{key:e,id:e,label:t,path:a,onClick:n}))))};T.defaultProps={modules:[]},T.propTypes={modules:i.a.arrayOf(i.a.object),classes:i.a.object.isRequired,onModuleClick:i.a.func.isRequired};var N=Object(d.withStyles)(q)(T);var I=()=>({root:{flexGrow:1},toolbar:{display:"flex",justifyContent:"flex-end"}});class k extends s.a.Component{constructor(e){super(e),this.loadStats=(async e=>{const{onStatsDataLoaded:t,moduleId:a,onModuleSelected:n}=this.props;this.setState({isUploading:!0});const s=await fetch(e),r=await s.json();this.setState({isUploading:!1}),t(r),a&&n(a)}),this.state={isUploading:!1}}componentDidMount(){const{statsUrl:e,modules:t}=this.props;!t.length&&e&&this.loadStats(e)}render(){const{classes:e,modules:t,onModuleSelected:a}=this.props,{isUploading:n}=this.state,r=n?s.a.createElement(b.a,{style:{width:"100%"}}):null;return s.a.createElement("div",{className:e.root},s.a.createElement(f.a,{position:"static"},s.a.createElement(m.a,{className:e.toolbar},s.a.createElement(v.a,{modules:t,onModuleSelected:a}),s.a.createElement(y.a,null)),r),s.a.createElement("main",null,s.a.createElement(N,{modules:t,onModuleClick:a})))}}k.defaultProps={modules:[],statsUrl:null,moduleId:null},k.propTypes={classes:i.a.object.isRequired,modules:i.a.arrayOf(i.a.object),onModuleSelected:i.a.func.isRequired,statsUrl:i.a.string,moduleId:i.a.string};var L=Object(d.withStyles)(I,{withTheme:!0})(k);const _=e=>{const{location:t,history:a}=e,o=Object(c.a)(t.search,"stats"),l=Object(c.a)(t.search,"mid"),i=Object(c.b)(a,t),d=Object(n.useContext)(u.b);return d.modules.length||o?s.a.createElement(L,{modules:d.modules,moduleId:l,onStatsDataLoaded:d.onStatsDataLoaded,statsUrl:o,onModuleSelected:e=>i("/inspect",{mid:e})}):s.a.createElement(r.a,{to:"/"})};_.propTypes={location:i.a.object.isRequired,history:i.a.object.isRequired};t.default=Object(o.a)(_)},"6Dz3":function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"a",function(){return s}),a.d(t,"b",function(){return r});const n=(e,t)=>{const a=new URLSearchParams(e);return a.delete(t),a.toString()},s=(e,t)=>{return new URLSearchParams(e).get(t)},r=(e,t)=>(a,n)=>{const s={pathname:a,search:t.search};if(n){let e=t.search;Object.keys(n).forEach(t=>{e=((e,t,a)=>{const n=new URLSearchParams(e);return n.set(t,a),n.toString()})(e,t,n[t])}),s.search=e}e.push(s)}},Ce3J:function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}});var s=n(a("xHac"))},IPLq:function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}});var s=n(a("S1ui"))},Ndn5:function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}});var s=n(a("WRIa"))},Qmzn:function(e,t,a){"use strict";a.d(t,"a",function(){return f}),a.d(t,"b",function(){return g});var n=a("q1tI"),s=a.n(n),r=a("E49Y"),o=a.n(r),l=a("1IiC"),i=a.n(l),u=a("nwgO"),c=a.n(u),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};const p=()=>s.a.createElement(o.a,null,s.a.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",fill:"white"},s.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))),f=e=>s.a.createElement("a",d({href:"https://github.com/AlexMost/webpack-inspect"},e,{target:"_blank",rel:"noopener noreferrer"}),s.a.createElement(c.a,{title:"See github page"},s.a.createElement(i.a,{variant:"fab",component:"span"},s.a.createElement(p,null)))),g=()=>s.a.createElement("a",{href:"https://github.com/AlexMost/webpack-inspect"},s.a.createElement("img",{style:{position:"absolute",top:0,right:0,border:0},src:"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png",alt:"Fork me on GitHub"}))},S1ui:function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var s=n(a("1+oM")),r=n(a("eKRN")),o=n(a("q1tI")),l=(n(a("17x9")),n(a("TSYQ"))),i=n(a("pPbJ")),u=n(a("Hk+Y")),c={root:{overflow:"hidden"}};function d(e){var t=e.classes,a=e.className,n=e.raised,u=(0,r.default)(e,["classes","className","raised"]);return o.default.createElement(i.default,(0,s.default)({className:(0,l.default)(t.root,a),elevation:n?8:1},u))}t.styles=c,d.propTypes={},d.defaultProps={raised:!1};var p=(0,u.default)(c,{name:"MuiCard"})(d);t.default=p},WRIa:function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var s=n(a("1+oM")),r=n(a("eKRN")),o=n(a("fz1N")),l=n(a("q1tI")),i=(n(a("17x9")),n(a("TSYQ"))),u=n(a("Hk+Y")),c=n(a("6ZaM")),d=function(e){return{root:e.mixins.gutters({display:"flex",alignItems:"center",paddingTop:16,paddingBottom:16}),avatar:{flex:"0 0 auto",marginRight:16},action:(0,o.default)({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-12},e.breakpoints.up("sm"),{marginRight:-20}),content:{flex:"1 1 auto"},title:{},subheader:{}}};function p(e){var t=e.action,a=e.avatar,n=e.classes,o=e.className,u=e.component,d=e.disableTypography,p=e.subheader,f=e.subheaderTypographyProps,g=e.title,m=e.titleTypographyProps,h=(0,r.default)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),b=g;null==b||b.type===c.default||d||(b=l.default.createElement(c.default,(0,s.default)({variant:a?"body2":"headline",internalDeprecatedVariant:!0,className:n.title,component:"span"},m),b));var y=p;return null==y||y.type===c.default||d||(y=l.default.createElement(c.default,(0,s.default)({variant:a?"body2":"body1",className:n.subheader,color:"textSecondary",component:"span"},f),y)),l.default.createElement(u,(0,s.default)({className:(0,i.default)(n.root,o)},h),a&&l.default.createElement("div",{className:n.avatar},a),l.default.createElement("div",{className:n.content},b,y),t&&l.default.createElement("div",{className:n.action},t))}t.styles=d,p.propTypes={},p.defaultProps={component:"div",disableTypography:!1};var f=(0,u.default)(d,{name:"MuiCardHeader"})(p);t.default=f},xHac:function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var s=n(a("1+oM")),r=n(a("eKRN")),o=n(a("q1tI")),l=(n(a("17x9")),n(a("TSYQ"))),i=n(a("Hk+Y")),u=function(e){return{root:e.mixins.gutters({paddingTop:16,paddingBottom:16,"&:last-child":{paddingBottom:24}})}};function c(e){var t=e.classes,a=e.className,n=e.component,i=(0,r.default)(e,["classes","className","component"]);return o.default.createElement(n,(0,s.default)({className:(0,l.default)(t.root,a)},i))}t.styles=u,c.propTypes={},c.defaultProps={component:"div"};var d=(0,i.default)(u,{name:"MuiCardContent"})(c);t.default=d}}]);