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
public class Departement implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int idDepartement;

	public String nom;
	@OneToMany(mappedBy = "departement")
	public Collection<Medecin> lesMedecins;
	@ManyToOne(cascade = CascadeType.ALL)
	public Hopital hopital;
	@OneToMany(mappedBy = "departement")
	public Collection<Service> services;

}