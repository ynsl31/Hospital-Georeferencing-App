package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long>{
	
	Patient findById(long id);

}
