img = document.getElementById("cookie")
counter = document.getElementById("clicker__counter")
img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1
}
