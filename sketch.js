function setup() {

    //size of each square in pixels
    const squareSize = 50;
    //number of cells of the grid
    const cellNumber = 10;
    // canvas size in pixels
    const canvasSize = squareSize * cellNumber;

    createCanvas(canvasSize, canvasSize);
    background(220);

    for(let row = 0; row < cellNumber; row++) {
        for(let column = 0; column < cellNumber; column++) {
            const red = random(255);
            const green = random(255);
            const blue = random(255);

            const myColor = color(red, green, blue);

            // use fill to fill all the square with one color
            fill(myColor)

            //calculate horizontal and vertical position in pixels
            const x = row * squareSize;
            const y = column * squareSize;

            //calculate width and height
            const width = squareSize;
            const height = squareSize;
            
            // rect(x, y, width, height) 
            // x = position of the left of the square
            // y = position of the top of the square
            // width = width in pixels of the rectangle
            // height = height in pixels of the rectangle 
            rect(x, y, width, height);
        }
    }
}