// Get references to key elements in the HTML for later use.
const grid = document.querySelector("#grid tbody");
const form = document.querySelector("#newSnippet");
const langFilterInput = document.querySelector("#q");
const applyFiltersBtn = document.querySelector("#applyFilters");

applyFiltersBtn.addEventListener("click", load);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
console.log(data);
  const res = await fetch("/api/snippets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) { alert("Validation failed when creating snippet"); return; }

  form.reset();
  await load();
});

async function load() {
  const params = new URLSearchParams();
  if (langFilterInput.value) {
    params.set("lang", langFilterInput.value.trim().toLowerCase());
  }

  // Example of limiting results: latest 5
  params.set("limit", "5");

  const res = await fetch("/api/snippets?" + params.toString());
  if (!res.ok) {
    alert("Failed to load snippets");
    return;
  }

  const snippets = await res.json();
  grid.innerHTML = snippets.map(renderRow).join("");
  bindRowActions();
}

function renderRow(s) {
  const created = s.created_at
    ? new Date(s.created_at).toLocaleString()
    : "";
  const tags = Array.isArray(s.tags) ? s.tags.join(", ") : "";
  const code = escapeHtml(s.code || "");

  return `
    <tr>
      <td>${escapeHtml(s.title || "")}</td>
      <td>${escapeHtml(s.language || "")}</td>
      <td><pre><code>${code}</code></pre></td>
      <td>${escapeHtml(s.description || "")}</td>
      <td>${escapeHtml(tags)}</td>
      <td>${created}</td>
      <td>
        <button class="delete-btn" data-id="${s._id}">Delete</button>
      </td>
    </tr>
  `;
}

function bindRowActions() {
  document.querySelectorAll("#grid button.delete-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      if (!id) return;

      if (!confirm("Delete this snippet?")) return;

      const res = await fetch("/api/snippets/" + id, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("Failed to delete snippet");
        return;
      }

      await load();
    });
  });
}

function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return ch;
    }
  });
}

load();
