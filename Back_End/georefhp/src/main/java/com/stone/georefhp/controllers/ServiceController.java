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

import com.stone.georefhp.entities.Service;
import com.stone.georefhp.repository.ServiceRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/services")
public class ServiceController {

	@Autowired
	ServiceRepository serviceRepository;
	
	@GetMapping("")
    public List<Service> findAll() {

        return serviceRepository.findAll();
    }

    @PostMapping(value = "")
    public Service save(@RequestBody final Service service) {
    	
    	serviceRepository.save(service);
        return getOne(String.valueOf(service.id));
    }

    @PutMapping("")
    public Service update(@RequestBody final Service service) {

    	serviceRepository.save(service);
        return getOne(String.valueOf(service.id));
    }

    @GetMapping("/{id}")
    public Service getOne(@PathVariable(required = true) String id) {

        return serviceRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Service service = serviceRepository.findById(Long.parseLong(id));
        serviceRepository.delete(service);
        serviceRepository.flush();
    }
    
}
