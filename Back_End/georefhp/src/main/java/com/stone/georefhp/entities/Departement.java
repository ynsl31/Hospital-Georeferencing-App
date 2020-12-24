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
	public int id;

	public String nom;
	
	@OneToMany(mappedBy = "departement")
	public List<Medecin> lesMedecins;
	
	@ManyToOne(cascade = CascadeType.ALL)
	public Hopital hopital;
	
	@OneToMany(mappedBy = "departement")
	public List<Service> services;

}