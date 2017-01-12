import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
    constructor() {
        super();
        this.user = {};
    }

    fetchUser(userId)
    {
        this.user = {
            name: "Roemer",
            email: "roemer.bakker@hva.nl"
        };

        this.emit("change");
    }

    get() {
        return this.user;
    }

    set(user) {
        this.user = user;
    }

    login(id) {
        fetch("http://localhost:8080/user/"+id).then((response) => {
            if (response.status !== 200) {
                console.log('Could not fetch user with id ' + id + ' status: ' + response.status);
                return;
            }

            response.json().then((data) => {
                this.set(data);
                this.emit('change');
            });
        });
    }

    handleActions(action) {
        switch(action.type) {
            case 'USER_LOGIN':
                this.login(action.id);
                break;
        }
    }
}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;