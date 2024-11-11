img = document.getElementById("cookie")
counter = document.getElementById("clicker__counter")
img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1
    if (Number(counter.textContent % 2 == 1 )) {
        img.width += 15
        img.height += 15
    } else {
        img.width -= 15
        img.height -= 15
    }
}
