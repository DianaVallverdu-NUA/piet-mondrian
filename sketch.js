function setup() {
    // "#f3f3f3" - white
    // #f10d0d" - red
    // "#f9e218" - yellow
    // "#292928" - black
    // "#0d7fbe"
    const possibleColors = ["#f3f3f3", "#f10d0d", "#f9e218", "#292928", "#0d7fbe"];

    //size of each square in pixels
    const squareSize = 50;
    //number of cells of the grid
    const cellNumber = 10;
    // canvas size in pixels
    const canvasSize = squareSize * cellNumber;
    
    //calculate width and height
    const width = squareSize;
    const height = squareSize;

    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0;
    let y = 0;

    while(y < canvasSize) {
        
        x = 0;
        
        while(x < canvasSize){

            //choose random hex code from all the possible colors
            const colorCode = random(possibleColors);

            //store color object in myColor
            const myColor = color(colorCode);

            // use fill to fill all the square with one color
            fill(myColor)

            // rect(x, y, width, height) 
            // x = position of the left of the square
            // y = position of the top of the square
            // width = width in pixels of the rectangle
            // height = height in pixels of the rectangle 
            rect(x, y, width, height);

            //update x
            x = x + width;
        }
        
        //update y
        y = y + height;
    }
}