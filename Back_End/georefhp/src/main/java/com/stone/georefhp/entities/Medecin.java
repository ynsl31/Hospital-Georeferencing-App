package com.stone.georefhp.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;



@Entity
@Data
@JsonIgnoreProperties(value = {}, allowSetters = true)
public class Medecin extends Utilisateur {

	private static final long serialVersionUID = 1L;
	
	@Column(unique = true)
	private String matricule;
	
	@ManyToOne()
	private Service service;
		
	@OneToMany(mappedBy = "medecin", cascade = CascadeType.REFRESH)
	private List<Consultation> consultations;

}