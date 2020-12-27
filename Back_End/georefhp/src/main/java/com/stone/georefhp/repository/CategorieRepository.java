package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Categorie;

public interface CategorieRepository extends JpaRepository<Categorie, Long>{
	
	Categorie findById(long id);

}
