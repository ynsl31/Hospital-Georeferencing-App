package com.stone.georefhp.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Vector;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@DiscriminatorValue("Medecin")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Medecin extends Utilisateur {

	private static final long serialVersionUID = 1L;

	public String matricule;
	@ManyToOne(cascade = CascadeType.ALL)
	public Service service;
	@OneToMany(mappedBy = "medecin")
	public Collection<Consultation> consultations;
	@ManyToOne(cascade = CascadeType.ALL)
	public Departement departement;

}