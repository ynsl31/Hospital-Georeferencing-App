package com.stone.georefhp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Hopital;
import com.stone.georefhp.entities.Ville;

public interface HopitalRepository extends JpaRepository<Hopital, Long>{
	
	Hopital findById(long id);
	List<Hopital> findByVille(Ville ville);
}
