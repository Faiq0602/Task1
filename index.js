var r = 0, l = 0, u = 0, d = 0;

var n = prompt("Welcome , you can use this box to give the number of movements you will be making. The input can be an integer > 0.");

for (var i = 1; i <= n; i++) {
    var m = prompt("Enter the " + i + " movement. Each movement is of 50px. You can use left , right , up , down respectively")
    if (m === "right") {
        r = r + 50;

    }

    else if (m === "left") {
        l = l + 50;

    }

    else if (m === "up") {
        u = u + 50;

    }

    else if (m === "down") {
        d = d + 50;
    }

    else {
        alert("Wrong choice")
    }

}
right();
left();
up();
down();
tot();

function left() {
    document.getElementById('pos').style.marginRight = l + "px";
}

function right() {
    document.getElementById('pos').style.marginLeft = r + "px";
}
function up() {
    document.getElementById('pos').style.marginBottom = u + "px";
}
function down() {
    document.getElementById('pos').style.marginTop = d + "px";
}
function tot() {
    var t = r + l + u + d;
    alert("Total movement : Right " + r + "px Left : " + l + "px Up : " + u + "px  Down : " + d + " In Total : " + t + "px. Click Okay to view final position.");
}