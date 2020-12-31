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

import com.stone.georefhp.entities.Patient;
import com.stone.georefhp.repository.PatientRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/patients")
public class PatientController {

	@Autowired
	PatientRepository patientRepository;
	
	@GetMapping("")
    public List<Patient> findAll() {

        return patientRepository.findAll();
    }

    @PostMapping(value = "")
    public Patient save(@RequestBody final Patient patient) {
    	
    	patientRepository.save(patient);
        return getOne(String.valueOf(patient.getId()));
    }

    @PutMapping("")
    public Patient update(@RequestBody final Patient patient) {

    	patientRepository.save(patient);
        return getOne(String.valueOf(patient.getId()));
    }

    @GetMapping("/{id}")
    public Patient getOne(@PathVariable(required = true) String id) {

        return patientRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

    	Patient patient = patientRepository.findById(Long.parseLong(id));
        patientRepository.delete(patient);
        patientRepository.flush();
    }
    
}
