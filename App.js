let lists = document.getElementsByClassName("list");
let left = document.getElementById("left");
let right = document.getElementById("right");

for (let list of lists) {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;

        right.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        right.addEventListener("drop", (e) => {
            right.append(selected);
            selected = "";
        })

        left.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        left.addEventListener("drop", (e) => {
            left.append(selected);
            selected = "";
        })
    })
}