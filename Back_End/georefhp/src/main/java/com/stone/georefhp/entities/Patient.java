package com.stone.georefhp.entities;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorValue("Patient")
public class Patient extends Utilisateur {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public String cni;
	@OneToMany(mappedBy = "patient")
	public Collection<RendezVous> listrendezVous;

}