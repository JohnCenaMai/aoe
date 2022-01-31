import mongoose from 'mongoose';
import mappingConfigSchema from './mappingConfigSchemas.js';

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/connec';

mongoose.connect(url);

export default mongoose.model('mappingModel', mappingConfigSchema, 'mappingModels');