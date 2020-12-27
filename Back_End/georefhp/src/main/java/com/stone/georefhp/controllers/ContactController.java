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

import com.stone.georefhp.entities.Contact;
import com.stone.georefhp.repository.ContactRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/contacts")
public class ContactController {

	@Autowired
	ContactRepository contactRepository;
	
	@GetMapping("")
    public List<Contact> findAll() {

        return contactRepository.findAll();
    }

    @PostMapping(value = "")
    public Contact save(@RequestBody final Contact contact) {
    	
    	contactRepository.save(contact);
        return getOne(String.valueOf(contact.id));
    }

    @PutMapping("")
    public Contact update(@RequestBody final Contact contact) {

    	contactRepository.save(contact);
        return getOne(String.valueOf(contact.id));
    }

    @GetMapping("/{id}")
    public Contact getOne(@PathVariable(required = true) String id) {

        return contactRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Contact contact = contactRepository.findById(Long.parseLong(id));
        contactRepository.delete(contact);
        contactRepository.flush();
    }
    
}
