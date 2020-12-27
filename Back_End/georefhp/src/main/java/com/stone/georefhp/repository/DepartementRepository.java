package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Departement;

public interface DepartementRepository extends JpaRepository<Departement, Long>{

	Departement findById(long id);
}
