import * as serviceioFields from './serviceio_fields/index.js';

const classes = Object.values(serviceioFields);

const SERVICE_IO_MAP = classes.reduce((map, cls) => {
  const instance = new cls();
  if (typeof instance === 'object' && instance !== null && !Array.isArray(instance)){
    map[instance.service] = instance;
    return map;
  }
  
}, {});

export default {SERVICE_IO_MAP};