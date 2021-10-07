class Subject {
    constructor() {
        this.observers = [];
        this.state = '';
    }

    attach(observer){
        this.observers.push(observer)
    }

    setState(state){
        this.state = state;
        this.observers.forEach( item => {
            item.update(state);
        })
    }
}

class Observer{
    constructor(name) {
        this.name = name;
    }
    update(state){
        console.log(this.name + ' get state :' + state);
    }
}

const observer1 = new Observer('name1');
const observer2 = new Observer('name2');

const subject = new Subject();
subject.attach(observer1);
subject.attach(observer2);

subject.setState('new state');