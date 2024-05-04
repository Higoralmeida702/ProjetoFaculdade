package com.higor.projetofaculdade.Repositories;

import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunosInfoRepository extends JpaRepository <AlunoInformacoes, Integer> {
}
