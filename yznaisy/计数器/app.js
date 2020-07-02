/*
 * @Author       : yznaisy
 * @Date         : 2020-07-02 18:50:27
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-02 20:09:45
 * @FilePath     : \Code\yznaisy\计数器\app.js
 */
new Vue({
    el: "#app",
    data() {
        return {
            count: 10,
            countBefore: 9,
            countAfter: 11,
            isBefore: false,
            isAfter: false,
        }
    },
    computed: {
        isAnimating() {
            return this.isBefore || this.isAfter //都会返回true
        }
    },
    methods: {
        subtract() {
            this.isBefore = true;
            setTimeout(() => {
                this.count--;
                this.countBefore--;
                this.countAfter++;
                this.isBefore = false
            }, 200)
        },
        add() {
            this.isAfter = true;
            setTimeout(() => {
                this.count++;
                this.countBefore--;
                this.countAfter++;
                this.isAfter = false
            }, 200)
        }
    },
})