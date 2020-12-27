package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Ville;

public interface VilleRepository extends JpaRepository<Ville, Long>{
	
	Ville findById(long id);

}
