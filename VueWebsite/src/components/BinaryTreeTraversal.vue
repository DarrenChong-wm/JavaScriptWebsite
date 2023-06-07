<script>
  import Vue from 'vue'
  import Node from './Node.vue'

  class BTNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    search(data, node = this.root) {
      let curNode = node;
      while (curNode) {
        if (data === curNode.data) {
          return curNode;
        }
        if (data < curNode.data) {
          curNode = curNode.left;
        } else {
          curNode = curNode.right;
        }
      }
      return null;
    }

    insert(data) {
      if (!this.root) {
        this.root = new BTNode(data);
        return;
      }

      let curNode = this.root;
      while (curNode) {
        if (data < curNode.data) {
          if (curNode.left) {
            curNode = curNode.left;
          } else {
            curNode.left = new BTNode(data);
            break;
          }
        } else if (data > curNode.data) {
          if (curNode.right) {
            curNode = curNode.right;
          } else {
            curNode.right = new BTNode(data);
            break;
          }
        } else {
          break;
        }
      }
    }

    findMin(node = this.root) {
      let currentNode = node;
      while (currentNode && currentNode.left) {
        currentNode = currentNode.left;
      }
      return currentNode;
    }

    findMax(node = this.root) {
      let currentNode = node;
      while (currentNode && currentNode.right) {
        currentNode = currentNode.right;
      }
      return currentNode;
    }

    remove(data) {
      const removeNode = (data, node) => {
        const curNode = node;
        // 1
        if (!curNode) {
          return false;
        }
        // 2
        if (data < curNode.data) {
          curNode.left = removeNode(data, curNode.left);
          // 3
        } else if (data > curNode.data) {
          curNode.right = removeNode(data, curNode.right);
          // 4
        } else {
          // 4.1
          if (!curNode.left && !curNode.right) {
            return null;
          }
          // 4.2
          if (!curNode.left) {
            return curNode.right;
          }
          if (!curNode.right) {
            return curNode.left;
          }
          // 4.3
          const aux = this.findMin(curNode.right);
          curNode.data = aux.data;
          curNode.right = removeNode(aux.data, curNode.right);
        }
        return curNode;
      };
      this.root = removeNode(data, this.root);
    }

    preOrderTraversal() {
      const temp = [];
      preHelper(this.root);
      return temp;

      function preHelper(node) {
        if (node) {
          temp.push(node.data);
          preHelper(node.left);
          preHelper(node.right);
        }
      }
    }

    inOrderTraversal() {
      const temp = [];
      inHelper(this.root);
      return temp;

      function inHelper(node) {
        if (node) {
          inHelper(node.left);
          temp.push(node.data);
          inHelper(node.right);
        }
      }
    }

    postOrderTraversal() {
      const temp = [];
      postHelper(this.root);
      return temp;

      function postHelper(node) {
        if (node) {
          postHelper(node.left);
          postHelper(node.right);
          temp.push(node.data);
        }
      }
    }

    levelorderTraversal() {
      const temp = [];
      const queue = [];

      if (this.root) {
        queue.push(this.root);
      }

      while (queue.length) {
        const subTemp = [];
        const len = queue.length;

        for (let i = 0; i < len; i += 1) {
          const node = queue.shift();
          subTemp.push(node.data);
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }

        temp.push(subTemp);
      }
      return temp;
    }

    balanceBST() {
      const nodeList = this.inOrderTraversal();
      const { length } = nodeList;
      if (length < 3) {
        return this.root;
      }

      this.root = rebuild(0, length - 1);

      function rebuild(start, end) {
        if (start > end) {
          return null;
        }
        const mid = Math.floor((start + end) / 2);
        const node = new BTNode(nodeList[mid]);
        node.left = rebuild(start, mid - 1);
        node.right = rebuild(mid + 1, end);
        return node;
      }
    }
  }


  export default {
    components: {Node},
    data() {
      return {
        tree: new BinarySearchTree(),
        data: 0,
        traversal: "inOrder"
      }
    },
    created() {
      this.insert(50);
      this.insert(75);
      this.insert(25);
    },
    methods: {
      insert(data) {
        this.tree.insert(data);
      },
      remove(data) {
        this.tree.remove(data);
      },
      balanceBST() {
        this.tree.balanceBST();
      }
    },
    computed: {
      output() {
        if (this.traversal === "preOrder") {
          return this.tree.preOrderTraversal();
        }
        if (this.traversal === "inOrder") {
          return this.tree.inOrderTraversal();
        }
        if (this.traversal === "postOrder") {
          return this.tree.postOrderTraversal();
        }
        if (this.traversal === "levelorder") {
          return this.tree.levelorderTraversal();
        }
      }
    }
  }
</script>

<template>
    <h1>Binary Search Tree</h1>
  <div class="binary-tree-container">
    <ul class="binary-tree">
      <Node :node="tree.root" class="root"></Node>
    </ul>
  </div>
  <div class="form">
    <input type="number" v-model.number="data">
    <button @click="insert(data)">Insert</button>
    <button @click="remove(data)">Remove</button>
    <button @click="balanceBST()">Balance</button>
    <button @click="tree.root = null">Reset</button>
  </div>
  <div class="traversal">
    <div class="radios">
      <input type="radio" class="radio" id="inOrder" value="inOrder" v-model="traversal">
      <label for="inOrder" >In Order</label>
      <input type="radio" class="radio" id="preOrder" value="preOrder" v-model="traversal">
      <label for="preOrder" >Pre Order</label>
      <input type="radio" class="radio" id="postOrder" value="postOrder" v-model="traversal">
      <label for="postOrder" >Post Order</label>
      <input type="radio" class="radio" id="levelorder" value="levelorder" v-model="traversal">
      <label for="levelorder" >Level Order</label>
    </div>
    <p>Traversal：{{ output }}</p>
  </div>
</template>

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
      width: 50px;
      height: 50px;
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
			bottom: 100%;
			left: 50%;
			width: $bd-size;
			height: 12px;
			background-color: rgba($bd-color, 1);
		}
	}
}

.binary-tree-container {
  padding: 70px 0;
  display: flex;
  justify-content: center;
}

h1 {
  text-align: center;
  right: 0;
  padding: 15px;
  font-size: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  margin-top:200px;
  padding: 10px;

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 5px;
    font-size: 1.2rem;
  }
  button {
    width: 200px;
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
  position:absolute;
  font-size: 2rem;
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
  
  + label {
    padding: 10px 60px;
    margin-right: 10px;
    border: none;
    outline: none;
    border-radius: 40px;
    color: $node-color;
    background: $node-bg;
    box-shadow: 
      -2px -2px 10px white,
       2px  2px 5px $node-shadow;
    font-size: 2rem;
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