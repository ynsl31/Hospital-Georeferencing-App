package com.stone.georefhp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Service;

public interface ServiceRepository extends JpaRepository<Service, Long>{
	
	Service findById(long id);
	
	List<Service> findByHopital_id(long id);
	
	
	
	List<Service> findByHopital_idAndNatureService_id(long hp, long ns);
	
	
	List<Service> findByNatureService_id(long ns);
	
	
}
