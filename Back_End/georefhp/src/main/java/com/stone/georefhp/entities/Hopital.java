package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Vector;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hopital implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int idHopital;

	public String nom;

	public Integer email;

	public String abriviation;

	public Double longitude;

	public Double latitude;

	public String adresse;

	public Integer codePostale;

	public String telephone;

	public String siteWeb;

	public String fax;

@OneToMany(mappedBy = "hopital")
	public Collection<Service> Services;
@ManyToOne(cascade = CascadeType.ALL)
	public ville ville;
	@OneToMany(mappedBy = "hopital")
	public Collection<Departement> departements;
	@ManyToOne(cascade = CascadeType.ALL)
	public Categorie categorie;

}