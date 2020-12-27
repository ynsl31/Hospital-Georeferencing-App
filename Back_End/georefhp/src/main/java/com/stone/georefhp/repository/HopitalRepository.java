package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Hopital;

public interface HopitalRepository extends JpaRepository<Hopital, Long>{
	
	Hopital findById(long id);

}
