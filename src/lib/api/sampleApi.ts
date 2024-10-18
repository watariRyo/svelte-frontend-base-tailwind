import { client } from '$lib/helpers/api.client';
import type { SampleResponse } from '$models';

const fetchSample = async () => {
	return await client<SampleResponse>('http://localhost:4000/posts/1');
};

export const sampleApi = { fetchSample };
