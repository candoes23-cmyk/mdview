import{t as f,r as Y,i as U}from"./renderer-gqDPTQR-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();let g=null;function V(e,t,r){const n=e.querySelectorAll("h1, h2, h3, h4, h5, h6");if(t.innerHTML="",n.length===0){t.innerHTML='<div style="padding:16px;color:var(--text-muted);font-size:var(--fs-xs);">No headings found</div>';return}n.forEach(i=>{const o=parseInt(i.tagName[1]),l=document.createElement("a");l.className="toc-item",l.dataset.level=String(o),l.textContent=(i.textContent||"").replace(/#$/,"").trim(),l.href=`#${i.id}`,l.addEventListener("click",H=>{H.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"}),t.querySelectorAll(".toc-item").forEach(G=>G.classList.remove("active")),l.classList.add("active"),history.replaceState(null,"",`#${i.id}`)}),t.appendChild(l)}),K(n,t,r)}function K(e,t,r){g&&g.disconnect(),g=new IntersectionObserver(n=>{n.forEach(i=>{if(i.isIntersecting){const o=i.target.id;t.querySelectorAll(".toc-item").forEach(l=>{l.classList.toggle("active",l.getAttribute("href")===`#${o}`)})}})},{root:r,rootMargin:"-20% 0px -60% 0px",threshold:0}),e.forEach(n=>g.observe(n))}const A=`# Mission Control: Orbital Mechanics 101 🚀

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
`,W=`# LaTeX Math Editor

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
`;function Q(){const e=window.location.pathname.replace(/\/$/,"")||"/";return{"/":A,"/markdown-to-html":z,"/latex-editor":W,"/mermaid-editor":X,"/markdown-table-generator":j}[e]??A}const J="https://mdview.co";async function Z(e){const t=await fetch(`${J}/api/share`,{method:"POST",body:e,headers:{"Content-Type":"text/plain"}});if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error("Share service unavailable. Please try again later.");const n=await t.json();if(!t.ok)throw new Error(n.error||`Share failed (${t.status})`);return n}let s=null,p=null;function $(){return s||(s=document.createElement("div"),s.className="share-modal-overlay hidden",s.innerHTML=`
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
  `,document.body.appendChild(s),p=s.querySelector(".share-modal-url"),s.querySelector(".share-modal-close").addEventListener("click",E),s.addEventListener("click",e=>{e.target===s&&E()}),s.querySelector(".share-modal-copy").addEventListener("click",()=>{p?.value&&navigator.clipboard.writeText(p.value).then(()=>{f("Share link copied to clipboard!")})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&s&&!s.classList.contains("hidden")&&E()}),s)}function ee(){$().classList.remove("hidden"),M(!0),S(null)}function E(){s?.classList.add("hidden")}function M(e){const t=$(),r=t.querySelector(".share-modal-body"),n=t.querySelector(".share-modal-loading");r.classList.toggle("hidden",e),n.classList.toggle("hidden",!e)}function te(e){$(),p&&(p.value=e),M(!1),S(null)}function S(e){const r=$().querySelector(".share-modal-error");e?(r.textContent=e,r.classList.remove("hidden"),M(!1)):(r.textContent="",r.classList.add("hidden"))}const a=e=>document.querySelector(e),c=a("#editor"),v=a("#preview"),ae=a("#preview-scroll"),R=a("#main"),w=a("#toc-dropdown"),ie=a("#toc-list"),y=a("#file-input"),ne=a("#file-name"),re=a("#toast"),d=a("#editor-panel"),L=a("#resize-handle"),oe=a("#btn-open"),se=a("#btn-theme"),T=a("#btn-toc"),le=a("#btn-copy"),ce=a("#btn-print"),de=a("#btn-share"),C=a("#btn-view-editor"),k=a("#btn-view-split"),x=a("#btn-view-preview"),_=a("#icon-moon"),I=a("#icon-sun");let u=!1,O;U(re);function D(){Y(c.value,v),V(v,ie,ae),ue(c.value)}function q(){clearTimeout(O),O=setTimeout(D,120)}function ue(e){const t=e.trim(),r=t?t.split(/\s+/).length:0,n=t.length;a("#stat-words").textContent=`${r} word${r!==1?"s":""}`,a("#stat-chars").textContent=`${n} char${n!==1?"s":""}`}function B(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("md-viewer-theme",e),e==="dark"?(_.style.display="",I.style.display="none"):(_.style.display="none",I.style.display="")}function me(){const e=document.documentElement.getAttribute("data-theme");B(e==="dark"?"light":"dark")}function m(e){R.className=`main view-${e}`,[C,k,x].forEach(t=>t.classList.remove("active")),e==="editor"&&C.classList.add("active"),e==="split"&&k.classList.add("active"),e==="preview"&&x.classList.add("active")}function N(){u=!u,w.classList.toggle("hidden",!u),T.classList.toggle("active",u)}function F(){u&&(u=!1,w.classList.add("hidden"),T.classList.remove("active"))}document.addEventListener("mousedown",e=>{u&&!w.contains(e.target)&&!T.contains(e.target)&&F()});w.addEventListener("click",e=>{e.target.closest(".toc-item")&&F()});function P(e){const t=new FileReader;t.onload=r=>{c.value=r.target.result,ne.textContent=e.name,D(),f(`Loaded ${e.name}`)},t.readAsText(e)}let h=0;d.addEventListener("dragenter",e=>{e.preventDefault(),h++,d.classList.add("dragover")});d.addEventListener("dragleave",e=>{e.preventDefault(),h--,h<=0&&(h=0,d.classList.remove("dragover"))});d.addEventListener("dragover",e=>e.preventDefault());d.addEventListener("drop",e=>{e.preventDefault(),h=0,d.classList.remove("dragover");const t=e.dataTransfer?.files[0];t&&P(t)});document.addEventListener("dragover",e=>e.preventDefault());document.addEventListener("drop",e=>{e.preventDefault();const t=e.dataTransfer?.files?.[0];t&&P(t)});let b=!1;L.addEventListener("mousedown",e=>{b=!0,L.classList.add("active"),document.body.style.cursor="col-resize",document.body.style.userSelect="none",e.preventDefault()});document.addEventListener("mousemove",e=>{if(!b)return;const t=R.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100;n>15&&n<85&&(d.style.flex=`0 0 ${n}%`,a("#preview-panel").style.flex="1")});document.addEventListener("mouseup",()=>{b&&(b=!1,L.classList.remove("active"),document.body.style.cursor="",document.body.style.userSelect="")});c.addEventListener("input",q);oe.addEventListener("click",()=>y.click());y.addEventListener("change",()=>{const e=y.files?.[0];e&&P(e)});se.addEventListener("click",me);T.addEventListener("click",N);C.addEventListener("click",()=>m("editor"));k.addEventListener("click",()=>m("split"));x.addEventListener("click",()=>m("preview"));le.addEventListener("click",()=>{navigator.clipboard.writeText(v.innerHTML).then(()=>f("HTML copied to clipboard"))});ce.addEventListener("click",()=>window.print());de.addEventListener("click",async()=>{const e=c.value.trim();if(!e){f("Nothing to share — write some Markdown first.");return}ee();try{const t=await Z(e);te(t.url)}catch(t){S(t instanceof Error?t.message:"Failed to create share link.")}});document.addEventListener("keydown",e=>{const t=e.metaKey||e.ctrlKey;t&&e.key==="o"&&(e.preventDefault(),y.click()),t&&e.key==="b"&&(e.preventDefault(),N()),t&&e.key==="p"&&(e.preventDefault(),window.print()),t&&e.shiftKey&&e.key==="C"&&(e.preventDefault(),navigator.clipboard.writeText(v.innerHTML).then(()=>f("HTML copied"))),t&&e.key==="1"&&(e.preventDefault(),m("editor")),t&&e.key==="2"&&(e.preventDefault(),m("split")),t&&e.key==="3"&&(e.preventDefault(),m("preview"))});c.addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();const t=c.selectionStart,r=c.selectionEnd;c.value=c.value.substring(0,t)+"  "+c.value.substring(r),c.selectionStart=c.selectionEnd=t+2,q()}});(function(){const t=localStorage.getItem("md-viewer-theme")||"dark";B(t),c.value=Q(),D()})();
//# sourceMappingURL=main-C995AE0v.js.map
