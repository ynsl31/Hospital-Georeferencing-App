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
public class Departement implements Serializable  {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String nom;
	
	@OneToMany(mappedBy = "departement")
	private List<Medecin> lesMedecins;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Hopital hopital;
	
	@OneToMany(mappedBy = "departement")
	private List<Service> services;

}