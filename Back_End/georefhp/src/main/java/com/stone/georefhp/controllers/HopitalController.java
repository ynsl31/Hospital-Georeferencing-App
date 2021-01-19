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

import com.stone.georefhp.entities.Hopital;
import com.stone.georefhp.repository.HopitalRepository;
import com.stone.georefhp.repository.ServiceRepository;
import com.stone.georefhp.repository.VilleRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/hopitaux")
public class HopitalController {
	
	@Autowired
	HopitalRepository hopitalRepository;
	
	@Autowired
	ServiceRepository serviceRepository;
	@Autowired
	VilleRepository villeRepository;
	
	@GetMapping("")
    public List<Hopital> findAll() {

        return hopitalRepository.findAll();
    }
	@GetMapping("/ville/{id}")
    public List<Hopital> findByVilles(@PathVariable(required = true) String id) {

        return hopitalRepository.findByVille(villeRepository.findById(Long.parseLong(id)));
    }

    @PostMapping(value = "")
    public Hopital save(@RequestBody final Hopital hopital) {
    	
    	hopitalRepository.save(hopital);
        return getOne(String.valueOf(hopital.getId()));
    }

    @PutMapping("")
    public Hopital update(@RequestBody final Hopital hopital) {

    	hopitalRepository.save(hopital);
        return getOne(String.valueOf(hopital.getId()));
    }
    
    @GetMapping("/{id}")
    public Hopital getOne(@PathVariable(required = true) String id) {

        return hopitalRepository.findById(Long.parseLong(id));
    }
    
    

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Hopital hopital = hopitalRepository.findById(Long.parseLong(id));
        hopitalRepository.delete(hopital);
        hopitalRepository.flush();
    }

}
