package com.stone.georefhp.entities;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import lombok.Data;


@Entity
@Data
@DiscriminatorValue("Patient")
public class Patient extends Utilisateur {

	private static final long serialVersionUID = 1L;

	private String cni;
	
	@OneToMany(mappedBy = "patient")
	private List<RendezVous> listrendezVous;

}