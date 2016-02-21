/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'user',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id : {
      type: 'integer',
      required: true,
      primaryKey: true
    },
    name : {
      type: 'string',
      required: true
    },
    phone : {
      type: 'string',
      required: false
    },
    email : {
      type: 'string',
      required: false
    },
    signature : {
      type: 'string',
      required: false
    },
    "time_create" : {
      type: 'datetime',
      required: true
    }
  } //attributes
};

