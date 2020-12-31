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

import com.stone.georefhp.entities.Region;
import com.stone.georefhp.repository.RegionRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/regions")
public class RegionController {
	
	@Autowired
	RegionRepository regionRepository;
	
	@GetMapping("")
    public List<Region> findAll() {

        return regionRepository.findAll();
    }

    @PostMapping(value = "")
    public Region save(@RequestBody final Region region) {
    	
    	regionRepository.save(region);
        return getOne(String.valueOf(region.getId()));
    }

    @PutMapping("")
    public Region update(@RequestBody final Region region) {

    	regionRepository.save(region);
        return getOne(String.valueOf(region.getId()));
    }

    @GetMapping("/{id}")
    public Region getOne(@PathVariable(required = true) String id) {

        return regionRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Region region = regionRepository.findById(Long.parseLong(id));
        regionRepository.delete(region);
        regionRepository.flush();
    }
    

}
