package com.higor.projetofaculdade.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "dadosAlunos")
@Getter
@Setter
public class AlunoInformacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nome;
    private int dataNascimento;
    private int cpf;
    private int rg;
    private String matricula;
    private String orgaoExpedidor;
    private String nacionalidade;
    private int celular;
    private String email;
    private String nomePai;
    private String nomeMae;
    private String bairro;
    private String cidade;
    private String estado;
    private String turno;

}
