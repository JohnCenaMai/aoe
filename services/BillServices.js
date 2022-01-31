import mappingModel from '../config/MappingModel.js';

async function mapping(billData, agenncyCode) {
	let result = await getKey(agenncyCode);
	console.log('result: ', result);
	const body = {};
	Object.keys(result.config).forEach(key => {
		console.log(key);
		body[key] = "1";
	})
	return result;
}

async function getKey(agencyCode1) {
	let result = await mappingModel.findOne();
	return result;
}

export { mapping }