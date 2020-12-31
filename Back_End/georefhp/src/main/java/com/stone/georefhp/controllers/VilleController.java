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

import com.stone.georefhp.entities.Ville;
import com.stone.georefhp.repository.VilleRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/villes")
public class VilleController {

	@Autowired
	VilleRepository villeRepository;
	
	@GetMapping("")
    public List<Ville> findAll() {

        return villeRepository.findAll();
    }

    @PostMapping(value = "")
    public Ville save(@RequestBody final Ville ville) {
    	
    	villeRepository.save(ville);
        return getOne(String.valueOf(ville.getId()));
    }

    @PutMapping("")
    public Ville update(@RequestBody final Ville ville) {

    	villeRepository.save(ville);
        return getOne(String.valueOf(ville.getId()));
    }

    @GetMapping("/{id}")
    public Ville getOne(@PathVariable(required = true) String id) {

        return villeRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Ville ville = villeRepository.findById(Long.parseLong(id));
        villeRepository.delete(ville);
        villeRepository.flush();
    }
    
}
