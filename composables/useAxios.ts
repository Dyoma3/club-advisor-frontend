import axios from 'axios';

interface optionsType {
	url: string;
	method?: 'get' | 'post' | 'patch' | 'put' | 'delete';
	lazy?: boolean;
}

function useAxios(options: optionsType) {
	const { url, method, lazy } = options;
	const data = ref<object | null>(null);
	const loading = ref<boolean>(false);
	const error = ref<Error | null>(null);

	function fetch() {
		loading.value = true;
		axios({ url, method })
			.then((r) => {
				data.value = r.data;
				if (error.value) error.value = null;
			})
			.catch((e) => error.value = e)
			.finally(() => loading.value = false);
	}

	if (!lazy) fetch();

	return { data, loading, error, fetch };
}

export default useAxios;
