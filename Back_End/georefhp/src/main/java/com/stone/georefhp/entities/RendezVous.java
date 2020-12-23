package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RendezVous implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int IdRdv;

	public Date dateRdv;

	public String statut;

	public Date dateCreation;
	@ManyToOne(cascade = CascadeType.ALL)
	public Patient patient;
	@ManyToOne(cascade = CascadeType.ALL)

	public Consultation consultation;
	@ManyToOne(cascade = CascadeType.ALL)

	public Service service;

}