import axios, { AxiosRequestConfig } from 'axios';

interface OptionsType extends AxiosRequestConfig {
	lazy?: boolean;
}
interface DataType {
	[key: string]: any;
}

function useAxios(options: OptionsType) {
	const data = ref<any | null>(null);
	const loading = ref<boolean>(false);
	const error = ref<Error | null>(null);

	function fetch() {
		loading.value = true;
		axios(options)
			.then((r) => {
				data.value = r.data;
				if (error.value) error.value = null;
			})
			.catch((e) => error.value = e)
			.finally(() => loading.value = false);
	}

	if (!options.lazy) fetch();

	return { data, loading, error, fetch };
}

export default useAxios;
