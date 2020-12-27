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

import com.stone.georefhp.entities.Consultation;
import com.stone.georefhp.repository.ConsultationRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/consultations")
public class ConsultationController {

	@Autowired
	ConsultationRepository consultationRepository;
	
	@GetMapping("")
    public List<Consultation> findAll() {

        return consultationRepository.findAll();
    }

    @PostMapping(value = "")
    public Consultation save(@RequestBody final Consultation consultation) {
    	
    	consultationRepository.save(consultation);
        return getOne(String.valueOf(consultation.id));
    }

    @PutMapping("")
    public Consultation update(@RequestBody final Consultation consultation) {

    	consultationRepository.save(consultation);
        return getOne(String.valueOf(consultation.id));
    }

    @GetMapping("/{id}")
    public Consultation getOne(@PathVariable(required = true) String id) {

        return consultationRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Consultation consultation = consultationRepository.findById(Long.parseLong(id));
        consultationRepository.delete(consultation);
        consultationRepository.flush();
    }
    
}
