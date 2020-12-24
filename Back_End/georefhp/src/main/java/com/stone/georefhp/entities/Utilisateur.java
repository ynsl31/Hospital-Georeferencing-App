package com.stone.georefhp.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Utilisateur implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	
	public String nom;
	public String prenom;
	
	@Column(unique = true, nullable = false)
	public String email;
	public String motDePasse;
	
	@Column(unique = true, nullable = false)
	public String login;
	
	@OneToMany(mappedBy = "utilisateur")
	public List<Contact> contacts;

}