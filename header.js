document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", `
<header class="site-header">
    <a href="https://allanhu100.github.io/" class="logo">
        <img src="styles/dinosaur-favicon.png" alt="logo" class="logo-img">
        <span>rawr</span>
    </a>
    <nav class="nav-bar">
        <a href="https://allanhu100.github.io/">Home</a>
        <a href="https://allanhu100.github.io/games" class="nav-button">Games</a>
        <a href="https://allanhu100.github.io/aboutme" class="nav-button">About Me</a>
    </nav>
</header>
    `);
});
