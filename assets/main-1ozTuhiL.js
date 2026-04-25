import{t as p,r as z,i as V}from"./renderer-CZa1KcVF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();let g=null;function X(e,t,o){const r=e.querySelectorAll("h1, h2, h3, h4, h5, h6");if(t.innerHTML="",r.length===0){t.innerHTML='<div style="padding:16px;color:var(--text-muted);font-size:var(--fs-xs);">No headings found</div>';return}r.forEach(a=>{const s=parseInt(a.tagName[1]),d=document.createElement("a");d.className="toc-item",d.dataset.level=String(s),d.textContent=(a.textContent||"").replace(/#$/,"").trim(),d.href=`#${a.id}`,d.addEventListener("click",K=>{K.preventDefault(),a.scrollIntoView({behavior:"smooth",block:"start"}),t.querySelectorAll(".toc-item").forEach(W=>W.classList.remove("active")),d.classList.add("active"),history.replaceState(null,"",`#${a.id}`)}),t.appendChild(d)}),j(r,t,o)}function j(e,t,o){g&&g.disconnect(),g=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const s=a.target.id;t.querySelectorAll(".toc-item").forEach(d=>{d.classList.toggle("active",d.getAttribute("href")===`#${s}`)})}})},{root:o,rootMargin:"-20% 0px -60% 0px",threshold:0}),e.forEach(r=>g.observe(r))}const O=`# Homemade Sourdough Bread — A Complete Guide 🍞

A step-by-step recipe for baking a rustic, crusty sourdough loaf at home. No commercial yeast needed — just flour, water, salt, and a living starter.

## Prep Checklist

- [x] **Feed the starter** — 12 hours before mixing
- [x] **Gather ingredients** — bread flour, whole wheat, salt, water
- [ ] **Mix & bulk ferment** — 4–6 hours at room temp
- [ ] **Shape, proof, and bake** — overnight cold proof, bake in the morning

## Ingredients

| Ingredient | Weight | Baker's % |
|---|---|---:|
| Bread flour | 400 g | 80% |
| Whole wheat flour | 100 g | 20% |
| Water (warm) | 375 g | 75% |
| Sourdough starter | 100 g | 20% |
| Fine sea salt | 10 g | 2% |

## The Science Behind It

Sourdough fermentation relies on wild yeast and lactic acid bacteria. The **hydration level** is the ratio of water to flour by weight: $H = \\frac{m_{\\text{water}}}{m_{\\text{flour}}} \\times 100\\%$.

During bulk fermentation, yeast produces $\\text{CO}_2$ through anaerobic respiration:

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{yeast}} 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$$

The rate of fermentation follows an Arrhenius-style temperature dependence:

$$k(T) = A \\cdot e^{-E_a / RT}$$

A common rule of thumb: for every $5°\\text{C}$ increase in dough temperature, fermentation speed roughly doubles. You can estimate proof time $t$ at a given temperature $T$ relative to a reference:

$$t(T) = t_0 \\cdot 2^{(T_0 - T)/5}$$

### Key Molecules

Ethanol and acetic acid — the two main byproducts of fermentation:

\`\`\`smiles
CCO
\`\`\`

\`\`\`smiles
CC(=O)O
\`\`\`

## Method

### Autolyse & Mix

\`\`\`python
# Baker's formula calculator
def recipe(flour_g: float, hydration: float = 0.75, salt: float = 0.02, starter: float = 0.20):
    """Calculate ingredient weights from total flour weight."""
    return {
        "flour":   f"{flour_g:.0f} g",
        "water":   f"{flour_g * hydration:.0f} g",
        "salt":    f"{flour_g * salt:.0f} g",
        "starter": f"{flour_g * starter:.0f} g",
    }

print(recipe(500))
# {'flour': '500 g', 'water': '375 g', 'salt': '10 g', 'starter': '100 g'}
\`\`\`

### Bulk Fermentation Schedule

\`\`\`javascript
// Stretch-and-fold timer
const folds = [
  { time: "0:00", action: "Mix dough, start bulk ferment" },
  { time: "0:30", action: "Stretch & fold #1" },
  { time: "1:00", action: "Stretch & fold #2" },
  { time: "1:30", action: "Stretch & fold #3" },
  { time: "2:00", action: "Stretch & fold #4 (if needed)" },
  { time: "4:00", action: "Check: dough should be 50% larger" },
];

folds.forEach(({ time, action }) => console.log(\`[\${time}] \${action}\`));
\`\`\`

## Baking Day Timeline

\`\`\`mermaid
sequenceDiagram
    participant B as Baker
    participant D as Dough
    participant O as Dutch Oven

    B->>D: Remove from fridge
    B->>O: Preheat to 250 °C (45 min)
    B->>D: Score with razor blade
    B->>O: Place dough inside, lid on
    O->>O: Bake 20 min (steamed)
    B->>O: Remove lid
    O->>O: Bake 20 min (browning)
    O-->>B: Golden loaf ready
\`\`\`

## Troubleshooting

\`\`\`mermaid
flowchart TD
    A["Loaf is too flat"] --> B{"Starter active?"}
    B -- Yes --> C{"Bulk ferment long enough?"}
    C -- Yes --> D["Shaping was too gentle — build more tension"]
    C -- No --> E["Extend bulk ferment by 1 hour"]
    B -- No --> F["Feed starter twice daily for 3 days"]
    F --> G["Float test: spoonful should float in water"]
    G --> H["Retry bake"]
\`\`\`

## Kitchen Playlist

\`\`\`abc
X:1
T:Hot Cross Buns
M:4/4
L:1/4
K:C
E D C2 | E D C2 | C C D D | E D C2 |
\`\`\`

## Tips from the Kitchen

> "The best bread comes from dough that's slightly harder to handle than you'd like. Wetter dough means bigger holes and a better crust."
> — Chad Robertson, *Tartine Bread*

> [!NOTE]
> Use the **poke test** to check proof: press the dough gently — it should spring back slowly, leaving a slight indent.

> [!TIP]
> For an extra-crispy crust, add a few ice cubes to the bottom of the oven when you start baking.

> [!WARNING]
> Do not skip the cold proof. Shaping a warm, fully-fermented dough leads to a flat loaf. Overnight fridge rest firms the dough and develops flavor.

> [!CAUTION]
> The Dutch oven reaches 250 °C — always use heavy oven mitts. Steam burns from removing the lid are the most common baking injury.

## The Finished Loaf

![Freshly baked sourdough bread](https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=400&fit=crop)

## Quick Reference

This recipe makes a **single round loaf** (about 850 g baked). The crumb should be **open** and *slightly tangy*, with ~~dense patches~~ nowhere in sight. Check your starter with the \`float test\` before mixing, and adjust timing with a [bulk ferment calculator](https://www.theperfectloaf.com).

---

*Last baked: Sunday morning — the best alarm clock is the smell of bread in the oven.*
`,Q=`# Markdown to HTML Converter

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
`,J=`# LaTeX Math Editor

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
`,Z=`# Mermaid Diagram Editor

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
`,ee=`# Markdown Table Generator

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
`;function te(){const e=window.location.pathname.replace(/\/$/,"")||"/";return{"/":O,"/markdown-to-html":Q,"/latex-editor":J,"/mermaid-editor":Z,"/markdown-table-generator":ee}[e]??O}const ae="https://mdview.co";async function re(e){const t=await fetch(`${ae}/api/share`,{method:"POST",body:e,headers:{"Content-Type":"text/plain"}});if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error("Share service unavailable. Please try again later.");const r=await t.json();if(!t.ok)throw new Error(r.error||`Share failed (${t.status})`);return r}let l=null,h=null;function w(){return l||(l=document.createElement("div"),l.className="share-modal-overlay hidden",l.innerHTML=`
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
  `,document.body.appendChild(l),h=l.querySelector(".share-modal-url"),l.querySelector(".share-modal-close").addEventListener("click",E),l.addEventListener("click",e=>{e.target===l&&E()}),l.querySelector(".share-modal-copy").addEventListener("click",()=>{h?.value&&navigator.clipboard.writeText(h.value).then(()=>{p("Share link copied to clipboard!")})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&l&&!l.classList.contains("hidden")&&E()}),l)}function ne(){w().classList.remove("hidden"),M(!0),A(null)}function E(){l?.classList.add("hidden")}function M(e){const t=w(),o=t.querySelector(".share-modal-body"),r=t.querySelector(".share-modal-loading");o.classList.toggle("hidden",e),r.classList.toggle("hidden",!e)}function oe(e){w(),h&&(h.value=e),M(!1),A(null)}function A(e){const o=w().querySelector(".share-modal-error");e?(o.textContent=e,o.classList.remove("hidden"),M(!1)):(o.textContent="",o.classList.add("hidden"))}const n=e=>document.querySelector(e),i=n("#editor"),v=n("#preview"),b=n("#preview-scroll"),H=n("#main"),T=n("#toc-dropdown"),ie=n("#toc-list"),y=n("#file-input"),se=n("#file-name"),le=n("#toast"),c=n("#editor-panel"),x=n("#resize-handle"),de=n("#btn-open"),ce=n("#btn-theme"),k=n("#btn-toc"),ue=n("#btn-copy"),me=n("#btn-print"),he=n("#btn-share"),L=n("#btn-view-editor"),D=n("#btn-view-split"),S=n("#btn-view-preview"),B=n("#icon-moon"),I=n("#icon-sun");let q="split",u=!1,R,C=!1;V(le);function P(){z(i.value,v),X(v,ie,b),fe(i.value)}function F(){clearTimeout(R),R=setTimeout(P,120)}function fe(e){const t=e.trim(),o=t?t.split(/\s+/).length:0,r=t.length;n("#stat-words").textContent=`${o} word${o!==1?"s":""}`,n("#stat-chars").textContent=`${r} char${r!==1?"s":""}`}function N(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("md-viewer-theme",e),e==="dark"?(B.style.display="",I.style.display="none"):(B.style.display="none",I.style.display="")}function pe(){const e=document.documentElement.getAttribute("data-theme");N(e==="dark"?"light":"dark")}function m(e){q=e,H.className=`main view-${e}`,[L,D,S].forEach(t=>t.classList.remove("active")),e==="editor"&&L.classList.add("active"),e==="split"&&D.classList.add("active"),e==="preview"&&S.classList.add("active")}function Y(){u=!u,T.classList.toggle("hidden",!u),k.classList.toggle("active",u)}function G(){u&&(u=!1,T.classList.add("hidden"),k.classList.remove("active"))}document.addEventListener("mousedown",e=>{u&&!T.contains(e.target)&&!k.contains(e.target)&&G()});T.addEventListener("click",e=>{e.target.closest(".toc-item")&&G()});function _(e){const t=new FileReader;t.onload=o=>{i.value=o.target.result,se.textContent=e.name,P(),p(`Loaded ${e.name}`)},t.readAsText(e)}let f=0;c.addEventListener("dragenter",e=>{e.preventDefault(),f++,c.classList.add("dragover")});c.addEventListener("dragleave",e=>{e.preventDefault(),f--,f<=0&&(f=0,c.classList.remove("dragover"))});c.addEventListener("dragover",e=>e.preventDefault());c.addEventListener("drop",e=>{e.preventDefault(),f=0,c.classList.remove("dragover");const t=e.dataTransfer?.files[0];t&&_(t)});document.addEventListener("dragover",e=>e.preventDefault());document.addEventListener("drop",e=>{e.preventDefault();const t=e.dataTransfer?.files?.[0];t&&_(t)});let $=!1;x.addEventListener("mousedown",e=>{$=!0,x.classList.add("active"),document.body.style.cursor="col-resize",document.body.style.userSelect="none",e.preventDefault()});document.addEventListener("mousemove",e=>{if(!$)return;const t=H.getBoundingClientRect(),r=(e.clientX-t.left)/t.width*100;r>15&&r<85&&(c.style.flex=`0 0 ${r}%`,n("#preview-panel").style.flex="1")});document.addEventListener("mouseup",()=>{$&&($=!1,x.classList.remove("active"),document.body.style.cursor="",document.body.style.userSelect="")});function U(e,t){if(C||q!=="split")return;C=!0;const o=e.scrollHeight-e.clientHeight,r=t.scrollHeight-t.clientHeight;if(o>0&&r>0){const a=e.scrollTop/o;t.style.scrollBehavior="auto",t.scrollTop=a*r,t.style.scrollBehavior=""}requestAnimationFrame(()=>{C=!1})}i.addEventListener("scroll",()=>U(i,b));b.addEventListener("scroll",()=>U(b,i));i.addEventListener("input",F);de.addEventListener("click",()=>y.click());y.addEventListener("change",()=>{const e=y.files?.[0];e&&_(e)});ce.addEventListener("click",pe);k.addEventListener("click",Y);L.addEventListener("click",()=>m("editor"));D.addEventListener("click",()=>m("split"));S.addEventListener("click",()=>m("preview"));ue.addEventListener("click",()=>{navigator.clipboard.writeText(v.innerHTML).then(()=>p("HTML copied to clipboard"))});me.addEventListener("click",()=>window.print());he.addEventListener("click",async()=>{const e=i.value.trim();if(!e){p("Nothing to share — write some Markdown first.");return}ne();try{const t=await re(e);oe(t.url)}catch(t){A(t instanceof Error?t.message:"Failed to create share link.")}});document.addEventListener("keydown",e=>{const t=e.metaKey||e.ctrlKey;t&&e.key==="o"&&(e.preventDefault(),y.click()),t&&e.key==="b"&&(e.preventDefault(),Y()),t&&e.key==="p"&&(e.preventDefault(),window.print()),t&&e.shiftKey&&e.key==="C"&&(e.preventDefault(),navigator.clipboard.writeText(v.innerHTML).then(()=>p("HTML copied"))),t&&e.key==="1"&&(e.preventDefault(),m("editor")),t&&e.key==="2"&&(e.preventDefault(),m("split")),t&&e.key==="3"&&(e.preventDefault(),m("preview"))});i.addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();const t=i.selectionStart,o=i.selectionEnd;i.value=i.value.substring(0,t)+"  "+i.value.substring(o),i.selectionStart=i.selectionEnd=t+2,F()}});(function(){const t=localStorage.getItem("md-viewer-theme")||"dark";N(t),i.value=te(),P()})();
//# sourceMappingURL=main-1ozTuhiL.js.map
