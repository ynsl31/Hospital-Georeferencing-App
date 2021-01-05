package com.stone.georefhp.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;



@Entity
@Data
@DiscriminatorValue("Medecin")
public class Medecin extends Utilisateur {

	private static final long serialVersionUID = 1L;
	
	@Column(unique = true)
	private String matricule;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Service service;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Departement departement;
	
	@OneToMany(mappedBy = "medecin")
	private List<Consultation> consultations;

}