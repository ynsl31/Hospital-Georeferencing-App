import { Utilisateur } from "./Utilisateur";
import { Service } from "./Service";
import { Hopital } from "./Hopital";


export class Medecin extends Utilisateur {

  matricule?: string;
  service?: Service;

  hopital?: Hopital;

}
