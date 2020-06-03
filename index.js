function toggleVegan() {
    const notVegan = [...document.getElementsByClassName("not-vegan")];
    for (const el of notVegan) el.style.display = el.style.display === "none" ? "block" : "none";
}