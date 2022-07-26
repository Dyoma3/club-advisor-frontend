import axios, { AxiosRequestConfig } from 'axios';

interface OptionsType extends AxiosRequestConfig {
	lazy?: boolean;
}

function useAxios<Type>(options: OptionsType) {
	const data = ref<Type | null>(null);
	const loading = ref<boolean>(false);
	const error = ref<Error | null>(null);

	async function fetch() {
		loading.value = true;
		try {
			const r = await axios(options);
			data.value = r.data;
			if (error.value) error.value = null;
		} catch (e) {
			error.value = e;
		} finally {
			loading.value = false;
		}
	}

	if (!options.lazy) fetch();

	return { data, loading, error, fetch };
}

export default useAxios;
