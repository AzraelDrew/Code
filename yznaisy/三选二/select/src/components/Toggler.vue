<!--
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 -->

<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-03 16:43:35
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-03 21:53:07
 * @FilePath     : \Code\yznaisy\三选二\select\src\components\Toggler.vue
--> 

<template>
  <div class="toggle" :style="{...buttonSizeStyles}">
    <label>
      <input type="checkbox" :checked="checked" @input="updateHandler" />
      <span></span>
    </label>
    <strong>
      <slot />
    </strong>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      //控制开关大小
      default: 1
    },
    checked: {
      //开关是否被打开
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //开关初始大小
      buttonWidth: 50,
      buttonHeight: 30,
      toggleDiameter: 26,
      toggleWider: 34
    };
  },
  computed: {
    buttonSizeStyles() {
      return {
        "--button-width": this.buttonWidth * this.size + "px",
        "--button-height": this.buttonHeight * this.size + "px",
        "--toggle-diameter": this.toggleDiameter * this.size + "px",
        "--toggle-wider": this.toggleWider * this.size + "px"
      };
    }
  },
  methods: {
    updateHandler(e) {
      //定义updated事件
      this.$emit("updated", e.target.checked);
    }
  }
};
</script>
<style scoped>
.toggle {
  --button-width: 500px;
  --button-height: 295px;
  --toggle-diameter: 255px;
  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  --toggle-shadow-offset: 10px;
  --toggle-wider: 333px;
  --color-grey: #e9e9e9;
  --color-dark-grey: #39393d;
  --color-green: #30d158;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

body span {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc((var(--button-width)) / 2);
  position: relative;
  transition: 0.3s all ease-in-out;
}

body span::after {
  content: " ";
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc((var(--toggle-diameter)) / 2);
  position: absolute;
  left: 0;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-in-out;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked + span {
  background-color: var(--color-green);
}

input[type="checkbox"]:checked + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)
    )
  );
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

input[type="checkbox"]:active + span::after {
  width: var(--toggle-wider);
}

input[type="checkbox"]:checked:active + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)
    )
  );
}
.toggle {
  display: inline-flex;
  flex-direction: row;
}
.toggle strong {
  line-height: var(--button-height);
  font-size: var(--toggle-diameter);
  margin-left: calc(var(--toggle-diameter) / 4);
}
</style>