function setup() {
    // "#f3f3f3" - white
    // #f10d0d" - red
    // "#f9e218" - yellow
    // "#292928" - black
    // "#0d7fbe"
    const possibleColors = ["#f3f3f3", "#f10d0d", "#f9e218", "#292928", "#0d7fbe"];

    //size of each square in pixels
    const squareSize = 50;
    // canvas size in pixels
    const canvasSize = 800;
    // list of possible cell sizes in pixels - based on squareSize
    const possibleCellSizes = [squareSize, squareSize, squareSize, 2 * squareSize, 3 * squareSize, 4 * squareSize];

    const borderColor = color("#b4acb1");

    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0;
    let y = 0;

    while (y < canvasSize) {

        x = 0;

        //generate a random height from the possible cell sizes
        let actualHeight = random(possibleCellSizes);
        if (y + actualHeight > canvasSize) actualHeight = canvasSize - y;

        while (x < canvasSize) {

            //choose random hex code from all the possible colors
            const colorCode = random(possibleColors);

            //store color object in myColor
            const myColor = color(colorCode);

            // use fill to fill all the square with one color
            fill(myColor)

            //update stroke weight and color
            strokeWeight(10);
            stroke(borderColor);

            //generate a random witdth from the possible cell sizes
            let actualWidth = random(possibleCellSizes);
            if (x + actualWidth > canvasSize) actualWidth = canvasSize - x;

            // rect(x, y, width, height) 
            // x = position of the left of the square
            // y = position of the top of the square
            // width = width in pixels of the rectangle
            // height = height in pixels of the rectangle 
            rect(x, y, actualWidth, actualHeight);

            //update x
            x = x + actualWidth;
        }

        //update y
        y = y + actualHeight;
    }
}