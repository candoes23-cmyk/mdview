var pt=Object.defineProperty;var Re=a=>{throw TypeError(a)};var ut=(a,e,t)=>e in a?pt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var y=(a,e,t)=>ut(a,typeof e!="symbol"?e+"":e,t),dt=(a,e,t)=>e.has(a)||Re("Cannot "+t);var De=(a,e,t)=>e.has(a)?Re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t);var W=(a,e,t)=>(dt(a,e,"access private method"),t);import{aD as ht,b1 as ue,z as ft}from"./mermaid-CG0dut8w.js";import mt from"./katex-DHMw6HUq.js";import{r as gt}from"./prism-Bq9ueNJX.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function kt(a){return a.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").trim()}function de(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let N=null,Ie;function bt(a){N=a}function Y(a){N&&(N.textContent=a,N.classList.add("show"),clearTimeout(Ie),Ie=setTimeout(()=>N?.classList.remove("show"),2e3))}function ye(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let O=ye();function Ye(a){O=a}const Ze=/[&<>"']/,xt=new RegExp(Ze.source,"g"),Ve=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,yt=new RegExp(Ve.source,"g"),wt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pe=a=>wt[a];function E(a,e){if(e){if(Ze.test(a))return a.replace(xt,Pe)}else if(Ve.test(a))return a.replace(yt,Pe);return a}const vt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function $t(a){return a.replace(vt,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Tt=/(^|[^\[])\^/g;function k(a,e){let t=typeof a=="string"?a:a.source;e=e||"";const n={replace:(i,s)=>{let r=typeof s=="string"?s:s.source;return r=r.replace(Tt,"$1"),t=t.replace(i,r),n},getRegex:()=>new RegExp(t,e)};return n}function ze(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const H={exec:()=>null};function qe(a,e){const t=a.replace(/\|/g,(s,r,o)=>{let l=!1,d=r;for(;--d>=0&&o[d]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function Q(a,e,t){const n=a.length;if(n===0)return"";let i=0;for(;i<n&&a.charAt(n-i-1)===e;)i++;return a.slice(0,n-i)}function Et(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function Oe(a,e,t,n){const i=e.href,s=e.title?E(e.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:i,title:s,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:s,text:E(r)}}function Lt(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=n.length?i.slice(n.length):i}).join(`
`)}class ee{constructor(e){y(this,"options");y(this,"rules");y(this,"lexer");this.options=e||O}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Q(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Lt(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=Q(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=Q(n.replace(/^ *>[ \t]?/gm,""),`
`);const i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",d=!1;for(;e;){let c=!1;if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let h=t[2].split(`
`,1)[0].replace(/^\t+/,R=>" ".repeat(3*R.length)),p=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=h.trimStart()):(f=t[2].search(/[^ ]/),f=f>4?1:f,l=h.slice(f),f+=t[1].length);let C=!1;if(!h&&/^ *$/.test(p)&&(o+=p+`
`,e=e.substring(p.length+1),c=!0),!c){const R=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),u=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),b=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const g=e.split(`
`,1)[0];if(p=g,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),b.test(p)||x.test(p)||R.test(p)||u.test(e))break;if(p.search(/[^ ]/)>=f||!p.trim())l+=`
`+p.slice(f);else{if(C||h.search(/[^ ]/)>=4||b.test(h)||x.test(h)||u.test(h))break;l+=`
`+p}!C&&!p.trim()&&(C=!0),o+=g+`
`,e=e.substring(g.length+1),h=p.slice(f)}}s.loose||(d?s.loose=!0:/\n *\n *$/.test(o)&&(d=!0));let v=null,M;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(M=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:o,task:!!v,checked:M,loose:!1,text:l,tokens:[]}),s.raw+=o}s.items[s.items.length-1].raw=o.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const h=s.items[c].tokens.filter(f=>f.type==="space"),p=h.length>0&&h.some(f=>/\n.*\n/.test(f.raw));s.loose=p}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=qe(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const o of i)/^ *-+: *$/.test(o)?r.align.push("right"):/^ *:-+: *$/.test(o)?r.align.push("center"):/^ *:-+ *$/.test(o)?r.align.push("left"):r.align.push(null);for(const o of n)r.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of s)r.rows.push(qe(o,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:E(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=Q(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=Et(t[2],"()");if(r>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),Oe(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return Oe(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...i[0]].length-1;let o,l,d=r,c=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+r);(i=h.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){d+=l;continue}else if((i[5]||i[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+c);const p=[...i[0]][0].length,f=e.slice(0,r+i.index+p+l);if(Math.min(r,l)%2){const v=f.slice(1,-1);return{type:"em",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}const C=f.slice(2,-2);return{type:"strong",raw:f,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=E(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=E(t[1]),i="mailto:"+n):(n=E(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,i;if(t[2]==="@")n=E(t[0]),i="mailto:"+n;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(s!==t[0]);n=E(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=E(t[0]),{type:"text",raw:t[0],text:n}}}}const Ct=/^(?: *(?:\n|$))+/,St=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,_t=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Z=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,At=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,We=/(?:[*+-]|\d{1,9}[.)])/,Qe=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,We).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),we=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Mt=/^[^\n]+/,ve=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Rt=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ve).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Dt=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,We).getRegex(),ae="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",$e=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,It=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",$e).replace("tag",ae).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ke=k(we).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ae).getRegex(),Pt=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ke).getRegex(),Te={blockquote:Pt,code:St,def:Rt,fences:_t,heading:At,hr:Z,html:It,lheading:Qe,list:Dt,newline:Ct,paragraph:Ke,table:H,text:Mt},je=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ae).getRegex(),zt={...Te,table:je,paragraph:k(we).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",je).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ae).getRegex()},qt={...Te,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",$e).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:H,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(we).replace("hr",Z).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Qe).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Xe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ot=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Je=/^( {2,}|\\)\n(?!\s*$)/,jt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,V="\\p{P}\\p{S}",Bt=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,V).getRegex(),Nt=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Ht=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,V).getRegex(),Ft=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,V).getRegex(),Gt=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,V).getRegex(),Ut=k(/\\([punct])/,"gu").replace(/punct/g,V).getRegex(),Yt=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Zt=k($e).replace("(?:-->|$)","-->").getRegex(),Vt=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Zt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),te=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Wt=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",te).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),et=k(/^!?\[(label)\]\[(ref)\]/).replace("label",te).replace("ref",ve).getRegex(),tt=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",ve).getRegex(),Qt=k("reflink|nolink(?!\\()","g").replace("reflink",et).replace("nolink",tt).getRegex(),Ee={_backpedal:H,anyPunctuation:Ut,autolink:Yt,blockSkip:Nt,br:Je,code:Ot,del:H,emStrongLDelim:Ht,emStrongRDelimAst:Ft,emStrongRDelimUnd:Gt,escape:Xe,link:Wt,nolink:tt,punctuation:Bt,reflink:et,reflinkSearch:Qt,tag:Vt,text:jt,url:H},Kt={...Ee,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",te).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",te).getRegex()},he={...Ee,escape:k(Xe).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Xt={...he,br:k(Je).replace("{2,}","*").getRegex(),text:k(he.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},K={normal:Te,gfm:zt,pedantic:qt},B={normal:Ee,gfm:he,breaks:Xt,pedantic:Kt};class _{constructor(e){y(this,"tokens");y(this,"options");y(this,"state");y(this,"tokenizer");y(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||O,this.options.tokenizer=this.options.tokenizer||new ee,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:K.normal,inline:B.normal};this.options.pedantic?(t.block=K.pedantic,t.inline=B.pedantic):this.options.gfm&&(t.block=K.gfm,this.options.breaks?t.inline=B.breaks:t.inline=B.gfm),this.tokenizer.rules=t}static get rules(){return{block:K,inline:B}}static lex(e,t){return new _(t).lex(e)}static lexInline(e,t){return new _(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,d)=>l+"    ".repeat(d.length));let n,i,s,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let d;this.options.extensions.startBlock.forEach(c=>{d=c.call({lexer:this},l),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),r=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,r=e,o,l,d;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(d=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,d)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const h=e.slice(1);let p;this.options.extensions.startInline.forEach(f=>{p=f.call({lexer:this},h),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(d=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class ne{constructor(e){y(this,"options");this.options=e||O}code(e,t,n){const i=(t||"").match(/^\S*/)?.[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+E(i)+'">'+(n?e:E(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:E(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=ze(e);if(i===null)return n;e=i;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){const i=ze(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Le{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class A{constructor(e){y(this,"options");y(this,"renderer");y(this,"textRenderer");this.options=e||O,this.options.renderer=this.options.renderer||new ne,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Le}static parse(e,t){return new A(t).parse(e)}static parseInline(e,t){return new A(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=s,o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=o||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const r=s;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,$t(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=s;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=s;let o="",l="";for(let c=0;c<r.header.length;c++)l+=this.renderer.tablecell(this.parseInline(r.header[c].tokens),{header:!0,align:r.align[c]});o+=this.renderer.tablerow(l);let d="";for(let c=0;c<r.rows.length;c++){const h=r.rows[c];l="";for(let p=0;p<h.length;p++)l+=this.renderer.tablecell(this.parseInline(h[p].tokens),{header:!1,align:r.align[p]});d+=this.renderer.tablerow(l)}n+=this.renderer.table(o,d);continue}case"blockquote":{const r=s,o=this.parse(r.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const r=s,o=r.ordered,l=r.start,d=r.loose;let c="";for(let h=0;h<r.items.length;h++){const p=r.items[h],f=p.checked,C=p.task;let v="";if(p.task){const M=this.renderer.checkbox(!!f);d?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=M+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=M+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:M+" "}):v+=M+" "}v+=this.parse(p.tokens,d),c+=this.renderer.listitem(v,C,!!f)}n+=this.renderer.list(c,o,l);continue}case"html":{const r=s;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=s;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=s,o=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<e.length&&e[i+1].type==="text";)r=e[++i],o+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=t?this.renderer.paragraph(o):o;continue}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=this.options.extensions.renderers[s.type].call({parser:this},s);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=r||"";continue}}switch(s.type){case"escape":{const r=s;n+=t.text(r.text);break}case"html":{const r=s;n+=t.html(r.text);break}case"link":{const r=s;n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{const r=s;n+=t.image(r.href,r.title,r.text);break}case"strong":{const r=s;n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{const r=s;n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{const r=s;n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{const r=s;n+=t.del(this.parseInline(r.tokens,t));break}case"text":{const r=s;n+=t.text(r.text);break}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}}class F{constructor(e){y(this,"options");this.options=e||O}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}y(F,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var q,fe,nt;class Jt{constructor(...e){De(this,q);y(this,"defaults",ye());y(this,"options",this.setOptions);y(this,"parse",W(this,q,fe).call(this,_.lex,A.parse));y(this,"parseInline",W(this,q,fe).call(this,_.lexInline,A.parseInline));y(this,"Parser",A);y(this,"Renderer",ne);y(this,"TextRenderer",Le);y(this,"Lexer",_);y(this,"Tokenizer",ee);y(this,"Hooks",F);this.use(...e)}walkTokens(e,t){let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const s=i;for(const r of s.header)n=n.concat(this.walkTokens(r.tokens,t));for(const r of s.rows)for(const o of r)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{const s=i;n=n.concat(this.walkTokens(s.items,t));break}default:{const s=i;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(r=>{const o=s[r].flat(1/0);n=n.concat(this.walkTokens(o,t))}):s.tokens&&(n=n.concat(this.walkTokens(s.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const r=t.renderers[s.name];r?t.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[s.level];r?r.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new ne(this.defaults);for(const r in n.renderer){if(!(r in s))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.renderer[o],d=s[o];s[o]=(...c)=>{let h=l.apply(s,c);return h===!1&&(h=d.apply(s,c)),h||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new ee(this.defaults);for(const r in n.tokenizer){if(!(r in s))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const o=r,l=n.tokenizer[o],d=s[o];s[o]=(...c)=>{let h=l.apply(s,c);return h===!1&&(h=d.apply(s,c)),h}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new F;for(const r in n.hooks){if(!(r in s))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.hooks[o],d=s[o];F.passThroughHooks.has(r)?s[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(s,c)).then(p=>d.call(s,p));const h=l.call(s,c);return d.call(s,h)}:s[o]=(...c)=>{let h=l.apply(s,c);return h===!1&&(h=d.apply(s,c)),h}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,r=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _.lex(e,t??this.defaults)}parser(e,t){return A.parse(e,t??this.defaults)}}q=new WeakSet,fe=function(e,t){return(n,i)=>{const s={...i},r={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const o=W(this,q,nt).call(this,!!r.silent,!!r.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));let l=e(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let d=t(l,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(l){return o(l)}}},nt=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+E(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const z=new Jt;function m(a,e){return z.parse(a,e)}m.options=m.setOptions=function(a){return z.setOptions(a),m.defaults=z.defaults,Ye(m.defaults),m};m.getDefaults=ye;m.defaults=O;m.use=function(...a){return z.use(...a),m.defaults=z.defaults,Ye(m.defaults),m};m.walkTokens=function(a,e){return z.walkTokens(a,e)};m.parseInline=z.parseInline;m.Parser=A;m.parser=A.parse;m.Renderer=ne;m.TextRenderer=Le;m.Lexer=_;m.lexer=_.lex;m.Tokenizer=ee;m.Hooks=F;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;A.parse;_.lex;var en=gt();const it=ht(en);var Be={},Ne;function tn(){return Ne||(Ne=1,(function(){if(typeof Prism>"u"||typeof document>"u")return;var a={javascript:"clike",actionscript:"javascript",apex:["clike","sql"],arduino:"cpp",aspnet:["markup","csharp"],birb:"clike",bison:"c",c:"clike",csharp:"clike",cpp:"c",cfscript:"clike",chaiscript:["clike","cpp"],cilkc:"c",cilkcpp:"cpp",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",gml:"clike",glsl:"c",go:"clike",gradle:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",hlsl:"c",idris:"haskell",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike","typescript"],"js-extras":"javascript",json5:"json",jsonp:"json","js-templates":"javascript",kotlin:"clike",latte:["clike","markup-templating","php"],less:"css",lilypond:"scheme",liquid:"markup-templating",markdown:"markup","markup-templating":"markup",mongodb:"javascript",n4js:"javascript",objectivec:"c",opencl:"c",parser:"markup",php:"markup-templating",phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],purebasic:"clike",purescript:"haskell",qsharp:"clike",qml:"javascript",qore:"clike",racket:"scheme",cshtml:["markup","csharp"],jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",squirrel:"clike",stata:["mata","java","python"],"t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","vbnet"],tap:"yaml",tt2:["clike","markup-templating"],textile:"markup",twig:"markup-templating",typescript:"javascript",v:"clike",vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup","xml-doc":"markup",xquery:"markup"},e={html:"markup",xml:"markup",svg:"markup",mathml:"markup",ssml:"markup",atom:"markup",rss:"markup",js:"javascript",g4:"antlr4",ino:"arduino","arm-asm":"armasm",art:"arturo",adoc:"asciidoc",avs:"avisynth",avdl:"avro-idl",gawk:"awk",sh:"bash",shell:"bash",shortcode:"bbcode",rbnf:"bnf",oscript:"bsl",cs:"csharp",dotnet:"csharp",cfc:"cfscript","cilk-c":"cilkc","cilk-cpp":"cilkcpp",cilk:"cilkcpp",coffee:"coffeescript",conc:"concurnas",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gv:"dot",eta:"ejs",xlsx:"excel-formula",xls:"excel-formula",gamemakerlanguage:"gml",po:"gettext",gni:"gn",ld:"linker-script","go-mod":"go-module",hbs:"handlebars",mustache:"handlebars",hs:"haskell",idr:"idris",gitignore:"ignore",hgignore:"ignore",npmignore:"ignore",webmanifest:"json",kt:"kotlin",kts:"kotlin",kum:"kumir",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",nani:"naniscript",objc:"objectivec",qasm:"openqasm",objectpascal:"pascal",px:"pcaxis",pcode:"peoplecode",plantuml:"plant-uml",pq:"powerquery",mscript:"powerquery",pbfasm:"purebasic",purs:"purescript",py:"python",qs:"qsharp",rkt:"racket",razor:"cshtml",rpy:"renpy",res:"rescript",robot:"robotframework",rb:"ruby","sh-session":"shell-session",shellsession:"shell-session",smlnj:"sml",sol:"solidity",sln:"solution-file",rq:"sparql",sclang:"supercollider",t4:"t4-cs",trickle:"tremor",troy:"tremor",trig:"turtle",ts:"typescript",tsconfig:"typoscript",uscript:"unrealscript",uc:"unrealscript",url:"uri",vb:"visual-basic",vba:"visual-basic",webidl:"web-idl",mathematica:"wolfram",nb:"wolfram",wl:"wolfram",xeoracube:"xeora",yml:"yaml"},t={},n="none",i="components/",s=Prism.util.currentScript();if(s){var r=/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,o=/(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,l=s.getAttribute("data-autoloader-path");if(l!=null)i=l.trim().replace(/\/?$/,"/");else{var d=s.src;r.test(d)?i=d.replace(r,"components/"):o.test(d)&&(i=d.replace(o,"$1components/"))}}var c=Prism.plugins.autoloader={languages_path:i,use_minified:!0,loadLanguages:v};function h(u,b,x){var g=document.createElement("script");g.src=u,g.async=!0,g.onload=function(){document.body.removeChild(g),b&&b()},g.onerror=function(){document.body.removeChild(g),x&&x()},document.body.appendChild(g)}function p(u){var b=(u.getAttribute("data-dependencies")||"").trim();if(!b){var x=u.parentElement;x&&x.tagName.toLowerCase()==="pre"&&(b=(x.getAttribute("data-dependencies")||"").trim())}return b?b.split(/\s*,\s*/g):[]}function f(u){if(u.indexOf("!")>=0)return!1;if(u=e[u]||u,u in Prism.languages)return!0;var b=t[u];return b&&!b.error&&b.loading===!1}function C(u){return c.languages_path+"prism-"+u+(c.use_minified?".min":"")+".js"}function v(u,b,x){typeof u=="string"&&(u=[u]);var g=u.length,I=0,S=!1;if(g===0){b&&setTimeout(b,0);return}function L(){S||(I++,I===g&&b&&b(u))}u.forEach(function(Me){M(Me,L,function(){S||(S=!0,x&&x(Me))})})}function M(u,b,x){var g=u.indexOf("!")>=0;u=u.replace("!",""),u=e[u]||u;function I(){var L=t[u];L||(L=t[u]={callbacks:[]}),L.callbacks.push({success:b,error:x}),!g&&f(u)?R(u,"success"):!g&&L.error?R(u,"error"):(g||!L.loading)&&(L.loading=!0,L.error=!1,h(C(u),function(){L.loading=!1,R(u,"success")},function(){L.loading=!1,L.error=!0,R(u,"error")}))}var S=a[u];S&&S.length?v(S,I,x):I()}function R(u,b){if(t[u]){for(var x=t[u].callbacks,g=0,I=x.length;g<I;g++){var S=x[g][b];S&&setTimeout(S,0)}x.length=0}}Prism.hooks.add("complete",function(u){var b=u.element,x=u.language;if(!(!b||!x||x===n)){var g=p(b);/^diff-./i.test(x)?(g.push("diff"),g.push(x.substr(5))):g.push(x),g.every(f)||v(g,function(){Prism.highlightElement(b)})}})})()),Be}tn();const nn=it.plugins;nn.autoloader.languages_path="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/";m.setOptions({gfm:!0,breaks:!0});let rn=0;const me=[];function rt(){return document.documentElement.getAttribute("data-theme")==="dark"}ue.initialize({startOnLoad:!1,theme:rt()?"dark":"default",securityLevel:"loose",fontFamily:"var(--font-sans)"});const J=[];function sn(a){J.length=0;let e=0;return a=a.replace(/\$\$([\s\S]+?)\$\$/g,(t,n)=>{const i=`%%MATH_BLOCK_${e++}%%`;return J.push({id:i,tex:n.trim(),displayMode:!0}),i}),a=a.replace(/(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)/g,(t,n)=>{const i=`%%MATH_INLINE_${e++}%%`;return J.push({id:i,tex:n.trim(),displayMode:!1}),i}),a}function an(a){for(const{id:e,tex:t,displayMode:n}of J)try{const i=mt.renderToString(t,{displayMode:n,throwOnError:!1,trust:!0});a=a.replace(e,i)}catch(i){const s=i instanceof Error?i.message:String(i);a=a.replace(e,`<span class="math-error" title="${de(s)}">${de(t)}</span>`)}return a}function on(a){me.length=0;const e=/```mermaid\n([\s\S]*?)```/g;let t;for(;(t=e.exec(a))!==null;)me.push(t[1].trim())}function ln(a){return a.replace(/<blockquote>\s*<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*<br\s*\/?>\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi,(e,t,n)=>{const i=t.toLowerCase();return`<div class="alert alert-${i}"><div class="alert-title">${{note:"ℹ️",tip:"💡",important:"‼️",warning:"⚠️",caution:"🔴"}[i]||""} ${t.toUpperCase()}</div><div>${n}</div></div>`})}const cn={ADD_TAGS:["input","math","mrow","mi","mo","mn","msup","msub","mfrac","mover","munder","msqrt","mtable","mtr","mtd","mtext","mspace","annotation","semantics","mpadded","menclose","mglyph","mstyle","merror","span","svg","g","path","rect","circle","ellipse","line","polyline","polygon","text","tspan","defs","clippath","marker","foreignobject","use","symbol","lineargradient","radialgradient","stop","pattern","mask","image","title","desc"],ADD_ATTR:["checked","disabled","type","class","style","aria-hidden","xmlns","mathvariant","encoding","stretchy","fence","separator","accent","accentunder","displaystyle","scriptlevel","width","height","voffset","lspace","rspace","linethickness","columnalign","columnspacing","rowspacing","viewBox","fill","stroke","stroke-width","stroke-linecap","stroke-linejoin","stroke-dasharray","stroke-opacity","fill-opacity","transform","d","x","y","x1","y1","x2","y2","cx","cy","r","rx","ry","dx","dy","points","text-anchor","dominant-baseline","font-size","font-family","font-weight","clip-path","marker-end","marker-start","marker-mid","refX","refY","markerWidth","markerHeight","orient","gradientTransform","gradientUnits","spreadMethod","offset","stop-color","stop-opacity","patternUnits","patternTransform","xlink:href","href","preserveAspectRatio","data-id","data-node","data-label","data-et","data-look","id","requiredFeatures","systemLanguage","opacity","visibility"],ALLOW_UNKNOWN_PROTOCOLS:!0};function pn(a){const e=a.querySelectorAll("h1, h2, h3, h4, h5, h6"),t={};e.forEach(n=>{const i=n.textContent?.trim()||"";let s=kt(i);t[s]!==void 0?(t[s]++,s=`${s}-${t[s]}`):t[s]=0,n.id=s;const r=document.createElement("a");r.className="heading-anchor",r.href=`#${s}`,r.textContent="#",n.appendChild(r)})}function un(a){a.querySelectorAll("pre > code").forEach(e=>{const t=e.parentElement;if(t.querySelector(".copy-btn"))return;const n=e.className.match(/language-(\S+)/),i=n?n[1]:"";if(i){const r=document.createElement("span");r.className="code-lang",r.textContent=i,t.insertBefore(r,e)}const s=document.createElement("button");s.className="copy-btn",s.title="Copy code",s.textContent="⧉",s.addEventListener("click",()=>{navigator.clipboard.writeText(e.textContent||"").then(()=>{s.classList.add("copied"),s.textContent="✓",setTimeout(()=>{s.classList.remove("copied"),s.textContent="⧉"},1500)})}),t.insertBefore(s,e)})}async function dn(a){const e=a.querySelectorAll("code.language-mermaid");if(e.length===0)return;ue.initialize({startOnLoad:!1,theme:rt()?"dark":"default",securityLevel:"loose",fontFamily:"var(--font-sans)"});let t=0;for(const n of e){const i=n.parentElement,s=me[t++]??n.textContent??"",r=`mermaid-graph-${rn++}`;try{const{svg:o}=await ue.render(r,s),l=document.createElement("div");l.className="mermaid-diagram",l.innerHTML=o,i.replaceWith(l)}catch(o){console.warn("Mermaid render error:",o);const l=document.createElement("div");l.className="mermaid-error",l.textContent=`Mermaid error: ${o instanceof Error?o.message:String(o)}`,i.replaceWith(l)}}}function hn(a,e){let t=a;try{on(t),t=sn(t);let n=m.parse(t);if(n=an(n),n=ln(n),n=ft.sanitize(n,cn),e.innerHTML=n,pn(e),un(e),dn(e),e.querySelectorAll('pre code[class*="language-"]:not(.language-mermaid)').forEach(i=>{it.highlightElement(i)}),location.hash){const i=document.getElementById(location.hash.slice(1));i&&setTimeout(()=>i.scrollIntoView({behavior:"smooth",block:"start"}),100)}}catch(n){console.error("Render error:",n);const i=n instanceof Error?n.message:String(n);e.innerHTML=`<div style="color:var(--danger);padding:20px;font-family:var(--font-mono);font-size:var(--fs-sm);">Render error: ${de(i)}</div>`}}let X=null;function fn(a,e,t){const n=a.querySelectorAll("h1, h2, h3, h4, h5, h6");if(e.innerHTML="",n.length===0){e.innerHTML='<div style="padding:16px;color:var(--text-muted);font-size:var(--fs-xs);">No headings found</div>';return}n.forEach(i=>{const s=parseInt(i.tagName[1]),r=document.createElement("a");r.className="toc-item",r.dataset.level=String(s),r.textContent=(i.textContent||"").replace(/#$/,"").trim(),r.href=`#${i.id}`,r.addEventListener("click",o=>{o.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"}),e.querySelectorAll(".toc-item").forEach(l=>l.classList.remove("active")),r.classList.add("active"),history.replaceState(null,"",`#${i.id}`)}),e.appendChild(r)}),mn(n,e,t)}function mn(a,e,t){X&&X.disconnect(),X=new IntersectionObserver(n=>{n.forEach(i=>{if(i.isIntersecting){const s=i.target.id;e.querySelectorAll(".toc-item").forEach(r=>{r.classList.toggle("active",r.getAttribute("href")===`#${s}`)})}})},{root:t,rootMargin:"-20% 0px -60% 0px",threshold:0}),a.forEach(n=>X.observe(n))}const He=`# Mission Control: Orbital Mechanics 101 🚀

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
`,gn=`# Markdown to HTML Converter

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
`,kn=`# LaTeX Math Editor

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
`,bn=`# Mermaid Diagram Editor

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
`,xn=`# Markdown Table Generator

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
`;function yn(){const a=window.location.pathname.replace(/\/$/,"")||"/";return{"/":He,"/markdown-to-html":gn,"/latex-editor":kn,"/mermaid-editor":bn,"/markdown-table-generator":xn}[a]??He}const wn="https://mdview.co";async function vn(a){const e=await fetch(`${wn}/api/share`,{method:"POST",body:a,headers:{"Content-Type":"text/plain"}}),t=await e.json();if(!e.ok)throw new Error(t.error||`Share failed (${e.status})`);return t}let $=null,G=null;function oe(){return $||($=document.createElement("div"),$.className="share-modal-overlay hidden",$.innerHTML=`
    <div class="share-modal">
      <div class="share-modal-header">
        <span>Share This Document</span>
        <button class="share-modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="share-modal-body">
        <div class="share-modal-url-row">
          <input class="share-modal-url" type="text" readonly />
          <button class="share-modal-copy" data-tooltip="Copy link">Copy</button>
        </div>
        <p class="share-modal-hint">Anyone with this link can view your document. Links expire after 90 days.</p>
      </div>
      <div class="share-modal-loading hidden">
        <span class="share-modal-spinner"></span> Creating share link&hellip;
      </div>
      <div class="share-modal-error hidden"></div>
    </div>
  `,document.body.appendChild($),G=$.querySelector(".share-modal-url"),$.querySelector(".share-modal-close").addEventListener("click",pe),$.addEventListener("click",a=>{a.target===$&&pe()}),$.querySelector(".share-modal-copy").addEventListener("click",()=>{G?.value&&navigator.clipboard.writeText(G.value).then(()=>{Y("Share link copied to clipboard!")})}),document.addEventListener("keydown",a=>{a.key==="Escape"&&$&&!$.classList.contains("hidden")&&pe()}),$)}function $n(){oe().classList.remove("hidden"),Ce(!0),Se(null)}function pe(){$?.classList.add("hidden")}function Ce(a){const e=oe(),t=e.querySelector(".share-modal-body"),n=e.querySelector(".share-modal-loading");t.classList.toggle("hidden",a),n.classList.toggle("hidden",!a)}function Tn(a){oe(),G&&(G.value=a),Ce(!1),Se(null)}function Se(a){const t=oe().querySelector(".share-modal-error");a?(t.textContent=a,t.classList.remove("hidden"),Ce(!1)):(t.textContent="",t.classList.add("hidden"))}const w=a=>document.querySelector(a),T=w("#editor"),ie=w("#preview"),En=w("#preview-scroll"),st=w("#main"),le=w("#toc-dropdown"),Ln=w("#toc-list"),re=w("#file-input"),Cn=w("#file-name"),Sn=w("#toast"),D=w("#editor-panel"),ge=w("#resize-handle"),_n=w("#btn-open"),An=w("#btn-theme"),ce=w("#btn-toc"),Mn=w("#btn-copy"),Rn=w("#btn-print"),Dn=w("#btn-share"),ke=w("#btn-view-editor"),be=w("#btn-view-split"),xe=w("#btn-view-preview"),Fe=w("#icon-moon"),Ge=w("#icon-sun");let P=!1,Ue;bt(Sn);function _e(){hn(T.value,ie),fn(ie,Ln,En),In(T.value)}function at(){clearTimeout(Ue),Ue=setTimeout(_e,120)}function In(a){const e=a.trim(),t=e?e.split(/\s+/).length:0,n=e.length;w("#stat-words").textContent=`${t} word${t!==1?"s":""}`,w("#stat-chars").textContent=`${n} char${n!==1?"s":""}`}function ot(a){document.documentElement.setAttribute("data-theme",a),localStorage.setItem("md-viewer-theme",a),a==="dark"?(Fe.style.display="",Ge.style.display="none"):(Fe.style.display="none",Ge.style.display="")}function Pn(){const a=document.documentElement.getAttribute("data-theme");ot(a==="dark"?"light":"dark")}function j(a){st.className=`main view-${a}`,[ke,be,xe].forEach(e=>e.classList.remove("active")),a==="editor"&&ke.classList.add("active"),a==="split"&&be.classList.add("active"),a==="preview"&&xe.classList.add("active")}function lt(){P=!P,le.classList.toggle("hidden",!P),ce.classList.toggle("active",P)}function ct(){P&&(P=!1,le.classList.add("hidden"),ce.classList.remove("active"))}document.addEventListener("mousedown",a=>{P&&!le.contains(a.target)&&!ce.contains(a.target)&&ct()});le.addEventListener("click",a=>{a.target.closest(".toc-item")&&ct()});function Ae(a){const e=new FileReader;e.onload=t=>{T.value=t.target.result,Cn.textContent=a.name,_e(),Y(`Loaded ${a.name}`)},e.readAsText(a)}let U=0;D.addEventListener("dragenter",a=>{a.preventDefault(),U++,D.classList.add("dragover")});D.addEventListener("dragleave",a=>{a.preventDefault(),U--,U<=0&&(U=0,D.classList.remove("dragover"))});D.addEventListener("dragover",a=>a.preventDefault());D.addEventListener("drop",a=>{a.preventDefault(),U=0,D.classList.remove("dragover");const e=a.dataTransfer?.files[0];e&&Ae(e)});document.addEventListener("dragover",a=>a.preventDefault());document.addEventListener("drop",a=>{a.preventDefault();const e=a.dataTransfer?.files?.[0];e&&Ae(e)});let se=!1;ge.addEventListener("mousedown",a=>{se=!0,ge.classList.add("active"),document.body.style.cursor="col-resize",document.body.style.userSelect="none",a.preventDefault()});document.addEventListener("mousemove",a=>{if(!se)return;const e=st.getBoundingClientRect(),n=(a.clientX-e.left)/e.width*100;n>15&&n<85&&(D.style.flex=`0 0 ${n}%`,w("#preview-panel").style.flex="1")});document.addEventListener("mouseup",()=>{se&&(se=!1,ge.classList.remove("active"),document.body.style.cursor="",document.body.style.userSelect="")});T.addEventListener("input",at);_n.addEventListener("click",()=>re.click());re.addEventListener("change",()=>{const a=re.files?.[0];a&&Ae(a)});An.addEventListener("click",Pn);ce.addEventListener("click",lt);ke.addEventListener("click",()=>j("editor"));be.addEventListener("click",()=>j("split"));xe.addEventListener("click",()=>j("preview"));Mn.addEventListener("click",()=>{navigator.clipboard.writeText(ie.innerHTML).then(()=>Y("HTML copied to clipboard"))});Rn.addEventListener("click",()=>window.print());Dn.addEventListener("click",async()=>{const a=T.value.trim();if(!a){Y("Nothing to share — write some Markdown first.");return}$n();try{const e=await vn(a);Tn(e.url)}catch(e){Se(e instanceof Error?e.message:"Failed to create share link.")}});document.addEventListener("keydown",a=>{const e=a.metaKey||a.ctrlKey;e&&a.key==="o"&&(a.preventDefault(),re.click()),e&&a.key==="b"&&(a.preventDefault(),lt()),e&&a.key==="p"&&(a.preventDefault(),window.print()),e&&a.shiftKey&&a.key==="C"&&(a.preventDefault(),navigator.clipboard.writeText(ie.innerHTML).then(()=>Y("HTML copied"))),e&&a.key==="1"&&(a.preventDefault(),j("editor")),e&&a.key==="2"&&(a.preventDefault(),j("split")),e&&a.key==="3"&&(a.preventDefault(),j("preview"))});T.addEventListener("keydown",a=>{if(a.key==="Tab"){a.preventDefault();const e=T.selectionStart,t=T.selectionEnd;T.value=T.value.substring(0,e)+"  "+T.value.substring(t),T.selectionStart=T.selectionEnd=e+2,at()}});(function(){const e=localStorage.getItem("md-viewer-theme")||"dark";ot(e),T.value=yn(),_e()})();
//# sourceMappingURL=main-Bsq9IhCh.js.map
