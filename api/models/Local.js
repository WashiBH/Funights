/**
 * Local.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      required: true
    },
    nombre:{
      type:"string",
      required: true
    },
    direccion:{
      type:"string",
      required: true
    },
    longitud:{
      type:"string",
      required: true
    },
    latitud:{
      type:"string",
      required: true
    },
    estado:{
      type:"boolean",
      required: true
    },
    tipo:{
      type:"array",
      required: true
    },
    horario:{
      type:"string",
      required: true
    },
    fotos:{
      type:"array",
      required: true
    },
    responsable:{
      type:"string",
      required: true
    },
    descripcion:{
      type:"text",
      required: true
    },
    razon_social:{
      type:"string",
      required: true
    },
    telefono:{
      type:"string",
      required: true
    },
    likes:{
      type:"integer",
      required: true
    },
    comentarios:{
      type:"array",
      required: true
    },
    ciudad:{
      type:"string",
      required: true
    },
    pais:{
      type:"string",
      required: true
    }
  },
  connection:"mongodb",
  tableName:"local"
};

