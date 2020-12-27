package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Ville implements Serializable  {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	public String nomVille;
	
	@ManyToOne(cascade = CascadeType.ALL)
	public Region region;
	
	@OneToMany(mappedBy = "ville")
	public Collection<Hopital> hopitals;

}