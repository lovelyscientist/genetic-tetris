const colors = require('colors/safe');

class Grid {
    constructor () {
        this.width = 10;
        this.height = 22;
        this.startWidth = 5;
        this.startHeight = 0;
        this.matrix = [];

        for (let i = 0; i < this.height; i++) {
            this.matrix.push([]);
            for (let j = 0; j < this.width; j++) {
                this.matrix[i].push(0);
            }
        }
    }

    addFigure (figure) {
        for (let i = 0; i < figure.height; i++) {
            for (let j = 0; j < figure.width; j++) {
                this.matrix[i][j + (this.startWidth - Math.floor(figure.width/2))] = figure.code[i][j];
            }
        }

        figure.coordinates = [0, this.startWidth - Math.floor(figure.width/2)];

        return figure;
    }

    printMatrix () {
        process.stdout.write('\n');
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                switch (this.matrix[i][j]) {
                    case 0:  {process.stdout.write(colors.bgWhite('  ')); break;};
                    case 1:  {process.stdout.write(colors.bgBlack('  ')); break;};
                    case 2:  {process.stdout.write(colors.bgRed('  ')); break;};
                    case 3:  {process.stdout.write(colors.bgGreen('  ')); break;};
                    case 4:  {process.stdout.write(colors.bgCyan('  ')); break;};
                    case 5:  {process.stdout.write(colors.bgMagenta('  ')); break;};
                    case 6:  {process.stdout.write(colors.bgYellow('  ')); break;};
                    case 7:  {process.stdout.write(colors.bgBlue('  ')); break;};
                    default: {process.stdout.write(colors.bgWhite('  ')); break;};
                }
            }
            process.stdout.write('\n');
        }
        process.stdout.write('\n');
    }

    moveFigureDown (figure) {
            let coordinates = figure.coordinates;

            for (let j = 0; j < figure.width; j++) {
                this.matrix[coordinates[0]][coordinates[1] + j] = 0;
            }

            for (let i = 0; i < figure.height; i++) {
                for (let j = 0; j < figure.width; j++) {
                    //if (figure.code[i][j] !== 0) {
                        this.matrix[coordinates[0] + i + 1][Number(coordinates[1]) + Number(j)] = figure.code[i][j];
                    //}
                }
            }

            figure.coordinates = [Number(coordinates[0]) + 1, Number(coordinates[1])];

            return figure;
    }

    moveFigureRight (figure) {
        let coordinates = figure.coordinates;

        for (let j = 0; j < figure.height; j++) {
            this.matrix[coordinates[0] + j][coordinates[1]] = 0;
        }

        for (let i = 0; i < figure.height; i++) {
            for (let j = 0; j < figure.width; j++) {
                //if (figure.code[i][j] !== 0) {
                    this.matrix[Number(coordinates[0]) + i][Number(coordinates[1]) + Number(j) + 1] = figure.code[i][j];
                //}
            }
        }

        figure.coordinates = [Number(coordinates[0]), Number(coordinates[1]) + 1];

        return figure;
    }

    moveFigureToLeftSide (figure) {
        while (figure.coordinates[1] !== 0) {
            let coordinates = figure.coordinates;

            for (let j = 0; j < figure.height; j++) {
                this.matrix[coordinates[0] + j][coordinates[1] + figure.width - 1] = 0;
            }


            for (let i = 0; i < figure.height; i++) {
                for (let j = 0; j < figure.width; j++) {
                    //if (figure.code[i][j] !== 0) {
                        this.matrix[Number(coordinates[0]) + i][Number(coordinates[1]) + Number(j) - 1] = figure.code[i][j];
                    //}
                }
            }

            figure.coordinates = [Number(coordinates[0]), Number(coordinates[1]) - 1];
        }

        return figure;
    }

    moveFigureRightSteps (figure, stepsCount) {
        let counter = 0;

        while (counter < stepsCount) {
            this.moveFigureRight(figure);
            counter++;
        }

        return figure;
    }

    moveFigureToBottom (figure) {
        while (figure.coordinates[0] + figure.height !== this.height) {
            figure = this.moveFigureDown(figure);
        }

        if ((figure.code[figure.height - 1] === [0,0,0,0]) || (figure.code[figure.height - 1] == [0,0,0])) {
            figure.height -= 1;
            figure = this.moveFigureDown(figure);
        }
    }
}

module.exports = Grid;