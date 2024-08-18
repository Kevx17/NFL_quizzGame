new_game = document.getElementById("host")
join_game = document.getElementById("join")

new_game.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/new_game.html";
});

join_game.addEventListener("click", function() {
    window.location.replace("http://127.0.0.1:5500/join_game.html");
});