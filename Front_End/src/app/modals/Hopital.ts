import { Categorie } from "./categorie";
import { Departement } from "./Departement";
import { Service } from "./Service";
import { Ville } from "./Ville";

export class Hopital {
    id:           number;
    nom:          string;
    email:        string;
    abriviation:  string;
    longitude:    number;
    latitude:     number;
    adresse:      string;
    codePostale:  number;
    telephone:    string;
    siteWeb:      string;
    fax:          string;
    ville?:        Ville;
    departements?: Departement[];
    categorie?:    Categorie;
    services?:     Service[];
}
