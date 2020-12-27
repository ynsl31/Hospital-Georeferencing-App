package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Consultation;

public interface ConsultationRepository extends JpaRepository<Consultation, Long>{
	
	Consultation findById(long id);

}
