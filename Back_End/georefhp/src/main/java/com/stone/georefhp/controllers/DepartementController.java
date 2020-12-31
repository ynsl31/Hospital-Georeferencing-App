package com.stone.georefhp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stone.georefhp.entities.Departement;
import com.stone.georefhp.repository.DepartementRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/departements")
public class DepartementController {

	@Autowired
	DepartementRepository departementRepository;
	
	@GetMapping("")
    public List<Departement> findAll() {

        return departementRepository.findAll();
    }

    @PostMapping(value = "")
    public Departement save(@RequestBody final Departement departement) {
    	
    	departementRepository.save(departement);
        return getOne(String.valueOf(departement.getId()));
    }

    @PutMapping("")
    public Departement update(@RequestBody final Departement departement) {

    	departementRepository.save(departement);
        return getOne(String.valueOf(departement.getId()));
    }

    @GetMapping("/{id}")
    public Departement getOne(@PathVariable(required = true) String id) {

        return departementRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Departement departement = departementRepository.findById(Long.parseLong(id));
        departementRepository.delete(departement);
        departementRepository.flush();
    }
    
}
