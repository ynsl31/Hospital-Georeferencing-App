import { Utilisateur } from "./Utilisateur";
import { Departement } from "./Departement";
import { Service } from "./Service";


export class Medecin extends Utilisateur {

  matricule?: string;
  service?: Service;

  departement?: Departement;
}
