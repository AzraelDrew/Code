/*
 * @Author       : yznaisy
 * @Date         : 2020-06-30 09:59:20
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-06-30 14:32:02
 * @FilePath     : \Code\vue\第四章-怪物猎人\yznaisySetup\app.js
 */
var app = new Vue({
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
            this.gongji(3, 10);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            this.gongji(10, 20);
            if (this.checkWin()) {
                //是否继续执行此函数，当返回true的时候就不需要执行后面的代码了
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Player heals for 10",
            });

            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        gongji: function (min, max) {
            let damage = this.calculateDamage(min, max);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits Monster for" + damage,
            });
        },
        monsterAttacks: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin(); //再次检测是否赢了
            this.turns.unshift({
                //添加在数组的第一个，与push效果相反
                isPlayer: false,
                text: "Monster hits Player for" + damage,
            });
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max + 1, min));
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                if (confirm("You won! New Game?")) {
                    this.startGame();
                } else {
                    rhis.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                if (confirm("You lost! New Game?")) {
                    this.startGame();
                } else {
                    rhis.gameIsRunning = false;
                }
                return true
            }
            return false;
        }
    }
});