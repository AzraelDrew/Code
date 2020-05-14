new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function () {
      // var max = 10;
      // var min = 3;
      // var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "The player hits Monster for " + damage,
      });
      if (this.checkRes()) {
        return;
      }

      // max = 12;
      // min = 5;
      // var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.monsterAttack();
    },
    finalAttack: function () {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        // status: true,
        text: "The player open final-attack hits Monster for " + damage,
      });
      // this.playerHealth -= this.calculateDamage(5, 12)
      // this.checkRes()
      this.monsterAttack();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 15;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        // status: false,
        text: "The player heals for 15",
      });
      this.monsterAttack();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    monsterAttack: function () {
      // this.playerHealth -= this.calculateDamage(5, 12)
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "The Monster hits Player for " + damage,
      });
      this.checkRes();
    },

    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkRes: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You Win! New Game?")) {
          this.startGame();
        } else {
          gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You Lose,Try Again?")) {
          this.startGame();
        } else {
          gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});