package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.NatureService;

public interface NatureServiceRepository extends JpaRepository<NatureService, Long>{
	
	NatureService findById(long id);

}
