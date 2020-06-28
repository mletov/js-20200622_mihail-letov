/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
	const resObj = {};
	let keys = Object.keys(obj);	
	keys.forEach(key => {
		if (!fields.includes(key)) {
			resObj[key] = obj[key];
		}
	}); 
	return resObj;
};
