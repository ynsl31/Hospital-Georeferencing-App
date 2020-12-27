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

import com.stone.georefhp.entities.RendezVous;
import com.stone.georefhp.repository.RendezVousRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/rendezVous")
public class RendezVousController {

	@Autowired
	RendezVousRepository rendezVousRepository;
	
	@GetMapping("")
    public List<RendezVous> findAll() {

        return rendezVousRepository.findAll();
    }

    @PostMapping(value = "")
    public RendezVous save(@RequestBody final RendezVous rendezVous) {
    	
    	rendezVousRepository.save(rendezVous);
        return getOne(String.valueOf(rendezVous.id));
    }

    @PutMapping("")
    public RendezVous update(@RequestBody final RendezVous rendezVous) {

    	rendezVousRepository.save(rendezVous);
        return getOne(String.valueOf(rendezVous.id));
    }

    @GetMapping("/{id}")
    public RendezVous getOne(@PathVariable(required = true) String id) {

        return rendezVousRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

    	RendezVous rendezVous = rendezVousRepository.findById(Long.parseLong(id));
        rendezVousRepository.delete(rendezVous);
        rendezVousRepository.flush();
    }
    
}
