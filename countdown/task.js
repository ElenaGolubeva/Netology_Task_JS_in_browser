const span = document.getElementById("timer")

refresh = setInterval(() => {
    if (span.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(refresh);
    }else{ 
        span.textContent = Number(span.textContent) - 1
    }
}, 1000)

