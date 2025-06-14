
document.getElementById('quoteBox').innerText = [
  "The pen is mightier than the sword.",
  "To write is to think on paper.",
  "Reading is essential for those who seek to rise above the ordinary.",
  "Words are, in my not-so-humble opinion, our most inexhaustible source of magic."
][Math.floor(Math.random() * 4)];

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}
