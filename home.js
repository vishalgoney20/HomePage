function myFunction(sectionName) {
    var x = document.getElementById(sectionName);

    var content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function onDetailsSubmit() {
    alert("your details have been submitted");
}