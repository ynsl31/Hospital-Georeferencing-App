package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Medecin;

public interface MedecinRepository extends JpaRepository<Medecin, Long>{
	
	Medecin findById(long id);

}
