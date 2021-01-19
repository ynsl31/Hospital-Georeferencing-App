package com.stone.georefhp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.NatureService;
import com.stone.georefhp.entities.Service;

public interface ServiceRepository extends JpaRepository<Service, Long>{
	
	Service findById(long id);
	
	List<Service> findByHopital_id(long id);
	List<Service> findByNatureService(NatureService id);
	List<Service> findByNom(String nom);
}
