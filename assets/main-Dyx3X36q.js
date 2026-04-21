var rt=Object.defineProperty;var Ce=a=>{throw TypeError(a)};var st=(a,e,t)=>e in a?rt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var y=(a,e,t)=>st(a,typeof e!="symbol"?e+"":e,t),at=(a,e,t)=>e.has(a)||Ce("Cannot "+t);var Le=(a,e,t)=>e.has(a)?Ce("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t);var Y=(a,e,t)=>(at(a,e,"access private method"),t);import{aD as ot,b1 as ae,z as lt}from"./mermaid-CG0dut8w.js";import ct from"./katex-DHMw6HUq.js";import{r as pt}from"./prism-Bq9ueNJX.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ut(a){return a.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").trim()}function oe(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let B=null,_e;function ht(a){B=a}function me(a){B&&(B.textContent=a,B.classList.add("show"),clearTimeout(_e),_e=setTimeout(()=>B?.classList.remove("show"),2e3))}function ge(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let q=ge();function Be(a){q=a}const Ne=/[&<>"']/,dt=new RegExp(Ne.source,"g"),He=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ft=new RegExp(He.source,"g"),mt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Se=a=>mt[a];function T(a,e){if(e){if(Ne.test(a))return a.replace(dt,Se)}else if(He.test(a))return a.replace(ft,Se);return a}const gt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function kt(a){return a.replace(gt,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const bt=/(^|[^\[])\^/g;function k(a,e){let t=typeof a=="string"?a:a.source;e=e||"";const n={replace:(i,s)=>{let r=typeof s=="string"?s:s.source;return r=r.replace(bt,"$1"),t=t.replace(i,r),n},getRegex:()=>new RegExp(t,e)};return n}function Ae(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const N={exec:()=>null};function Re(a,e){const t=a.replace(/\|/g,(s,r,o)=>{let l=!1,h=r;for(;--h>=0&&o[h]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function Z(a,e,t){const n=a.length;if(n===0)return"";let i=0;for(;i<n&&a.charAt(n-i-1)===e;)i++;return a.slice(0,n-i)}function xt(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function Me(a,e,t,n){const i=e.href,s=e.title?T(e.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:i,title:s,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:s,text:T(r)}}function yt(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=n.length?i.slice(n.length):i}).join(`
`)}class K{constructor(e){y(this,"options");y(this,"rules");y(this,"lexer");this.options=e||q}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Z(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=yt(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=Z(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=Z(n.replace(/^ *>[ \t]?/gm,""),`
`);const i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",h=!1;for(;e;){let c=!1;if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let d=t[2].split(`
`,1)[0].replace(/^\t+/,R=>" ".repeat(3*R.length)),p=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=d.trimStart()):(f=t[2].search(/[^ ]/),f=f>4?1:f,l=d.slice(f),f+=t[1].length);let C=!1;if(!d&&/^ *$/.test(p)&&(o+=p+`
`,e=e.substring(p.length+1),c=!0),!c){const R=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),u=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),b=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const g=e.split(`
`,1)[0];if(p=g,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),b.test(p)||x.test(p)||R.test(p)||u.test(e))break;if(p.search(/[^ ]/)>=f||!p.trim())l+=`
`+p.slice(f);else{if(C||d.search(/[^ ]/)>=4||b.test(d)||x.test(d)||u.test(d))break;l+=`
`+p}!C&&!p.trim()&&(C=!0),o+=g+`
`,e=e.substring(g.length+1),d=p.slice(f)}}s.loose||(h?s.loose=!0:/\n *\n *$/.test(o)&&(h=!0));let v=null,A;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(A=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:o,task:!!v,checked:A,loose:!1,text:l,tokens:[]}),s.raw+=o}s.items[s.items.length-1].raw=o.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const d=s.items[c].tokens.filter(f=>f.type==="space"),p=d.length>0&&d.some(f=>/\n.*\n/.test(f.raw));s.loose=p}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=Re(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const o of i)/^ *-+: *$/.test(o)?r.align.push("right"):/^ *:-+: *$/.test(o)?r.align.push("center"):/^ *:-+ *$/.test(o)?r.align.push("left"):r.align.push(null);for(const o of n)r.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of s)r.rows.push(Re(o,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:T(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=Z(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=xt(t[2],"()");if(r>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),Me(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return Me(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...i[0]].length-1;let o,l,h=r,c=0;const d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+r);(i=d.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){h+=l;continue}else if((i[5]||i[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(h-=l,h>0)continue;l=Math.min(l,l+h+c);const p=[...i[0]][0].length,f=e.slice(0,r+i.index+p+l);if(Math.min(r,l)%2){const v=f.slice(1,-1);return{type:"em",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}const C=f.slice(2,-2);return{type:"strong",raw:f,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=T(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=T(t[1]),i="mailto:"+n):(n=T(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,i;if(t[2]==="@")n=T(t[0]),i="mailto:"+n;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(s!==t[0]);n=T(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=T(t[0]),{type:"text",raw:t[0],text:n}}}}const wt=/^(?: *(?:\n|$))+/,vt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,$t=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,G=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Tt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Fe=/(?:[*+-]|\d{1,9}[.)])/,Ge=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Fe).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),ke=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Et=/^[^\n]+/,be=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ct=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",be).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Lt=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Fe).getRegex(),ie="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",xe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_t=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",xe).replace("tag",ie).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ue=k(ke).replace("hr",G).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie).getRegex(),St=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ue).getRegex(),ye={blockquote:St,code:vt,def:Ct,fences:$t,heading:Tt,hr:G,html:_t,lheading:Ge,list:Lt,newline:wt,paragraph:Ue,table:N,text:Et},De=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",G).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie).getRegex(),At={...ye,table:De,paragraph:k(ke).replace("hr",G).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",De).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie).getRegex()},Rt={...ye,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",xe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:N,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(ke).replace("hr",G).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ge).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ye=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Mt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ze=/^( {2,}|\\)\n(?!\s*$)/,Dt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,U="\\p{P}\\p{S}",It=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,U).getRegex(),Pt=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,zt=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,U).getRegex(),qt=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,U).getRegex(),Ot=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,U).getRegex(),jt=k(/\\([punct])/,"gu").replace(/punct/g,U).getRegex(),Bt=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Nt=k(xe).replace("(?:-->|$)","-->").getRegex(),Ht=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Nt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),X=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ft=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",X).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ve=k(/^!?\[(label)\]\[(ref)\]/).replace("label",X).replace("ref",be).getRegex(),We=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",be).getRegex(),Gt=k("reflink|nolink(?!\\()","g").replace("reflink",Ve).replace("nolink",We).getRegex(),we={_backpedal:N,anyPunctuation:jt,autolink:Bt,blockSkip:Pt,br:Ze,code:Mt,del:N,emStrongLDelim:zt,emStrongRDelimAst:qt,emStrongRDelimUnd:Ot,escape:Ye,link:Ft,nolink:We,punctuation:It,reflink:Ve,reflinkSearch:Gt,tag:Ht,text:Dt,url:N},Ut={...we,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",X).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",X).getRegex()},le={...we,escape:k(Ye).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Yt={...le,br:k(Ze).replace("{2,}","*").getRegex(),text:k(le.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},V={normal:ye,gfm:At,pedantic:Rt},j={normal:we,gfm:le,breaks:Yt,pedantic:Ut};class _{constructor(e){y(this,"tokens");y(this,"options");y(this,"state");y(this,"tokenizer");y(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||q,this.options.tokenizer=this.options.tokenizer||new K,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:V.normal,inline:j.normal};this.options.pedantic?(t.block=V.pedantic,t.inline=j.pedantic):this.options.gfm&&(t.block=V.gfm,this.options.breaks?t.inline=j.breaks:t.inline=j.gfm),this.tokenizer.rules=t}static get rules(){return{block:V,inline:j}}static lex(e,t){return new _(t).lex(e)}static lexInline(e,t){return new _(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,h)=>l+"    ".repeat(h.length));let n,i,s,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let h;this.options.extensions.startBlock.forEach(c=>{h=c.call({lexer:this},l),typeof h=="number"&&h>=0&&(o=Math.min(o,h))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),r=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,r=e,o,l,h;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(h=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const d=e.slice(1);let p;this.options.extensions.startInline.forEach(f=>{p=f.call({lexer:this},d),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class J{constructor(e){y(this,"options");this.options=e||q}code(e,t,n){const i=(t||"").match(/^\S*/)?.[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+T(i)+'">'+(n?e:T(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:T(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const i=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=Ae(e);if(i===null)return n;e=i;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){const i=Ae(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class ve{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class S{constructor(e){y(this,"options");y(this,"renderer");y(this,"textRenderer");this.options=e||q,this.options.renderer=this.options.renderer||new J,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ve}static parse(e,t){return new S(t).parse(e)}static parseInline(e,t){return new S(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=s,o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=o||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const r=s;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,kt(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=s;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=s;let o="",l="";for(let c=0;c<r.header.length;c++)l+=this.renderer.tablecell(this.parseInline(r.header[c].tokens),{header:!0,align:r.align[c]});o+=this.renderer.tablerow(l);let h="";for(let c=0;c<r.rows.length;c++){const d=r.rows[c];l="";for(let p=0;p<d.length;p++)l+=this.renderer.tablecell(this.parseInline(d[p].tokens),{header:!1,align:r.align[p]});h+=this.renderer.tablerow(l)}n+=this.renderer.table(o,h);continue}case"blockquote":{const r=s,o=this.parse(r.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const r=s,o=r.ordered,l=r.start,h=r.loose;let c="";for(let d=0;d<r.items.length;d++){const p=r.items[d],f=p.checked,C=p.task;let v="";if(p.task){const A=this.renderer.checkbox(!!f);h?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=A+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=A+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:A+" "}):v+=A+" "}v+=this.parse(p.tokens,h),c+=this.renderer.listitem(v,C,!!f)}n+=this.renderer.list(c,o,l);continue}case"html":{const r=s;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=s;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=s,o=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<e.length&&e[i+1].type==="text";)r=e[++i],o+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=t?this.renderer.paragraph(o):o;continue}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=this.options.extensions.renderers[s.type].call({parser:this},s);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=r||"";continue}}switch(s.type){case"escape":{const r=s;n+=t.text(r.text);break}case"html":{const r=s;n+=t.html(r.text);break}case"link":{const r=s;n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{const r=s;n+=t.image(r.href,r.title,r.text);break}case"strong":{const r=s;n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{const r=s;n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{const r=s;n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{const r=s;n+=t.del(this.parseInline(r.tokens,t));break}case"text":{const r=s;n+=t.text(r.text);break}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}}class H{constructor(e){y(this,"options");this.options=e||q}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}y(H,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var z,ce,Qe;class Zt{constructor(...e){Le(this,z);y(this,"defaults",ge());y(this,"options",this.setOptions);y(this,"parse",Y(this,z,ce).call(this,_.lex,S.parse));y(this,"parseInline",Y(this,z,ce).call(this,_.lexInline,S.parseInline));y(this,"Parser",S);y(this,"Renderer",J);y(this,"TextRenderer",ve);y(this,"Lexer",_);y(this,"Tokenizer",K);y(this,"Hooks",H);this.use(...e)}walkTokens(e,t){let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const s=i;for(const r of s.header)n=n.concat(this.walkTokens(r.tokens,t));for(const r of s.rows)for(const o of r)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{const s=i;n=n.concat(this.walkTokens(s.items,t));break}default:{const s=i;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(r=>{const o=s[r].flat(1/0);n=n.concat(this.walkTokens(o,t))}):s.tokens&&(n=n.concat(this.walkTokens(s.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const r=t.renderers[s.name];r?t.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[s.level];r?r.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new J(this.defaults);for(const r in n.renderer){if(!(r in s))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.renderer[o],h=s[o];s[o]=(...c)=>{let d=l.apply(s,c);return d===!1&&(d=h.apply(s,c)),d||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new K(this.defaults);for(const r in n.tokenizer){if(!(r in s))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const o=r,l=n.tokenizer[o],h=s[o];s[o]=(...c)=>{let d=l.apply(s,c);return d===!1&&(d=h.apply(s,c)),d}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new H;for(const r in n.hooks){if(!(r in s))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.hooks[o],h=s[o];H.passThroughHooks.has(r)?s[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(s,c)).then(p=>h.call(s,p));const d=l.call(s,c);return h.call(s,d)}:s[o]=(...c)=>{let d=l.apply(s,c);return d===!1&&(d=h.apply(s,c)),d}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,r=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _.lex(e,t??this.defaults)}parser(e,t){return S.parse(e,t??this.defaults)}}z=new WeakSet,ce=function(e,t){return(n,i)=>{const s={...i},r={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const o=Y(this,z,Qe).call(this,!!r.silent,!!r.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));let l=e(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let h=t(l,r);return r.hooks&&(h=r.hooks.postprocess(h)),h}catch(l){return o(l)}}},Qe=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+T(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const P=new Zt;function m(a,e){return P.parse(a,e)}m.options=m.setOptions=function(a){return P.setOptions(a),m.defaults=P.defaults,Be(m.defaults),m};m.getDefaults=ge;m.defaults=q;m.use=function(...a){return P.use(...a),m.defaults=P.defaults,Be(m.defaults),m};m.walkTokens=function(a,e){return P.walkTokens(a,e)};m.parseInline=P.parseInline;m.Parser=S;m.parser=S.parse;m.Renderer=J;m.TextRenderer=ve;m.Lexer=_;m.lexer=_.lex;m.Tokenizer=K;m.Hooks=H;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;S.parse;_.lex;var Vt=pt();const Ke=ot(Vt);var Ie={},Pe;function Wt(){return Pe||(Pe=1,(function(){if(typeof Prism>"u"||typeof document>"u")return;var a={javascript:"clike",actionscript:"javascript",apex:["clike","sql"],arduino:"cpp",aspnet:["markup","csharp"],birb:"clike",bison:"c",c:"clike",csharp:"clike",cpp:"c",cfscript:"clike",chaiscript:["clike","cpp"],cilkc:"c",cilkcpp:"cpp",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",gml:"clike",glsl:"c",go:"clike",gradle:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",hlsl:"c",idris:"haskell",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike","typescript"],"js-extras":"javascript",json5:"json",jsonp:"json","js-templates":"javascript",kotlin:"clike",latte:["clike","markup-templating","php"],less:"css",lilypond:"scheme",liquid:"markup-templating",markdown:"markup","markup-templating":"markup",mongodb:"javascript",n4js:"javascript",objectivec:"c",opencl:"c",parser:"markup",php:"markup-templating",phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],purebasic:"clike",purescript:"haskell",qsharp:"clike",qml:"javascript",qore:"clike",racket:"scheme",cshtml:["markup","csharp"],jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",squirrel:"clike",stata:["mata","java","python"],"t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","vbnet"],tap:"yaml",tt2:["clike","markup-templating"],textile:"markup",twig:"markup-templating",typescript:"javascript",v:"clike",vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup","xml-doc":"markup",xquery:"markup"},e={html:"markup",xml:"markup",svg:"markup",mathml:"markup",ssml:"markup",atom:"markup",rss:"markup",js:"javascript",g4:"antlr4",ino:"arduino","arm-asm":"armasm",art:"arturo",adoc:"asciidoc",avs:"avisynth",avdl:"avro-idl",gawk:"awk",sh:"bash",shell:"bash",shortcode:"bbcode",rbnf:"bnf",oscript:"bsl",cs:"csharp",dotnet:"csharp",cfc:"cfscript","cilk-c":"cilkc","cilk-cpp":"cilkcpp",cilk:"cilkcpp",coffee:"coffeescript",conc:"concurnas",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gv:"dot",eta:"ejs",xlsx:"excel-formula",xls:"excel-formula",gamemakerlanguage:"gml",po:"gettext",gni:"gn",ld:"linker-script","go-mod":"go-module",hbs:"handlebars",mustache:"handlebars",hs:"haskell",idr:"idris",gitignore:"ignore",hgignore:"ignore",npmignore:"ignore",webmanifest:"json",kt:"kotlin",kts:"kotlin",kum:"kumir",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",nani:"naniscript",objc:"objectivec",qasm:"openqasm",objectpascal:"pascal",px:"pcaxis",pcode:"peoplecode",plantuml:"plant-uml",pq:"powerquery",mscript:"powerquery",pbfasm:"purebasic",purs:"purescript",py:"python",qs:"qsharp",rkt:"racket",razor:"cshtml",rpy:"renpy",res:"rescript",robot:"robotframework",rb:"ruby","sh-session":"shell-session",shellsession:"shell-session",smlnj:"sml",sol:"solidity",sln:"solution-file",rq:"sparql",sclang:"supercollider",t4:"t4-cs",trickle:"tremor",troy:"tremor",trig:"turtle",ts:"typescript",tsconfig:"typoscript",uscript:"unrealscript",uc:"unrealscript",url:"uri",vb:"visual-basic",vba:"visual-basic",webidl:"web-idl",mathematica:"wolfram",nb:"wolfram",wl:"wolfram",xeoracube:"xeora",yml:"yaml"},t={},n="none",i="components/",s=Prism.util.currentScript();if(s){var r=/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,o=/(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,l=s.getAttribute("data-autoloader-path");if(l!=null)i=l.trim().replace(/\/?$/,"/");else{var h=s.src;r.test(h)?i=h.replace(r,"components/"):o.test(h)&&(i=h.replace(o,"$1components/"))}}var c=Prism.plugins.autoloader={languages_path:i,use_minified:!0,loadLanguages:v};function d(u,b,x){var g=document.createElement("script");g.src=u,g.async=!0,g.onload=function(){document.body.removeChild(g),b&&b()},g.onerror=function(){document.body.removeChild(g),x&&x()},document.body.appendChild(g)}function p(u){var b=(u.getAttribute("data-dependencies")||"").trim();if(!b){var x=u.parentElement;x&&x.tagName.toLowerCase()==="pre"&&(b=(x.getAttribute("data-dependencies")||"").trim())}return b?b.split(/\s*,\s*/g):[]}function f(u){if(u.indexOf("!")>=0)return!1;if(u=e[u]||u,u in Prism.languages)return!0;var b=t[u];return b&&!b.error&&b.loading===!1}function C(u){return c.languages_path+"prism-"+u+(c.use_minified?".min":"")+".js"}function v(u,b,x){typeof u=="string"&&(u=[u]);var g=u.length,D=0,L=!1;if(g===0){b&&setTimeout(b,0);return}function E(){L||(D++,D===g&&b&&b(u))}u.forEach(function(Ee){A(Ee,E,function(){L||(L=!0,x&&x(Ee))})})}function A(u,b,x){var g=u.indexOf("!")>=0;u=u.replace("!",""),u=e[u]||u;function D(){var E=t[u];E||(E=t[u]={callbacks:[]}),E.callbacks.push({success:b,error:x}),!g&&f(u)?R(u,"success"):!g&&E.error?R(u,"error"):(g||!E.loading)&&(E.loading=!0,E.error=!1,d(C(u),function(){E.loading=!1,R(u,"success")},function(){E.loading=!1,E.error=!0,R(u,"error")}))}var L=a[u];L&&L.length?v(L,D,x):D()}function R(u,b){if(t[u]){for(var x=t[u].callbacks,g=0,D=x.length;g<D;g++){var L=x[g][b];L&&setTimeout(L,0)}x.length=0}}Prism.hooks.add("complete",function(u){var b=u.element,x=u.language;if(!(!b||!x||x===n)){var g=p(b);/^diff-./i.test(x)?(g.push("diff"),g.push(x.substr(5))):g.push(x),g.every(f)||v(g,function(){Prism.highlightElement(b)})}})})()),Ie}Wt();const Qt=Ke.plugins;Qt.autoloader.languages_path="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/";m.setOptions({gfm:!0,breaks:!0});let Kt=0;const pe=[];function Xe(){return document.documentElement.getAttribute("data-theme")==="dark"}ae.initialize({startOnLoad:!1,theme:Xe()?"dark":"default",securityLevel:"loose",fontFamily:"var(--font-sans)"});const Q=[];function Xt(a){Q.length=0;let e=0;return a=a.replace(/\$\$([\s\S]+?)\$\$/g,(t,n)=>{const i=`%%MATH_BLOCK_${e++}%%`;return Q.push({id:i,tex:n.trim(),displayMode:!0}),i}),a=a.replace(/(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)/g,(t,n)=>{const i=`%%MATH_INLINE_${e++}%%`;return Q.push({id:i,tex:n.trim(),displayMode:!1}),i}),a}function Jt(a){for(const{id:e,tex:t,displayMode:n}of Q)try{const i=ct.renderToString(t,{displayMode:n,throwOnError:!1,trust:!0});a=a.replace(e,i)}catch(i){const s=i instanceof Error?i.message:String(i);a=a.replace(e,`<span class="math-error" title="${oe(s)}">${oe(t)}</span>`)}return a}function en(a){pe.length=0;const e=/```mermaid\n([\s\S]*?)```/g;let t;for(;(t=e.exec(a))!==null;)pe.push(t[1].trim())}function tn(a){return a.replace(/<blockquote>\s*<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*<br\s*\/?>\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi,(e,t,n)=>{const i=t.toLowerCase();return`<div class="alert alert-${i}"><div class="alert-title">${{note:"ℹ️",tip:"💡",important:"‼️",warning:"⚠️",caution:"🔴"}[i]||""} ${t.toUpperCase()}</div><div>${n}</div></div>`})}const nn={ADD_TAGS:["input","math","mrow","mi","mo","mn","msup","msub","mfrac","mover","munder","msqrt","mtable","mtr","mtd","mtext","mspace","annotation","semantics","mpadded","menclose","mglyph","mstyle","merror","span","svg","g","path","rect","circle","ellipse","line","polyline","polygon","text","tspan","defs","clippath","marker","foreignobject","use","symbol","lineargradient","radialgradient","stop","pattern","mask","image","title","desc"],ADD_ATTR:["checked","disabled","type","class","style","aria-hidden","xmlns","mathvariant","encoding","stretchy","fence","separator","accent","accentunder","displaystyle","scriptlevel","width","height","voffset","lspace","rspace","linethickness","columnalign","columnspacing","rowspacing","viewBox","fill","stroke","stroke-width","stroke-linecap","stroke-linejoin","stroke-dasharray","stroke-opacity","fill-opacity","transform","d","x","y","x1","y1","x2","y2","cx","cy","r","rx","ry","dx","dy","points","text-anchor","dominant-baseline","font-size","font-family","font-weight","clip-path","marker-end","marker-start","marker-mid","refX","refY","markerWidth","markerHeight","orient","gradientTransform","gradientUnits","spreadMethod","offset","stop-color","stop-opacity","patternUnits","patternTransform","xlink:href","href","preserveAspectRatio","data-id","data-node","data-label","data-et","data-look","id","requiredFeatures","systemLanguage","opacity","visibility"],ALLOW_UNKNOWN_PROTOCOLS:!0};function rn(a){const e=a.querySelectorAll("h1, h2, h3, h4, h5, h6"),t={};e.forEach(n=>{const i=n.textContent?.trim()||"";let s=ut(i);t[s]!==void 0?(t[s]++,s=`${s}-${t[s]}`):t[s]=0,n.id=s;const r=document.createElement("a");r.className="heading-anchor",r.href=`#${s}`,r.textContent="#",n.appendChild(r)})}function sn(a){a.querySelectorAll("pre > code").forEach(e=>{const t=e.parentElement;if(t.querySelector(".copy-btn"))return;const n=e.className.match(/language-(\S+)/),i=n?n[1]:"";if(i){const r=document.createElement("span");r.className="code-lang",r.textContent=i,t.insertBefore(r,e)}const s=document.createElement("button");s.className="copy-btn",s.title="Copy code",s.textContent="⧉",s.addEventListener("click",()=>{navigator.clipboard.writeText(e.textContent||"").then(()=>{s.classList.add("copied"),s.textContent="✓",setTimeout(()=>{s.classList.remove("copied"),s.textContent="⧉"},1500)})}),t.insertBefore(s,e)})}async function an(a){const e=a.querySelectorAll("code.language-mermaid");if(e.length===0)return;ae.initialize({startOnLoad:!1,theme:Xe()?"dark":"default",securityLevel:"loose",fontFamily:"var(--font-sans)"});let t=0;for(const n of e){const i=n.parentElement,s=pe[t++]??n.textContent??"",r=`mermaid-graph-${Kt++}`;try{const{svg:o}=await ae.render(r,s),l=document.createElement("div");l.className="mermaid-diagram",l.innerHTML=o,i.replaceWith(l)}catch(o){console.warn("Mermaid render error:",o);const l=document.createElement("div");l.className="mermaid-error",l.textContent=`Mermaid error: ${o instanceof Error?o.message:String(o)}`,i.replaceWith(l)}}}function on(a,e){let t=a;try{en(t),t=Xt(t);let n=m.parse(t);if(n=Jt(n),n=tn(n),n=lt.sanitize(n,nn),e.innerHTML=n,rn(e),sn(e),an(e),e.querySelectorAll('pre code[class*="language-"]:not(.language-mermaid)').forEach(i=>{Ke.highlightElement(i)}),location.hash){const i=document.getElementById(location.hash.slice(1));i&&setTimeout(()=>i.scrollIntoView({behavior:"smooth",block:"start"}),100)}}catch(n){console.error("Render error:",n);const i=n instanceof Error?n.message:String(n);e.innerHTML=`<div style="color:var(--danger);padding:20px;font-family:var(--font-mono);font-size:var(--fs-sm);">Render error: ${oe(i)}</div>`}}let W=null;function ln(a,e,t){const n=a.querySelectorAll("h1, h2, h3, h4, h5, h6");if(e.innerHTML="",n.length===0){e.innerHTML='<div style="padding:16px;color:var(--text-muted);font-size:var(--fs-xs);">No headings found</div>';return}n.forEach(i=>{const s=parseInt(i.tagName[1]),r=document.createElement("a");r.className="toc-item",r.dataset.level=String(s),r.textContent=(i.textContent||"").replace(/#$/,"").trim(),r.href=`#${i.id}`,r.addEventListener("click",o=>{o.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"}),e.querySelectorAll(".toc-item").forEach(l=>l.classList.remove("active")),r.classList.add("active"),history.replaceState(null,"",`#${i.id}`)}),e.appendChild(r)}),cn(n,e,t)}function cn(a,e,t){W&&W.disconnect(),W=new IntersectionObserver(n=>{n.forEach(i=>{if(i.isIntersecting){const s=i.target.id;e.querySelectorAll(".toc-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("href")===`#${s}`)})}})},{root:t,rootMargin:"-20% 0px -60% 0px",threshold:0}),a.forEach(n=>W.observe(n))}const ze=`# Mission Control: Orbital Mechanics 101 🚀

Welcome to the mission briefing. This document outlines the fundamental physics, trajectory calculations, and flight plans for our upcoming orbital insertions. 

## Mission Checklist

- [x] **Pre-flight systems check** — verified telemetry and life support
- [x] **Payload integration** — secured the primary satellite
- [ ] **Launch sequence initiation** — awaiting favorable weather window
- [ ] **Orbital circularization** — planned for T+45 minutes

## Essential Physics (LaTeX Math)

Inline math: To calculate the gravitational force between two bodies, we use Newton's law of universal gravitation: $F = G \\frac{m_1 m_2}{r^2}$.

The **vis-viva equation** is crucial for determining the velocity $v$ of a body in an elliptical orbit:

$$v^2 = GM \\left( \\frac{2}{r} - \\frac{1}{a} \\right)$$

To calculate the change in velocity required for orbital maneuvers, we rely on the **Tsiolkovsky rocket equation**:

$$\\Delta v = v_e \\ln \\frac{m_0}{m_f}$$

We track spacecraft orientation using state vectors in 3D space:

$$\\mathbf{S} = \\begin{pmatrix} x \\\\ y \\\\ z \\\\ v_x \\\\ v_y \\\\ v_z \\end{pmatrix}$$

## Telemetry Systems (Syntax Highlighting)

\`\`\`python
import math

def calculate_escape_velocity(mass: float, radius: float) -> float:
    """Calculate escape velocity in m/s given mass (kg) and radius (m)."""
    G = 6.67430e-11 # Gravitational constant
    return math.sqrt((2 * G * mass) / radius)

earth_mass = 5.972e24
earth_radius = 6371000
v_escape = calculate_escape_velocity(earth_mass, earth_radius)

print(f"Earth escape velocity: {v_escape / 1000:.2f} km/s")
\`\`\`

\`\`\`javascript
// Trajectory adjustment calculator
const calculateDeltaV = (exhaustVelocity, initialMass, finalMass) => {
  if (finalMass <= 0) throw new Error("Final mass must be greater than zero");
  return exhaustVelocity * Math.log(initialMass / finalMass);
};

console.log(\`Required Delta-v: \${calculateDeltaV(4500, 50000, 15000).toFixed(2)} m/s\`);
\`\`\`

## Celestial Targets

| Body | Mass (kg) | Radius (km) | Surface Gravity |
|---------|--------|-------|-------|
| Earth | $5.97 \\times 10^{24}$ | 6,371 | $9.81 \\text{ m/s}^2$ |
| Moon | $7.34 \\times 10^{22}$ | 1,737 | $1.62 \\text{ m/s}^2$ |
| Mars | $6.42 \\times 10^{23}$ | 3,389 | $3.72 \\text{ m/s}^2$ |

## Mission Flight Plan (Mermaid Diagrams)

Our standard launch procedure is mapped out below:

\`\`\`mermaid
sequenceDiagram
    participant MC as Mission Control
    participant LV as Launch Vehicle
    participant P as Payload
    
    MC->>LV: Initiate Ignition Sequence
    LV-->>MC: Liftoff Confirmed
    LV->>LV: Max-Q Reached
    LV->>P: Fairing Separation
    LV->>P: Payload Deployment
    P-->>MC: Telemetry Established
\`\`\`

Contingency flowchart for stage separation anomalies:

\`\`\`mermaid
flowchart TD
    A["Stage 1 MECO"] --> B{"Separation Confirmed?"}
    B -- Yes --> C["Ignite Stage 2"]
    B -- No --> D["Trigger Backup Pyrotechnics"]
    D --> E{"Backup Successful?"}
    E -- Yes --> C
    E -- No --> F["Abort to Ocean Splashdown"]
    C --> G["Continue to Orbit"]
\`\`\`

## Mission Logs

> "Somewhere, something incredible is waiting to be known."
> — Carl Sagan

## Status Alerts

> [!NOTE]
> The launch window opens at 04:00 UTC and remains valid for exactly 120 minutes.

> [!TIP]
> Keep an eye on the telemetry dashboard for real-time apoapsis and periapsis updates.

> [!WARNING]
> High upper-level winds detected. Monitoring structural load thresholds.

> [!CAUTION]
> Manual override of the flight computer is strictly prohibited without flight director approval.

## Visual Reconnaissance

Current view of the launch facility (simulated):

![Space Launch](https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=400&fit=crop)

## Formatting Checks

Ensure all sensors are **online**, *calibrated*, and ~~deprecated systems~~ are disconnected. Run the \`sys_diagnostic\` routine before accessing the [flight terminal](https://nasa.gov).

---

*Mission Control Dashboard v2.4.1 — Ad Astra*
`,pn=`# Markdown to HTML Converter

Paste or type your **Markdown** on the left and see the rendered **HTML** output in real-time on the right. This free tool converts any valid Markdown into clean, semantic HTML instantly.

## Supported Syntax

### Text Formatting

You can use **bold**, *italics*, ~~strikethrough~~, and \`inline code\` anywhere in your document. Combine them freely: ***bold italic*** works too.

### Links & Images

- [Visit OpenAI](https://openai.com) — standard links
- ![Placeholder image](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop)

### Blockquotes

> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
> — John Gruber

### Ordered & Unordered Lists

1. Write your Markdown
2. See the live HTML preview
3. Click **Copy HTML** to grab the output
4. Paste into your blog, CMS, or email

Unordered:

- GitHub README files
- Documentation sites
- Blog posts & newsletters
- Technical notes

### Task Lists

- [x] Paste Markdown content
- [x] Review the live preview
- [ ] Copy rendered HTML
- [ ] Publish to your site

## Code Blocks

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello from Markdown!</h1>
  <p>This HTML was generated from a Markdown source.</p>
</body>
</html>
\`\`\`

\`\`\`css
.markdown-output {
  font-family: Georgia, serif;
  line-height: 1.8;
  max-width: 720px;
  margin: 0 auto;
}
\`\`\`

## Tables

| Feature           | Supported |
|-------------------|-----------|
| Headings          | Yes       |
| Bold / Italic     | Yes       |
| Links & Images    | Yes       |
| Code Blocks       | Yes       |
| Tables            | Yes       |
| Task Lists        | Yes       |
| LaTeX Math        | Yes       |
| Mermaid Diagrams  | Yes       |

## Horizontal Rule

---

## Alerts

> [!TIP]
> Use the **Copy HTML** button in the toolbar to copy the rendered output to your clipboard, ready to paste into any HTML editor or CMS.

> [!NOTE]
> This tool processes everything client-side. Your content never leaves your browser.

---

*Start typing or paste your Markdown above to convert it to HTML instantly.*
`,un=`# LaTeX Math Editor

Write mathematical expressions using **LaTeX syntax** and see them rendered beautifully in real-time. Supports both inline math and display (block) equations powered by KaTeX.

## Inline Math

The quadratic formula is $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, and Euler's identity is $e^{i\\pi} + 1 = 0$.

The derivative of $f(x) = x^n$ is $f'(x) = nx^{n-1}$, and the integral $\\int_0^1 x^2\\,dx = \\frac{1}{3}$.

## Display Equations

### Calculus

The **Fundamental Theorem of Calculus**:

$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

**Taylor series** expansion of $e^x$ about $x = 0$:

$$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$

### Linear Algebra

A system of linear equations in matrix form:

$$\\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} = \\begin{pmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{pmatrix}$$

The **determinant** of a $2 \\times 2$ matrix:

$$\\det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$

### Probability & Statistics

**Bayes' Theorem**:

$$P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)}$$

The **normal distribution** probability density function:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right)$$

### Physics

**Maxwell's Equations** in differential form:

$$\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}$$

$$\\nabla \\cdot \\mathbf{B} = 0$$

$$\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$$

$$\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t}$$

**Einstein's field equations**:

$$R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}$$

### Number Theory

**Euler's totient function** for prime $p$:

$$\\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p - 1)$$

The **Riemann zeta function**:

$$\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} = \\prod_{p \\text{ prime}} \\frac{1}{1 - p^{-s}}$$

## LaTeX Quick Reference

| Syntax | Result |
|--------|--------|
| \`$x^2$\` | $x^2$ |
| \`$x_i$\` | $x_i$ |
| \`$\\frac{a}{b}$\` | $\\frac{a}{b}$ |
| \`$\\sqrt{x}$\` | $\\sqrt{x}$ |
| \`$\\sum_{i=1}^n$\` | $\\sum_{i=1}^n$ |
| \`$\\int_a^b$\` | $\\int_a^b$ |
| \`$\\alpha, \\beta, \\gamma$\` | $\\alpha, \\beta, \\gamma$ |
| \`$\\leq, \\geq, \\neq$\` | $\\leq, \\geq, \\neq$ |
| \`$\\infty$\` | $\\infty$ |
| \`$\\mathbf{v}$\` | $\\mathbf{v}$ |

> [!TIP]
> Wrap expressions in single \`$\` for inline math, or double \`$$\` for centered display equations.

---

*Edit the math expressions above or write your own LaTeX below.*
`,hn=`# Mermaid Diagram Editor

Create diagrams and visualizations using **Mermaid** syntax inside fenced code blocks. The diagrams render live as you type.

## Flowchart

\`\`\`mermaid
flowchart TD
    A["Start"] --> B{"Is it working?"}
    B -- Yes --> C["Great!"]
    B -- No --> D["Debug"]
    D --> E["Check Logs"]
    E --> F{"Found issue?"}
    F -- Yes --> G["Fix it"]
    F -- No --> H["Search Stack Overflow"]
    G --> B
    H --> G
    C --> I["Ship it!"]
\`\`\`

## Sequence Diagram

\`\`\`mermaid
sequenceDiagram
    actor User
    participant App as Web App
    participant API as REST API
    participant DB as Database

    User->>App: Submit form
    App->>API: POST /api/data
    API->>DB: INSERT record
    DB-->>API: Success
    API-->>App: 201 Created
    App-->>User: Show confirmation
\`\`\`

## Class Diagram

\`\`\`mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
        +makeSound() void
    }
    class Cat {
        +bool isIndoor
        +purr() void
        +makeSound() void
    }
    Animal <|-- Dog
    Animal <|-- Cat
\`\`\`

## State Diagram

\`\`\`mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : Submit
    Processing --> Success : Valid
    Processing --> Error : Invalid
    Error --> Idle : Retry
    Success --> [*]
\`\`\`

## Entity Relationship Diagram

\`\`\`mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    PRODUCT ||--o{ LINE_ITEM : "is in"
    CUSTOMER {
        int id PK
        string name
        string email
    }
    ORDER {
        int id PK
        date created_at
        string status
    }
    PRODUCT {
        int id PK
        string name
        float price
    }
\`\`\`

## Gantt Chart

\`\`\`mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Design
        Wireframes       :done, d1, 2026-01-01, 10d
        UI Mockups       :done, d2, after d1, 7d
    section Development
        Frontend         :active, dev1, after d2, 20d
        Backend API      :dev2, after d2, 15d
        Integration      :dev3, after dev1, 10d
    section Launch
        QA Testing       :qa, after dev3, 7d
        Deployment       :deploy, after qa, 3d
\`\`\`

## Pie Chart

\`\`\`mermaid
pie title Website Traffic Sources
    "Organic Search" : 45
    "Direct" : 25
    "Social Media" : 15
    "Referral" : 10
    "Email" : 5
\`\`\`

## Mermaid Quick Reference

| Diagram Type | Opening Keyword |
|-------------|----------------|
| Flowchart | \`flowchart TD\` or \`flowchart LR\` |
| Sequence | \`sequenceDiagram\` |
| Class | \`classDiagram\` |
| State | \`stateDiagram-v2\` |
| ER | \`erDiagram\` |
| Gantt | \`gantt\` |
| Pie | \`pie\` |
| Git Graph | \`gitGraph\` |

> [!TIP]
> Wrap your diagram code in a fenced code block with the language set to \`mermaid\`.

---

*Edit the diagrams above or create your own below.*
`,dn=`# Markdown Table Generator

Build and format **Markdown tables** with live preview. Type your table using pipe \`|\` syntax and see it rendered instantly.

## Basic Table

| Name       | Role          | Department  |
|------------|---------------|-------------|
| Alice Chen | Lead Engineer | Engineering |
| Bob Patel  | Designer      | Product     |
| Carol Wu   | PM            | Product     |
| Dave Kim   | DevOps        | Engineering |

## Alignment

Use colons in the separator row to control alignment:

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Alice        | Engineering    | $125,000      |
| Bob          | Design         | $110,000      |
| Carol        | Product        | $120,000      |
| Dave         | DevOps         | $130,000      |

## Data Table

| Country       | Population     | GDP (Trillion) | Continent     |
|---------------|---------------:|---------------:|---------------|
| United States | 331,900,000    | $25.46         | North America |
| China         | 1,412,000,000  | $17.96         | Asia          |
| Japan         | 125,700,000    | $4.23          | Asia          |
| Germany       | 83,200,000     | $4.07          | Europe        |
| United Kingdom| 67,800,000     | $3.07          | Europe        |
| India         | 1,408,000,000  | $3.39          | Asia          |
| France        | 67,750,000     | $2.78          | Europe        |

## Comparison Table

| Feature            | Free Plan | Pro Plan  | Enterprise |
|--------------------|:---------:|:---------:|:----------:|
| Users              | 1         | 10        | Unlimited  |
| Storage            | 1 GB      | 50 GB     | 500 GB     |
| API Access         | No        | Yes       | Yes        |
| Custom Domain      | No        | Yes       | Yes        |
| Priority Support   | No        | No        | Yes        |
| SSO                | No        | No        | Yes        |
| Price              | $0/mo     | $19/mo    | $99/mo     |

## Status Table with Formatting

| Service        | Status         | Uptime   | Last Incident       |
|----------------|----------------|----------|---------------------|
| **Web App**    | *Operational*  | 99.98%   | 2026-03-15          |
| **API**        | *Operational*  | 99.95%   | 2026-04-01          |
| **Database**   | *Operational*  | 99.99%   | 2026-02-20          |
| **CDN**        | **Degraded**   | 99.80%   | 2026-04-18          |
| **Email**      | *Operational*  | 99.90%   | 2026-03-28          |

## Keyboard Shortcuts Table

| Shortcut              | Action              |
|-----------------------|---------------------|
| \`Ctrl/Cmd + O\`       | Open file           |
| \`Ctrl/Cmd + B\`       | Toggle TOC          |
| \`Ctrl/Cmd + P\`       | Print / Export PDF  |
| \`Ctrl/Cmd + Shift + C\` | Copy HTML        |
| \`Ctrl/Cmd + 1\`       | Editor only view    |
| \`Ctrl/Cmd + 2\`       | Split view          |
| \`Ctrl/Cmd + 3\`       | Preview only view   |

## Markdown Table Syntax

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
\`\`\`

**Alignment options** in the separator row:

\`\`\`markdown
| Left       | Center     | Right      |
|:-----------|:----------:|-----------:|
| left text  | centered   | right text |
\`\`\`

> [!TIP]
> Columns don't need to line up perfectly in your Markdown source — the renderer handles alignment automatically.

> [!NOTE]
> You can use **bold**, *italic*, \`code\`, and [links](https://mdview.co) inside table cells.

---

*Edit the tables above or create your own below.*
`;function fn(){const a=window.location.pathname.replace(/\/$/,"")||"/";return{"/":ze,"/markdown-to-html":pn,"/latex-editor":un,"/mermaid-editor":hn,"/markdown-table-generator":dn}[a]??ze}const w=a=>document.querySelector(a),$=w("#editor"),ee=w("#preview"),mn=w("#preview-scroll"),Je=w("#main"),re=w("#toc-dropdown"),gn=w("#toc-list"),te=w("#file-input"),kn=w("#file-name"),bn=w("#toast"),M=w("#editor-panel"),ue=w("#resize-handle"),xn=w("#btn-open"),yn=w("#btn-theme"),se=w("#btn-toc"),wn=w("#btn-copy"),vn=w("#btn-print"),he=w("#btn-view-editor"),de=w("#btn-view-split"),fe=w("#btn-view-preview"),qe=w("#icon-moon"),Oe=w("#icon-sun");let I=!1,je;ht(bn);function $e(){on($.value,ee),ln(ee,gn,mn),$n($.value)}function et(){clearTimeout(je),je=setTimeout($e,120)}function $n(a){const e=a.trim(),t=e?e.split(/\s+/).length:0,n=e.length;w("#stat-words").textContent=`${t} word${t!==1?"s":""}`,w("#stat-chars").textContent=`${n} char${n!==1?"s":""}`}function tt(a){document.documentElement.setAttribute("data-theme",a),localStorage.setItem("md-viewer-theme",a),a==="dark"?(qe.style.display="",Oe.style.display="none"):(qe.style.display="none",Oe.style.display="")}function Tn(){const a=document.documentElement.getAttribute("data-theme");tt(a==="dark"?"light":"dark")}function O(a){Je.className=`main view-${a}`,[he,de,fe].forEach(e=>e.classList.remove("active")),a==="editor"&&he.classList.add("active"),a==="split"&&de.classList.add("active"),a==="preview"&&fe.classList.add("active")}function nt(){I=!I,re.classList.toggle("hidden",!I),se.classList.toggle("active",I)}function it(){I&&(I=!1,re.classList.add("hidden"),se.classList.remove("active"))}document.addEventListener("mousedown",a=>{I&&!re.contains(a.target)&&!se.contains(a.target)&&it()});re.addEventListener("click",a=>{a.target.closest(".toc-item")&&it()});function Te(a){const e=new FileReader;e.onload=t=>{$.value=t.target.result,kn.textContent=a.name,$e(),me(`Loaded ${a.name}`)},e.readAsText(a)}let F=0;M.addEventListener("dragenter",a=>{a.preventDefault(),F++,M.classList.add("dragover")});M.addEventListener("dragleave",a=>{a.preventDefault(),F--,F<=0&&(F=0,M.classList.remove("dragover"))});M.addEventListener("dragover",a=>a.preventDefault());M.addEventListener("drop",a=>{a.preventDefault(),F=0,M.classList.remove("dragover");const e=a.dataTransfer?.files[0];e&&Te(e)});document.addEventListener("dragover",a=>a.preventDefault());document.addEventListener("drop",a=>{a.preventDefault();const e=a.dataTransfer?.files?.[0];e&&Te(e)});let ne=!1;ue.addEventListener("mousedown",a=>{ne=!0,ue.classList.add("active"),document.body.style.cursor="col-resize",document.body.style.userSelect="none",a.preventDefault()});document.addEventListener("mousemove",a=>{if(!ne)return;const e=Je.getBoundingClientRect(),n=(a.clientX-e.left)/e.width*100;n>15&&n<85&&(M.style.flex=`0 0 ${n}%`,w("#preview-panel").style.flex="1")});document.addEventListener("mouseup",()=>{ne&&(ne=!1,ue.classList.remove("active"),document.body.style.cursor="",document.body.style.userSelect="")});$.addEventListener("input",et);xn.addEventListener("click",()=>te.click());te.addEventListener("change",()=>{const a=te.files?.[0];a&&Te(a)});yn.addEventListener("click",Tn);se.addEventListener("click",nt);he.addEventListener("click",()=>O("editor"));de.addEventListener("click",()=>O("split"));fe.addEventListener("click",()=>O("preview"));wn.addEventListener("click",()=>{navigator.clipboard.writeText(ee.innerHTML).then(()=>me("HTML copied to clipboard"))});vn.addEventListener("click",()=>window.print());document.addEventListener("keydown",a=>{const e=a.metaKey||a.ctrlKey;e&&a.key==="o"&&(a.preventDefault(),te.click()),e&&a.key==="b"&&(a.preventDefault(),nt()),e&&a.key==="p"&&(a.preventDefault(),window.print()),e&&a.shiftKey&&a.key==="C"&&(a.preventDefault(),navigator.clipboard.writeText(ee.innerHTML).then(()=>me("HTML copied"))),e&&a.key==="1"&&(a.preventDefault(),O("editor")),e&&a.key==="2"&&(a.preventDefault(),O("split")),e&&a.key==="3"&&(a.preventDefault(),O("preview"))});$.addEventListener("keydown",a=>{if(a.key==="Tab"){a.preventDefault();const e=$.selectionStart,t=$.selectionEnd;$.value=$.value.substring(0,e)+"  "+$.value.substring(t),$.selectionStart=$.selectionEnd=e+2,et()}});(function(){const e=localStorage.getItem("md-viewer-theme")||"dark";tt(e),$.value=fn(),$e()})();
//# sourceMappingURL=main-Dyx3X36q.js.map
