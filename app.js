const playButton = document.getElementById("playButton");
      const gridContainer = document.getElementById("gridContainer");
      
      playButton.addEventListener("click", function() {
        let grid = "";
        for (let i = 1; i <= 100; i++) {
          grid += `<div class="gridSquare">${i}</div>`;
        }
        gridContainer.innerHTML = grid;
        
        const gridSquares = document.getElementsByClassName("gridSquare");
        for (let i = 0; i < gridSquares.length; i++) {
          gridSquares[i].addEventListener("click", function() {
            console.log(`Hai cliccato la casella ${i + 1}`);
            this.classList.add("clicked");
          });
        }
      });