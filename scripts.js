let toggle = 1;

const gridBtn = document.getElementById("grid_size");
gridBtn.addEventListener("click", setGridSize);

const blackBtn = document.getElementById("black_mode");
blackBtn.addEventListener("click", () => toggle = 1);

const rainbowBtn = document.getElementById("rainbow_mode");
rainbowBtn.addEventListener("click", () => toggle = 2);

const eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", () => toggle = 3);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearAll);

function setGridSize(gridSize) {
    let gridContainer = document.getElementById("container");
    if(gridSize == undefined) {
        gridSize = 4;
    } else {
       gridSize = prompt("Please input grid size (max 100)");
       if(gridSize == null || gridSize == "" || isNaN(gridSize)) {
            alert("Please input numeric value");
            return;
        }
       gridContainer.textContent = "";
    }
    for(let i = 0; i < Math.pow(gridSize, 2); i++) {
        let gridContent = document.createElement("div");
        let width = parseFloat(30/gridSize);
        gridContent.id = i;
        gridContent.className = 'gridbox';
        gridContent.setAttribute('style', `width: ${width}vw; `);
        gridContainer.appendChild(gridContent);
        
        let gridbox = document.getElementsByClassName("gridbox");
        gridbox[i].addEventListener("mouseover", clicked);
    }
}

function clicked(e) {
    let id = parseInt(e.target.id);
    let gridContent = document.getElementById(id);
    if(toggle == 1) {
        gridContent.style.backgroundColor = "black";
    } else if(toggle == 2) {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
        gridContent.style.backgroundColor = rgb;
    } else if(toggle == 3) {
        console.log("3");
        gridContent.style.background = "blanchedalmond";
    } else if(toggle == 4) {
        console.log("4");
    }
}

function clearAll() {
    let gridContainer = document.getElementById("container");
    gridContents = gridContainer.querySelectorAll("div");
    gridContents.forEach(gridContent => {
        gridContent.style.backgroundColor = "blanchedalmond";
    });
}

setGridSize();