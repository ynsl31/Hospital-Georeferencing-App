package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

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
public class Consultation implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private Date dateConst;
	private String commentaire;
	
	@OneToMany(mappedBy = "consultation")
	private List<RendezVous>  listRendezVous;
    
	@OneToMany(mappedBy = "consultation")
	private List<Pj>  myPj;
  
	@ManyToOne(cascade = CascadeType.ALL)
	private Medecin medecin;

}