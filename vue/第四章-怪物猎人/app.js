// new Vue({
//     el: '#app',
//     data: {
//         playerHealth: 100,
//         monsterHealth: 100,
//         gameIsRunning: false,
//         turns: []
//     },
//     methods: {
//         startGame: function () {
//             this.gameIsRunning = true;
//             this.playerHealth = 100;
//             this.monsterHealth = 100;
//             this.turns = [];
//         },
//         attack: function () {
//             var damage = this.calculateDamage(3, 10);
//             this.monsterHealth -= damage;
//             this.turns.unshift({
//                 isPlayer: true,
//                 text: 'Player hits Monster for ' + damage
//             });
//             if (this.checkWin()) {
//                 return;
//             }

//             this.monsterAttacks();
//         },
//         specialAttack: function () {
//             var damage = this.calculateDamage(10, 20);
//             this.monsterHealth -= damage;
//             this.turns.unshift({
//                 isPlayer: true,
//                 text: 'Player hits Monster hard for ' + damage
//             });
//             if (this.checkWin()) {
//                 return;
//             }
//             this.monsterAttacks();
//         },
//         heal: function () {
//             if (this.playerHealth <= 90) {
//                 this.playerHealth += 10;
//             } else {
//                 this.playerHealth = 100;
//             }
//             this.turns.unshift({
//                 isPlayer: true,
//                 text: 'Player heals for 10'
//             });
//             this.monsterAttacks();
//         },
//         giveUp: function () {
//             this.gameIsRunning = false;
//         },
//         monsterAttacks: function () {
//             var damage = this.calculateDamage(5, 12);
//             this.playerHealth -= damage;
//             this.checkWin();
//             this.turns.unshift({
//                 isPlayer: false,
//                 text: 'Monster hits Player for ' + damage
//             });
//         },
//         calculateDamage: function (min, max) {
//             return Math.max(Math.floor(Math.random() * max) + 1, min);
//         },
//         checkWin: function () {
//             if (this.monsterHealth <= 0) {
//                 if (confirm('You won! New Game?')) {
//                     this.startGame();
//                 } else {
//                     this.gameIsRunning = false;
//                 }
//                 return true;
//             } else if (this.playerHealth <= 0) {
//                 if (confirm('You lost! New Game?')) {
//                     this.startGame();
//                 } else {
//                     this.gameIsRunning = false;
//                 }
//                 return true;
//             }
//             return false;
//         }
//     }
// });
new Vue({
	el: "#app",
	data: {
		playerHealth: 100, //玩家血量
		monsterHealth: 100, //boos血量
		gameIsRunning: false, //控制开始游戏和技能
		turns: [], //日志信息
		attach: false,
	},
	methods: {
		//当开始游戏后显示技能，重置血量和清空日志信息
		startGame: function () {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		//普通攻击
		attack: function () {
			this.gongji(3, 10);
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},
		//大招
		specialAttack: function () {
			this.gongji(10, 20);
			if (this.checkWin()) {
				//是否继续执行此函数，当返回true的时候就不需要执行后面的代码了
				return;
			}
			this.monsterAttacks();
		},
		//回血
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
		//退出到开始游戏，清空日志信息
		giveUp: function () {
			this.gameIsRunning = false;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		//技能伤害
		gongji: function (min, max) {
			let damage = this.calculateDamage(min, max);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits Monster for" + damage,
			});
		},
		//boos的伤害
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
			//使用随机数生成的伤害
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		//判断是谁赢了
		checkWin: function () {
			if (this.monsterHealth <= 0) {
				if (this.monsterHealth < 0) {
					//当boos血量为负数时，变为0
					this.monsterHealth = 0;
					//弹出对话框点击确认调用startGame()，点击取消直接开始战斗
					if (confirm("Monster, You won! New Game!")) {
						this.startGame();
					} else {
						this.gameIsRunning = false;
					}
					return true;
				}
			} else if (this.playerHealth <= 0) {
				if (this.playerHealth < 0) {
					//当玩家血量为负数时，变为0
					this.playerHealth = 0;
					if (confirm("Player, You lost! New Game!")) {
						this.startGame();
					} else {
						this.gameIsRunning = false;
					}
					return true;
				}
			}
			return false;
		},
	},
});