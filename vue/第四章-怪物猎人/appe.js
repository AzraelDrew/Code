const TURNS_TYPE_ATTACK = 1
const TURNS_TYPE_HEAL = 2
const TURNS_TYPE_F_ATTACK = 3
const TURNS_ACTOR_PLAYER = 1
const TURNS_ACTOR_MONSTER = 2

new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        // 计算class对象
        getTurnClass(turn) {
            const {
                type,
                actor
            } = turn
            let actorString = '-turn'
            let typeString = 'player-'


            switch (actor) {
                case TURNS_ACTOR_PLAYER: {
                    actorString = `player${actorString}`
                    break
                }
                case TURNS_ACTOR_MONSTER: {
                    actorString = `monster${actorString}`
                    break
                }
            }

            switch (type) {
                case TURNS_TYPE_ATTACK: {
                    typeString = `${typeString}attack`
                    break
                }
                case TURNS_TYPE_HEAL: {
                    typeString = `${typeString}heal`
                    break
                }
                case TURNS_TYPE_F_ATTACK: {
                    typeString = `${typeString}fa`
                    break
                }
            }

            return {
                [actorString]: true,
                [typeString]: true
            }
        },
        //开始按钮
        startGame: function () {
            //显示技能界面
            this.gameIsRunning = true;
            //满血
            this.playerHealth = 100;
            this.monsterHealth = 100;
            //清空日志
            this.turns = [];
        },
        // 普通攻击
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            //插入日志
            this.turns.unshift({
                actor: TURNS_ACTOR_PLAYER,
                type: TURNS_TYPE_ATTACK,
                text: "The player hits Monster for " + damage,
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        //大招
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            //插入日志
            this.turns.unshift({
                actor: TURNS_ACTOR_PLAYER,
                type: TURNS_TYPE_F_ATTACK,
                text: "The player open final-attack hits Monster for " + damage,
            });
            this.monsterAttack();
        },
        //回血
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            //插入日志
            this.turns.unshift({
                actor: TURNS_ACTOR_PLAYER,
                type: TURNS_TYPE_HEAL,
                text: "The player heals for 10"
            });
            this.monsterAttack();
        },
        //重新开始
        giveUp: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        //怪兽攻击
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            //插入日志
            this.turns.unshift({
                actor: TURNS_ACTOR_MONSTER,
                type: TURNS_TYPE_ATTACK,
                text: "The Monster hits Player for " + damage,
            });
            this.checkWin();
        },
        //计算攻击
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        //判断谁赢了
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                //当boos血量为负数时，变为0
                this.monsterHealth = 0;
                if (confirm("You Win! New Game?")) {
                    this.startGame();
                } else {
                    gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                //当boos血量为负数时，变为0
                this.playerHealth = 0;
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