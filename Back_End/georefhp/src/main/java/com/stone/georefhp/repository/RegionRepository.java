package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Region;

public interface RegionRepository extends JpaRepository<Region, Long>{
	
	Region findById(long id);

}
