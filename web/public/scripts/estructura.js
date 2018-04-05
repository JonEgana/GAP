data = [
	{"id":"p0", "parent":"#","text": "0. Atala - Aurkezpena","state":{opened : true}},
	{"type":"file", "id":"ppt", "parent":"p0","text":"Aurkezpena", "a_attr":{"href":"docs/EvDiscover.pdf"}},
	{"type":"file", "id":"ppt2", "parent":"p0","text":"DEMO", "a_attr":{"href":"docs/EvDiscoverDEMO.mp4"}},
  { "id" : "p1",  "parent" : "#", "text" : "1. Atala - Bezeroarentzako Aurkezpena","state":{opened : true}},
  { "id" : "memoria", "parent" : "p1", "text" : "Memoria", "a_attr" : {"href":"docs/Memoria.pdf"}},
  { "id" : "eranskinak", "parent" : "p1", "text" : "Eranskinak: Konponbidearen xehetasun teknikoak" },


  //ANALISIS Y DISEÑO
  { "type":"folder", "id" : "ad1", "parent" : "eranskinak", "text" : "Sistemaren azterketa eta diseinua" },

  //ANALISIS
  { "type":"folder", "id" : "ana", "parent" : "ad1", "text" : "Azterketa" },
    { "type":"file", "id" : "analisis0", "parent" : "ana", "text" : "Ereduaren azterketa v0.1", "a_attr" : {"href":"docs/Requisitos/Modelos iniciales/Modelo Análisis v0.1/index.html", "target":"_blank"}  },

  //DISEÑO
  { "type":"folder", "id" : "dis", "parent" : "ad1", "text" : "Diseinua" },
{ "type":"file", "id" : "cuaderno", "parent" : "dis", "text" : "Arkitektura koadernoa" ,"a_attr" : {"href":"docs/Arquitectura/Cuaderno de arquitectura.pdf"}},
{ "type":"file", "id" : "datosBizagi", "parent" : "dis", "text" : "Bizagi datu-eredua","a_attr" : {"href":"docs/Desarrollo/Diseño/datosBizagi.pdf"}},
{ "type":"file", "id" : "proceso", "parent" : "dis", "text" : "Prozesuaren diseinua","a_attr" : {"href":"docs/Desarrollo/Diseño/Modelo de proceso/index.html", "target":"_blank"}},
{ "type":"file", "id" : "disenomod", "parent" : "dis", "text" : "Diseinuaren eredua" ,"a_attr" : {"href":"docs/Desarrollo/Diseño/Modelo de diseño/index.html", "target":"_blank"}},

{ "type": "folder","id": "proto","parent": "ad1", "text": "Prototipoa"},
{ "type":"folder", "id" : "imp", "parent":"proto", "text":"Inplementazioa"},
{ "type":"file", "id" : "apiim", "parent" : "imp", "text" : "EvDiscover-Forms+API" ,"a_attr" : {"href":"docs/Desarrollo/EvDiscover-Forms+API.zip"}},

{ "type":"folder", "id" : "test", "parent" : "proto", "text" : "Test" },
{ "type":"file", "id" : "ctest", "parent" : "test", "text" : "Proba kasuak" ,"a_attr" : {"href":"docs/Test/Casos de test.pdf"}},
{ "type":"file", "id" : "stest", "parent" : "test", "text" : "Test script" ,"a_attr" : {"href":"docs/Test/Test Script.pdf"}},
{ "type":"file", "id" : "ltest", "parent" : "test", "text" : "Test log" ,"a_attr" : {"href":"docs/Test/Test logs.pdf"}},


  { "type":"folder", "id" : "ete", "parent" : "eranskinak", "text" : "Tamaina eta ahaleginen estimazioa" ,"a_attr" : {"href":"working.html"} },
  { "type":"folder", "id" : "eje", "parent" : "eranskinak", "text" : "Proiektuaren exekuzioaren kudeaketarako planak","a_attr" : {"href":"working.html"}},
  { "type":"folder", "id" : "segu", "parent" : "eranskinak", "text" : "Segurtasuna","a_attr" : {"href":"working.html"} },







  { "type":"folder", "id" : "requi", "parent" : "p1", "text" : "Sistemaren eskakizunak" },

    //Requisitos
    { "type":"file", "id" : "glosa", "parent" : "requi", "text" : "Glosario","a_attr" : {"href":"docs/Requisitos/Glosario.pdf"}},
    { "type":"file", "id" : "soporte", "parent" : "requi", "text" : "Soporte de especificación de requisitos","a_attr" : {"href":"docs/Requisitos/Soporte_de_especificacion_de_Requisitos.pdf"}},
    { "type":"file", "id" : "casosuso", "parent" : "requi", "text" : "Erabilpen kasuak","a_attr" : {"href":"docs/Requisitos/Casos de uso.pdf"}},
    { "type":"folder", "id" : "modelosr", "parent" : "requi", "text" : "Modelos de captura de Requisitos" },
    { "type":"file", "id" : "casosuso0", "parent" : "modelosr", "text" : "Erabilpen kasuen eredua v0.1" , "a_attr" : {"href":"docs/Requisitos/Modelos iniciales/Modelo Casos de uso v0.1/index.html", "target":"_blank"} },
    { "type":"file","id" : "casosuso1", "parent" : "modelosr", "text" : "Erabilpen kasuen eredua v1.0" , "a_attr" : {"href":"docs/Requisitos/Modelo de casos de uso v1.0/index.html", "target":"_blank"} },
    { "type":"file", "id" : "vision", "parent" : "requi", "text" : "Ikuspegia" ,"a_attr" : {"href":"docs/Requisitos/Visión.pdf"} },




  { "type":"folder", "id" : "presu", "parent" : "p1", "text" : "Aurrekontua","a_attr" : {"href":"docs/Otros/Presupuesto.pdf"} },
  { "type":"folder", "id" : "propi", "parent" : "p1", "text" : "Estudios con entidad propia","a_attr" : {"href":"working.html"} },





  { "id" : "gestion",  "parent" : "#", "text" : "2.Atala - Proiektuaren elaborazioa","state":{opened : true}},

  { "type":"file", "id" : "actas", "parent" : "gestion", "text" : "Aktak" , "a_attr" : {"href":"docs/Gestion/Actas.pdf"}},
  //GESTION
  { "type":"file", "id" : "planpro", "parent" : "gestion", "text" : "Plan del proyecto" , "a_attr" : {"href":"docs/Gestion/Plan_de_proyecto.pdf"}},
  { "type":"folder", "id" : "planit", "parent" : "gestion", "text" : "Planes de iteración" },
  { "type":"file", "id" : "planit1", "parent" : "planit", "text" : "Plan de iteración 1" , "a_attr" : {"href":"docs/Gestion/iteracion1.pdf"}},
  { "type":"file", "id" : "planit2", "parent" : "planit", "text" : "Plan de iteración 2" , "a_attr" : {"href":"docs/Gestion/iteracion2.pdf"}},
  { "type":"file", "id" : "planit3", "parent" : "planit", "text" : "Plan de iteración 3" , "a_attr" : {"href":"docs/Gestion/iteracion3.pdf"}},
  { "type":"file", "id" : "planit4", "parent" : "planit", "text" : "Plan de iteración 4" , "a_attr" : {"href":"docs/Gestion/iteracion4.pdf"}},
  { "type":"file", "id" : "planit5", "parent" : "planit", "text" : "Plan de iteración 5" , "a_attr" : {"href":"docs/Gestion/iteracion5.pdf"}},
  { "type":"file", "id" : "planit6", "parent" : "planit", "text" : "Plan de iteración 6" , "a_attr" : {"href":"docs/Gestion/iteracion6.pdf"}},
  { "type":"file",  "id" : "listaelem", "parent" : "gestion", "text" : "Lista de elementos de trabajo" , "a_attr" : {"href":"docs/Gestion/Lista_de_elementos_de_trabajo.pdf"}},
  { "type":"file", "id" : "listr", "parent" : "gestion", "text" : "Lista de riesgos" , "a_attr" : {"href":"docs/Gestion/Lista_de_riesgos.pdf"}},

];
