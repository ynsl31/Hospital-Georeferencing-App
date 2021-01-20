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
import com.stone.georefhp.entities.Service;
import com.stone.georefhp.repository.HopitalRepository;
import com.stone.georefhp.repository.NatureServiceRepository;
import com.stone.georefhp.repository.ServiceRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/hopitaux/{hopital}/services")
public class ServiceController {

	@Autowired
	ServiceRepository serviceRepository;
	
	@Autowired
	NatureServiceRepository natureServiceRepository;
	
	@Autowired
	HopitalRepository hopitalRepository;
	
	
	@GetMapping("")
    public List<Service> findAll(@PathVariable(required = true) String hopital) {

        return serviceRepository.findByHopital_id(Long.parseLong(hopital));
    }
/*	@GetMapping("nature/{id}")
    public List<Service> findByNatureService(@PathVariable(required = true) String hopital,@PathVariable(required = true) String id) {

        return serviceRepository.findByNatureService(this.natureServiceRepository.findById(Long.parseLong(id)));
    }*/
	@GetMapping("nom/{nom}")
    public List<Service> findByNom(@PathVariable(required = true) String hopital, @PathVariable(required = true) String nom) {

        return serviceRepository.findByNom(nom);
    }


    @PostMapping(value = "")
    public Object save(@PathVariable(required = true) String hopital, @RequestBody final Service service) {
    	
    	service.setHopital(hopitalRepository.findById(Long.parseLong(hopital)));
    	//service.setNatureService(natureServiceRepository.findById(service.getNatureService().getId()));
    	
    	return serviceRepository.save(service);
    }

    @PutMapping("")
    public Service update(@PathVariable(required = true) String hopital, @RequestBody final Service service) {

    	service.setHopital(hopitalRepository.findById(Long.parseLong(hopital)));
//    	service.setNatureService(natureServiceRepository.findById(service.getNatureService().getId()));
        
    	return serviceRepository.save(service);
    }

    @GetMapping("/{id}")
    public Service getOne(@PathVariable(required = true) String hopital, @PathVariable(required = true) String id) {

        return serviceRepository.findById(Long.parseLong(id));
    }
    
    @GetMapping("/{id}/medecins")
    public List<Medecin> getMedecins(@PathVariable(required = true) String hopital, @PathVariable(required = true) String id) {

        return serviceRepository.findById(Long.parseLong(id)).getMedecins();
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String hopital, @PathVariable(required = true) String id) {

        Service service = serviceRepository.findById(Long.parseLong(id));
        serviceRepository.delete(service);
        serviceRepository.flush();
    }
    
}
