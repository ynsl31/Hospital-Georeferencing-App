package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class RendezVous implements Serializable  {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private Date dateRdv;
	private String statut;

	private Date dateCreation;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Patient patient;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Consultation consultation;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Service service;

}