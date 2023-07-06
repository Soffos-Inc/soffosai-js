const serviceioFields = require('./serviceio_fields');

const classes = Object.values(serviceioFields);

const SERVICE_IO_MAP = classes.reduce((map, cls) => {
  map[cls.service] = cls;
  return map;
}, {});

module.exports = SERVICE_IO_MAP;