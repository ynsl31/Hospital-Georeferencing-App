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

import com.stone.georefhp.entities.Pj;
import com.stone.georefhp.repository.PjRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/pjs")
public class PjController {

	@Autowired
	PjRepository pjRepository;
	
	@GetMapping("")
    public List<Pj> findAll() {

        return pjRepository.findAll();
    }

    @PostMapping(value = "")
    public Pj save(@RequestBody final Pj pj) {
    	
    	pjRepository.save(pj);
        return getOne(String.valueOf(pj.id));
    }

    @PutMapping("")
    public Pj update(@RequestBody final Pj pj) {

    	pjRepository.save(pj);
        return getOne(String.valueOf(pj.id));
    }

    @GetMapping("/{id}")
    public Pj getOne(@PathVariable(required = true) String id) {

        return pjRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

    	Pj pj = pjRepository.findById(Long.parseLong(id));
        pjRepository.delete(pj);
        pjRepository.flush();
    }
    
}
