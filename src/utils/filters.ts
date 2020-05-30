/**
 * Convert object to string.
 *
 * @param object 
 */
export function json(object: object): string {
	return JSON.stringify(object, null, '\t');
}