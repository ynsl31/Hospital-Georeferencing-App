import { Categorie } from "./categorie";
import { Departement } from "./Departement";
import { Service } from "./Service";

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
    ville:        null;
    departements: Departement[];
    categorie:    Categorie;
    services:     Service[];
}
