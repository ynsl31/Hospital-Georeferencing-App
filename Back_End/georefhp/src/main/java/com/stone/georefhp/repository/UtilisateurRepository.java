package com.stone.georefhp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Utilisateur;


public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long>{
	
	
	Utilisateur findById(long id);
	
	Utilisateur findByEmail(String email);

	Boolean existsByEmail(String email);
	
	Optional<Utilisateur> findByUsername(String username);

	Boolean existsByUsername(String username);
	
	
	
}
