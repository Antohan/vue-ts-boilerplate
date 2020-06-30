import { UserDto } from '@/services/dtos';
import { userMapper } from '@/services/mappers';
import { User } from '@/models';
import httpClient from './httpClient';

/**
 * Login function;
 *
 * @param payload
 */
export function login(payload: { email: string; password: string }): Promise<string> {
  return httpClient.post<{ token: string }>('/login', payload)
    .then(({ data }) => data.token);
}

/**
 * Get logged user.
 */
export function getLoggedUser(): Promise<User> {
  return httpClient.get<UserDto>('/get-user')
    .then(({ data }) => userMapper(data));
}

export default {
  login,
  getLoggedUser,
};
