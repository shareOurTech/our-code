class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let n = new Node(data, null, null);
        if (this.root === null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    inOrder(node) {
        if (!(node === null)) {
            this.inOrder(node.left);
            this.log(node.show() + ' ');
            this.inOrder(node.right);
        }
    }
    preOrder(node) {
        if (!(node === null)) {
            this.log(node.show() + '');
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node) {
        if (!(node === null)) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.log(node.show() + '');
        }
    }
    log(msg) {
        console.log(msg);
    }
}
let o = new BST();

let arr = [42, 6, 4, 2, 2, 465, 555, 7, 23, 1, 2, 9, 78, 6, 9, 5, 5, 64, 6, 37, 123, 68, 4, 3, 42, 5, 45, 12, 69, 87, 96, 7, 4, 5, 2, 42, 2, 6, 84, 5]
arr.forEach((i) => {
    o.insert(i);
})
o.inOrder(o.root);