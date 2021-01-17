import { StringifyOptions } from "querystring";
import { Hopital } from "./Hopital";

export class Categorie {
    id:       number;
    nom:      string;
    hopitals: Hopital[];
}
