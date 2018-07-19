var bottle = {
  capacity: 20,
  capacityUnits: 'oz',
  contents: 'coffee',
  percentFull: 50,
  drink: function() { this.percentFull-- }
};

var vape = {
  parts: ['mod', 'rda', 'batteries', 'coils'],
  batteryPercentages: [90, 91],
  isOn: false,
  vape: function() {
    if (this.isOn) {
      this.batteryPercentages[0]--;
      this.batteryPercentages[1]--;
    }
  }
};

var sunglasses = {
  primaryColor: 'teal',
  secondaryColor: 'marroon',
  isFolded: true,
  wear: function() {
    if (isFolded)
      this.isFolded = !this.isFolded;
  }
};

var mirrorCube = {
  colors: ['gold', 'gold','gold', 'gold','gold', 'gold'],
  isSolved: true,
  size: [3, 3, 3],
  randomize: function() {
    if (this.isSolved)
      this.isSolved = !this.isSolved;
    else
      console.log('Already randomized');
  }
};

var monitor = {
  resolution: 1080,
  aspectRation: {
    vertical: 16,
    horizontal: 9,
    toString: function() { return `${this.vertical}:${this.horizontal}` }
  },
  dpi: 600,
  isOn: true,
  power: function() { this.isOn = !this.isOn }
};

var dongle = {
  output: 'USB-C',
  inputs: ['USB 3.0', 'USB 3.0', 'USB 3.0', 'HDMI', 'USB-C'],
  brand: 'Satechi',
  occupiedInputs: ['USB 3.0', 'HDMI'],
  plugIn: function(item) { this.occupiedInputs.push(item) }
}

var rubiksCube = {
  size: [3, 3, 3],
  colors: ['blue', 'white', 'green', 'yellow', 'red', 'orange'],
  isSolved: true,
  solve: function() { if (!this.isSolved) this.isSolved = !this.isSolved }
}

var twistyPuzzle = {
  size: [4, 4, 4],
  colors: ['blue', 'white', 'green', 'yellow', 'red', 'orange'],
  isParity: true,
  isSolved: false,
  solve: function() {
    if (this.isParity) {
      this.isParity = false;
      this.isSolved = true;
    } else if (!this.isSolved) {
      this.isSolved = !this.isSolved;
    }
  }
}

