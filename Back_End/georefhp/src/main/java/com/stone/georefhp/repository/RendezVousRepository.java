package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.RendezVous;

public interface RendezVousRepository extends JpaRepository<RendezVous, Long>{
	
	RendezVous findById(long id);

}
