package com.stone.georefhp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Medecin;

public interface MedecinRepository extends JpaRepository<Medecin, Long>{
	
	Medecin findById(long id);
	
	List<Medecin> findByService_id(long id);
}
