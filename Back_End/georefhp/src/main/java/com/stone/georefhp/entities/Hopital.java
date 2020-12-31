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
	private long id;

	private String nom;
	private String email;

	private String abriviation;
	private Double longitude;

	private Double latitude;
	private String adresse;

	private int codePostale;
	private String telephone;

	private String siteWeb;
	private String fax;

	@OneToMany(mappedBy = "hopital")
	private List<Service> Services;

	@ManyToOne(cascade = CascadeType.ALL)
	private Ville ville;
	
	@OneToMany(mappedBy = "hopital")
	private List<Departement> departements;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Categorie categorie;

}