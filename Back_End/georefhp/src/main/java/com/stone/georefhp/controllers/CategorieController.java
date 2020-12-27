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

import com.stone.georefhp.entities.Categorie;
import com.stone.georefhp.repository.CategorieRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/categories")
public class CategorieController {

	@Autowired
	CategorieRepository categorieRepository;
	
	@GetMapping("")
    public List<Categorie> findAll() {

        return categorieRepository.findAll();
    }

    @PostMapping(value = "")
    public Categorie save(@RequestBody final Categorie categorie) {
    	
    	categorieRepository.save(categorie);
        return getOne(String.valueOf(categorie.id));
    }

    @PutMapping("")
    public Categorie update(@RequestBody final Categorie categorie) {

    	categorieRepository.save(categorie);
        return getOne(String.valueOf(categorie.id));
    }

    @GetMapping("/{id}")
    public Categorie getOne(@PathVariable(required = true) String id) {

        return categorieRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Categorie categorie = categorieRepository.findById(Long.parseLong(id));
        categorieRepository.delete(categorie);
        categorieRepository.flush();
    }
    
}
