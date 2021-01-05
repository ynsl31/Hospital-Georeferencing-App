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

import com.stone.georefhp.entities.Medecin;
import com.stone.georefhp.repository.MedecinRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/medecins")
public class MedecinController {

	@Autowired
	MedecinRepository medecinRepository;
	
	@GetMapping("")
    public List<Medecin> findAll() {

        return medecinRepository.findAll();
    }

    @PostMapping(value = "")
    public Medecin save(@RequestBody final Medecin medecin) {
    	
    	medecinRepository.save(medecin);
        return getOne(String.valueOf(medecin.getId()));
    }

    @PutMapping("")
    public Medecin update(@RequestBody final Medecin medecin) {

    	medecinRepository.save(medecin);
        return getOne(String.valueOf(medecin.getId()));
    }

    @GetMapping("/{id}")
    public Medecin getOne(@PathVariable(required = true) String id) {

        return medecinRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Medecin medecin = medecinRepository.findById(Long.parseLong(id));
        medecinRepository.delete(medecin);
        medecinRepository.flush();
    }
    
}
