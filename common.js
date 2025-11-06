async function loadHTML(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}


loadHTML("footer", "footer.html");
