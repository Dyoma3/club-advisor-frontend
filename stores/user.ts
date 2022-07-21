import { defineStore } from 'pinia';

export const useUser = defineStore('user', {
	state: () => ({
		id: -1,
		name: '',
		email: '',
		token: '',
		isAdmin: false,
		loggedIn: false,
	})
});
