import { Contact } from "./Contact";


export class Utilisateur {

  id?: number;

  nom?: string;
  prenom?: string;

  email?: string;
  motDePasse?: string;

  login?: string;
  contacts?: Contact[];
}
