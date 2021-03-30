document.getElementById("goodid").style.display = "none";
document.getElementById("moderateid").style.display = "none";
document.getElementById("usgid").style.display = "none";
document.getElementById("unhealthyid").style.display = "none";
document.getElementById("veryunhealthyid").style.display = "none";
document.getElementById("hazardousid").style.display = "none";

function getAllMap() {
    document.getElementById("goodid").style.display = "none";
    document.getElementById("moderateid").style.display = "none";
    document.getElementById("usgid").style.display = "none";
    document.getElementById("unhealthyid").style.display = "none";
    document.getElementById("veryunhealthyid").style.display = "none";
    document.getElementById("hazardousid").style.display = "none";

    document.getElementById("mapid").style.display = "block";
    allMap.invalidateSize();

    document.getElementById('slider').value = "0";
    document.querySelector('#volume').value = 0;

}

document.getElementById("getGraph").style.display = "none";

function passGraph() {
    document.getElementById("getMap").style.display = "none";
    document.getElementById("getGraph").style.display = "block";
    document.getElementById("passgraphid").disabled = true;
    document.getElementById("passmapid").disabled = false;

}

function passMap() {
    document.getElementById("getGraph").style.display = "none";
    document.getElementById("getMap").style.display = "block";
    document.getElementById("passgraphid").disabled = false;
    document.getElementById("passmapid").disabled = true;
}

document.getElementById('slider').value = "0";

function outputUpdate(vol) {
    document.querySelector('#volume').value = vol;

    var value = document.querySelector('#volume').value;

    if (value >= 0 && value <= 35) {
        document.getElementById("mapid").style.display = "none";
        document.getElementById("moderateid").style.display = "none";
        document.getElementById("usgid").style.display = "none";
        document.getElementById("unhealthyid").style.display = "none";
        document.getElementById("veryunhealthyid").style.display = "none";
        document.getElementById("hazardousid").style.display = "none";

        document.getElementById("goodid").style.display = "block";
        allGood.invalidateSize();
    } else if (value >= 36 && value <= 53) {
        document.getElementById("mapid").style.display = "none";
        document.getElementById("goodid").style.display = "none";
        document.getElementById("usgid").style.display = "none";
        document.getElementById("unhealthyid").style.display = "none";
        document.getElementById("veryunhealthyid").style.display = "none";
        document.getElementById("hazardousid").style.display = "none";

        document.getElementById("moderateid").style.display = "block";
        allModerate.invalidateSize();
    } else if (value >= 54 && value <= 58) {
        document.getElementById("mapid").style.display = "none";
        document.getElementById("goodid").style.display = "none";
        document.getElementById("moderateid").style.display = "none";
        document.getElementById("unhealthyid").style.display = "none";
        document.getElementById("veryunhealthyid").style.display = "none";
        document.getElementById("hazardousid").style.display = "none";

        document.getElementById("usgid").style.display = "block";
        allUSG.invalidateSize();
    } else if (value >= 59 && value <= 64) {
        document.getElementById("mapid").style.display = "none";
        document.getElementById("goodid").style.display = "none";
        document.getElementById("moderateid").style.display = "none";
        document.getElementById("usgid").style.display = "none";
        document.getElementById("veryunhealthyid").style.display = "none";
        document.getElementById("hazardousid").style.display = "none";

        document.getElementById("unhealthyid").style.display = "block";
        allUnhealthy.invalidateSize();
    } else if (value >= 65 && value <= 70) {
        document.getElementById("mapid").style.display = "none";
        document.getElementById("goodid").style.display = "none";
        document.getElementById("moderateid").style.display = "none";
        document.getElementById("usgid").style.display = "none";
        document.getElementById("unhealthyid").style.display = "none";
        document.getElementById("hazardousid").style.display = "none";

        document.getElementById("veryunhealthyid").style.display = "block";
        allVeryUnhealthy.invalidateSize();
    } else if (value >= 71) {
        document.getElementById("mapid").style.display = "none";
        document.getElementById("goodid").style.display = "none";
        document.getElementById("moderateid").style.display = "none";
        document.getElementById("usgid").style.display = "none";
        document.getElementById("unhealthyid").style.display = "none";
        document.getElementById("veryunhealthyid").style.display = "none";

        document.getElementById("hazardousid").style.display = "block";
        allHazardous.invalidateSize();
    }
    else {
        document.getElementById("goodid").style.display = "none";
        document.getElementById("moderateid").style.display = "none";
        document.getElementById("usgid").style.display = "none";
        document.getElementById("unhealthyid").style.display = "none";
        document.getElementById("veryunhealthyid").style.display = "none";
        document.getElementById("hazardousid").style.display = "none";

        document.getElementById("mapid").style.display = "block";
        allMap.invalidateSize();
    }
}