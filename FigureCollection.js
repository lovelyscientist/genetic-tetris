class FigureCollection {
    constructor () {
        this.rotationNumber = 4;
        this.figures = [
            { // figure I
                '0': {
                    code: [
                        [1, 1, 1, 1]
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ],
                    width: 4,
                    height: 4
                },
                '90': {
                    code: [
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                    ],
                    width: 4,
                    height: 4
                },
                '180': {
                    code: [
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [1, 1, 1, 1],
                        [0, 0, 0, 0],
                    ],
                    width: 4,
                    height: 4
                },
                '270': {
                    code: [
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                    ],
                    width: 4,
                    height: 4
                }
            },
            { // figure L
                '0': {
                    code: [
                        [2, 0, 0],
                        [2, 2, 2],
                        [0, 0, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '90': {
                    code: [
                        [0, 2, 2],
                        [0, 2, 0],
                        [0, 2, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '180': {
                    code: [
                        [0, 0, 0],
                        [2, 2, 2],
                        [0, 0, 2]
                    ],
                    width: 3,
                    height: 3
                },
                '270': {
                    code: [
                        [0, 2, 0],
                        [0, 2, 0],
                        [2, 2, 0]
                    ],
                    width: 3,
                    height: 3
                }
            },
            { // figure J
                '0': {
                    code: [
                        [0, 0, 3],
                        [3, 3, 3],
                        [0, 0, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '90': {
                    code: [
                        [0, 3, 0],
                        [0, 3, 0],
                        [0, 3, 3]
                    ],
                    width: 3,
                    height: 3
                },
                '180': {
                    code: [
                        [0, 0, 0],
                        [3, 3, 3],
                        [3, 0, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '270': {
                    code: [
                        [3, 3, 0],
                        [0, 3, 0],
                        [0, 3, 0]
                    ],
                    width: 3,
                    height: 3
                }
            },
            { // figure O
                '0': {
                    code: [
                        [4, 4],
                        [4, 4]
                    ],
                    width: 2,
                    height: 2
                },
                '90': {
                    code: [
                        [4, 4],
                        [4, 4]
                    ],
                    width: 2,
                    height: 2
                },
                '180':  {
                    code: [
                        [4, 4],
                        [4, 4]
                    ],
                    width: 2,
                    height: 2
                },
                '270': {
                    code: [
                       [4, 4],
                       [4, 4]
                    ],
                    width: 2,
                    height: 2
                }
            },
            { // figure S
                '0': {
                    code: [
                        [0, 5, 5],
                        [5, 5, 0],
                        [0, 0, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '90': {
                    code: [
                        [0, 5, 0],
                        [0, 5, 5],
                        [0, 0, 5]
                    ],
                    width: 3,
                    height: 3
                },
                '180': {
                    code: [
                        [0, 0, 0],
                        [0, 5, 5],
                        [5, 5, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '270': {
                    code: [
                        [5, 0, 0],
                        [5, 5, 0],
                        [0, 5, 0]
                    ],
                    width: 3,
                    height: 3
                }
            },
            { // figure T
                '0': {
                    code: [
                        [0, 6, 0],
                        [6, 6, 6],
                        [0, 0, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '90': {
                    code: [
                        [0, 6, 0],
                        [0, 6, 6],
                        [0, 6, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '180': {
                    code: [
                        [0, 0, 0],
                        [6, 6, 6],
                        [0, 6, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '270': {
                    code: [
                        [0, 6],
                        [6, 6],
                        [0, 6]
                    ],
                    width: 2,
                    height: 3
                }
            },
            { // figure Z
                '0': {
                    code: [
                        [7, 7, 0],
                        [0, 7, 7],
                        [0, 0, 0]
                    ],
                    width: 3,
                    height: 3
                },
                '90': {
                    code: [
                        [0, 0, 7],
                        [0, 7, 7],
                        [0, 7, 0]
                    ], 
                    width: 3,
                    height: 3
                },
                '180': {
                    code: [
                        [0, 0, 0],
                        [7, 7, 0],
                        [0, 7, 7]
                    ],
                    width: 3,
                    height: 3
                },
                '270': {
                    code: [
                        [0, 7, 0],
                        [7, 7, 0],
                        [7, 0, 0]
                    ],
                    width: 3,
                    height: 3
                }
            }
        ]
    }
}

module.exports = FigureCollection;