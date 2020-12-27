package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Hopital implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;

	public String nom;
	public String email;

	public String abriviation;
	public Double longitude;

	public Double latitude;
	public String adresse;

	public int codePostale;
	public String telephone;

	public String siteWeb;
	public String fax;

	@OneToMany(mappedBy = "hopital")
	public List<Service> Services;

	@ManyToOne(cascade = CascadeType.ALL)
	public Ville ville;
	
	@OneToMany(mappedBy = "hopital")
	public List<Departement> departements;
	
	@ManyToOne(cascade = CascadeType.ALL)
	public Categorie categorie;

}