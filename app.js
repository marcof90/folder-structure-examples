const $ = (sel) => document.querySelector(sel);

const tabsEl = $("#tabs");
const titleEl = $("#title");
const quoteEl = $("#quote");
const notesEl = $("#notes");
const treeEl = $("#tree");
const tagEl = $("#tag");
const copyBtn = $("#copyBtn");
const conclusionEl = $("#conclusion");

const structures = window.STRUCTURES || [];
let activeId = structures[0]?.id;

function escapeHtml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

// Resaltado muy simple (carpetas vs archivos)
function highlightTree(treeText) {
  const lines = treeText.split("\n");

  const highlighted = lines.map((line, idx) => {
    // raíz
    if (idx === 0) {
      return `<span class="hl-root">${escapeHtml(line)}</span>`;
    }

    // carpetas: contiene "📂"
    if (line.includes("📂")) {
      return escapeHtml(line).replace("📂", `<span class="hl-folder">📂</span>`);
    }

    // archivos: contiene "└──" o "├──" y termina en .js/.css/.md, etc
    const isFile = /\.(js|ts|jsx|tsx|css|html|md|json)$/i.test(line.trim());
    if (isFile) {
      return `<span class="hl-file">${escapeHtml(line)}</span>`;
    }

    // "..."
    if (line.trim().endsWith("...")) {
      return `<span class="hl-dim">${escapeHtml(line)}</span>`;
    }

    return escapeHtml(line);
  });

  return highlighted.join("\n");
}

function renderTabs() {
  tabsEl.innerHTML = "";
  structures.forEach((s) => {
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.type = "button";
    btn.textContent = s.label;
    btn.setAttribute("aria-selected", String(s.id === activeId));
    btn.addEventListener("click", () => {
      activeId = s.id;
      renderAll();
    });
    tabsEl.appendChild(btn);
  });
}

function renderActive() {
  const s = structures.find(x => x.id === activeId) || structures[0];
  if (!s) return;

  titleEl.textContent = s.title;
  quoteEl.textContent = s.quote;

  tagEl.textContent = s.tag;

  notesEl.innerHTML = "";
  s.notes.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = n;
    notesEl.appendChild(li);
  });

  treeEl.innerHTML = highlightTree(s.tree);

}

function renderAll() {
  renderTabs();
  renderActive();
  conclusionEl.textContent = window.CONCLUSION || "";
}

renderAll();
