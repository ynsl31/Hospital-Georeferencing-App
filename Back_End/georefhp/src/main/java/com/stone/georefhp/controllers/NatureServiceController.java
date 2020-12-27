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

import com.stone.georefhp.entities.NatureService;
import com.stone.georefhp.repository.NatureServiceRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/natureservices")
public class NatureServiceController {

	@Autowired
	NatureServiceRepository natureServiceRepository;
	
	@GetMapping("")
    public List<NatureService> findAll() {

        return natureServiceRepository.findAll();
    }

    @PostMapping(value = "")
    public NatureService save(@RequestBody final NatureService natureService) {
    	
    	natureServiceRepository.save(natureService);
        return getOne(String.valueOf(natureService.id));
    }

    @PutMapping("")
    public NatureService update(@RequestBody final NatureService natureService) {

    	natureServiceRepository.save(natureService);
        return getOne(String.valueOf(natureService.id));
    }

    @GetMapping("/{id}")
    public NatureService getOne(@PathVariable(required = true) String id) {

        return natureServiceRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        NatureService natureService = natureServiceRepository.findById(Long.parseLong(id));
        natureServiceRepository.delete(natureService);
        natureServiceRepository.flush();
    }
    
}
