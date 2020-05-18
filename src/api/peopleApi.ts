import axios from 'axios';

import PeopleDto from '@/services/dtos/PeopleDto';
import People from '@/services/models/People';
import peopleMapper from '@/services/mappers/peopleMapper';

import httpClient from './httpClient';

const { CancelToken } = axios;
let cancelRequest: Function;

/**
 * Get people by ID.
 *
 * @param id People ID.
 */
function getPeopleById(id: number): Promise<People> {
	if (cancelRequest) {
		cancelRequest();
	}

	return httpClient.get<PeopleDto>(`/people/${id}/`, {
		cancelToken: new CancelToken(cancel => {
			cancelRequest = cancel;
		})
	})
		.then(({ data }) => peopleMapper(data))
		.catch(error => {
			if (axios.isCancel(error)) {
				console.log('Request canceled', error.message);
			} else {
				return error;
			}
		});
}

export default {
	getPeopleById,
};