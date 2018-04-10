//openup-eko dokumentuak : helbidea => openup/artefaktoak
//bestelako dokumentuak : helbidea => azken_dokumentuak

data = [
	{"id":"p0", "parent":"#","text": "0. Atala - Aurkezpena","state":{opened : true}},
	{"type":"file", "id":"ppt", "parent":"p0","text":"Aurkezpena", "a_attr":{"href":"azken_dokumentuak/aurkezpena.pdf"}},
	{"type":"file", "id":"ppt2", "parent":"p0","text":"DEMO", "a_attr":{"href":"azken_dokumentuak/DEMO.mp4"}},
  { "id" : "p1",  "parent" : "#", "text" : "1. Atala - Bezeroarentzako Aurkezpena","state":{opened : true}},
  { "id" : "memoria", "parent" : "p1", "text" : "Memoria", "a_attr" : {"href":"azken_dokumentuak/Memoria.pdf"}},
  { "id" : "eranskinak", "parent" : "p1", "text" : "Eranskinak: Konponbidearen xehetasun teknikoak" },


  //ANALISIS Y DISEÑO
  { "type":"folder", "id" : "ad1", "parent" : "eranskinak", "text" : "Sistemaren azterketa eta diseinua" },

  //ANALISIS
  { "type":"folder", "id" : "ana", "parent" : "ad1", "text" : "Azterketa" },
    { "type":"file", "id" : "analisis0", "parent" : "ana", "text" : "Ereduaren azterketa v0.1", "a_attr" : {"href":"azken_dokumentuak/Eskakizunak/Modelos iniciales/Modelo Análisis v0.1/index.html", "target":"_blank"}  },

  //DISEÑO
  { "type":"folder", "id" : "dis", "parent" : "ad1", "text" : "Diseinua" },
{ "type":"file", "id" : "cuaderno", "parent" : "dis", "text" : "Arkitektura koadernoa" ,"a_attr" : {"href":"azken_dokumentuak/Arkitektura/Cuaderno de arquitectura.pdf"}},
{ "type":"file", "id" : "datosBizagi", "parent" : "dis", "text" : "Bizagi datu-eredua","a_attr" : {"href":"azken_dokumentuak/Garapena/Diseño/datosBizagi.pdf"}},
{ "type":"file", "id" : "proceso", "parent" : "dis", "text" : "Prozesuaren diseinua","a_attr" : {"href":"azken_dokumentuak/Garapena/Diseño/Modelo de proceso/index.html", "target":"_blank"}},
{ "type":"file", "id" : "disenomod", "parent" : "dis", "text" : "Diseinuaren eredua" ,"a_attr" : {"href":"azken_dokumentuak/Garapena/Diseño/Modelo de diseño/index.html", "target":"_blank"}},

{ "type": "folder","id": "proto","parent": "ad1", "text": "Prototipoa"},
{ "type":"folder", "id" : "imp", "parent":"proto", "text":"Inplementazioa"},
{ "type":"file", "id" : "apiim", "parent" : "imp", "text" : "EvDiscover-Forms+API" ,"a_attr" : {"href":"azken_dokumentuak/Garaepana/EvDiscover-Forms+API.zip"}},

{ "type":"folder", "id" : "test", "parent" : "proto", "text" : "Test" },
{ "type":"file", "id" : "ctest", "parent" : "test", "text" : "Proba kasuak" ,"a_attr" : {"href":"azken_dokumentuak/Test/Casos de test.pdf"}},
{ "type":"file", "id" : "stest", "parent" : "test", "text" : "Test script" ,"a_attr" : {"href":"azken_dokumentuak/Test/Test Script.pdf"}},
{ "type":"file", "id" : "ltest", "parent" : "test", "text" : "Test log" ,"a_attr" : {"href":"azken_dokumentuak/Test/Test logs.pdf"}},


  { "type":"folder", "id" : "ete", "parent" : "eranskinak", "text" : "Tamaina eta ahaleginen estimazioa" ,"a_attr" : {"href":"working.html"} },
  { "type":"folder", "id" : "eje", "parent" : "eranskinak", "text" : "Proiektuaren exekuzioaren kudeaketarako planak","a_attr" : {"href":"working.html"}},
  { "type":"folder", "id" : "segu", "parent" : "eranskinak", "text" : "Segurtasuna","a_attr" : {"href":"working.html"} },


  { "type":"folder", "id" : "requi", "parent" : "p1", "text" : "Sistemaren eskakizunak" },

    //Requisitos
    { "type":"file", "id" : "glosa", "parent" : "requi", "text" : "Glosario","a_attr" : {"href":"azken_dokumentuak/Eskakizunak/Glosario.pdf"}},
    { "type":"file", "id" : "soporte", "parent" : "requi", "text" : "Soporte de especificación de requisitos","a_attr" : {"href":"azken_dokumentuak/Eskakizunak/Soporte_de_especificacion_de_Requisitos.pdf"}},
    { "type":"file", "id" : "casosuso", "parent" : "requi", "text" : "Erabilpen kasuak","a_attr" : {"href":"azken_dokumentuak/Eskakizunak/Casos de uso.pdf"}},
    { "type":"folder", "id" : "modelosr", "parent" : "requi", "text" : "Modelos de captura de Requisitos" },
    { "type":"file", "id" : "casosuso0", "parent" : "modelosr", "text" : "Erabilpen kasuen eredua v0.1" , "a_attr" : {"href":"azken_dokumentuak/Eskakizunak/Modelos iniciales/Modelo Casos de uso v0.1/index.html", "target":"_blank"} },
    { "type":"file","id" : "casosuso1", "parent" : "modelosr", "text" : "Erabilpen kasuen eredua v1.0" , "a_attr" : {"href":"azken_dokumentuak/Eskakizunak/Modelo de casos de uso v1.0/index.html", "target":"_blank"} },
    { "type":"file", "id" : "vision", "parent" : "requi", "text" : "Ikuspegia" ,"a_attr" : {"href":"azken_dokumentuak/Eskakizunak/Visión.pdf"} },




  { "type":"folder", "id" : "presu", "parent" : "p1", "text" : "Aurrekontua","a_attr" : {"href":"azken_dokumentuak/Bestelakoak/Presupuesto.pdf"} },
  { "type":"folder", "id" : "propi", "parent" : "p1", "text" : "Estudios con entidad propia","a_attr" : {"href":"working.html"} },





  { "id" : "gestion",  "parent" : "#", "text" : "2.Atala - Proiektuaren elaborazioa","state":{opened : true}},

  { "type":"file", "id" : "actas", "parent" : "gestion", "text" : "Aktak" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/Aktak.pdf"}},
  //GESTION
  { "type":"file", "id" : "planpro", "parent" : "gestion", "text" : "Proiektu Plana" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/Plan_de_proyecto.pdf"}},
  { "type":"folder", "id" : "planit", "parent" : "gestion", "text" : "Planes de iteración" },
  { "type":"file", "id" : "planit1", "parent" : "planit", "text" : "Iterazio plana 1" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/1_iterazio_plana.pdf"}},
  { "type":"file", "id" : "planit2", "parent" : "planit", "text" : "Iterazio plana 2" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/2_iterazio_plana.pdf"}},
  { "type":"file", "id" : "planit3", "parent" : "planit", "text" : "Iterazio plana 3" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/3_iterazio_plana.pdf"}},
  { "type":"file", "id" : "planit4", "parent" : "planit", "text" : "Iterazio plana 4" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/4_iterazio_plana.pdf"}},
  { "type":"file", "id" : "planit5", "parent" : "planit", "text" : "Iterazio plana 5" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/5_iterazio_plana.pdf"}},
  { "type":"file", "id" : "planit6", "parent" : "planit", "text" : "Iterazio plana 6" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/6_iterazio_plana.pdf"}},
  { "type":"file",  "id" : "listaelem", "parent" : "gestion", "text" : "Lista de elementos de trabajo" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/Lista_de_elementos_de_trabajo.pdf"}},
  { "type":"file", "id" : "listr", "parent" : "gestion", "text" : "Lista de riesgos" , "a_attr" : {"href":"azken_dokumentuak/Kudeaketa/Lista_de_riesgos.pdf"}},

];
