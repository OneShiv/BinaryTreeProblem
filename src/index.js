class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const node0 = new Node(50);
const nodeStart = node0;
const node11 = new Node(25);
const node12 = new Node(75);
const node21 = new Node(20);
const node22 = new Node(28);
const node23 = new Node(60);
const node24 = new Node(80);
const node31 = new Node(17);
const node32 = new Node(65);
const node33 = new Node(77);
const node34 = new Node(85);
const node41 = new Node(15);
const node42 = new Node(81);

node0.left = node11;
node0.right = node12;

node11.left = node21;
node11.right = node22;
node12.left = node23;
node12.right = node24;

node21.left = node31;
node23.right = node32;
node24.left = node33;
node24.right = node34;

node31.left = node41;
node34.left = node42;

// lets first print binary tree

function printBinaryTree(head) {
  debugger;
  if (head.left || head.right) {
    if (head.left) {
      printBinaryTree(head.left);
    }
    //console.log(head.data);
    if (head.right) {
      printBinaryTree(head.right);
    }
  } else {
    if (head) {
      // console.log(head.data);
      return;
    } else {
      return;
    }
  }
}

//printBinaryTree(node0);

let depthItr = 0;
let depthCOunt = 0;
let leftNOdeArrays = [];

function printAllLeftNodes(head, depthItr) {
  if (head === nodeStart) {
    leftNOdeArrays.push({
      ...head,
      depth: depthItr
    });
    depthItr++;
  }

  if (head.left && head.right) {
    leftNOdeArrays.push({
      ...head.left,
      depth: depthItr
    });
    depthItr++;
    printAllLeftNodes(head.left, depthItr);
    printAllLeftNodes(head.right, depthItr);
  } else if (head.left && !head.right) {
    leftNOdeArrays.push({ ...head.left, depth: depthItr });
    depthItr++;
    printAllLeftNodes(head.left, depthItr);
  } else if (!head.left && head.right) {
    printAllLeftNodes(head.right);
  }
}

printAllLeftNodes(node0, 0);
console.log(leftNOdeArrays);

let HashedArray = [];
leftNOdeArrays.forEach(leftNode => {
  if (!HashedArray[leftNode.depth]) {
    HashedArray[leftNode.depth] = leftNode;
  }
});

console.log(HashedArray);
