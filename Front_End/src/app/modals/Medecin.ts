import { Utilisateur } from "./Utilisateur";
import { Service } from "./Service";


export class Medecin extends Utilisateur {

  matricule?: string;
  service?: Service;

}
