
const BASE = 'http://localhost';
const PATH = 'api';

// Ports
const PORT_APP = '9000';


export const API_URLS = {

  // UTILISATEUR
  UTILISATEUR_API: BASE + ':' + PORT_APP + '/' + PATH + '/utilisateurs',

  // MEDECIN
  MEDECIN_API: BASE + ':' + PORT_APP + '/' + PATH + '/medecins',

  // PATIENT
  PATIENT_API: BASE + ':' + PORT_APP + '/' + PATH + '/patients',

  // NATURESERVICE
  NATURESERVICE_API: BASE + ':' + PORT_APP + '/' + PATH + '/nature-services',

  // SERVICE
  SERVICE_API: BASE + ':' + PORT_APP + '/' + PATH + '/hopitaux',

  //Hopital
  HOPITAL_API: BASE + ':' + PORT_APP + '/' + PATH + '/hopitaux',

  //Categorie
  CATEGORIE_API: BASE + ':' + PORT_APP + '/' + PATH + '/categories',

  //Ville
  VILLE_API: BASE + ':' + PORT_APP + '/' + PATH + '/villes',

   //Regions
   REGION_API: BASE + ':' + PORT_APP + '/' + PATH + '/regions',

   //RENDEZ-VOUS
   RD_API: BASE + ':' + PORT_APP + '/' + PATH + '/rendez-vous',

};
