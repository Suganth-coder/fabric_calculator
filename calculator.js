function calculateShrinkage() {
    let bwWidth = parseFloat(document.getElementById("bwWidth").value) || 0;
    let bwLength = parseFloat(document.getElementById("bwLength").value) || 0;
    
    let awWidth = bwWidth * 0.97;
    let awLength = bwLength * 1.06;
    
    document.getElementById("awWidth").innerText = awWidth.toFixed(2);
    document.getElementById("awLength").innerText = awLength.toFixed(2);
    
    let blueBox = document.querySelector(".fabric-box");
    let redBox = document.querySelector(".red-box");
    
    blueBox.style.width = (bwLength * 10) + "px";
    blueBox.style.height = (bwWidth * 10) + "px";
    blueBox.style.display = "block";
    
    redBox.style.width = (awLength * 10) + "px";
    redBox.style.height = (awWidth * 10) + "px";
    redBox.style.display = "block";
    
    document.querySelector(".arrow-horizontal").innerText = "AW-Length = +6%";
    document.querySelector(".arrow-vertical").innerText = "AW-Width = -3%";
    document.getElementById("previewPrintButtons").classList.remove("hidden");
}

function clearFields() {
    document.getElementById("bwWidth").value = "";
    document.getElementById("bwLength").value = "";
    document.getElementById("awWidth").innerText = "";
    document.getElementById("awLength").innerText = "";
    document.querySelector(".fabric-box").style.display = "none";
    document.querySelector(".red-box").style.display = "none";
    document.getElementById("previewPrintButtons").classList.add("hidden");
}

function showDialog(message) {
    alert(message + "\n\nIt will be implemented soon.");
}