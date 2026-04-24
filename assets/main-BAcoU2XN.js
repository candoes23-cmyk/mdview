import{t as p,r as G,i as U}from"./renderer-gqDPTQR-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();let g=null;function W(e,t,o){const n=e.querySelectorAll("h1, h2, h3, h4, h5, h6");if(t.innerHTML="",n.length===0){t.innerHTML='<div style="padding:16px;color:var(--text-muted);font-size:var(--fs-xs);">No headings found</div>';return}n.forEach(r=>{const i=parseInt(r.tagName[1]),l=document.createElement("a");l.className="toc-item",l.dataset.level=String(i),l.textContent=(r.textContent||"").replace(/#$/,"").trim(),l.href=`#${r.id}`,l.addEventListener("click",H=>{H.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"}),t.querySelectorAll(".toc-item").forEach(Y=>Y.classList.remove("active")),l.classList.add("active"),history.replaceState(null,"",`#${r.id}`)}),t.appendChild(l)}),K(n,t,o)}function K(e,t,o){g&&g.disconnect(),g=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const i=r.target.id;t.querySelectorAll(".toc-item").forEach(l=>{l.classList.toggle("active",l.getAttribute("href")===`#${i}`)})}})},{root:o,rootMargin:"-20% 0px -60% 0px",threshold:0}),e.forEach(n=>g.observe(n))}const P=`# Homemade Sourdough Bread — A Complete Guide 🍞

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
`,z=`# Markdown to HTML Converter

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
`,V=`# LaTeX Math Editor

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
`,X=`# Mermaid Diagram Editor

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
`,j=`# Markdown Table Generator

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
`;function Q(){const e=window.location.pathname.replace(/\/$/,"")||"/";return{"/":P,"/markdown-to-html":z,"/latex-editor":V,"/mermaid-editor":X,"/markdown-table-generator":j}[e]??P}const J="https://mdview.co";async function Z(e){const t=await fetch(`${J}/api/share`,{method:"POST",body:e,headers:{"Content-Type":"text/plain"}});if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error("Share service unavailable. Please try again later.");const n=await t.json();if(!t.ok)throw new Error(n.error||`Share failed (${t.status})`);return n}let s=null,h=null;function $(){return s||(s=document.createElement("div"),s.className="share-modal-overlay hidden",s.innerHTML=`
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
  `,document.body.appendChild(s),h=s.querySelector(".share-modal-url"),s.querySelector(".share-modal-close").addEventListener("click",k),s.addEventListener("click",e=>{e.target===s&&k()}),s.querySelector(".share-modal-copy").addEventListener("click",()=>{h?.value&&navigator.clipboard.writeText(h.value).then(()=>{p("Share link copied to clipboard!")})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&s&&!s.classList.contains("hidden")&&k()}),s)}function ee(){$().classList.remove("hidden"),S(!0),D(null)}function k(){s?.classList.add("hidden")}function S(e){const t=$(),o=t.querySelector(".share-modal-body"),n=t.querySelector(".share-modal-loading");o.classList.toggle("hidden",e),n.classList.toggle("hidden",!e)}function te(e){$(),h&&(h.value=e),S(!1),D(null)}function D(e){const o=$().querySelector(".share-modal-error");e?(o.textContent=e,o.classList.remove("hidden"),S(!1)):(o.textContent="",o.classList.add("hidden"))}const a=e=>document.querySelector(e),d=a("#editor"),v=a("#preview"),ae=a("#preview-scroll"),I=a("#main"),w=a("#toc-dropdown"),re=a("#toc-list"),b=a("#file-input"),ne=a("#file-name"),oe=a("#toast"),c=a("#editor-panel"),E=a("#resize-handle"),ie=a("#btn-open"),se=a("#btn-theme"),T=a("#btn-toc"),le=a("#btn-copy"),de=a("#btn-print"),ce=a("#btn-share"),x=a("#btn-view-editor"),L=a("#btn-view-split"),C=a("#btn-view-preview"),_=a("#icon-moon"),O=a("#icon-sun");let u=!1,B;U(oe);function M(){G(d.value,v),W(v,re,ae),ue(d.value)}function R(){clearTimeout(B),B=setTimeout(M,120)}function ue(e){const t=e.trim(),o=t?t.split(/\s+/).length:0,n=t.length;a("#stat-words").textContent=`${o} word${o!==1?"s":""}`,a("#stat-chars").textContent=`${n} char${n!==1?"s":""}`}function q(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("md-viewer-theme",e),e==="dark"?(_.style.display="",O.style.display="none"):(_.style.display="none",O.style.display="")}function me(){const e=document.documentElement.getAttribute("data-theme");q(e==="dark"?"light":"dark")}function m(e){I.className=`main view-${e}`,[x,L,C].forEach(t=>t.classList.remove("active")),e==="editor"&&x.classList.add("active"),e==="split"&&L.classList.add("active"),e==="preview"&&C.classList.add("active")}function N(){u=!u,w.classList.toggle("hidden",!u),T.classList.toggle("active",u)}function F(){u&&(u=!1,w.classList.add("hidden"),T.classList.remove("active"))}document.addEventListener("mousedown",e=>{u&&!w.contains(e.target)&&!T.contains(e.target)&&F()});w.addEventListener("click",e=>{e.target.closest(".toc-item")&&F()});function A(e){const t=new FileReader;t.onload=o=>{d.value=o.target.result,ne.textContent=e.name,M(),p(`Loaded ${e.name}`)},t.readAsText(e)}let f=0;c.addEventListener("dragenter",e=>{e.preventDefault(),f++,c.classList.add("dragover")});c.addEventListener("dragleave",e=>{e.preventDefault(),f--,f<=0&&(f=0,c.classList.remove("dragover"))});c.addEventListener("dragover",e=>e.preventDefault());c.addEventListener("drop",e=>{e.preventDefault(),f=0,c.classList.remove("dragover");const t=e.dataTransfer?.files[0];t&&A(t)});document.addEventListener("dragover",e=>e.preventDefault());document.addEventListener("drop",e=>{e.preventDefault();const t=e.dataTransfer?.files?.[0];t&&A(t)});let y=!1;E.addEventListener("mousedown",e=>{y=!0,E.classList.add("active"),document.body.style.cursor="col-resize",document.body.style.userSelect="none",e.preventDefault()});document.addEventListener("mousemove",e=>{if(!y)return;const t=I.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100;n>15&&n<85&&(c.style.flex=`0 0 ${n}%`,a("#preview-panel").style.flex="1")});document.addEventListener("mouseup",()=>{y&&(y=!1,E.classList.remove("active"),document.body.style.cursor="",document.body.style.userSelect="")});d.addEventListener("input",R);ie.addEventListener("click",()=>b.click());b.addEventListener("change",()=>{const e=b.files?.[0];e&&A(e)});se.addEventListener("click",me);T.addEventListener("click",N);x.addEventListener("click",()=>m("editor"));L.addEventListener("click",()=>m("split"));C.addEventListener("click",()=>m("preview"));le.addEventListener("click",()=>{navigator.clipboard.writeText(v.innerHTML).then(()=>p("HTML copied to clipboard"))});de.addEventListener("click",()=>window.print());ce.addEventListener("click",async()=>{const e=d.value.trim();if(!e){p("Nothing to share — write some Markdown first.");return}ee();try{const t=await Z(e);te(t.url)}catch(t){D(t instanceof Error?t.message:"Failed to create share link.")}});document.addEventListener("keydown",e=>{const t=e.metaKey||e.ctrlKey;t&&e.key==="o"&&(e.preventDefault(),b.click()),t&&e.key==="b"&&(e.preventDefault(),N()),t&&e.key==="p"&&(e.preventDefault(),window.print()),t&&e.shiftKey&&e.key==="C"&&(e.preventDefault(),navigator.clipboard.writeText(v.innerHTML).then(()=>p("HTML copied"))),t&&e.key==="1"&&(e.preventDefault(),m("editor")),t&&e.key==="2"&&(e.preventDefault(),m("split")),t&&e.key==="3"&&(e.preventDefault(),m("preview"))});d.addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();const t=d.selectionStart,o=d.selectionEnd;d.value=d.value.substring(0,t)+"  "+d.value.substring(o),d.selectionStart=d.selectionEnd=t+2,R()}});(function(){const t=localStorage.getItem("md-viewer-theme")||"dark";q(t),d.value=Q(),M()})();
//# sourceMappingURL=main-BAcoU2XN.js.map
