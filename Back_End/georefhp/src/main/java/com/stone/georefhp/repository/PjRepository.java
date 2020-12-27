package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Pj;

public interface PjRepository extends JpaRepository<Pj, Long>{
	
	Pj findById(long id);

}
