import type { Ref } from 'vue';

export interface AxiosResponseType {
	data: any;
	loading: Ref<boolean>;
	error: Ref<Error | null>;
	fetch: () => void;
}

export interface UserType {
	id: number;
	name: string;
	email: string;
	token: string;
	role: string;
}

export interface CountryType {
	id: number;
	name: string;
	created_at: string;
	updated_at: string;
}

export interface CityType {
	id: number;
	country_id: number;
	name: string;
	created_at: string;
	updated_at: string;
}

export interface MusicTypeType {
	id: number;
	name: string;
	created_at: string;
	updated_at: string;
}

export interface ClubType {
	id: number;
	city_id: number;
	admin_id: number;
	name: string;
	created_at: string;
	updated_at: string;
	musicTypes: MusicTypeType[];
}

