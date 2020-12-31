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

import com.stone.georefhp.entities.Utilisateur;
import com.stone.georefhp.repository.UtilisateurRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/utilisateurs")
public class UtilisateurController {

	@Autowired
	UtilisateurRepository utilisateurRepository;
	
	@GetMapping("")
    public List<Utilisateur> findAll() {

        return utilisateurRepository.findAll();
    }

    @PostMapping(value = "")
    public Utilisateur save(@RequestBody final Utilisateur utilisateur) {
    	
    	utilisateurRepository.save(utilisateur);
        return getOne(String.valueOf(utilisateur.getId()));
    }

    @PutMapping("")
    public Utilisateur update(@RequestBody final Utilisateur utilisateur) {

    	utilisateurRepository.save(utilisateur);
        return getOne(String.valueOf(utilisateur.getId()));
    }

    @GetMapping("/{id}")
    public Utilisateur getOne(@PathVariable(required = true) String id) {

        return utilisateurRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Utilisateur utilisateur = utilisateurRepository.findById(Long.parseLong(id));
        utilisateurRepository.delete(utilisateur);
        utilisateurRepository.flush();
    }
    
        
    
}
