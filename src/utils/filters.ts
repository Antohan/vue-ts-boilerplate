/**
 * Convert object to string.
 *
 * @param object 
 */
export function json(object: Object): string {
	return JSON.stringify(object, null, '\t');
}