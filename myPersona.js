function edit() {
    document.getElementsByClassName("input")[0].setAttribute("contenteditable", "true");
    document.getElementsByClassName("input")[1].removeAttribute("readonly");
    document.getElementsByClassName("input")[2].setAttribute("contenteditable", "true");
}