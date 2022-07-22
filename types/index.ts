import type { Ref } from 'vue';

export interface AxiosResponseType {
	data: any;
	loading: Ref<boolean>;
	error: Ref<Error | null>;
	fetch: () => void;
}

export interface CountryType {
	id: number;
	name: string;
	created_at: string;
	updated_at: string;
}

export interface UserType {
	id: number;
	name: string;
	email: string;
	token: string;
	role: string;
}
