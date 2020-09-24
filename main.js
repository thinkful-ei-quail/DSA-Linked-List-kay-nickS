const { LinkedList, display } = require('./list');
const _Node = require('./node');

function main() {
    const SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    // SLL.remove('Apollo');
    // SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('kat', 3);
    SLL.remove('Apollo');
    SLL.remove('Tauhida');
    // console.log(SLL)
    display(SLL);
    console.log(display(SLL));
    return SLL;

}

main();
