package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Vector;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Consultation implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
  public Integer id;

  public Date dateConst;
  public String commentaire;

    /**
   * 
   * @element-type RendezVous
   */
  @OneToMany(mappedBy = "consultation")
  public Collection<RendezVous>  listRendezVous;
    /**
   * 
   * @element-type Pj
   */
  @OneToMany(mappedBy = "consultation")
  public Collection<Pj>  myPj;
  @ManyToOne(cascade = CascadeType.ALL)
    public Medecin medecin;

}