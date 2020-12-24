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
	public long id;
	
	public Date dateConst;
	public String commentaire;
	
	@OneToMany(mappedBy = "consultation")
	public List<RendezVous>  listRendezVous;
    
	@OneToMany(mappedBy = "consultation")
	public List<Pj>  myPj;
  
	@ManyToOne(cascade = CascadeType.ALL)
    public Medecin medecin;

}