<template>
    <li v-if="node" >
      <div class="node">{{ node.data }}</div>
      <ul>
        <Node v-if="node.left" :node="node.left" class="left"></Node>
        <li v-else class="left"><div class="node is-null">{{ 'null' }}</div></li>
        <Node v-if="node.right" :node="node.right" class="right"></Node>
        <li v-else class="right"><div class="node is-null">{{ 'null' }}</div></li>
      </ul>
    </li>
</template>
 
<script lang='ts'>
import { defineComponent } from 'vue';

interface BTNode {
  data: number;
  left: BTNode | null;
  right: BTNode | null;
}

export default defineComponent({
  props: {
    node: {
      type: Object as () => BTNode,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

$bd-color: #73A1C3;
$node-bg: #e5e5e5;
$node-color: #0c2539;
$node-shadow: #BABECC;
$bd-size: 2px;

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background: $node-bg;
  font-family: 'Mukta', sans-serif;
}

.binary-tree {
  position: relative;
	padding: 8px;
  
	li {
    display: inline-block;
		position: relative;
		padding: 12px 8px;
		&.left::before,
		&.right::before {
			content: '';
			position: absolute;
			top: 0px;
			width: 50%;
			height: 12px;
			border-top: $bd-size solid $bd-color;
		}
		&.left::before {
			left: 50%;
			border-left: $bd-size solid $bd-color;
			border-radius: 8px 0 0 0;
		}
		&.right::before {
			right: 50%;
			border-right: $bd-size solid $bd-color;
			border-radius: 0 8px 0 0;
		}
		&.root {
			text-align: center;
		}
		.node {
			display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
			border-radius: 50%;
      font-size: 1rem;
      color: $node-color;
      background: $node-bg;
      box-shadow: 
        inset  2px  2px 2px $node-shadow,
        inset -2px -2px 2px white;
		}
    .is-null {
      opacity: 0.4;
    }
	}
	
	ul {
    position: relative;
		display: flex;
		margin-top: 12px;
		&::before {
			content: '';
			position: absolute;
			bottom: 100%;
			left: 50%;
			width: $bd-size;
			height: 12px;
			background-color: rgba($bd-color, 1);
		}
	}
}

.binary-tree-container {
  display: flex;
  justify-content: center;
}

h1 {
  right: 0;
  padding: 15px;
  font-size: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  
  left: 0;
  top: 0;
  padding: 10px;

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    padding: 5px;
    font-size: 1.2rem;
  }
  button {
    width: 100px;
    padding: 5px;
    margin-top: 5px;
    border: none;
    outline: none;
    border-radius: 40px;
    color: $node-color;
    background: $node-bg;
    box-shadow: 
      -2px -2px 5px white,
       2px  2px 5px $node-shadow;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.5s;
    font-family: 'Noto Sans TC', sans-serif;
    &:hover {
      box-shadow: 
        inset  1px  1px 2px $node-shadow,
        inset -1px -1px 2px white;
    }
  }
}

.traversal {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 10px;
}

.radios {
  position: relative;
  display: flex;
  margin-bottom: 10px;
}

.radio {
  left: -9999px;
  /* 隱藏框框 */
  + label {
    padding: 5px 15px;
    margin-right: 5px;
    border: none;
    outline: none;
    border-radius: 40px;
    color: $node-color;
    background: $node-bg;
    box-shadow: 
      -2px -2px 10px white,
       2px  2px 5px $node-shadow;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.5s;
    font-family: 'Noto Sans TC', sans-serif;
  }  
  &:focus + label, &:checked + label, + label:hover {
    box-shadow: 
      inset  2px  2px 2px $node-shadow,
      inset -1px -1px 2px white;
  }
}
</style>