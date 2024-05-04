package com.higor.projetofaculdade.Repositories;

import com.higor.projetofaculdade.Entities.EscolaInformacoes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EscolaInfoRepository extends JpaRepository <EscolaInformacoes, Integer> {
}
