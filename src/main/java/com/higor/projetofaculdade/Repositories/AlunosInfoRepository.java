package com.higor.projetofaculdade.Repositories;

import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlunosInfoRepository extends JpaRepository <AlunoInformacoes, Integer> {

    Optional<AlunoInformacoes> findByCpf(String cpf);

}

