import { defineStore } from 'pinia';

export const useUser = defineStore('user', {
	state: () => ({
		name: '',
		email: '',
		token: '',
		isAdmin: false,
		loggedIn: false,
	})
});
