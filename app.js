function abrirapp() {
    document.getElementById("clicar").classList.add("sumir")
    document.getElementById("app").classList.add("aparecer")
}

function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();0}
    else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();}
    else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();}
}