const WeightsGenerator = require('./WeightsGenerator.js');
const Grid = require('./Grid.js');
const FigureCollection = require('./FigureCollection.js');

let geneticAlgorithm = new WeightsGenerator(),
	collection = new FigureCollection(),
	grid = new Grid(),
	S, O, L, T, I, Z, J; // test tetrominoes or letters

// example of letters creation and moving

S = grid.addFigure(collection.figures[4]['90']);
S = grid.moveFigureToBottom(S);

O = grid.addFigure(collection.figures[3]['90']);
O = grid.moveFigureRightSteps(O, 4);
O = grid.moveFigureToBottom(O);

L = grid.addFigure(collection.figures[2]['90']);
L = grid.moveFigureDown(L);
L = grid.moveFigureDown(L);
L = grid.moveFigureDown(L);
L = grid.moveFigureToLeftSide(L);
L = grid.moveFigureRight(L);
L = grid.moveFigureToBottom(L);

T = grid.addFigure(collection.figures[5]['270']);
T = grid.moveFigureToLeftSide(T);
T = grid.moveFigureToBottom(T);

//I = grid.addFigure(colletion.figures[0]['0']);
Z = grid.addFigure(collection.figures[6]['270']);
Z = grid.moveFigureToLeftSide(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);
Z = grid.moveFigureDown(Z);

grid.printMatrix();
geneticAlgorithm.startGeneration();

// 0, 1, 6