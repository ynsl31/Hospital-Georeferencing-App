package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long>{
	
	
	Utilisateur findById(long id);
	
	Utilisateur findByEmail(String email);
	
	
	
}
