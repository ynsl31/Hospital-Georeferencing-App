package com.stone.georefhp.controllers;

import java.util.Date;
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

import com.stone.georefhp.entities.Patient;
import com.stone.georefhp.entities.RendezVous;
import com.stone.georefhp.entities.Service;
import com.stone.georefhp.repository.PatientRepository;
import com.stone.georefhp.repository.RendezVousRepository;
import com.stone.georefhp.repository.ServiceRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/rendez-vous")
public class RendezVousController {

	@Autowired
	RendezVousRepository rendezVousRepository;
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	ServiceRepository serviceRepository;
	
	@GetMapping("")
    public List<RendezVous> findAll() {

        return rendezVousRepository.findAll();
    }

    @PostMapping(value = "")
    public Object save(@RequestBody final RendezVous rendezVous) {
    	
    	Patient patient = patientRepository.save(rendezVous.getPatient());
    	
    	rendezVous.setDateCreation(new Date());
    	
    	rendezVous.setStatut("ACTIVE");
    	
    	
    	rendezVous.setPatient(patient);
    	rendezVousRepository.save(rendezVous);

    	return getOne(String.valueOf(rendezVous.getId()));
    }

    @PutMapping("")
    public RendezVous update(@RequestBody final RendezVous rendezVous) {

    	rendezVousRepository.save(rendezVous);
        return getOne(String.valueOf(rendezVous.getId()));
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
