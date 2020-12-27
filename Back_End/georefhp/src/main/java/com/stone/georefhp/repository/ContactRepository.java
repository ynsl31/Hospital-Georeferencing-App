package com.stone.georefhp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>{
	
	Contact findById(long id);

}
