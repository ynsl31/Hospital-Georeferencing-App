package com.stone.georefhp.entities;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Data
@DiscriminatorValue("Patient")
public class Patient extends Utilisateur {

	public Patient(String username2, String email2, String encode) {
		super(username2, email2, encode);
		// TODO Auto-generated constructor stub
	}

	private static final long serialVersionUID = 1L;

	private String cni;
	
	@OneToMany(mappedBy = "patient")
	private List<RendezVous> listrendezVous;

}