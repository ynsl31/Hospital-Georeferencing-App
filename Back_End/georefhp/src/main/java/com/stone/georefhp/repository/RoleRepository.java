package com.stone.georefhp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stone.georefhp.entities.ERole;
import com.stone.georefhp.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

	
	Optional<Role> findByName(ERole name);

}
