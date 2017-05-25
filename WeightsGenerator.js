class WeightsGenerator {
    constructor () {
        this.numberOfGamesPerCandidate = 100;
        this.candidatesNumber = 1000;
        this.candidates = [];
        this.mutationPercent = 5;
        this.maxMutationRank = 0.2;
        this.selectionPercent = 10;
        this.offsringPercent = 30;
        this.weightsLen = 4;
        this.offspring = [];
    }

    deepCopy (object) {
        return JSON.parse(JSON.stringify(object));
    }

    generateCandidates () {
        while (this.candidates.length < this.candidatesNumber) {
            this.candidates.push([Math.random(), Math.random(), Math.random(), Math.random()]);
        }
    }

    getBestWeights () {

    }

    normalize (candidate) {
        const normRank = Math.sqrt(candidate.weights
            .reduce((acc, value) => {
                return acc + value*value;
            }, 0));

        return {weights: candidate.weights.map((weight) => weight/normRank)};
    }

    calculateFitness (candidate) {
        return candidate[0]*1000;
    }

    mutate (candidate) {
        if (Math.random() <= this.mutationPercent/100) {
            const randomValue = Math.random();

            if (Math.random() > 0.5) {
                candidate.weights[Math.floor(Math.random() * 3)] += Math.random() * this.maxMutationRank * 2 - this.maxMutationRank;
            } else {
                candidate.weights[Math.ceil(Math.random() * 3)] += Math.random() * this.maxMutationRank * 2 - this.maxMutationRank;
            } 
        }

        return candidate.weights;
    }

    crossover (parentCandidates) {
        let child = [],
            genesGenerator,
            gen;

        genesGenerator = function* (parentCandidates) {
          let i = -1;

          while (i < parentCandidates[0].weights.length) {
            i++;
            yield parentCandidates[0].weights[i] * parentCandidates[0].fitness 
                + parentCandidates[1].weights[i] * parentCandidates[1].fitness;
          }
        };

        gen = genesGenerator(parentCandidates);
        while (child.length < this.weightsLen) child.push(gen.next().value);

        return this.normalize({weights: child});
    }

    select () {
        while (this.offspring.length < this.candidatesNumber*this.offsringPercent/100) {

            let selectedCandidates = [];

            for (let i = 0; i < this.candidatesNumber*this.selectionPercent/100; i++) {
                selectedCandidates.push(this.candidates[Math.floor(Math.random() * this.candidatesNumber)]);
            }

            selectedCandidates = selectedCandidates
                .map(candidate => ({weights: candidate, fitness: this.calculateFitness(candidate)}))
                .sort((a,b) => b.fitness - a.fitness);

            this.offspring.push(this.mutate(this.crossover(selectedCandidates.slice(0, 2))));
        }
    }

    removeBadCandidates () {
        this.candidates
            .sort((a,b) => b.fitness - a.fitness)
            .slice(-this.offspring.length);


        this.candidates.concat(this.offspring);

        this.offspring = [];
    }

    startGeneration () {
        this.generateCandidates();
        let counter = 10;
        let i = 0;

        while (i < counter) {
            this.select();
            this.removeBadCandidates();
            i++;
        }

        this.candidates = this.candidates
            .map(candidate => ({weights: candidate, fitness: this.calculateFitness(candidate)}))
            .sort((a,b) => b.fitness - a.fitness);
    }
}

module.exports = WeightsGenerator;