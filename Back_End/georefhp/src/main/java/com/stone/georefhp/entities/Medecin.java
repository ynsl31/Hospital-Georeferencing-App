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
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
@JsonIgnoreProperties(value = {}, allowSetters = true)
@DiscriminatorValue("Medecin")
public class Medecin extends Utilisateur {

	public Medecin(String username2, String email2, String encode) {
		super(username2, email2, encode);
		// TODO Auto-generated constructor stub
	}

	private static final long serialVersionUID = 1L;
	
	@Column(unique = true)
	private String matricule;
	
	@ManyToOne()
	private Service service;
		
	@OneToMany(mappedBy = "medecin", cascade = CascadeType.REFRESH)
	private List<Consultation> consultations;

}