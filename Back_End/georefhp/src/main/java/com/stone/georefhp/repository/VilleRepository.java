package com.stone.georefhp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Region;
import com.stone.georefhp.entities.Ville;

public interface VilleRepository extends JpaRepository<Ville, Long>{
	
	Ville findById(long id);
	List<Ville> findByRegion(Region Region);

}
