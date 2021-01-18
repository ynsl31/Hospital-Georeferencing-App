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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@JsonIgnoreProperties(value = {"natureService", "listRendezVous", "hopital"}, allowSetters = true)
public class Service implements Serializable  {


	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String nom;
		
	@ManyToOne()
	private NatureService natureService;
	
	@ManyToOne()
	private Hopital hopital;
		
	@OneToMany(mappedBy = "service")
	private List<Medecin> medecins;
	
	@OneToMany(mappedBy = "service")
	private List<RendezVous> listRendezVous;

}