
const BASE = 'http://localhost';
const PATH = 'api';

// Ports
const PORT_APP = '9000';


export const API_URLS = {

  // UTILISATEUR
  UTILISATEUR_API: BASE + ':' + PORT_APP + '/' + PATH + '/utilisateurs',

  // DEPARTEMENT
  DEPARTEMENT_API: BASE + ':' + PORT_APP + '/' + PATH + '/departements',

  // MEDECIN
  MEDECIN_API: BASE + ':' + PORT_APP + '/' + PATH + '/medecins',

  // PATIENT
  PATIENT_API: BASE + ':' + PORT_APP + '/' + PATH + '/patients',

  // NATURESERVICE
  NATURESERVICE_API: BASE + ':' + PORT_APP + '/' + PATH + '/nature-services',

  // SERVICE
  SERVICE_API: BASE + ':' + PORT_APP + '/' + PATH + '/services',

};
