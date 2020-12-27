package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Service;

public interface ServiceRepository extends JpaRepository<Service, Long>{
	
	Service findById(long id);

}
