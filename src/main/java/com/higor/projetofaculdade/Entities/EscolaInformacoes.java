package com.higor.projetofaculdade.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "dadosEscola")
@Getter
@Setter
public class EscolaInformacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nomeEscola;
    private String enderecoEscola;
    private String tipoDeEnsino;
    private String diretoria;
}
